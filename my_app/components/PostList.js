
import {gql, useQuery} from '@apollo/client'

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
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </section>
    ))
}