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
                    Permanent make up- fine line tattoo Artist
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-6 text-lg leading-8 text-gray-300">
                    My name is Loan and I am a Vietnamese trained permanent makeup (PMU) master level Artist, with 5 years experience. And and I also do Tattoo body for 2 years.
                </motion.p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                    href="/tattoo"
                    className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                    Tattoo
                    </Link>
                    <Link
                    href="/permanent-makeup"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                    Permanent makeup
                    </Link>
                    {/* <PopLink href="#" className="text-sm font-semibold leading-6 text-white">
                    Permanent makeup <span aria-hidden="true">→</span>
                    </PopLink> */}
                </div>
            </div>
        </section>
    )
  }
  