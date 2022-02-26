# Book Search Engine

MERN application to search Google for books. Users are able to sign up, log in, and save books to their profile. Uses MongoDB, ExpressJS, React, Node.js and Apollo.

![Screenshot](https://github.com/davezer/bookSearchEngine/blob/main/assets/booksearch.jpg?raw=true)

## Table of Contents

* [Setup](#setup)
* [Usage](#usage)
* [Deployment](#deployment)
* [Contributing](#contributing)


## Setup

Uses the following tools in this repository:

- [React](https://reactjs.org/)
  - Open-source, declarative, component-based JavaScript library for building user interfaces. It’s maintained by Facebook, and it can be used to develop of single-page applications (SPA).
- [GraphQL](https://graphql.org/)
  - GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
  - Open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. Uses apollo-server-express package to integrate GraphQL into Express.js server, and the @apollo/client package to make requests from React front end to the GraphQL API.
- [Apollo Client](https://www.apollographql.com/docs/react/)
  - All-in-one dependency that enables connection to a GraphQL API server and execute queries or mutations using their own special form of React Hooks.
- [concurrently](https://graphql.org/)
  - Runs multiple processes, or servers, from a single command-line interface, rather than opening multiple terminals to start multiple servers. Tracks multiple outputs in one place and will stop all processes if one fails.
- [jsonwebtoken](https://graphql.org/)
  - JSON Web Tokens, or JWTs, are an alternative to using session cookies for authentication.
- [jwt-decode](https://graphql.org/)
  - Helps decode JWTs from their Base64Url encoding. Extracts non-sensitive data such as token's expiration date to see if it's expired before making a request to the server.

Repository splits into `client` and `server` sections to handle different parts of the development mode.

## Usage

If the repository was cloned, run the files with `npm install` and start the server with `npm run develop`.

## Deployment


[Deployed Link](https://secure-bayou-18374.herokuapp.com/saved)

## Contributing


[davezer](https://github.com/davezer)
