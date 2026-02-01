import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedCounter({ value, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Parse numeric value if string "250+" provided
    const numericValue = parseInt(value, 10) || 0;

    const spring = useSpring(0, { mass: 1, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current) + suffix);

    useEffect(() => {
        if (isInView) {
            spring.set(numericValue);
        }
    }, [isInView, numericValue, spring]);

    return <motion.span ref={ref}>{display}</motion.span>;
}
