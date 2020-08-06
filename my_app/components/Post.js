import {gql, useQuery} from '@apollo/client'
import Link from "next/link";
import CommentList from "./CommentList";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {Container, Jumbotron, Row, Toast, Button, Col} from "react-bootstrap";
import {useState} from "react";
import CustomNav from "./CustomNav";

/**
 * Single Post Page Component
 * @param uid
 * @returns {JSX.Element}
 * @constructor
 */
export default function Post({uid}){
    //Initiliase Toast Hook
    const [show, setShow] = useState(false)
    //GraphQL Query fetching one Post datas
    const {loading, error, data} = useQuery(gql`
        query getOneBlog($uid: Int!) {
            Blog_by_pk(uid: $uid) { 
                uid
                title
                content
                User {
                    uid
                    firstName
                    lastName
                }
            }
        }
        `, {
            variables: {
                uid
            }
        })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error </p>

    const mPost=data.Blog_by_pk
    return (
        <>
        <CustomNav/>
        <Container>
            <Row>
                <Col md={{ span:10, offset:1 }}>
                    <div style={{marginTop:"2em"}}>
                        <Jumbotron>
                            <h1>{mPost.title}</h1>
                            <Link href={"/user/" + mPost.User.uid} >
                                <a>{mPost.User.firstName} {mPost.User.lastName}</a>
                            </Link>
                            <p>{mPost.content}</p>
                            {window && <CopyToClipboard text={window.location.href}><Button onClick={() => setShow(true)}>Share</Button></CopyToClipboard>}
                            <div style={{
                                width: '100px',
                                marginTop:'10px',
                            }}>
                                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                    <Toast.Body>Lien copié !</Toast.Body>
                                </Toast>
                            </div>
                        </Jumbotron>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={{ span:6, offset:3}}>
                    <section>
                        <CommentList uid={mPost.uid}/>
                    </section>
                </Col>
            </Row>
        </Container>
        </>
    )
}
