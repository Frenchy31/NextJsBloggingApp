import {gql, useQuery} from '@apollo/client'
import Link from "next/link";
import CommentList from "./CommentList";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

export default function Post({uid}){

    const {loading, error, data} = useQuery(gql`
        query getOneBlog($uid: Int!) {
            Blog_by_pk(uid: $uid) { 
                uid
                title
                content
                User {
                    uid
                    firstName
                    lastName
                }
            }
        }
        `, {
            variables: {
                uid
            }
        })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;

    const mPost=data.Blog_by_pk;

    return (
        <div>
            <h1>{mPost.title}</h1>
            <p>
                <Link href={"/user/"+mPost.User.uid} >
                    <a>{mPost.User.firstName} {mPost.User.lastName}</a>
                </Link>
            </p>
            <p>{mPost.content}</p>
            <CopyToClipboard text={window.location.href}><button>Share</button></CopyToClipboard>
            <section>
                <CommentList uid={mPost.uid}/>
            </section>
        </div>
    )
}