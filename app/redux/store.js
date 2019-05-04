import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
	count: 0
};

export const actionTypes = {
	INCREMENT: 'INCREMENT',
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return Object.assign({}, state, {
				count: state.count + 1
			})
		default:
			return state
	}
}

// ACTIONS
export const incrementCount = () => {
	return { type: actionTypes.INCREMENT }
};

export function initializeStore (initialState = exampleInitialState) {
	return createStore(
		reducer,
		initialState,
		composeWithDevTools(applyMiddleware())
	)
}
