import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from './routerConfig'
import Loading from '../widgets/Loading'

const AppRouter = () => {
    return (
        <Routes>
            {routerConfig.map(({ path, children, element }) => (
                <Route
                    key={path ?? 'root'}
                    path={path}
                    element={
                        <Suspense fallback={<Loading />}>
                            {element}
                        </Suspense>
                    }
                >
                    {children?.map((chaild) => (
                        <Route 
                            key={chaild.path}
                            path={chaild.path}
                            element={
                                <Suspense fallback={<Loading />}>
                                    {chaild.element}
                                </Suspense>
                            }
                        />
                    ))}
                </Route>
            ))}
        </Routes>
    )
}

export default AppRouter