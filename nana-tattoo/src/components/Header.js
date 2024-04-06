"use client";

import { motion } from "framer-motion"

export default function Header() {
    return (
        <section className="relative bg-[url('/img/blue-rabbit-tattoo-shop.jpeg')] h-[90vh] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
            <div className="relative mx-auto w-full h-full max-w-3xl text-center flex flex-col justify-center px-4 md:px-8">
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl z-10">
                    Permanent make up- fine line tattoo Artist
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-6 text-lg leading-8 text-gray-300">
                    Come visit me at The Blue Rabbit Tattoo & Beauty Bar. I have 5 years of experience in Inkjet and permanent tattoos. I will make your body a walking art.
                </motion.p>
            </div>
        </section>
    )
  }
  