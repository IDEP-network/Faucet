import axios from "axios"
import { useCallback, useContext } from "react"
import { FaucentContext } from "../utils/context"

export const useRequest = () => {
    const { state, setState } = useContext(FaucentContext)


    const request = async (query) => {
        const data = {accAddress: query}

        const res = await axios.post('https://api.idep.nework/createAcc', data)
        const content = await res
        
        setState({
            ...state, msg: content
        })
    }

    return {
        request
    }
}