import "./app.css";
import { motion } from "framer-motion";
import { useMousePosition } from "./utils/use-mouse-position.ts";
import { useState } from "react";

export function App() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  const maskSize = isHovered ? 300 : 40;

  return (
    <div className="relative app min-h-screen bg-black">
      <motion.div
        className="mask absolute w-full h-full flex justify-center items-center"
        animate={{
          WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.5,
        }}
      >
        <p
          className="text-7xl font-bold text-black leading-normal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Hello there! <br />
          This is Arman, a full-stack engineer. <br />
          I am currently learning <br /> Framer Motion with React. <br />
        </p>
      </motion.div>

      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-7xl text-gray-100 font-bold leading-normal">
          Hello there! <br />
          This is Arman, a full-stack engineer. <br />
          I am currently learning <br /> Framer Motion with React. <br />
        </p>
      </div>
    </div>
  );
}
