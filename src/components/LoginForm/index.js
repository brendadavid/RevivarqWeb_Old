import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class LoginForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			isLoading: false,
			errors: {},
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
	}	

	onSubmit(e) {
		e.preventDefault()
		this.setState({
			isLoading: true
		})

		const { login } = this.props
		const { username, password } = this.state
		// call login service
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		const { username, password, isLoading, errors } = this.state
		
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Login</h1>
				<TextField 
					field="username"
					label="Usuário"
					onChange={this.onChange}
					error={errors.username}
					value={username}
				/>
				<br/>
				<TextField 
					field="password"
					label="Senha"
					onChange={this.onChange}
					value={password}
					error={errors.password}
					type="password"
				/>
				<br/>
				<Button
					type="submit"
					disabled={isLoading}
				/>
			</form>
		)
	}
}

export default LoginForm