import {gql, useQuery} from '@apollo/client'
import Link from "next/link";
import Comment from "./Comment";

export default function CommentList({uid}) {
    const {loading, error, data} = useQuery(gql`
        query Get_Comment_List($uid: Int!) {
          Blog_by_pk(uid: $uid) {
            Comments {
              createAt
              uid
              message
              User {
                firstName
                lastName
                uid
              }
            }
            Comments_aggregate {
              aggregate {
                count
              }
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
            <h4>{mPost.Comments_aggregate.aggregate.count} commentaires.</h4>
            { mPost.Comments.map(comment => (<Comment comment={comment}/>)) }
        </div>
    )
}