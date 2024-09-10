import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'
import { IoSearch, IoSearchOutline } from 'react-icons/io5'

export const TopMenu = () => {
  return (
    <nav className='flex px-5 justify-between items-center w-full'>
        {/* logo */}
        <div>
            <Link
            href="/">
                <span className={`${ titleFont.className } antialiased font-bold`}></span>
                <span> | Shop</span>
            </Link>
        </div>

        {/* Center menu */}
        <div className='hidden sm:block'>
            <Link
            className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
            href="/category/men">Hombres</Link>
            <Link
            className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
            href="/category/women">Mujeres</Link>
            <Link
            className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
            href="/category/kids">Niños</Link>
        </div>

        {/* Search, Cart, Menu */}
        <div className='flex items-center'>
            <Link
            href="/search">
                <IoSearchOutline
            </Link>
        </div>
    </nav>
  )
}


