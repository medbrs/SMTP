import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Nav from './Nav'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { setAlert, removeAlert } from '../actions/AlertActions'
import { register, clearError } from '../actions/AuthActions'
import Alerts from './Alerts';



class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            firstname: '',
            lastname: '',
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

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })

    }
    handleRegister = () => {

        if (this.state.firstname === '' || this.state.lastname === '' || this.state.email === '' || this.state.password == '') {
            let id = uuid()
            this.props.setAlert('All fields are required', 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                
            }, 3000)
        } else {
            this.props.register({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
            })
        }
    }
   
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/')
        }
        if (nextProps.auth.error === 'Email Already Exists...') {
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError(id)
            }, 3000)
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


                                    <div class="wrap-input100 validate-input" >
                                        <input class="input100" type="text" onChange={this.handleChange} name="firstname" placeholder='First Name' />
                                        <span class="focus-input100"></span>

                                    </div>


                                    <div class="wrap-input100 validate-input" >
                                        <input class="input100" type="text" onChange={this.handleChange} name="lastname" placeholder='Last Name' />
                                        <span class="focus-input100"></span>

                                    </div>
                                    <div class="wrap-input100 validate-input">
                                        <input class="input100" type="text" onChange={this.handleChange} name="email" placeholder='Email' />
                                        <span class="focus-input100"></span>

                                    </div>
                                    <div class="wrap-input100 validate-input" >
                                        <input class="input100" type="password" onChange={this.handleChange} name="password" placeholder='Password' />
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


                                    <button onClick={this.handleRegister} class="login100-form-btn">
                                        Login
										</button>
                                    <br />
                                    <Alerts />
                                </div>


                                <div className="login100-more zokomek">
                                </div>
                                <div class="container-login100-form-btn">

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
export default connect(mapStateToProps, { setAlert, removeAlert, register, clearError })(Register);