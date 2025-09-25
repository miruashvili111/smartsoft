import axios from 'axios'
import type { Country } from '../../../types/countries'

const countriesService = {

    async getAllContries(): Promise<Country[]> {
        const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all?fields=name,currencies,independent,languages,capital,region')
        return response?.data
    },

    async getIndipendetContries(): Promise<Country[]> {
        const response = await axios.get<Country[]>('https://restcountries.com/v3.1/independent?status=true&fields=name,currencies,independent,languages,capital,region')
        return response?.data
    },

    async getContriesCurrency(currency: 'USD' | 'EUR'): Promise<Country[]> {
        const response = await axios.get<Country[]>(`https://restcountries.com/v3.1/currency/${currency}?fields=name,currencies,independent,languages,capital,region`)
        return response?.data
    },
}

export { countriesService }