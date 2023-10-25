import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

import './question.css';

const Question: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const opacityProgress = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
    const textProgress = useTransform(scrollYProgress, [0, 1], ["100%", "200%"])
    return (
        <div 
            className='relative h-screen w-full'
            style={{
                backgroundImage: 'url(/mexican-after-party.jpeg)',
                backgroundSize: "cover"
            }}
        >
            <motion.div 
                ref={ref} 
                className='absolute top-0 left-0 w-full h-screen bg-[#B0BCBA] z-10  flex justify-center items-center'
                style={{
                    opacity: opacityProgress,
                }}
            >
                <div className="font-bold text-slate-50">
                    <motion.p 
                        className='text-7xl question-p'
                        style={{
                            scale: textProgress
                        }}

                    >ESTÁS A DORMIR?</motion.p>
                </div>
            </motion.div>
        </div>
    )
}

export default Question