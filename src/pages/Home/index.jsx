import React, { useContext } from 'react'
import FaucentCreateWallet from '../../components/FaucentCreateWallet'
import FaucentDescription from '../../components/FaucentDescription'
import FaucentTokens from '../../components/FaucentTokens'
import MainContainer from '../../containers/MainContainer'
import { FaucentContext } from '../../utils/context'

const Home = () => {
    const { 
        state: {
            isLoaded,
        } 
    } = useContext(FaucentContext)

    if (!isLoaded) {
        return (
            <MainContainer>
                <FaucentDescription/>
                <FaucentTokens/>
                <FaucentCreateWallet/>
            </MainContainer>
        )
    }

    return (
        <div></div>
    )
}

export default Home
