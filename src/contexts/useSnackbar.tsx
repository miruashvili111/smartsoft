import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { Snackbar } from '@mui/material'
import Alert from '@mui/material/Alert'
import type { snackVariant } from '../types/snackbar'

interface SnackbarContextType {
    showSnackbar: (mesg: string, variant: snackVariant) => void
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined)

const SnackbarProvider = ({ children } : { children: ReactNode }) => {

    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [variant, setVariant] = useState<snackVariant>('info')

    const showSnackbar = (mesg: string, variant: snackVariant) => {
        setMessage(mesg)
        setVariant(variant)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity={variant} variant='filled' sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    )
}

const useSnackbar = () => {
    const context = useContext(SnackbarContext)
    if(!context) {
        throw new Error('useSnackbar use inside SnackbarProvider')
    }

    return context
}

export { SnackbarProvider, useSnackbar }