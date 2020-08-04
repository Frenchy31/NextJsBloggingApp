import {gql, useQuery} from '@apollo/client'
import Link from "next/link";

export default function Comment({comment}){
    return (
        <section key={comment.uid}>
            <p>
                <Link href={'/user/'+comment.User.uid}>
                    <a>{comment.User.firstName} {comment.User.lastName}</a>
                </Link> à {comment.createAt}</p>
            <p>{comment.message}</p>
        </section>
    )
}