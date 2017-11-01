export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE'
};

// Helper functions to dispatch actions
export const actionCreators = {
    add: (item) => {
        return { type: types.ADD, payload: item };
    },
    remove: (index) => {
        return { type: types.REMOVE, payload: index };
    }
};

const initialState = {
    todos: ['Learn React Native', 'Write Code', 'Commit Changes']
};

export const reducer = (state = initialState, action) => {
    const { todos } = state;
    const { type, payload } = action;

    switch (action.type) {
        case types.ADD: {
            return {
                ...state,
                todos: [payload, ...todos]
            }
        }
        case types.REMOVE: {
            return {
                ...state,
                todos: todos.filter((todo, i) => i !== payload)
            };
        }
    }

    return state;
}