declare namespace NodeJS {
	interface ProcessEnv {
		DATABASE_URL: string
		GOOGLE_CLIENT_ID: string
		GOOGLE_CLIENT_SECRET: string
		STRIP_SECRETE_KEY: string
		NEXT_PUBLIC_STRIP_KEY: string
		STRIPWBHOOK_SECRET_KEY: string
		HOST_URL: string
	}
}
