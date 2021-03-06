# Getting started with React-Redux


1. git clone https://github.com/chinmaymahajan/React-Redux.git
2. cd React-Redux
3. npm install
4. npm start
5. open http://localhost:3000/


Visit other branch for 

Props - https://github.com/chinmaymahajan/React-Redux/tree/Props

Actions/Reducers - https://github.com/chinmaymahajan/React-Redux/tree/Redux

Multiple Reducers - https://github.com/chinmaymahajan/React-Redux/tree/multiple-reducers



### Reudx Workflow
![picture alt](https://github.com/chinmaymahajan/React-Redux/blob/Redux/Redux%20architecture.png "Redux Workflow")

### Store
Store comprises of all view states in just one big javascript object, It is immutable. We can have only one store in a Redux application.
Our component 
Syntax:
```
import {createStore} from "redux";
 
const store = createStore(reducer,initialState);
/*initialState argument is optional*/
```
#### subscribe(listener)
It gets called whenever the action is dispatched and we can get the state by using the function getState().
Components can subscribe to the store.
```
store.subscribe(() => {
console.log("Current state ",store.getState());
});
```

### Reducer
Reducer listens for the actions and based upon the actions manipulates the old state and gives back new state,
if the state is immutable we can make a copy of old state and makes changes in the new state and return the new state.
```
const reducer = (state, action) => { 
/*The functions takes state and action as an argument */
/* We can use if else if else or any other mechanism to handle multiple actions */
	switch (action.type){ 
		case "ACTION1":
		/* Manipulating the state */
			break;
		case "ACTION2":
		/* Manipulating the state */
			break;
	}
	return state;
}
```

### Actions
Actions are nothing but a user generated event, Actions are the source of information for the store.
We can dispatch an action using the dispatch function,
Syntax:
```
store.dispatch({
type: "ACTION1",
payload:"some data" /* We can use value instead of payload here */
});
```

### Sample code
In the example below, we are just adding the number twice and subtracting it once,
i.e. we are dispatching ADD action twice and SUBTRACT action once. 

10 + 1 = 11 

11+ 20 = 31 

31 - 10 = 21

Here is the code https://github.com/chinmaymahajan/React-Redux/blob/Redux/App/index.js

Output: 

![picture alt](https://github.com/chinmaymahajan/React-Redux/blob/Redux/Screen%20Shot%202017-06-29%20at%2011.23.01%20PM.png "Output")

### Wrapping Up
We can have one store and multiple reducers.
We tell the store who is responsible for changing the state, then we dispatch and action which is handled by reducer.
We execute code to manipulate the state and then we return the state.The state is then passed to the subscribers.


