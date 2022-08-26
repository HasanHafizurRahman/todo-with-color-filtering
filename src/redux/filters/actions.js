import { COLORCHANGED, STATUSCHANGED } from './actionTypes';

export const colorchanged = (color, changType) =>{
    return {
        type: COLORCHANGED,
        payload: {
            color,
            changType
        }
    }
}

export const statuschanged = (status) =>{
    return {
        type: STATUSCHANGED,
        payload: status
    }
}