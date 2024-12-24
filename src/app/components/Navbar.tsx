"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className='text-center bg-gray-300 w-full h-20'>
            <nav className='flex justify-center items-center p-4'>
                <div className='text-center justify-center pt-6 space-x-12'>
                    <Link href="/" className={pathname === "/" ? "font-bold mr-4" : 'mr-4 text-blue-500'} >Home</Link>
                    <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : 'mr-4 text-blue-500'} >About</Link>
                    <Link href="/contact" className={pathname === "/contact" ? "font-bold mr-4" : 'mr-4 text-blue-500'} >Contact</Link>
                    <Link href="/products" className={pathname === "/products" ? "font-bold mr-4" : 'mr-4 text-blue-500'} >Products</Link>
                    <Link href="/projects" className={pathname === "/projects" ? "font-bold mr-4" : 'mr-4 text-blue-500'} >Projects</Link>

                    <SignedOut>
                        <SignInButton mode='modal' />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
