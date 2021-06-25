# Objective
An end to end application which demonstrates how we can implement authentication in an application using _Node.js_ and _JSON Web Tokens_ and some good practices.

# Project Context
Authentication is the primary requirement of any application (web/mobile). To start using an application today authentication is the first step we need to pass. It is the most important step in any application as it keeps the app secure by ensuring the users are verified. In this project, we will first implement the most basic form of authentication i.e. user-id and password based authentication. Whenever we log in to any application by giving our credentials (user-id & password) we are allowed to access the different pages of the application without us re-entering our credentials in each and every page.


Think this over - __If HTTP is a stateless protocol__ (i.e. every request to the server is independent of the previous request and server doesn't know anything about client) then how will the server know that the client is requesting for something is valid (i.e. authenticity of the user and the request)?


_Example - Let's say we are using Gmail. To access our emails via our Gmail account we need to give our credentials (email-id & password) to get past the security steps. Here what happens is that a request is sent to the server and since the request contains the credentials (in some form), the server can verify the authenticity of our request, and give us access to our Gmail accounts. But let's suppose we again type 'gmail.com' in the browser after sometime i.e. we are again sending a request to the server for our account access, and as before the server doesn't know anything about us. So, logically the server will ask you again for your credentials (i.e. email-id & password) but do we need to re-enter our credentials again? We don't. Server will give us the required access again this time too without us re-entering our credentials._


But how this is possible because the second time also the server doesn't know anything about the user. How did it give access to the Gmail account again without verifying who the user is?


In this project you will understand this by implementing the authentication system using _Node.js._ You will learn about different methods of authentication. Implement them, evaluate and identify their downsides and then look at ways to improve them.

## Project Stages
__We will build the following -__

Some APIs using Node.js. Specifically, some public and 1 private API.

Implement the entire Authentication in the backend.
See each version of your implementation in action by testing it on a pre-built frontend application.
