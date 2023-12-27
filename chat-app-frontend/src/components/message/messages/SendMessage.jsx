import { Stack, Typography } from '@mui/material'
import { blueGrey, lightBlue, lightGreen, lime, teal } from '@mui/material/colors'
import React from 'react'

const SendMessage = ({ isGroup = false, name, content }) => {
  return (
    <Stack
        height='fit-content'
        width='fit-content'
        direction='column'
        alignSelf='flex-end'
        sx={{
            padding: '5px 15px',
            margin: '20px 20px',
            backgroundColor: teal[800],
            borderRadius: '15px 0 15px 15px'
        }}
    >
        <Typography
            fontWeight='bold'
            color={lime[400]}
        
        >{isGroup && name}</Typography>
        <Typography>{content}</Typography>
    </Stack>
  )
}

export default SendMessage