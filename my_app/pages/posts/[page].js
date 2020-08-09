import {useRouter} from "next/router";
import {ApolloProvider} from "@apollo/client";
import PostList from "../../components/PostList";
import MyApolloClient from "../../lib/MyApolloClient";
import React from "react";
import CustomNav from "../../components/CustomNav";
import {Col, Container, Row} from "react-bootstrap";

export default function posts(){
    const router = useRouter()
    const {page} = router.query
    return (
        <ApolloProvider client={MyApolloClient}>
            <CustomNav/>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1>Mon blog</h1>
                    </Col>
                    <PostList page={page}/>
                </Row>
            </Container>
        </ApolloProvider>
    )
}