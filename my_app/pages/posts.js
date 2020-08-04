import {ApolloProvider} from "@apollo/client";

import MyApolloClient from "../lib/MyApolloClient";
import PostList from "../components/PostList";

//Todo : Paginate posts
export default function posts(){
    return (
        <ApolloProvider client={MyApolloClient}>
            <div>
                <h1>Liste des posts</h1>
                <PostList />
            </div>
        </ApolloProvider>
    );
}
