interface Country {
    name: { common: string }
    independent: boolean
    currencies: {
        [key: string]: { name: string, symbol: string }
    }
    capital: string[]
    region: string
    languages: {
        [key: string]: string
    }
}

interface TableColumn {
    id: 'region' | 'name' | 'capital' | 'currency' | 'language'
    label: string
    minWidth?: number
    align?: 'right'
    format?: (value: number | string) => string
}

interface TableData {
    region: string
    name: string
    capital: string
    currency: string
    language: string
}

export type { Country, TableColumn, TableData }