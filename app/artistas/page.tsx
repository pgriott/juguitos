import Header from '../componentes/Header';
import ArtistsList from './ArtistsList';
import { artists } from "./artist-data";

export default function ArtistasPage() {
    return(
        <>
            <Header />
            <div className="container mx-auto p-10 flex flex-col">
                <h1 className='font-bold text-2xl text-greenDark shantell-sans'>Artistas en exhibición:</h1>
                <ArtistsList artists={artists} />
            </div>
        </>
    )
}