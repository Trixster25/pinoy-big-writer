import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";

function Games() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards = [
    { path: "/capitalization", src: "/doors/door1", alt: "Room 1" },
    { path: "/punctuation", src: "/doors/door2", alt: "Room 2" },
    { path: "/spelling", src: "/doors/door3", alt: "Room 3" },
  ];

  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center bg-white p-4 font-sans stripes">
      {/* Title */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className="text-7xl font-serif font-bold text-[#F5BF2F]">
          Rooms
        </span>
      </motion.div>

      {/* Main Buttons */}
      <div className="mx-auto flex items-center justify-center w-full font-serif gap-4">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6 + idx * 0.2,
              duration: 0.5,
              type: "spring",
            }}
            whileHover={{ scale: 1.05 }}
            className="w-full flex justify-center"
          >
            <Link to={card.path} className="w-full flex justify-center">
              <motion.img
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                src={
                  hovered === idx ? `${card.src}-open.png` : `${card.src}.png`
                }
                alt={card.alt}
                className="w-[40%]"
                transition={{ duration: 0.3 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Link>
          </motion.div>
        ))}
      </div>
      <Link to="/home">
        <motion.div
          className="w-24 h-24 bg-yellow-500 text-white rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TiHome className="w-12 h-12 " />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default Games;
