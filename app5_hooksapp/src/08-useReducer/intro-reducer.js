// Esto es un ejemplo solo con funciones para ver como funciona el hook

const initialState = [ //Estado inicial
    {
        id:1,
        todo: 'Recolectar la piedra del Alma',
        done: false
    }
];

// Función pura que regresa un state
const toDoReducer = (state = initialState, action = {} /*Le dice al toDoReducer como quiero que cambie el estado*/) => {

    if (action.type == "[TODO] add todo") // Acción de añadir
        return [...state, action.payload]; // Se pasa el estado actual + el payload (lo que se quiere añadir)

    return state;
}


let toDos = toDoReducer(); // Asi devuelve el estado inicial

console.log(toDos);

const newToDo = {
        id:2,
        todo: 'Recolectar la piedra del Tiempo',
        done: false
}

const addToDoAction = {
    type: "[TODO] add todo", // El tipo es para ver la acción que queremos hacer
    payload: newToDo // Puede ser que no se necesite
}

toDos = toDoReducer(toDos, addToDoAction); // Añade el nuevo todo al estado inicial
console.log(toDos);