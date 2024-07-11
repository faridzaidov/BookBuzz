import Cookies from 'js-cookie'

export enum EnumTokens {
    'ACCESS_TOKEN' = 'accessToken',
}

export const getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
    return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
        domain: 'localhost',
        sameSite: 'strict',
        expires: 10,
    })
}

export const removeFromStorage = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
