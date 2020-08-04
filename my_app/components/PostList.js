
import {gql, useQuery} from '@apollo/client'
import Link from "next/link";
import PostPreview from "./PostPreview";

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

    return data.Blog.map(post => <PostPreview post={post}/> )
}