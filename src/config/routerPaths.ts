import { AppRoutes } from "./AppRoutes";


export const routerPaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.CAPTIONS]: '/captions',
    [AppRoutes.ERROR]: '/error',
    [AppRoutes.NOT_FOUND]: '*'
}