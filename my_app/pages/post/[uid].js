import {ApolloProvider} from "@apollo/client";
import { useRouter } from 'next/router'
import MyApolloClient from "../../lib/MyApolloClient";
import Post from "../../components/Post";
import React from "react";

//Simple Post rendering page
export default function post(){
    const router = useRouter()
    const { uid } = router.query
    return (
        <ApolloProvider client={MyApolloClient}>
            <Post uid={uid}/>
        </ApolloProvider>
    );
}
