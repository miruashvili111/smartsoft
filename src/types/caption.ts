
interface AddCaptionPayload {
    national: string
    foreign: string
}

interface Caption {
    _id: string
    isFavorite: string
    national: string
    foreign: string
    inSentences: []
}

interface GetAllWordsResponse {
    words: Caption[]
}

interface CaptionsTableProps {
    captionsData: Caption[]
    loading: boolean
    onDelete: (id: string) => void
    onEdit: (caption: Caption) => void
}

interface CaptionDialogProps {
    open: boolean
    caption: Caption | null
    onClose: () => void
    fetchCaptions: () => Promise<void>
}

interface CaptionsFormProps {
    fetchCaptions: () => Promise<void>
}

export type { 
    AddCaptionPayload, 
    GetAllWordsResponse, 
    Caption, 
    CaptionDialogProps, 
    CaptionsTableProps,
    CaptionsFormProps
}