import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, TextField } from '@mui/material'
import { useRef } from 'react'
import { Form, Formik, type FormikProps } from 'formik'
import { captionValidationSchema } from '../features/captions/validation/captionValidation'
import { useSnackbar } from '../contexts/useSnackbar'
import { captionsService } from '../features/captions/services/caption.service'
import { Key, TextSnippet } from '@mui/icons-material'
import type { CaptionDialogProps } from '../types/caption'

const CaptionDialog = ({ open, caption, onClose, fetchCaptions }: CaptionDialogProps) => {
    
    const { showSnackbar } = useSnackbar()
    const formikRef = useRef<FormikProps<{ national: string; foreign: string }> | null>(null)
    
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth='sm'
            fullWidth
        >
            <DialogTitle>
                Edit Caption
            </DialogTitle>
            <DialogContent dividers>
                <Formik
                    initialValues={{ national: caption?.national ?? '', foreign: caption?.foreign ?? '' }}
                    validationSchema={captionValidationSchema}
                    enableReinitialize
                    innerRef={formikRef}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                            if(caption?._id) {
                                await captionsService.editWord(caption?._id, values)
                                showSnackbar('Caption update successfuly', 'success')
                                await fetchCaptions()
                                resetForm()
                                onClose()
                            }
                        } catch (error) {
                            showSnackbar('Faild to update caption', 'error')
                        } finally {
                            setSubmitting(false)
                        }
                    }}
                >
                    {({
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        values
                    }) => (
                        <Box component={Form}>
                            <TextField 
                                name='national'
                                label='Key'
                                variant='outlined'
                                fullWidth
                                margin='normal'
                                value={values.national}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.national && Boolean(errors.national)}
                                helperText={touched.national && errors.national}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Key />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <TextField 
                                name='foreign'
                                label='Value'
                                variant='outlined'
                                fullWidth
                                margin='normal'
                                value={values.foreign}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.foreign && Boolean(errors.foreign)}
                                helperText={touched.foreign && errors.foreign}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <TextSnippet />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Box>
                    )}
                </Formik>
            </DialogContent>
            <DialogActions>
                <Button
                    color='secondary'
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    color='primary'
                    variant='contained'
                    onClick={() => {
                        if(formikRef.current) {
                            formikRef.current?.handleSubmit()
                        }
                    }}
                    loading={formikRef?.current?.isSubmitting}
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CaptionDialog