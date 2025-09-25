import * as React from 'react'
import ErrorPage from '../pages/ErrorPage'

interface ErrorBoundaryProps {
    children: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }
    
    componentDidCatch() {
        
    }

    render() {
        if(this.state.hasError) {
            return <ErrorPage />
        }

        return this.props.children
    }
}