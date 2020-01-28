import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {logout} from '../actions/AuthActions'
class BeforeFooter extends Component {
    render() {
        return (
            <div class='cnt-started-bg b'>
                <div class='container '>
                    <div class='row'>
                        <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <h2 className='trial'>Trial signup takes only 2 minutes</h2>
                        </div>
                        <div class='col-lg-12 action-started v'>

                            {this.props.auth.isAuthenticated ? <Link to='/login'>
                                <div class="container-login100-form-btn">
                                    <button onClick={() => this.props.logout()} class="login100-form-btn b6">
                                        Logout
                            </button>
                                </div>
                            </Link> :
                                <Link to='/register'>
                                    <div class="container-login100-form-btn">
                                        <button class="login100-form-btn b6">
                                            Register
                            </button>
                                    </div>
                                </Link>}
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, {logout})(BeforeFooter);