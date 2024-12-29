"use client";

import { motion } from 'framer-motion';

export default function ExpandableImage({ src, grayscale = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 }}}
            viewport={{ once: true }}
            className={`w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] rounded-md bg-center bg-cover ${grayscale ? 'grayscale hover:grayscale-0' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
        >
        </motion.div>
    );
};
