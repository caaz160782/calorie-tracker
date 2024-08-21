import { createContext, ReactNode, Dispatch, useReducer } from 'react';
import {registerReducer,initalState,RegisterState,RegisterActions } from "../reducers/registerReducer";



type ActivityProviderProps ={
    children: ReactNode
}

type ActivityContextProps={
    state:RegisterState,
    dispatch:Dispatch<RegisterActions>,
}

export const ActivityContext = createContext<ActivityContextProps>({} as ActivityContextProps);

export const ActivityProvider =({children}:ActivityProviderProps ) =>{
    const [state,dispatch]=useReducer(registerReducer,initalState)
    return(
        <ActivityContext.Provider
           value={{
            state,
            dispatch
           }} 
        >
            {children}
        </ActivityContext.Provider>
    )
} 