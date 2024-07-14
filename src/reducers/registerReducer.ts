import { Register } from "../types";

export type RegisterActions=
{type: 'save-activity', payload:{newRegister:Register }}

type RegisterState={
    registers: Register[]
}

export const initalState: RegisterState={
 registers:[]
}

export const registerReducer =(
    state: RegisterState =initalState, 
    action:RegisterActions
)=>{
    if(action.type === 'save-activity'){
        return {
            ...state,
            registers:[...state.registers, action.payload.newRegister]
        }
    }

    return state
}