import {gql, useQuery} from '@apollo/client'
import Link from "next/link";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
const PREVIEW_LENGTH = 90
export default function PostPreview({post}){
    let href = "/post/"+post.uid;
    return (
        <section key={post.uid}>
            <Link href={href} >
                <a><h1>{post.title}</h1></a>
            </Link>
            <p>{post.content.substring(0,PREVIEW_LENGTH)}...</p>
            <CopyToClipboard text={window.location.href.replace('/posts', '') + href}><button>Share</button></CopyToClipboard>
        </section>
    )
}