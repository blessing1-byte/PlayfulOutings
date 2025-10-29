import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { Outlet } from "react-router-dom";
import Home from "./Home";
export default function PageContainer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-4 md:px-8 lg:px-16 py-6">
        {/* <Home /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
