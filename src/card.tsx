import React, {useRef, useEffect} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Card: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView]);

  return (
    <motion.div 
        ref={ref}
        className='flex w-[416px] h-52 bg-emerald-50 rounded-2xl mb-2 border border-slate-500'
        variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.2 }}>
        <div className='w-1/3 h-52 object-cover'>
            <img src="/cat.jpg" alt="cat" className='h-52 object-cover rounded-l-2xl' />
        </div>
        <div className='w-2/3 flex justify-center items-center'>
            <div className='w-4/5'>
                <h1 className='text-lg font-bold mb-2'>Pickles</h1>
                <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Card;