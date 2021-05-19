import axios from 'axios'
import {aws4Interceptor} from 'aws4-axios'

import pkg from '../../package.json'

export interface ClientConfiguration {
	awsCredentials: {
		accessKeyId: string;
		secretAccessKey: string;
		sessionToken: string;
	};
	region: string;
	accessToken: string;
	userAgent?: string;
}

export function createAxiosInstance({
	accessToken,
	awsCredentials,
	/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */
	userAgent = `${pkg.name}/${pkg.version}`,
	region
}: ClientConfiguration) {
	const instance = axios.create({
		headers: {
			'x-amz-access-token': accessToken,
			'user-agent': userAgent
		}
	})

	instance.interceptors.request.use(aws4Interceptor(
		{
			region,
			service: 'execute-api'
		},
		{
			accessKeyId: awsCredentials.accessKeyId,
			secretAccessKey: awsCredentials.secretAccessKey,
			sessionToken: awsCredentials.sessionToken
		}
	))

	return instance
}
