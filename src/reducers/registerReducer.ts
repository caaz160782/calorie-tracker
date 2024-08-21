import { Register } from "../types";

export type RegisterActions=
{type: 'save-activity', payload:{newRegister:Register }} |
{type: 'set-activityId', payload:{id:Register['id'] }} |
{type: 'delete-activityId', payload:{id:Register['id'] }} |
{type: 'restart-app'} 

export type RegisterState={
    registers: Register[],
    idRegister:Register['id']
}

const localStorageRegisters=():Register[] =>{
    const registers=localStorage.getItem('registers')
    return registers? JSON.parse(registers):[]
}

export const initalState: RegisterState={
 registers:localStorageRegisters(),
 idRegister:'',
}

export const registerReducer =(
    state: RegisterState =initalState, 
    action:RegisterActions
)=>{
    if(action.type === 'save-activity'){
        let updatedRegister: Register[]=[]
        if(state.idRegister){
            updatedRegister=state.registers.map(register =>register.id === state.idRegister ? action.payload.newRegister :register)  
        }else{
            updatedRegister=[...state.registers, action.payload.newRegister]
        }
        return {
            ...state,
            registers:updatedRegister,
            idRegister:''
        }
    }

    if(action.type === 'set-activityId'){
        return {
            ...state,
            idRegister: action.payload.id
        }
    }

    if(action.type === 'delete-activityId'){
        return {
            ...state,
            registers:state.registers.filter(register => register.id !== action.payload.id)
        }
    }

    if(action.type === 'restart-app'){
     return {
        registers: [],
        idRegister:''
     }
    }

    return state
}