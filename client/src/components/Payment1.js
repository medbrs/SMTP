import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Loader from 'react-loader-spinner';
import Nav from './Nav';
import Footer from './Footer';
class Payment1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            text: '',
            tab: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000)
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    handleClick = () => {
        this.setState({
            tab: this.state.tab.concat({ text: this.state.text }),
            text: ''
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.loading ? <Loader type="BallTriangle" className='spinner' color="#76bf87" height={80} width={80} /> :


                        <div class="container-login100 pay">
                            <Nav />
                            <form class="login100-form validate-form">
                                <span class="login100-form-title p-b-43">
                                    <img src='https://cdn2.iconfinder.com/data/icons/business-finance-113/64/bitcoin-chat_group_strategy_message_crypto-512.png' height='70px' />

                                </span>

                                <div className='payment'>


                                    <Card>

                                        <Card.Body>
                                            <Card.Title>  <img src='https://apirone.com/static/promo/bitcoin_logo_vector.svg' height='30px' /></Card.Title>
                                            <Card.Text>
                                                <img src='https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-9/83356547_1089519991401951_1984482810118799360_n.jpg?_nc_cat=100&_nc_eui2=AeHSlcY0OFf1MX8KHnDoThBtzgPr6eEBmTFnMi-qS6kpAVDvOaoHsSux7X5IS2W2RQxllz00QqkcuS0PngGJkfosZsYUMptrzHlbVb3FTX9Eaw&_nc_ohc=TaML_ZmrRmkAX-Mgrde&_nc_ht=scontent.ftun9-1.fna&oh=b8d499377f746800fff54fa4c74cec1a&oe=5ED7B817' />
                                                <p>Send this amount :</p>
                                                <p>0,0036 BTC</p>
                                                <p>To this BITCOIN (BTC) address :</p>
                                                <p>1FX5WDq8cA6Yw9UP1DQiwv31XHcruifqZv</p>
                                                <p className='ea'>We need your email for confirmation and send your order</p>


                                                {
                                                    this.state.tab.map(e => <div><h3>{e.text}
                                                        <i class="fas fa-check"></i></h3>
                                                    </div>)
                                                }
                                                <div class="wrap-input100 validate-input" >
                                                    <input class="input100 x" value={this.state.text} onChange={this.handleChange} type="text" name="email" placeholder='Please Enter Your Correct Email' />
                                                    <span class="focus-input100"></span>
                                                </div>
                                                <button onClick={this.handleClick} type="button" class="btn btn-outline-success" id="load2" data-loading-text="<i class='fa fa-spinner fa-spin '></i> Processing Order">ADD YOUR EMAIL</button>
                                                <br />
                                                <p>
                                                    Payment will be credited after 1 confirmation.
                                                    If you send any other bitcoin amount, payment system will ignore it!</p>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <button class="btn btn-success" type="button" disabled>
                                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                AWAITIG PAYMENT FROM YOU</button>
                                        </Card.Footer>
                                    </Card>
                                </div>




                            </form>



                        </div>

                }

            </div>
        );
    }
}

export default Payment1;







{/*  */ }