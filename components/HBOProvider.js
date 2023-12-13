import React,{useContext, useState} from "react";

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function HBOProvider({children}){
    const [user,setUser] = useState('');
    const defaultUserImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7ExHtiKhVddHOQW9Qki1wk4dC_ZbA3SJLQ&usqp=CAU'
    const createUserAction = (e) => {
        setUser(e.target.value)
        // console.log(user)
    }
    return (
        <StateContext.Provider
        value={{
            user,
            createUserAction,
            defaultUserImg
        }}
        >
            {children}
        </StateContext.Provider>
    )
}