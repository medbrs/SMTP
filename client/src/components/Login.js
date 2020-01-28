import React, { Component } from 'react';
import Nav from './Nav'
import Loader from 'react-loader-spinner';
import uuid from 'uuid'
import { connect } from 'react-redux'
import { setAlert, removeAlert } from '../actions/AlertActions'
import Alerts from './Alerts';
import { login, clearError } from '../actions/AuthActions'





class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			email: '',
			password: ''

		}
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loading: false
			})
		}, 1000)
	}
	handleChage = e => {
		this.setState({ [e.target.name]: e.target.value })
	}


	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/')
		}
		if (nextProps.auth.error === 'Please Register Before!' || nextProps.auth.error === 'Wrong Password') {
			let id = uuid()
			this.props.setAlert(nextProps.auth.error, 'danger', id)
			setTimeout(() => {
				this.props.removeAlert(id)
				this.props.clearError(id)
			},3000)
		}

	}


	LoginNow = () => {

		if (this.state.email === '' || this.state.password === '') {
			let id = uuid()
			this.props.setAlert('Please Enter Your Credentials Before...', 'danger', id)
			setTimeout(() => {
				this.props.removeAlert(id)
			}, 5000)
		} else {
			this.props.login({
				email: this.state.email,
				password: this.state.password
			})
			
		}
	}

	render() {
		return (


			<div class="limiter">
				
				{
					
					this.state.loading ? <Loader type="MutatingDots" className='spinner' color="#6775e0" height={80} width={80} /> : <div>
						<Nav />
						<div class="container-login100">
							<div class="wrap-login100">
								<div class="login100-form validate-form">
									<span class="login100-form-title p-b-43">
										<img src='https://cdn2.iconfinder.com/data/icons/business-finance-113/64/bitcoin-chat_group_strategy_message_crypto-512.png' height='70px' />

									</span>


									<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
										<input class="input100" type="text" onChange={this.handleChage} name="email" placeholder='Email' />
										<span class="focus-input100"></span>

									</div>


									<div class="wrap-input100 validate-input" data-validate="Password is required">
										<input class="input100" type="password" onChange={this.handleChage} name="password" placeholder='Password' />
										<span class="focus-input100"></span>

									</div>

									<div class="flex-sb-m w-full p-t-3 p-b-32">
										<div class="contact100-form-checkbox">
											<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
											<label class="label-checkbox100" for="ckb1">
												Remember me
							</label>
										</div>
									</div>


									<div class="container-login100-form-btn">
										<button onClick={this.LoginNow} class="login100-form-btn">
											Login
										</button>

									</div>
									<br />
									<Alerts />
								</div>


								<div className="login100-more log">
								</div>
							</div>

						</div>
					</div>
				}


			</div>


		);
	}
}


const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}
export default connect(mapStateToProps, { setAlert, removeAlert, login, clearError })(Login);



