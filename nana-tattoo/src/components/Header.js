"use client";

import Link from "next/link";
import { motion } from "framer-motion"
import { PopLink } from "./motions/Links";

export default function Header() {
    return (
        <section className="relative bg-[url('/img/avatar.jpg')] h-[90vh] bg-cover bg-scroll lg:bg-fixed" style={{ backgroundPosition: "center 15%" }} id="header">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
            <div className="relative mx-auto w-full h-full max-w-3xl text-center flex flex-col justify-center px-4 md:px-8">
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl z-10">
                    Permanent make up, fine line tattoo artist
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-6 text-lg leading-8 text-gray-300">
                    My name is Loan. I&apos;ve been doing permanent makeup (PMU) since 2020 and tattoo since 2023.
                </motion.p>
                <div className="mt-10 flex items-center justify-center gap-x-2">
                    <Link
                    href="/tattoo"
                    className="btn btn-primary"
                    >
                    Tattoo
                    </Link>
                    <Link
                    href="/permanent-makeup"
                    className="btn"
                    >
                    Permanent makeup
                    </Link>
                </div>
            </div>
        </section>
    )
  }
  