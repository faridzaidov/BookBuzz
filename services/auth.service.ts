import { IAuthForm, IAuthResponse } from '@/types/auth.types'

import { axiosClassic } from '@/api/interceptors'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const authService = {
	async login( data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/account/login`,
			data
		)

		if (response.data.result.jwt) saveTokenStorage(response.data.result.jwt)

		return response
	},

}
