import Lottie from 'lottie-react'
import LoadingAnimation from '../assets/loading.json'
import { Box } from '@mui/material'

const Loading = () => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '90vh'
        }}>
            <Lottie 
                animationData={LoadingAnimation}
                width={200}
                height={100}
            />
        </Box>
    )
}

export default Loading