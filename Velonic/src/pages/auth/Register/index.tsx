import { Button, Col, Row } from 'react-bootstrap'
import AuthLayout from '../AuthLayout'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useRegister from './useRegister'

// Components
import { VerticalForm, FormInput, PageBreadcrumb } from '@/components'

interface UserData {
	UserName: string
	UserEmail: string
	UserPassword: string
}
const BottomLink = () => {
	return (
		<Row>
			<Col xs={12} className="text-center">
				<p className="text-dark-emphasis">
					Already have account?{' '}
					<Link
						to="/auth/login"
						className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline"
					>
						<b>Log In</b>
					</Link>
				</p>
			</Col>
		</Row>
	)
}
const Register = () => {
	const { loading, register } = useRegister()

	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			UserName: yup.string().required('Please enter Fullname'),
			UserEmail: yup
				.string()
				.required('Please enter Email')
				.email('Please enter valid Email'),
			UserPassword: yup.string().required('Please enter UserPassword'),
		})
	)

	return (
		<>
			<PageBreadcrumb title="Register" />
			<AuthLayout
				authTitle="Free Sign Up"
				helpText="Enter your email address and UserPassword to access account."
				bottomLinks={<BottomLink />}
				hasThirdPartyLogin
			>
				<VerticalForm<UserData> onSubmit={register} resolver={schemaResolver}>
					<FormInput
						label="UserName"
						type="text"
						name="UserName"
						placeholder="Enter your UserName"
						containerClass="mb-3"
						required
					/>

					<FormInput
						label="Email address"
						type="text"
						name="UserEmail"
						placeholder="Enter your email"
						containerClass="mb-3"
						required
					/>

					<FormInput
						label="UserPassword"
						type="password"
						name="UserPassword"
						placeholder="Enter your UserPassword"
						containerClass="mb-3"
					/>
					<FormInput
						isTerms={true}
						type="checkbox"
						name="checkbox"
						containerClass={'mb-3'}
					/>
					<div className="mb-0 d-grid text-center">
						<Button
							variant="primary"
							disabled={loading}
							className="fw-semibold"
							type="submit"
						>
							Sign Up
						</Button>
					</div>
				</VerticalForm>
			</AuthLayout>
		</>
	)
}

export default Register
