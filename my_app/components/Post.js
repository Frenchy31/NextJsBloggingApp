
import {gql, useQuery} from '@apollo/client'

export default function Post({uid}){

    const {loading, error, data} = useQuery(gql`
        query getOneBlog($uid: Int!) {
            Blog_by_pk(uid: $uid) { 
                uid
                title
                content
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
            <p>{mPost.content}</p>
        </div>
    )
}