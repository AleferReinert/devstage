import * as dotenv from 'dotenv'
import { defineConfig } from 'orval'
import * as path from 'path'

dotenv.config({ path: path.resolve(__dirname, '.env') })

export default defineConfig({
	api: {
		input: `${process.env.API_URL}/docs/json`,
		output: {
			target: './src/http/api.ts',
			client: 'fetch',
			httpClient: 'fetch',
			clean: true,
			baseUrl: process.env.API_URL,
			override: {
				fetch: {
					includeHttpResponseReturnType: false
				}
			}
		}
	}
})
