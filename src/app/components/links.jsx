"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx';

const Links = [
    {name: 'Inicio', href: '/'},
    {name: 'Menú', href: '/menu'},
    {name: 'Ubicación', href: '/ubicacion'}
];

function NavLinks() {
  const pathname = usePathname();
  return (
    <>
    {Links.map((link) => {
    return(
    <Link 
    key={link.name}
    href={link.href}
    className={clsx('nav-link',
        {
            'nav-link-current': pathname === link.href,
        }
    )}>{link.name}</Link>
    );
    })}
    </>
  )
}

export default NavLinks