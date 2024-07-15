import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from "@apollo/client";

const client = new ApolloClient({
	uri: 'https://flyby-router-demo.herokuapp.com/',
	// uri: "https://paatee-api.onrender.com/graphql",
	cache: new InMemoryCache(),
});

// const client = ...

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));

// client
// 	.query({
// 		query: gql`
// 			query getAllUser {
// 				getAllUser {
// 					email
// 					firstName
// 					lastName
// 					role
// 				}
// 			}
// 		`,
// 	})
// 	.then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>

	<React.StrictMode>
		<App />
	</React.StrictMode>
  </ApolloProvider>
);
