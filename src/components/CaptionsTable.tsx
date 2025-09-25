import React from 'react'
import type { Caption, CaptionsTableProps } from '../types/caption'
import { IconButton, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Delete, Edit, Favorite, ThumbDown } from '@mui/icons-material'

const CaptionsTable = ({ captionsData, loading, onDelete, onEdit } : CaptionsTableProps) => {

    return (
        <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto', marginTop: 5 }}>
            <Table aria-label='captions table'>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            key
                        </TableCell>
                        <TableCell>
                            Value
                        </TableCell>
                        <TableCell>
                            Favorite
                        </TableCell>
                        <TableCell>
                            Edit
                        </TableCell>
                        <TableCell>
                            Delete
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loading ? 
                        <TableRow>
                            <TableCell colSpan={5} align='center'>
                                <LinearProgress />
                            </TableCell>
                        </TableRow>
                        : captionsData?.length === 0 ?
                        <TableRow>
                            <TableCell colSpan={5} align='center'>
                                No caption found
                            </TableCell>
                        </TableRow>
                        :
                        captionsData?.map((caption: Caption) => (
                            <TableRow key={caption._id}>
                                <TableCell>
                                    {caption.national}
                                </TableCell>
                                <TableCell>
                                    {caption.foreign}
                                </TableCell>
                                <TableCell>
                                    {caption.isFavorite ? <Favorite color='error' /> : <ThumbDown color='primary' />}
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        color='inherit'
                                        aria-label='edit button'
                                        onClick={() => onEdit(caption)}
                                    > 
                                        <Edit />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        color='error'
                                        aria-label='delete button'
                                        onClick={() => onDelete(caption._id)}
                                    > 
                                        <Delete />
                                    </IconButton>
                                </TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CaptionsTable