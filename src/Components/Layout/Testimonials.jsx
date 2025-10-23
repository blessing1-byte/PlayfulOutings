import React from "react";
import { motion } from "framer-motion";
import "../CSS/Testimonial.css";

const Testimonials = ({ testimonialsData }) => {
  const defaultData = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      title: "Real-Time Collaboration",
      text: "Communicate seamlessly and keep everyone in sync with built-in messaging, file sharing, and live updates.",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      title: "Task & Project Tracking",
      text: "Assign tasks, set deadlines, and visualize progress with boards, lists, and timelines tailored to your team’s style.",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      title: "Performance Insights",
      text: "Make smarter decisions with analytics that show productivity trends, bottlenecks, and team workload balance.",
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      title: "Collaborative Tools",
      text: "Our platform encourages communication and improves productivity by keeping all your tools in one place.",
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/women/35.jpg",
      title: "Flexible Planning",
      text: "Plan, organize, and execute projects with ease — whether you’re in-office or remote.",
    },
  ];

  const data = testimonialsData || defaultData;

  return (
    <section className="testimonial-section">
      {/* ===== Header Section ===== */}
      <motion.div
        className="testimonial-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="subtitle">Streamline Your Team,</h3>
        <h1 className="title">Supercharge Your Workflow</h1>
        <p className="description">
          All-in-one platform to plan, collaborate, and deliver — faster and
          smarter.
        </p>
        <motion.button
          className="cta-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get started for Free →
        </motion.button>
      </motion.div>

      {/* ===== Testimonial Cards ===== */}
      <div className="testimonial-cards">
        {data.map((t, index) => (
          <motion.div
            key={t.id}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <img src={t.image} alt={t.title} className="testimonial-img" />
            <h3 className="card-title">{t.title}</h3>
            <p className="card-text">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
