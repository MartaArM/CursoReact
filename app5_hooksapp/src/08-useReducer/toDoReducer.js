export const toDoReducer = (initialState, action) => {

    switch (action.type) {
        case 'Add Todo':
            return [ //Devuelvo el estado inicial + el estado nuevo
                ...initialState,
                action.payload
            ]
        case 'Remove Todo':
            return initialState.filter( (todo) => todo.id != action.payload);
        case 'Done Todo':
            return initialState.map( (todo) => {
                if (todo.id==action.payload) {
                    return {
                        ...todo,
                        done: !(todo.done)
                    }
                }

                return todo;
            })            
            //return initialState.filter( (todo) => todo.id != action.payload);
        default:
            return initialState;
    }



}