import { createContext, type Dispatch } from "react";

const ComponentThemeContext = createContext({
    state: {},
    dispatch: (() => undefined) as Dispatch<any>,
})

export default ComponentThemeContext;