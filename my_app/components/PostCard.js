import {Jumbotron} from "react-bootstrap";
import Link from "next/link";
import ShareButton from "./ShareButton";

export default function PostCard({mPost}) {

    return <Jumbotron>
        <h1>{mPost.title}</h1>
        <Link href={"/user/" + mPost.User.uid}>
            <a>{mPost.User.firstName} {mPost.User.lastName}</a>
        </Link>
        <p>{mPost.content}</p>
        <ShareButton link={window.location.href}/>
    </Jumbotron>;

}