"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MdLocationOn } from 'react-icons/md';
import { MdCalendarMonth } from 'react-icons/md';
import { MdWhatsapp } from 'react-icons/md';

const dias = [
    "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
]

export default function Header () {
    const [horariosAbierto, setHorariosAbierto] = useState(false)

    return(
        <div className="sm:flex justify-between items-center mx-4 sm:mx-10 py-6 bg-yellowLight border-b-2 border-greenDark">
            <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="flex items-end">
                    <Image
                        src='/Logo_monito.png'
                        alt="Logo"
                        height={60}
                        width={60}
                        className="rounded-full object-cover"
                    />
                    <Link href='/'>
                        <h1 className="px-6 text-4xl text-orangeDark text-shadow-sm hover:opacity-75 hover:scale-105">Juguitos Frescos</h1>
                    </Link>
                </div>
                <p className="mt-4 mb-2 sm:mb-0 sm:mt-auto sm:pr-6 lg:pr-0 pb-1 shantell-sans font-medium text-greenDark">Jugos naturales para todos los gustos</p>
            </div>
            <div className="flex gap-x-8 justify-center sm:justify-end">
                <a
                    href='https://maps.app.goo.gl/WwZnZdwvgnq39QQc9'
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex items-center text-3xl text-greenDark hover:opacity-75 hover:scale-105"
                >
                    <MdLocationOn />
                </a>
                <div className="relative flex items-center">
                    <button
                        onClick={() => setHorariosAbierto(!horariosAbierto)}
                        className="flex items-center text-3xl text-greenDark hover:opacity-75 hover:scale-105 cursor-pointer"
                        aria-label="Ver horarios"
                    >
                        <MdCalendarMonth />
                    </button>
                    {horariosAbierto && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setHorariosAbierto(false)}
                            />
                            <div className="fixed top-32 left-1/2 -translate-x-1/2 sm:absolute sm:top-10 sm:left-auto sm:right-0 sm:translate-x-0 z-20 bg-yellowLight border-2 border-greenDark rounded-xl shadow-lg p-4 min-w-56">
                                <h2 className="text-center font-bold text-greenDark text-lg mb-3 shantell-sans">Horario</h2>
                                <ul className="space-y-1">
                                    {dias.map((dia) => (
                                        <li key={dia} className="flex justify-between gap-x-4 text-sm text-greenDark">
                                            <span className="font-medium">{dia}</span>
                                            <span>10:00 – 19:00</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
                <a
                    href='https://wa.me/56956396452'
                    rel="noopener noreferrer"
                    className="flex items-center text-3xl text-greenDark hover:opacity-75 hover:scale-105"
                >
                    <MdWhatsapp />
                </a>
            </div>
        </div>
    )
}