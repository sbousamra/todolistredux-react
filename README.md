# Bass's Twitter Clone

## Goals

This project is aimed as a follow up to trelloclone, to further my learnings of designing a webapp. The difference in this app, is that I will be using redux for state management instead of the inbuilt react state management and a database to store my data rather than as a var on the server.

Along with using redux, I will be using libraries that 'add-on' to redux to give some added functionality that will come in handy. An example of this, is react-router-redux. This links my 'react-router' routing, to my redux 'store' so that my 'store' knows about my routes. Other libraries I will be using can be seen in package.json.

## Design

### Server side

Similiar to trelloclone, we used nodejs to run our server side file, that handles our routes and requests to these routes from a user. Incoming requests from the user that require data to be sent back as response, will generally make SQL queries to the database, which will pull this data and then potentially send it back to the user, if their request returns a 200.

### Client side

Since I am using redux now instead of just react's local state management, all state is stored in the 'store' at the highest level. We can change state in the 'store' with 'actions'. These actions must all have a 'type' and are 'dispatched'. When an action is dispatched, it is handled by a 'reducer', that is a function that chooses how to handle the 'action' and how we want to change the store's state. 

The other main component (no pun intended) we have to our app, is containers. These are similiar to just regular react components, with the only main difference being that we call these functions called 'mapStateToProps' and 'mapDispatchToProps'. These functions are accessible by importing 'connect' from react-redux, and allow us access to the 'dispatch' method. This allows us to bind our functions to dispatching the action that we want, which in turn alters the state as we please.



