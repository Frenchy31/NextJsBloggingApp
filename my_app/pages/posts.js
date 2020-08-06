import {ApolloProvider} from "@apollo/client";

import MyApolloClient from "../lib/MyApolloClient";
import PostList from "../components/PostList";
import {Nav,Container,Row, Col} from "react-bootstrap";
import CustomNav from "../components/CustomNav";

//Todo : Paginate posts
export default function posts(){
    return (
        <ApolloProvider client={MyApolloClient}>
            <CustomNav/>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1>Mon blog</h1>
                    </Col>
                    <PostList />
                </Row>
            </Container>
        </ApolloProvider>
    );
}
