import {gql, useQuery} from '@apollo/client'
import Link from "next/link";
import {Card} from "react-bootstrap";

/**
 * Comment component
 * @param comment
 * @returns {JSX.Element}
 * @constructor
 */
export default function Comment({comment}){
    //Date conversion format
    const date = new Date(comment.createAt).toLocaleDateString()
    const time = new Date(comment.createAt).toLocaleTimeString()
    //Return Bootstrap Card
    return (
        <section key={comment.uid} style={{
            marginTop:"10px"
        }}>
            <Card>
                <Card.Header>
                    <p>
                        <Link href={'/user/'+comment.User.uid}>
                            <a>{comment.User.firstName} {comment.User.lastName}</a>
                        </Link> le {date} à {time}</p>
                    <p>Send mail : <a href={'mailto:'+ comment.User.mail}>{comment.User.mail}</a></p>
                </Card.Header>
                <Card.Body>
                    <p>{comment.message}</p>
                </Card.Body>
            </Card>
        </section>
    )
}
