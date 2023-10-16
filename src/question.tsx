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

    return (
        <div className='relative'>
            <div 
                className="w-full pb-16 h-screen"
                style={{
                    backgroundImage: 'url(/mexican-after-party.jpeg)',
                    backgroundSize: "cover"
                }}>
            </div>
            <motion.div 
                ref={ref} 
                className='absolute top-0 left-0 w-full h-screen bg-[#B0BCBA] z-10  flex justify-center items-center'
                style={{
                    opacity: opacityProgress
                }}
            >
                <div className="font-bold text-slate-50">
                    <p className='text-7xl question-p'>ESTÁS A DORMIR?</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Question