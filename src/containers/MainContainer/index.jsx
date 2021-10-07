import React from 'react'
import Header from '../../components/Header'
import Modal from '../../components/Modal'

const MainContainer = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Modal/>
        </>
    )
}

export default MainContainer
