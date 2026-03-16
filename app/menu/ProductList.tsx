import Link from 'next/link';
import { Product } from "./product-data";
import { SanityCategory, SanityMenuItem, SanityFlexibleItem, SanityIngredient } from "@/sanity/queries/menu";

type Props = {
  categories: SanityCategory[];
  menuItems: SanityMenuItem[];
  staticProducts: Product[];
  flexibleItems: SanityFlexibleItem[];
  frutas: SanityIngredient[];
  extractosIngredientes: SanityIngredient[];
};

function AtuGustoFallback() {
  return (
    <div className='flex flex-col md:flex-row pb-4 md:pb-6 justify-around gap-5'>
        {/* Jugos y cafe y frutas a eleccion*/}
        <div className="flex flex-col md:w-1/2 gap-y-2 md:gap-x-20">
          <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Jugos y café</h2>
          <div className='flex flex-col lg:flex-row px-2 xl:px-8 justify-between text-greenDark'>
              <h2 className='sm:pr-4 shantell-sans font-semibold'>Jugo simple</h2>
              <div className='flex px-2 items-center justify-between'>
                <p className='shantell-sans pr-1'>en agua: </p>
                <p className='inline shantell-sans font-medium'> $2300</p>
              </div>
              <div className='flex px-2 items-center justify-between'>
                <p className='shantell-sans pr-1'>en leche: </p>
                <p className='inline shantell-sans font-medium'>$2800</p>
              </div>
          </div>
          <div className='flex flex-col lg:flex-row px-2 xl:px-8 justify-between text-greenDark'>
              <h2 className='sm:pr-4 shantell-sans font-semibold'>Jugo doble</h2>
              <div className='flex px-2 items-center justify-between'>
                <p className='shantell-sans pr-1'>en agua: </p>
                <p className='inline shantell-sans font-medium'>$2700</p>
              </div>
              <div className='flex px-2 items-center justify-between'>
                <p className='shantell-sans pr-1'>en leche: </p>
                <p className='inline shantell-sans font-medium'>$3100</p>
              </div>
          </div>
          <div className='flex flex-col lg:flex-row px-2 xl:px-8 justify-between text-greenDark'>
              <h2 className='sm:pr-4 shantell-sans font-semibold'>Jugo triple</h2>
              <div className='flex px-2 items-center justify-between'>
                <p className='shantell-sans pr-1'>en agua: </p>
                <p className='inline shantell-sans font-medium'>$3200</p>
              </div>
              <div className='flex px-2 items-center justify-between'>
                <p className='shantell-sans pr-1'>en leche: </p>
                <p className='inline shantell-sans font-medium'>$3600</p>
              </div>
          </div>
          <div className='flex px-2 xl:px-8 justify-between text-greenDark flex-wrap min-w-0'>
              <h2 className='sm:pr-4 shantell-sans font-semibold'>Café helado</h2>
              <p className='inline px-12 justify-between shantell-sans font-medium'>$2300</p>
          </div>
          <h2 className='mt-4 shantell-sans text-lg text-orangeDark text-shadow-md/10 font-bold'>Frutas a elección</h2>
          <p className='sm:mb-2 shantell-sans text-sm !text-orangeDark'>(consulta disponibilidad)</p>
          <div className='grid grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 mt-3 shantell-sans'>
              <p>Frutilla</p>
              <p>Mora</p>
              <p>Arándano</p>
              <p>Mango</p>
              <p>Piña</p>
              <p>Plátano</p>
              <p>Guayaba</p>
              <p>Tamarindo</p>
              <p>Borojó</p>
              <p>Manzana</p>
              <p>Maracuyá</p>
              <p>Pomelo</p>
              <p>Guanábana</p>
              <p>Chirimoya</p>
              <p>Frambuesa</p>
              <p>Naranja</p>
              <p>Melón</p>
              <p>Papaya</p>
              <p>Cereza</p>
              <p>Durazno</p>
              <p>Lúcuma</p>
          </div>
        </div>
        {/* Adicionales y extractos y sandwiches*/}
        <div className='md:w-1/2'>
          {/* Adicionales */}
          <h2 className='mt-4 shantell-sans text-lg text-orangeDark text-shadow-md/10 font-bold'>Adicionales</h2>
          <div className='px-4 pr-8 mt-2 shantell-sans'>
            <div className='flex justify-between'>
              <p>Chía</p>
              <p>$400</p>
            </div>
            <div className='flex justify-between'>
              <p>Avena</p>
              <p>$400</p>
            </div>
            <div className='flex justify-between'>
              <p>Maca</p>
              <p>$400</p>
            </div>
            <div className='flex justify-between'>
              <p>Algarrobina</p>
              <p>$400</p>
            </div>
            <div className='flex justify-between'>
              <p>Canela</p>
              <p>$200</p>
            </div>
            <div className='flex justify-between'>
              <p>Proteína</p>
              <p>$1200</p>
            </div>
            <div className='flex justify-between'>
              <p>Leche vegana</p>
              <p>$600</p>
            </div>
          </div>
          {/* Extractos */}
          <div className="mt-4 flex flex-col gap-y-3">
            <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Extractos (sin agua)</h2>
            <div className='flex justify-between text-greenDark px-8'>
                <h2 className='pr-6 shantell-sans font-semibold'>1 fruta u hortaliza</h2>
                <p className='shantell-sans'><b>$3000</b></p>
            </div>
            <div className='flex justify-between text-greenDark px-8'>
                <h2 className='pr-6 shantell-sans font-semibold'>2 o más frutas u hortalizas</h2>
                <p className='shantell-sans'><b>$3400</b></p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 mt-3 shantell-sans'>
                <p>Zanahoria</p>
                <p>Betarraga</p>
                <p>Piña</p>
                <p>Apio</p>
                <p>Manzana</p>
                <p>Jengibre</p>
            </div>
          </div>
          {/* Sanguches */}
          <div className="mt-6 flex flex-col gap-y-3">
              <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Sándwiches</h2>
              <p className='shantell-sans text-sm font-semibold text-center'>(Consulta disponibilidad)</p>
          </div>
        </div>
    </div>
  );
}

type AtuGustoCmsSectionProps = {
  flexibleItems: SanityFlexibleItem[];
  frutas: SanityIngredient[];
  extractosIngredientes: SanityIngredient[];
};

function AtuGustoCmsSection({ flexibleItems, frutas, extractosIngredientes }: AtuGustoCmsSectionProps) {
  const jugos = flexibleItems.filter((i) => i.category === 'jugos-y-cafe');
  const adicionales = flexibleItems.filter((i) => i.category === 'adicionales');
  const extractosTiers = flexibleItems.filter((i) => i.category === 'extractos-sin-agua');
  const sandwiches = flexibleItems.filter((i) => i.category === 'sandwiches');

  return (
    <div className='flex flex-col md:flex-row pb-4 md:pb-6 justify-around gap-5'>
      {/* Jugos y cafe y frutas a eleccion */}
      <div className="flex flex-col md:w-1/2 gap-y-2 md:gap-x-20">
        <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Jugos y café</h2>
        {jugos.map((item) => (
          <div key={item._id} className='flex flex-col lg:flex-row px-2 xl:px-8 justify-between text-greenDark'>
            <h2 className='sm:pr-4 shantell-sans font-semibold'>{item.name}</h2>
            {item.precioConLeche != null ? (
              <>
                <div className='flex px-2 items-center justify-between'>
                  <p className='shantell-sans pr-1'>en agua: </p>
                  <p className='inline shantell-sans font-medium'>${item.precioBase}</p>
                </div>
                <div className='flex px-2 items-center justify-between'>
                  <p className='shantell-sans pr-1'>en leche: </p>
                  <p className='inline shantell-sans font-medium'>${item.precioConLeche}</p>
                </div>
              </>
            ) : (
              <p className='inline px-2 shantell-sans font-medium'>${item.precioBase}</p>
            )}
          </div>
        ))}

        <h2 className='mt-4 shantell-sans text-lg text-orangeDark text-shadow-md/10 font-bold'>Frutas a elección</h2>
        <p className='sm:mb-2 shantell-sans text-sm !text-orangeDark'>(consulta disponibilidad)</p>
        <div className='grid grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 mt-3 shantell-sans'>
          {frutas.map((f) => (
            <p key={f._id}>{f.ingrediente}</p>
          ))}
        </div>
      </div>

      {/* Adicionales y extractos y sandwiches */}
      <div className='md:w-1/2'>
        <h2 className='mt-4 shantell-sans text-lg text-orangeDark text-shadow-md/10 font-bold'>Adicionales</h2>
        <div className='px-4 pr-8 mt-2 shantell-sans'>
          {adicionales.map((item) => (
            <div key={item._id} className='flex justify-between'>
              <p>{item.name}</p>
              <p>${item.precioBase}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-y-3">
          <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Extractos (sin agua)</h2>
          {extractosTiers.map((item) => (
            <div key={item._id} className='flex justify-between text-greenDark px-8'>
              <h2 className='pr-6 shantell-sans font-semibold'>{item.name}</h2>
              <p className='shantell-sans'><b>${item.precioBase}</b></p>
            </div>
          ))}
          <div className='grid grid-cols-2 lg:grid-cols-3 mt-3 shantell-sans'>
            {extractosIngredientes.map((i) => (
              <p key={i._id}>{i.ingrediente}</p>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-y-3">
          <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Sándwiches</h2>
          {sandwiches.length > 0 ? (
            sandwiches.map((item) => (
              <div key={item._id} className='flex justify-between px-4 pr-8 shantell-sans'>
                <p>{item.name}</p>
                <p>${item.precioBase}</p>
              </div>
            ))
          ) : (
            <p className='shantell-sans text-sm font-semibold text-center'>(Consulta disponibilidad)</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsList({ categories, menuItems, staticProducts, flexibleItems, frutas, extractosIngredientes }: Props) {
  const useCmsData = categories.length > 0 && menuItems.length > 0;
  const useAtuGustoCmsData = flexibleItems.length > 0 || frutas.length > 0 || extractosIngredientes.length > 0;

  return (
    <div className="p-2 max-w-5xl mx-auto space-y-8 overflow-x-hidden">
      <h3 className='text-greenDark text-2xl shantell-sans font-bold mb-2 overflow-x-hidden'>A tu gusto</h3>
      {useAtuGustoCmsData ? (
        <AtuGustoCmsSection
          flexibleItems={flexibleItems}
          frutas={frutas}
          extractosIngredientes={extractosIngredientes}
        />
      ) : (
        <AtuGustoFallback />
      )}

      {useCmsData ? (
        categories
          .filter((cat) => cat.seccion !== true)
          .map((cat) => {
          const items = menuItems.filter((item) => item.category === cat.slug);
          return (
            <div key={cat._id}>
              <h3 className='text-orangeDark text-2xl shantell-sans font-bold mb-2'>{cat.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20">
                {items.map((item) => (
                  <Link key={item._id} href={"/menu/" + item.slug}>
                    <div>
                      <div className='flex justify-between text-greenDark'>
                        <h2 className='text-base shantell-sans font-medium'>{item.name}</h2>
                        <span className='text-base shantell-sans font-medium'>${item.price}</span>
                      </div>
                      <p className='shantell-sans'>{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <>
          <div>
            <h3 className='text-orangeDark text-2xl shantell-sans font-bold mb-2'>Jugos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20">
              {staticProducts.filter(p => p.categoria === 'jugo').map(product => (
                <Link key={product.id} href={"/menu/" + product.id}>
                  <div>
                    <div className='flex justify-between text-greenDark'>
                      <h2 className='text-base shantell-sans font-medium'>{product.name}</h2>
                      <span className='text-base shantell-sans font-medium'>${product.price}</span>
                    </div>
                    <p className='shantell-sans'>{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-orangeDark text-2xl shantell-sans font-bold mb-2'>Batidos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20">
              {staticProducts.filter(p => p.categoria === 'batido').map(product => (
                <Link key={product.id} href={"/menu/" + product.id}>
                  <div>
                    <div className='flex justify-between text-greenDark'>
                      <h2 className='text-base shantell-sans font-medium'>{product.name}</h2>
                      <span className='text-base shantell-sans font-medium'>${product.price}</span>
                    </div>
                    <p className='shantell-sans'>{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-orangeDark text-2xl shantell-sans font-bold mb-2'>Batidos para deportistas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20">
              {staticProducts.filter(p => p.categoria === 'deportistas').map(product => (
                <Link key={product.id} href={"/menu/" + product.id}>
                  <div>
                    <div className='flex justify-between text-greenDark'>
                      <h2 className='text-base shantell-sans font-medium'>{product.name}</h2>
                      <span className='text-base shantell-sans font-medium'>${product.price}</span>
                    </div>
                    <p className='shantell-sans'>{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className='text-orangeDark text-2xl shantell-sans font-bold mb-2'>Extractos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20">
              {staticProducts.filter(p => p.categoria === 'extractos').map(product => (
                <Link key={product.id} href={"/menu/" + product.id}>
                  <div>
                    <div className='flex justify-between text-greenDark'>
                      <h2 className='text-base shantell-sans font-medium'>{product.name}</h2>
                      <span className='text-base shantell-sans font-medium'>${product.price}</span>
                    </div>
                    <p className='shantell-sans'>{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
