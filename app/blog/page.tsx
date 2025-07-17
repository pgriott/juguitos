import Link from 'next/link';
import Header from '../componentes/Header';
import PostsList from './PostsList';
import { posts } from "./post-data";

export default function BlogPage() {
    return(
        <>
            <Header />
            <div className="container min-h-96 max-w-4xl mx-auto p-8">
                <div className='flex flex-col min-h-96 justify-center items-center'>
                    <h2 className='text-3xl text-greenDark'>Pronto!</h2>
                    <h1 className='my-8 font-bold text-2xl text-greenDark shantell-sans'>
                        El blog
                    </h1>
                </div>
                <Link href='/' className='flex justify-end text-xl text-orangeDark hover:scale-105 hover:opacity-75'>
                    Volver al inicio
                </Link>
            </div>
        </>
    ) 
};

/*
{posts.map(post => (
    <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
))}
*/