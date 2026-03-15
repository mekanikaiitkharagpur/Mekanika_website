import React from "react";
import { motion } from "framer-motion";
// import { Spotlight } from "../../components/ui/spotlight-new"; 
// import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collision"; 

const secretaries = [
  "Pooja Sharma",
  "Nitish Jindal",
  "Akhilesh Gupta",
  "Aritra Mukherjee",
  "Shrutika Jadhav",
  "Avishka Chaudhary"
];

const Secretaries = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gray-950 overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* <Spotlight /> */}
        {/* <BackgroundBeamsWithCollision className="opacity-30" /> */}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4 tracking-wider uppercase drop-shadow-md"
            style={{ textShadow: "0 4px 10px rgba(234, 179, 8, 0.3)" }}
          >
            Secretaries
          </h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full" />
        </motion.div>

        {/* Names Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
          {secretaries.map((name, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-300 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Card Body */}
              <div className="relative bg-zinc-900 border border-zinc-800 group-hover:border-yellow-500/50 px-10 py-5 rounded-xl flex items-center justify-center min-w-[220px] shadow-lg backdrop-blur-sm">
                <span className="text-lg md:text-xl font-medium text-gray-300 group-hover:text-yellow-400 transition-colors duration-300 tracking-wide">
                  {name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Secretaries;