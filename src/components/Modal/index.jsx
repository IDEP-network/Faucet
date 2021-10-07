import React, { useContext } from 'react'
import { withTheme } from 'styled-components'
import { FaucentContext } from '../../utils/context'
import { Button } from '../Button'
import { Flex } from '../Flex'
import { Typography } from '../Typography'
import { ModalWrapper } from './styled'

const Modal = ({theme}) => {
    const {
        state: {
            info,
            name,
            account_number,
            mnemonic,
            pubkey
        },
        modal,
        setModal
    } = useContext(FaucentContext)

    return (
        <ModalWrapper modal={modal} >
            <Flex 
                $width="50%" 
                $height="40%"
                $direction="column"
                $justify="space-between"
                $padding="1em 2.5em"
                $bcg={theme.colors.white}
                $radius="10px"
            >
                <Flex 
                    $alignItems="center"
                    $flex="1"
                    $padding="2em 0"
                >
                    <Typography
                        variant="span"
                        $size={theme.fontSizes.large}
                    >Information: {info}</Typography>
                </Flex>
                <Flex
                    $direction="column"
                    $justify="space-between"
                >
                    <Typography>
                        Name: {name}
                    </Typography>
                    <Typography>
                        Account Address: {account_number}
                    </Typography>
                    <Typography>
                        Mnemonic: {mnemonic}
                    </Typography>
                    <Typography>
                        Pubkey: {pubkey}
                    </Typography>
                    <Button onClick={() => setModal(false)} >
                        Close
                    </Button>
                </Flex>
            </Flex>
        </ModalWrapper>
    )
}

export default withTheme(Modal)
