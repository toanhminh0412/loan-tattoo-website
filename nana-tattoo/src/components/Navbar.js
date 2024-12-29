"use client";

import Link from 'next/link';
import { useState } from 'react'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { PopLink, JumpLink } from './motions/Links';


const navigation = [
    { name: 'Permanent makeup', href: '/permanent-makeup' },
    { name: 'Tattoo', href: '/tattoo' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">

        {/* Desktop navbar */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
            <PopLink href="/" className="-m-1.5 p-1.5 text-white font-semibold text-xl">
                Loan - Tattoo Artist
            </PopLink>
            </div>
            <div className="flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <JumpLink key={item.name} href={item.href} className="text-sm font-light leading-6 text-white">
                    {item.name}
                    </JumpLink>
                ))}
                <div className="dropdown dropdown-hover">
                    <div className="cursor-pointer text-sm font-light leading-6 text-white flex flex-row items-center gap-1">More <ChevronDownIcon className="h-3 w-3"/></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><Link href="/faqs">FAQs</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <PopLink href="https://www.instagram.com/loan.pmu/" className="text-sm font-semibold leading-6 text-white">
                Instagram <span aria-hidden="true">&rarr;</span>
            </PopLink>
            </div>
        </nav>

        {/* Mobile nav */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
                <PopLink href="/" className="-m-1.5 p-1.5 text-white font-semibold text-xl">
                    Loan - Tattoo Artist
                </PopLink>
                <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
                >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                    <JumpLink
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                        {item.name}
                    </JumpLink>
                    ))}
                    <JumpLink
                        href="/faqs"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                        FAQs
                    </JumpLink>
                    <JumpLink
                        href="/contact"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                        Contact
                    </JumpLink>
                </div>
                <div className="py-6">
                    <PopLink
                    href="https://www.instagram.com/loan.pmu/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                    Instagram
                    </PopLink>
                </div>
                </div>
            </div>
            </Dialog.Panel>
        </Dialog>
    </div>
  )
}
