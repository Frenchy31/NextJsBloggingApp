import {gql, useQuery} from '@apollo/client'
import CommentList from "./CommentList";
import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import CustomNav from "./CustomNav";
import PostCard from "./PostCard";

/**
 * Single Post Page Component
 * @param uid
 * @returns {JSX.Element}
 * @constructor
 */
export default function Post({uid}){
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
                    <Col md={{span: 10, offset: 1}}>
                        <div style={{marginTop: "2em"}}>
                            <PostCard mPost={mPost}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                        <section>
                            <CommentList uid={mPost.uid}/>
                        </section>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
