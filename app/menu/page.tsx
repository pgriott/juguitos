'use client'

import Header from "../componentes/Header";
import ScrollToTopButton from "../componentes/ScrollToTop";
import ProductsList from "./ProductList";
import { products } from "./product-data";

export default function MenuPage() {
    return (
        <>
            <Header />
            <div className="px-4 sm:px-10 md:px-16 py-4 sm:py-8">
                <ProductsList products={products} />
                <ScrollToTopButton />
            </div>
        </>
    )
}

/**
                 <h1 className="text-3xl mb-4 text-greenDark">Menú</h1>
 */