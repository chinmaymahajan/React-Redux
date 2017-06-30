import {createStore, combineReducers} from "redux";

const initialState = {
	payload:0
};
 const initialState2 = {
 	value: "ABC"
 };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "CONTACT":
		state = state.payload = action.payload;
		 	break;
	}
	return state;
};

const reducer2 = (state = initialState,action) => {
	switch(action.type) {
		case "DETAILS" :
		state = state.value = action.value;
		break;
	}
	return state;
};

const main = combineReducers({reducer, reducer2});

const store = createStore(main);

store.subscribe(() => {
	console.log("Store is Updated", store.getState());
});

store.dispatch({
	type: "CONTACT",
	payload: 110
});

store.dispatch({
	type:"DETAILS",
	value: "Hello World"
});
