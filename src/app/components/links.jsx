"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { FaHome, FaPizzaSlice } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";

const Links = [
    { name: 'Inicio', href: '/', icon: <FaHome /> },
    { name: 'Menú', href: '/menu', icon: <FaPizzaSlice /> },
    { name: 'Ubicación', href: '/ubicacion', icon: <FaLocationDot /> }
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {Links.map((link) => (
        <Link 
          key={link.name}
          href={link.href}
          className={clsx('nav-link', {
            'nav-link-current': pathname === link.href,
          })}
        >
          <span className="icon">{link.icon}</span> {/* Renderizamos el icono */}
          {link.name}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
