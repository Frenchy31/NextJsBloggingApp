
import {ApolloProvider} from "@apollo/client";

import { useRouter } from 'next/router'

import MyApolloClient from "../../lib/MyApolloClient";
import Post from "../../components/Post";


export default function post(){
    const router = useRouter()
    const { uid } = router.query
    return (
        <ApolloProvider client={MyApolloClient}>
            <div>
                <h1>post</h1>
                <Post uid={uid}/>
            </div>
        </ApolloProvider>
    );
}
