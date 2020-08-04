
import {gql, useQuery} from '@apollo/client'
import Link from "next/link";

export default function PostList(){

    const {loading, error, data} = useQuery(gql`
        query getBlogs {
            Blog {
                uid
                title
                content
                coverImage
                createdAt
                User {
                    firstName
                    lastName
                    photo
                }
                Reactions {
                    type
                }
                Tags {
                    name
                }
            }
        }
    `)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;

    return data.Blog.map(post => (
            <section key={post.uid}>
                <Link href={"/post/"+post.uid} >
                    <a><h1>{post.title}</h1></a>
                </Link>
                <p>{post.content}</p>
            </section>
    ))
}