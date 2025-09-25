import { Form, Formik } from 'formik'
import React from 'react'
import { captionValidationSchema } from '../features/captions/validation/captionValidation'
import { Box, Button, Grid, InputAdornment, TextField } from '@mui/material'
import { captionsService } from '../features/captions/services/caption.service'
import { useSnackbar } from '../contexts/useSnackbar'
import { Key, TextSnippet } from '@mui/icons-material'
import type { CaptionsFormProps } from '../types/caption'


const CaptionsForm = ({ fetchCaptions }: CaptionsFormProps) => {

    const { showSnackbar } = useSnackbar()

    return (
        <Formik
            initialValues={{ national: '', foreign: '' }}
            validationSchema={captionValidationSchema}
            enableReinitialize
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                    await captionsService.addWords(values)
                    showSnackbar('Caption added successfuly', 'success')
                    resetForm()
                    fetchCaptions()
                } catch (error) {
                    showSnackbar('Faild to add caption', 'error')
                } finally {
                    setSubmitting(false)
                }
            }}
        >
            {({
                isSubmitting,
                errors,
                touched,
                handleChange,
                handleBlur,
                values
            }) => (
                <Box component={Form} sx={{ marginTop: 5 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <TextField 
                                name='national'
                                label='Key'
                                variant='outlined'
                                fullWidth
                                value={values.national}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.national && Boolean(errors.national)}
                                helperText={touched.national && errors.national}
                                size='small'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Key />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <TextField 
                                name='foreign'
                                label='Value'
                                variant='outlined'
                                fullWidth
                                value={values.foreign}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.foreign && Boolean(errors.foreign)}
                                helperText={touched.foreign && errors.foreign}
                                size='small'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <TextSnippet />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                loading={isSubmitting}
                            >
                                Add Caption
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Formik>
    )
}

export default CaptionsForm