import {gql, useQuery} from '@apollo/client'
import Link from "next/link";

//TODO : Beautify Date
export default function Comment({comment}){
    return (
        <section key={comment.uid}>
            <p>
                <Link href={'/user/'+comment.User.uid}>
                    <a>{comment.User.firstName} {comment.User.lastName}</a>
                </Link> à {comment.createAt}</p>
            <p>{comment.message}</p>
            <p>Contact : <a href={'mailto:'+ comment.User.mail}>{comment.User.mail}</a></p>
        </section>
    )
}