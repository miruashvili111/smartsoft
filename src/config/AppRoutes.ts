export const AppRoutes = {
    HOME: 'home',
    CAPTIONS: 'captions',
    COUNTRIES: 'countries',
    ERROR: 'error',
    NOT_FOUND: 'notFound'
} as const;

export type AppRoutes = typeof AppRoutes[keyof typeof AppRoutes];