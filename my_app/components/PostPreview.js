import {gql, useQuery} from '@apollo/client'
import Link from "next/link";
const PREVIEW_LENGTH = 90
export default function PostPreview({post}){
    return (
        <section key={post.uid}>
            <Link href={"/post/"+post.uid} >
                <a><h1>{post.title}</h1></a>
            </Link>
            <p>{post.content.substring(0,PREVIEW_LENGTH)}...</p>
        </section>
    )
}