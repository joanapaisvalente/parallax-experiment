import {useRef} from 'react'
import { useScroll, motion, useTransform } from 'framer-motion';

const Info = () => {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    // p starts appearing at half the size.
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
        <motion.p ref={ref} style={{
            scale: scaleProgress,
            opacity: scrollYProgress
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </motion.p>
  )
}

export default Info