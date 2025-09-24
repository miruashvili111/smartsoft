import * as Yup from 'yup'

const loginValidationSchema = Yup.object({
    username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
        .required('Password is required'),
})

const registerValidationSchema = Yup.object({
    username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
        .required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
})

export { loginValidationSchema, registerValidationSchema }