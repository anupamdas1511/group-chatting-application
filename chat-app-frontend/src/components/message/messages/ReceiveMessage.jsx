import { Box, Stack, Typography } from '@mui/material'
import { blueGrey, cyan } from '@mui/material/colors'
import React from 'react'

const ReceiveMessage = ({ isGroup = false, name, content }) => {
  return (
    <Stack
        height='fit-content'
        width='fit-content'
        direction='column'
        sx={{
            padding: '5px 15px',
            margin: '20px 20px',
            backgroundColor: blueGrey[800],
            borderRadius: '0 15px 15px 15px'
        }}
    >
        <Typography
          fontWeight='bold'
          color={cyan[300]}
        >{isGroup && name}</Typography>
        <Typography>{content}</Typography>
    </Stack>
  )
}

export default ReceiveMessage