import { createContext, useState } from "react";

export const theme=createContext({
    current:"",
    setcurrtheme:()=>{}
})
function ThemeContext({children}){
    const [currtheme,setcurrtheme]=useState("light");
    return(<theme.Provider value={{current:currtheme,setcurrtheme:setcurrtheme}}>
        {children}
    </theme.Provider>)
}

export default ThemeContext;