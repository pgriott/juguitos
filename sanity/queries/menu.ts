export type SanityCategory = {
  _id: string;
  title: string;
  slug: string;
};

export type SanityMenuItem = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  description?: string;
  category: string;
};

export const categoriesQuery = `*[_type == "menuCategory"] | order(orden asc) {
  _id,
  "title": nombre,
  "slug": identificador.current
}`

export const menuItemsQuery = `*[_type == "menuItem" && available != false] {
  _id,
  name,
  "slug": slug.current,
  price,
  description,
  "category": category->identificador.current
}`
