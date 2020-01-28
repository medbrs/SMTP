import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/AuthActions'

const Nav = props => {

    const userConnected = () => (
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">

                    <Link class="nav-link ss"><button type="button" class="btn btn-light">Hello, {props.auth.user.lastname}</button></Link>

                </li>
                <li class="nav-item active">

                    <Link to='/' class="nav-link ss"><button type="button" class="btn btn-light">Home</button></Link>

                </li>
                <li class="nav-item">

                    <Link to='/Plans' class="nav-link"><button type="button" class="btn btn-light">Offers</button></Link>
                </li>
                <li class="nav-item">
                    <Link to='/ContactUs' class="nav-link"><button type="button" class="btn btn-light">Contact</button></Link>
                </li>
            </ul>
           
            <Link to='/login' onClick={() => props.logout()} href="#" class="btn btn-info">
                <span class="fas fa-sign-out-alt"></span> Log out
        </Link>
        </div>
    )

    const guest = () => (

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">

                    <Link to='/' class="nav-link ss"><button type="button" class="btn btn-light">Home</button></Link>

                </li>


                <li class="nav-item">
                    <Link to='/login' class="nav-link"><button type="button" class="btn btn-primary">SIGN IN </button>
                    </Link>
                </li>


                <li class="nav-item">
                    <Link to='/register' class="nav-link" ><button type="button" class="btn btn-primary">SIGN UP</button>
                    </Link>
                </li>
                <li class="nav-item">

                    <a class="nav-link"><button type="button" class="btn btn-light">About</button></a>

                </li>
                <li class="nav-item">
                    <Link to='/ContactUs' class="nav-link"><button type="button" class="btn btn-light">Contact</button></Link>
                </li>
            </ul>
        </div>
    )

    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top navi">
            <div class="container">
                <img src='https://cdn2.iconfinder.com/data/icons/business-finance-113/64/bitcoin-chat_group_strategy_message_crypto-512.png' height='50px' />
                <Link to='/' class="navbar-brand" href="#">BitSmtpers</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {
                    props.auth.isAuthenticated ? userConnected() : guest()
                }
            </div>

        </nav>

    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { logout })(Nav);