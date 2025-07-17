import Link from 'next/link';
import { Product } from "./product-data";

export default function ProductsList({ products }: { products: Product[] }) {
  const jugoProducts = products.filter((product) => product.categoria === "jugo");
  const batidoProducts = products.filter((product) => product.categoria === "batido");
  const deportistasProducts = products.filter((product) => product.categoria === "deportistas");
  const extractosProducts = products.filter((product) => product.categoria === "extractos");

  return (
    <div className="p-2 max-w-5xl mx-auto space-y-8 overflow-x-hidden">
      <h3 className='text-greenDark text-2xl shantell-sans font-bold mb-2 overflow-x-hidden'>A tu gusto</h3>
      <div className='flex flex-col md:flex-row pb-4 md:pb-6 justify-around'>
          {/* Jugos y cafe y frutas a eleccion*/}
          <div className="flex flex-col md:w-1/2 gap-y-2 md:gap-x-20">
            <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Jugos y café</h2>
            <div className='flex flex-col sm:flex-row px-2 md:px-8 justify-between text-greenDark'>
                <h2 className='sm:pr-4 shantell-sans font-semibold'>Jugo simple</h2>
                <div className='flex px-12 justify-between'>
                  <p className='shantell-sans'>en agua: </p>
                  <p className='inline shantell-sans font-medium'>$2300</p>
                </div>
                <div className='flex px-12 justify-between'>  
                  <p className='shantell-sans'>en leche: </p>
                  <p className='inline shantell-sans font-medium'>$2800</p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row px-2 md:px-8 justify-between text-greenDark'>
                <h2 className='sm:pr-4 shantell-sans font-semibold'>Jugo doble</h2>
                <div className='flex px-12 justify-between'> 
                  <p className='shantell-sans'>en agua: </p>
                  <p className='inline shantell-sans font-medium'>$2700</p>
                </div>
                <div className='flex px-12 justify-between'> 
                  <p className='shantell-sans'>en leche: </p>
                  <p className='inline shantell-sans font-medium'>$3100</p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row px-2 md:px-8 justify-between text-greenDark'>
                <h2 className='sm:pr-4 shantell-sans font-semibold'>Jugo triple</h2>
                <div className='flex px-12 justify-between'> 
                  <p className='shantell-sans'>en agua: </p>
                  <p className='inline shantell-sans font-medium'>$3200</p>
                </div>
                <div className='flex px-12 justify-between'>  
                  <p className='shantell-sans'>en leche: </p>
                  <p className='inline shantell-sans font-medium'>$3600</p>
                </div>
            </div>
            <div className='flex px-2 md:px-8 justify-between text-greenDark flex-wrap min-w-0'>
                <h2 className='sm:pr-4 shantell-sans font-semibold'>Café helado</h2>
                <p className='inline px-12 justify-between shantell-sans font-medium'>$2300</p>
            </div>
            <h2 className='mt-4 shantell-sans text-lg text-orangeDark text-shadow-md/10 font-bold'>Frutas a elección</h2>
            <p className='sm:mb-2 shantell-sans text-sm !text-orangeDark'>(consulta disponibilidad)</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 px-4 sm:px-8 mt-3 shantell-sans'>
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
            <div className="mt-4 gap-y-3 gap-x-20">
              <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Extractos (sin agua)</h2>
              <div className='flex justify-between text-greenDark px-8'>
                  <h2 className='pr-6 shantell-sans font-semibold'>1 fruta u hortaliza</h2>
                  <p className='shantell-sans'><b>$3000</b></p>
              </div>
              <div className='flex justify-between text-greenDark px-8'>
                  <h2 className='pr-6 shantell-sans font-semibold'>2 o más frutas u hortalizas</h2>
                  <p className='shantell-sans'><b>$3400</b></p>
              </div>
              <div className='grid grid-cols-3 mt-3 shantell-sans'>
                  <p>Zanahoria</p>
                  <p>Betarraga</p>
                  <p>Piña</p>
                  <p>Apio</p>                    
                  <p>Manzana</p>
                  <p>Jengibre</p>
              </div>
            </div>
            {/* Sanguches */}
            <div className="mt-6 gap-y-3 gap-x-20">
                <h2 className='shantell-sans font-bold text-lg text-orangeDark text-shadow-md/10'>Sándwiches</h2>
                <p className='shantell-sans text-sm font-semibold text-center'>(Consulta disponibilidad)</p>
            </div>
          </div>
      </div>

      {/* JUGOS */}
      <div>
        <h3 className='text-orangeDark text-2xl shantell-sans font-bold mb-2'>Jugos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20">
          {jugoProducts.map(product => (
            <Link key={product.id} href={"/menu/" + product.id}>
              <div>
                <div className='flex justify-between text-greenDark'>
                  <h2 className='text-base shantell-sans font-medium'>{product.name}</h2>
                  <h3 className='text-base shantell-sans font-medium'>${product.price}</h3>
                </div>
                <p className='shantell-sans'>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* BATIDOS */}
      <div>
        <h3 className='text-orangeDark text-2xl shantell-sans font-bold mb-2'>Batidos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20">
          {batidoProducts.map(product => (
            <Link key={product.id} href={"/menu/" + product.id}>
              <div>
                <div className='flex justify-between text-greenDark'>
                  <h2 className='text-base shantell-sans font-medium'>{product.name}</h2>
                  <h3 className='text-base shantell-sans font-medium'>${product.price}</h3>
                </div>
                <p className='shantell-sans'>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* DEPORTISTAS */}
      <div>
        <h3 className='text-orangeDark text-2xl shantell-sans font-bold mb-2'>Batidos para deportistas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20">
          {deportistasProducts.map(product => (
            <Link key={product.id} href={"/menu/" + product.id}>
              <div>
                <div className='flex justify-between text-greenDark'>
                  <h2 className='text-base shantell-sans font-medium'>{product.name}</h2>
                  <h3 className='text-base shantell-sans font-medium'>${product.price}</h3>
                </div>
                <p className='shantell-sans'>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* EXTRACTOS */}
      <div>
        <h3 className='text-orangeDark text-2xl shantell-sans font-bold mb-2'>Extractos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-20">
          {extractosProducts.map(product => (
            <Link key={product.id} href={"/menu/" + product.id}>
              <div>
                <div className='flex justify-between text-greenDark'>
                  <h2 className='text-base shantell-sans font-medium'>{product.name}</h2>
                  <h3 className='text-base shantell-sans font-medium'>${product.price}</h3>
                </div>
                <p className='shantell-sans'>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


/*


JUEGOS, BATIDOS, ETC







 <div className="md:w-1/2 mb-5 md:mr-8">
    <Image 
            src={'/' + product.imageUrl} 
            alt="Project Image"
            className='w-full h-auto rounded-lg shadow-md' 
            width={150} 
            height={150} 
    />
</div>
 */