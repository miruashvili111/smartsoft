import * as Yup from 'yup'

const captionValidationSchema = Yup.object({
    national: Yup.string().min(3, 'Key is required').required('Key must be at least 3 characters'),
    foreign: Yup.string().min(2, 'Property must be at least 2 characters').required('Property is required')
})

export { captionValidationSchema }