import { authApi } from '@/common/api'
import { useAuthContext } from '@/common/context'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useRegister() {
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()

	const { isAuthenticated } = useAuthContext()

	const register = async ({
		UserName,
		UserEmail,
		UserPassword,
	}: {
		UserName: string
		UserEmail: string
		UserPassword: string
	}) => {
		setLoading(true)
		try {
			const { data } = await authApi.register({
				UserName,
				UserEmail,
				UserPassword: UserPassword,
			})
			if (data?.id) {
				navigate('/account/login')
			}
		} finally {
			setLoading(false)
		}
	}

	return { loading, register, isAuthenticated }
}
