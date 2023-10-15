import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MountainLayers = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const thirdY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const secondY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className='w-full h-screen overflow-hidden relative flex justify-center'>
        <motion.div 
            className='absolute inset-0 z-0 h-full'
            style={{
                backgroundImage: 'url(/background.jpg)',
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                y: backgroundY
            }}
        />
        <motion.div 
            className='absolute inset-0 z-10 h-full'
            style={{
                backgroundImage: 'url(/third.png)',
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                y: thirdY
            }}
        />
        <motion.h1  
            style={{y: textY}}
            className='font-bold z-20 text-white text-3xl md:text-8xl relative mt-64'>estás a dormir?
        </motion.h1>
        <motion.div 
            className='absolute inset-0 z-30 h-full'
            style={{
                backgroundImage: 'url(/second.png)',
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                y: secondY
            }}
        />
        <div 
            className='absolute inset-0 h-full z-40'
            style={{
                backgroundImage: 'url(/first.png)',
                backgroundPosition: 'bottom',
                backgroundSize: 'cover'
            }}
        />
    </div>
  )
}

export default MountainLayers;