import { ApolloClient, InMemoryCache } from '@apollo/client';

const MyApolloClient = new ApolloClient({
    uri: 'http://127.0.0.1:8080/v1/graphql/',
    cache: new InMemoryCache()
});


export default MyApolloClient