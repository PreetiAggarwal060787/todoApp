import {createStore} from "redux";
import reducer from "./reducer";
export const initialState = {
    todoList: [
        {
            id: '1', 
            item: 'Java Meeting'
        },
        {
            id: '2', 
            item: 'Dotnet Meeting'
        },
        {
            id: '3', 
            item: 'Mean Meeting'
        }
    ]
}

const store = createStore(reducer, initialState);
export default store;