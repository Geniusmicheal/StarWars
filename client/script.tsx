import './asset/css/index.css';
import * as React from 'react'
import Routes from './routes';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:7000/graphql",
  });

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<ApolloProvider client={client}>
    <BrowserRouter><Routes/></BrowserRouter>
</ApolloProvider> );

