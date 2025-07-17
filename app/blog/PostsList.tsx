import Link from 'next/link';
import { Post } from "./post-data";

export default function PostsList({ posts }:{ posts: Post[]}) {
    return(
        <div className="container mx-auto p-10 flex flex-col">
            {posts.map(post=> (
                <Link key={post.id} href={"/blog/" + post.id}>
                    <div className="md:w-1/2 mb-5 md:mr-8">

                    </div>
                    <div className="md:w-1/2">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}