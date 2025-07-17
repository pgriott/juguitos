import Link from "next/link";
import Header from "./componentes/Header";

export default function Home() {
  return (
    <main className="bg-yellowLight">
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-col lg:flex-row flex-grow p-8 sm:p-10 md:py-20 md:px-36 gap-6 md:gap-x-12">
          {/* CARDS */}
          <div 
            className="card"
            style={{ backgroundImage: "url('/Iguana.jpg')" }}
          >
            <Link href="/menu" className="card-link">          
              <h1 className="cardTitle text-yellowDark text-shadow-yellow-900">
                Menu
              </h1>
            </Link>
          </div>
          <div 
            className="card"
            style={{ backgroundImage: "url('/hraunfossar-waterfalls.jpg')" }}
          >
            <Link href="/artistas" className="card-link">          
              <h1 className="cardTitle text-orangeDark text-shadow-green-900">
                Artistas
              </h1>
            </Link>
          </div>
          <div 
            className="card"
            style={{ backgroundImage: "url('/Flor1.jpg')" }}
          >
            <Link href="/blog" className="card-link">          
              <h1 className="cardTitle text-greenDark text-shadow-green-900">
                Blog
              </h1>
            </Link>
          </div>
        </div>


      </div>
    </main>
  );
}

/**

              
 */