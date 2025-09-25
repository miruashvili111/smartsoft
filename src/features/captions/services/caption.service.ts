import type { AddCaptionPayload, Caption, GetAllWordsResponse } from "../../../types/caption";
import axios from '../../../utils/axios'

const captionsService = {

    async getAllWords(): Promise<Caption[]> {
        const response = await axios.get<GetAllWordsResponse>('api/client/getAllWords')
        return response?.data?.words
    },

    async addWords(payload: AddCaptionPayload): Promise<Caption[]> {
        const response = await axios.post<GetAllWordsResponse>('api/client/addWord', payload)
        return response?.data?.words
    },

    async editWord(id: string, payload: AddCaptionPayload): Promise<Caption[]> {
        const response = await axios.put<GetAllWordsResponse>(`api/client/editWord/${id}`, payload)
        return response?.data?.words
    },

    async deleteWord(id: string): Promise<void> {
        await axios.delete(`/api/client/deleteWord/${id}`)
    }
}

export { captionsService }