
import {gql, useQuery} from '@apollo/client'
import PostPreview from "./PostPreview";
import CustomNav from "./CustomNav";

/**
 * PostList Component
 * @returns {JSX.Element|*}
 * @constructor
 */
export default function PostList(){

    //GraphQl Query Fetching all Posts
    const {loading, error, data} = useQuery(gql`
        query getBlogs {
            Blog {
                uid
                title
                content
                coverImage
                createdAt
                User {
                    uid
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

    return (
         data.Blog.map(post => (<PostPreview post={post}/>))
    )
}
