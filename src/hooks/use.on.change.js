import React, { useContext } from 'react'
import { FaucentContext } from '../utils/context'

export const useOnChange = () => {
    const { state, setState } = useContext(FaucentContext)

    const changeHandler = (e) => {
        e.preventDefault()

        setState({
            ...state, [e.target.name]: e.target.value
        })
    }

    return {
        changeHandler
    }
}