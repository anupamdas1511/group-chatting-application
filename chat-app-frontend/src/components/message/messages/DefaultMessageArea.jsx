import { Box, Container } from '@mui/material'
import React from 'react'
import chatLogo from '../../../assets/chat.svg'

const DefaultMessageArea = () => {
  return (
    <Container
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box 
        sx={{
          width: '50%',
          height: '60%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={chatLogo} alt="" height={400}/>
      </Box>
    </Container>
  )
}

export default DefaultMessageArea