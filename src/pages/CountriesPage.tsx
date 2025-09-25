import { useEffect, useMemo, useState, type ChangeEvent } from 'react'
import type { Country, TableColumn, TableData } from '../types/countries'
import { countriesService } from '../features/countries/services/countries.service'
import { Box, Checkbox, Grid, LinearProgress, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from '@mui/material'
import { useSnackbar } from '../contexts/useSnackbar'

const columns: TableColumn[] = [
    { id: 'region', label: 'Region' },
    { id: 'name', label: 'Country' },
    { id: 'capital', label: 'Capital' },
    { id: 'currency', label: 'Currency' },
    { id: 'language', label: 'Language' },
]

const createTableData = (country: Country): TableData => ({
    region: country.region || 'No',
    name: country.name.common || 'No',
    capital: country.capital[0] || 'NO',
    currency: Object.keys(country.currencies).join(', '),
    language: Object.values(country.languages).join(', ')
})

const CountriesPage = () => {

    const { showSnackbar } = useSnackbar()

    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState<Country[]>([])
    const [isIndependent, setIsIndependent] = useState(false)
    const [selectedCurrency, setSelectedCurrency] = useState('ALL')
    const [page, setPage] = useState(0)
    const [rowsPage, setRowsPage] = useState(15)

    const contriesMemo = useMemo(() => {
        if (selectedCurrency === 'USD' || selectedCurrency === 'EUR') {
            return countriesService.getContriesCurrency(selectedCurrency as 'USD' | 'EUR')
        }
        return isIndependent ? countriesService.getIndipendetContries() : countriesService.getAllContries()
    }, [isIndependent, selectedCurrency])

    useEffect(() => {
        setLoading(true)
        contriesMemo.then(data => {
            setCountries(data)
            setLoading(false)
        }).catch(error => {
            showSnackbar('Faild get contries', 'error')
            setCountries([])
            setLoading(false)
            console.log(error)
        })
    }, [contriesMemo])

    const handleChangeCurrency = (value: string) => {
        setSelectedCurrency(value)
        if(value !== 'ALL' && isIndependent) {
            setIsIndependent(false)
        }
        setPage(0)
    }

    const filterCountries = selectedCurrency !== 'ALL' ? countries?.filter(contry => !isIndependent || contry.independent) : countries

    const tableData = filterCountries?.map(createTableData)

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRow = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPage(+event.target.value)
        setPage(0)
    }

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
                Contries Page
            </Typography>

            <Box sx={{ marginTop: 5 }}>
                <Grid container spacing={2} alignItems='center'>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Checkbox checked={isIndependent} onChange={(e) => setIsIndependent(e.target.checked)} />
                        <Typography variant='h6' color='textPrimary'>
                            Independent
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <TextField
                            select
                            fullWidth
                            label='Currency'
                            value={selectedCurrency}
                            onChange={(e) => handleChangeCurrency(e.target.value)}
                        >
                            <MenuItem value='ALL'>
                                ALL
                            </MenuItem>
                            <MenuItem value='USD'>
                                USD
                            </MenuItem>
                            <MenuItem value='EUR'>
                                EUR
                            </MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
            </Box>
            <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto', marginTop: 5 }}>
                <Table aria-label='contries-table'>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading && <TableRow><TableCell colSpan={5}><LinearProgress /></TableCell></TableRow>}
                        {tableData?.slice(page * rowsPage, page * rowsPage + rowsPage).map((row, i) => (
                            <TableRow key={i}>
                                {columns.map((column) => {
                                    const value = row[column.id]
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[15, 25, 50, 100]}
                component='div'
                count={tableData?.length}
                rowsPerPage={rowsPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRow}
            />
        </Box>
    )
}

export default CountriesPage