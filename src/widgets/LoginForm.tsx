import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { loginValidationSchema } from '../features/auth/validation/authValidation'
import { Typography, TextField, InputAdornment, IconButton, Button } from '@mui/material'
import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { useAuth } from '../features/auth/context/useAuth'

const LoginForm = () => {

    const { login } = useAuth()

    const [passwordVsible, setPasswordVisible] = useState(false)

    const handleClickShowPassword = () => setPasswordVisible((show: boolean) => !show)

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={async (values, { setSubmitting }) => {
                await login(values)
                setSubmitting(false)
            }}
        >
            {({
                isSubmitting,
                errors,
                touched,
                handleChange,
                handleBlur,
                values,
            }) => (
                <Form>
                    <Typography variant='h5' align='center' gutterBottom color='primary'>
                        Welcome 🙏
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
                                        aria-label='toggle password visibility'
                                        onClick={handleClickShowPassword}
                                        edge='end'
                                    >
                                        {passwordVsible ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        fullWidth
                        loading={isSubmitting}
                        sx={{
                            py: 2,
                            mt: 2
                        }}
                    >
                        Login
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm