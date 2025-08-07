import Image from "next/image"
import Link from "next/link"
import { MdLocationOn } from 'react-icons/md';
import { MdCalendarMonth } from 'react-icons/md';
import { MdWhatsapp } from 'react-icons/md';


export default function Header () {
    return(
        <div className="sm:flex justify-between items-center mx-4 sm:mx-10 py-6 bg-yellowLight border-b-2 border-greenDark">
            <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="flex items-end">
                    <Image 
                        src='/Logo.png'
                        alt="Logo"
                        height={60}
                        width={50}
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
                <Link href='/#' className="flex items-center text-3xl text-greenDark hover:opacity-75 hover:scale-105">
                    <MdCalendarMonth />
                </Link>
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