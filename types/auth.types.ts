export interface IAuthForm {
	email: string
	password: string
}



export interface IAuthResponse {
	isError: boolean;
	errorMessage: string | null;
	result: LoginResult | null;
}

interface LoginResult {
	jwt: string;
}



