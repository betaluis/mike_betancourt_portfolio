"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play, Music, Piano } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      {/* Google Fonts Link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Forum:wght@400&display=swap"
        rel="preload"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Forum:wght@400&display=swap"
        rel="stylesheet"
      />

      {/* Hero Header Section */}
      <header className="relative h-[80vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl text-zinc-300 mb-6 leading-tight font-fancy">
                Mike Betancourt
              </h1>
              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "Forum, serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Classical Pianist & Composer
              </motion.p>
              <motion.p
                className="text-lg text-white/80 mb-12 max-w-3xl mx-auto italic"
                style={{ fontFamily: "Forum, serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                &qot;Music is the divine way to tell beautiful, poetic things to
                the heart&quot;
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <a
                  href="/listen"
                  className="group flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
                  style={{ fontFamily: "Forum, serif" }}
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Listen to Performances
                </a>
                <a
                  href="/about"
                  className="border-2 border-white/30 hover:border-amber-300 text-white hover:text-amber-300 px-8 py-4 rounded-md text-lg font-medium transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                  style={{ fontFamily: "Forum, serif" }}
                >
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </header>
    </>
  );
};

export default HeroSection;
