
import {ApolloProvider} from "@apollo/client";

import { useRouter } from 'next/router'

import MyApolloClient from "../../lib/MyApolloClient";
import User from "../../components/User";

//Simple User rendering page
export default function user(){
    const router = useRouter()
    const { uid } = router.query
    return (
        <ApolloProvider client={MyApolloClient}>
            <User uid={uid}/>
        </ApolloProvider>
    )
}
