import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { registerValidationSchema } from '../features/validation/authValidation'
import { Typography, TextField, InputAdornment, IconButton, Button } from '@mui/material'
import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material'

const RegisterForm = () => {

    const [passwordVsible, setPasswordVisible] = useState(false)

    const handleClickShowPassword = () => setPasswordVisible((show: boolean) => !show)

    return (
        <Formik
            initialValues={{ username: '', password: '', confirmPassword: '' }}
            validationSchema={registerValidationSchema}
            onSubmit={( values, { setSubmitting } ) => {
                console.log(values)
                setSubmitting(false)
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
                <Form>
                    <Typography variant='h5' align='center' gutterBottom color='primary'>
                        Create Account
                    </Typography>
                    <TextField 
                        name='username'
                        label='Username'
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.username && Boolean(errors.username)}
                        helperText={touched.username && errors.username}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <AccountCircle sx={{ color: 'text.secondary' }} />
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField 
                        name='password'
                        label='Password'
                        variant='outlined'
                        type={passwordVsible ? 'text' : 'password'}
                        fullWidth
                        margin='normal'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Lock sx={{ color: 'text.secondary' }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        edge='end'
                                    >
                                        {passwordVsible ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField 
                        name='confirmPassword'
                        label='Confirm Password'
                        variant='outlined'
                        type={passwordVsible ? 'text' : 'password'}
                        fullWidth
                        margin='normal'
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Lock sx={{ color: 'text.secondary' }} />
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        fullWidth
                        disabled={isSubmitting}
                        sx={{
                            py: 2,
                            mt: 2
                        }}
                    >
                        Register
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm