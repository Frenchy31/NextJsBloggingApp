import Link from "next/link";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {Jumbotron, Container, Row, Col, Button, Toast} from "react-bootstrap";
import {useState} from "react";

// Post content Preview Max Length
const PREVIEW_LENGTH = 90

/**
 * Component PostPreview
 * @param post
 * @returns {JSX.Element}
 * @constructor
 */
export default function PostPreview({post}){
    //Href Links
    let hrefPost = "/post/"+post.uid;
    let hrefUser = "/user/"+post.User.uid;
    //Bootstrap Toast hook initialiser
    const [show, setShow] = useState(false)
    return (
        <Container>
            <Row>
                <Col md={{ span:8, offset:2 }}>
                    <Jumbotron>
                        <section key={post.uid}>
                            <Link href={hrefPost} >
                                <a><h1>{post.title}</h1></a>
                            </Link>
                            <h5>
                                Par <Link href={hrefUser}>
                                    <a>{post.User.firstName} {post.User.lastName}</a>
                                </Link>
                            </h5>
                            <p>{post.content.substring(0,PREVIEW_LENGTH)}...</p>
                            <CopyToClipboard text={window.location.href.replace('/posts', '') + hrefPost}><Button onClick={() => setShow(true)}>Share</Button></CopyToClipboard>
                        </section>
                        <div style={{
                            width: '100px',
                            top:'20px',
                        }}>
                            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                <Toast.Body>Lien copié !</Toast.Body>
                            </Toast>
                        </div>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}
