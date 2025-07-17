import Link from 'next/link';
import { Artist } from "./artist-data";

export default function ArtistsList({ artists }:{ artists: Artist[]}) {
    return(
        <div className="container mx-auto p-10 flex flex-col gap-y-8 ">
            {artists.map(artist=> (
                <Link key={artist.id} href={"/artistas/" + artist.id}>
                    <div className="flex justify-center">
                        <h2 className='text-3xl text-greenDark'>{artist.name}</h2>
                        <p>{artist.location}</p>
                        <p>{artist.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}