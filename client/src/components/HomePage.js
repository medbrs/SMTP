import React, { Component } from 'react';
import Nav from './Nav';
import JoinUs from './JoinUs';
import Plans from './Plans';
import Companys from './Companys';
import Descriptions from './Descriptions';
import BeforeFooter from './BeforeFooter';
import Footer from './Footer';
import Loader from 'react-loader-spinner'
import { loadUser } from '../actions/AuthActions'
import { connect } from 'react-redux';


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        this.props.loadUser()
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                {
                    this.state.loading ? <Loader type="MutatingDots" className='spinner' color="#6775e0" height={80} width={80} /> :
                        <div>
                            <Nav />
                            <JoinUs />
                            <Plans />
                            <Companys />
                            <Descriptions />
                            <BeforeFooter />
                            <Footer />
                        </div>
                }
            </div>

        );
    }
}

export default connect(null, { loadUser })(HomePage);


