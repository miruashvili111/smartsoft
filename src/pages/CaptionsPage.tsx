import { useEffect, useState } from 'react'
import { captionsService } from '../features/captions/services/caption.service'
import { type Caption } from '../types/caption'
import { useSnackbar } from '../contexts/useSnackbar'
import { Box, Typography } from '@mui/material'
import CaptionsForm from '../widgets/CaptionsForm'
import CaptionsTable from '../components/CaptionsTable'
import CaptionDialog from '../components/CaptionDialog'

const CaptionsPage = () => {

    const { showSnackbar } = useSnackbar()

    const [captions, setCaptions] = useState<Caption[]>([])
    const [loading, setLoading] = useState(false)
    const [editCaption, setEditCaption] = useState<Caption | null>(null)
    const [editDialogOpen, setEditDialogOpen] = useState(false)

    const fetchCaptions = async () => {
        setLoading(true)
        try {
            const data = await captionsService.getAllWords()
            setCaptions(data)
        } catch (error) {
            showSnackbar('Faild fetch captions', 'error')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await captionsService.deleteWord(id)
            await fetchCaptions()
            showSnackbar('Caption delete successfuly', 'success')
        } catch (error) {
            showSnackbar('Faild delete caption', 'success')
        }
    }

    const handleOpenEditDialog = (caption: Caption) => {
        setEditCaption(caption)
        setEditDialogOpen(true)
    }

    const handleCloseEditDialog = () => {
        setEditCaption(null)
        setEditDialogOpen(false)
    }

    useEffect(() => {
        fetchCaptions()
    }, [])

    return (
        <Box
            sx={{
                minHeight: 'calc(100vh - 64px)',
                maxWidth: 1920,
                mx: 'auto',
                p: {
                    xs: 4, sm: 4
                }
            }}
        >
            <Typography variant='h4' sx={{ mb: 1 }} color='textPrimary'>
                Captions Page
            </Typography>
            
            <CaptionsForm 
                fetchCaptions={fetchCaptions}
            />

            <CaptionsTable 
                captionsData={captions}
                loading={loading}
                onDelete={handleDelete}
                onEdit={handleOpenEditDialog}
            />

            <CaptionDialog 
                open={editDialogOpen}
                caption={editCaption}
                fetchCaptions={fetchCaptions}
                onClose={handleCloseEditDialog}

            />
        </Box>
    )
}

export default CaptionsPage