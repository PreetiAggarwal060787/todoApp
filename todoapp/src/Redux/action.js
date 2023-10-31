import { GET_ITEMS, REMOVE_ITEM, ADD_ITEM } from "./type";


export function getItems()
{
    return {
        type:GET_ITEMS
    }
}

export function deleteItem(id)
{
    return {
        type:REMOVE_ITEM,
        payload: id
    }
}

export function addItem(item)
{
    console.log("Inside start of additem Mentod");
    return {
        type: ADD_ITEM,
        payload: item
    }
}