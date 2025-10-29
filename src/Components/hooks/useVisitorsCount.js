import { useState, useEffect, useRef } from "react";

/**
 * useVisitorCount
 * - increments localStorage visitorCount exactly once per session
 * - returns current count
 * - syncs across tabs (storage event + BroadcastChannel if available)
 */
export default function useVisitorCount() {
  const [count, setCount] = useState(() => {
    const stored = localStorage.getItem("visitorCount");
    return stored ? parseInt(stored, 10) : 1247; // baseline if empty
  });

  const bcRef = useRef(null);

  useEffect(() => {
    // Only increment once per browser tab session
    const sessionFlag = "visitorCountIncremented";
    const alreadyIncremented = sessionStorage.getItem(sessionFlag);

    if (!alreadyIncremented) {
      // Atomically increment localStorage value
      const current = parseInt(
        localStorage.getItem("visitorCount") || "1247",
        10
      );
      const next = current + 1;
      localStorage.setItem("visitorCount", String(next));
      sessionStorage.setItem(sessionFlag, "1");
      setCount(next);

      // Broadcast update to other listeners (tabs)
      if ("BroadcastChannel" in window) {
        if (!bcRef.current)
          bcRef.current = new BroadcastChannel("visitor_count_channel");
        bcRef.current.postMessage({ type: "update", count: next });
      } else {
        // storage event will also fire for other tabs, but not same tab;
        // writing localStorage above already updated other tabs.
      }
    } else {
      // Not incrementing in this session: ensure state matches localStorage
      const current = parseInt(
        localStorage.getItem("visitorCount") || "1247",
        10
      );
      setCount(current);
    }

    // Handler for storage event (other tabs)
    const onStorage = (e) => {
      if (e.key === "visitorCount") {
        const updated = parseInt(e.newValue || "1247", 10);
        setCount(updated);
      }
    };
    window.addEventListener("storage", onStorage);

    // Handler for BroadcastChannel messages (if available)
    if ("BroadcastChannel" in window) {
      if (!bcRef.current)
        bcRef.current = new BroadcastChannel("visitor_count_channel");
      bcRef.current.onmessage = (ev) => {
        if (ev?.data?.type === "update" && typeof ev.data.count === "number") {
          setCount(ev.data.count);
        }
      };
    }

    // cleanup
    return () => {
      window.removeEventListener("storage", onStorage);
      if (bcRef.current) {
        bcRef.current.close();
        bcRef.current = null;
      }
    };
  }, []);

  return count;
}
