import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MultiLayerParallax = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div ref={ref} className="w-full h-screen overflow-hidden relative flex justify-center">
            <motion.h1 
                className="font-bold text-white text-7xl md:text-9xl relative z-10 mt-28" 
                style={{y: textY}}
                >PARALLAX
            </motion.h1>
            <motion.div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/wallpaper.jpg)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY
                }}
            />
            <div 
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: `url(/cutout.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"
                }}
            />
        </div>
  )
}

export default MultiLayerParallax;