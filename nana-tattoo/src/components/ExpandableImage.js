"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ExpandableImage({ src, alt, grayscale = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 }}}
            viewport={{ once: true }}
            className="w-full aspect-[5/7] max-w-[300px] overflow-hidden rounded-lg bg-gray-200 lg:aspect-none"
        >
            <Image
                src={src}
                alt={alt}
                width={300}
                height={420}
                className={`h-full w-full object-cover object-center lg:h-full lg:w-full ${grayscale ? 'grayscale hover:grayscale-0' : ''}`}
            />
        </motion.div>
    );
};
