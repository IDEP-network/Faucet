import { createContext, useState } from "react";

export const FaucentContext = createContext()

const initialState = {
    msg: {},
    res: '',
    isVerified: false,
    account: true,
    info: '',
    account_number: '',
    mnemonic: '',
    name: '',
    pubkey: '',
    show: false
}

export const FaucentContextProvider = (props) => {
    const [state, setState] = useState(initialState)
    const [modal, setModal] = useState(false)

    return <FaucentContext.Provider {...props} value={{
        state,
        modal,
        setState,
        setModal
    }} />
}