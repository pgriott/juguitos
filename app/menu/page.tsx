import Header from "../componentes/Header";
import ScrollToTopButton from "../componentes/ScrollToTop";
import ProductsList from "./ProductList";
import { client } from "@/sanity/client";
import { categoriesQuery, menuItemsQuery, SanityCategory, SanityMenuItem } from "@/sanity/queries/menu";
import { products } from "./product-data";

export const revalidate = 30;

export type { SanityCategory, SanityMenuItem };

export default async function MenuPage() {
  let categories: SanityCategory[] = [];
  let menuItems: SanityMenuItem[] = [];

  try {
    [categories, menuItems] = await Promise.all([
      client.fetch<SanityCategory[]>(categoriesQuery),
      client.fetch<SanityMenuItem[]>(menuItemsQuery),
    ]);
  } catch {
    // Sanity unavailable — fall through to static fallback below
  }

  return (
    <>
      <Header />
      <div className="px-4 sm:px-10 md:px-16 py-4 sm:py-8">
        <ProductsList
          categories={categories}
          menuItems={menuItems}
          staticProducts={products}
        />
        <ScrollToTopButton />
      </div>
    </>
  );
}

/**
                 <h1 className="text-3xl mb-4 text-greenDark">Menú</h1>
 */
