
import {ApolloProvider} from "@apollo/client";

import MyApolloClient from "../lib/MyApolloClient";
import PostList from "../components/PostList";


export default function posts(){
    return (
        <ApolloProvider client={MyApolloClient}>
            <div>
                <h1>Les posts d'Aubing</h1>
                <PostList />
            </div>
        </ApolloProvider>
    );
}
