import { initialState } from "./store";
import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM } from "./type";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS: {
            return state;
        }
        case REMOVE_ITEM: {
            return {
                ...state, todoList: state.todoList.filter(todoItem => todoItem.id !== action.payload)
            }
        }
        case ADD_ITEM: {
            console.log("Test");
            return {
                
                ...state, 
                todoList: [...state.todoList, action.payload]
            }
        }
    }
}