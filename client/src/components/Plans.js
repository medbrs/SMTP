import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { connect } from 'react-redux'

class Plans extends Component {


    render() {
        return (
            <div>
                <Nav />
                <div class="">
                    <div class="jumbotron table j">
                        <h1>PRICING PLANS</h1>
                        <p>Competitive And Unbeatable Email Marketing Plans</p>
                        <p>Our service is Suitable for affliate Email marketing, CPA, Newsletter, Transcations emails, offermails.</p>

                    </div>
                </div>
                <div class="container mb-5 mt-5">
                    <div class="pricing card-deck flex-column flex-md-row mb-3">
                        <div class="card card-pricing text-center px-3 mb-4">
                            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Starter</span>
                            <div class="bg-transparent card-header pt-4 border-0">
                                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15">$<span class="price">30</span></h1>
                            </div>
                            <div class="card-body pt-0">
                                <ul class="list-unstyled mb-4">
                                    <li>10,000 Emails Per Day</li>
                                    <li>No hourly email limit</li>
                                    <li>Unlimited Contacts</li>
                                    <li>1 Months Trial</li>

                                </ul>

                                {this.props.auth.isAuthenticated ? <Link to='/payment1'>
                                    <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
                                </Link> : <Link to='/login'>
                                        <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
                                    </Link>}

                            </div>
                        </div>


                        <div class="card card-pricing text-center px-3 mb-4">
                            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Business</span>
                            <div class="bg-transparent card-header pt-4 border-0">
                                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="45">$<span class="price">45</span></h1>
                            </div>
                            <div class="card-body pt-0">
                                <ul class="list-unstyled mb-4">
                                    <li>20,000 Emails Per Day</li>
                                    <li>Unlimited Contacts</li>
                                    <li>Inbuild Email verfification</li>
                                    <li>Contact Import CSV/TXT file</li>
                                    <li>2 Months Trial</li>

                                </ul>

                                {this.props.auth.isAuthenticated ? <Link to='payment2'>

                                    <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
                                </Link> : <Link to='login'>

                                        <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
                                    </Link>}

                            </div>
                        </div>
                        <div class="card card-pricing popular shadow text-center px-3 mb-4">
                            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Professional</span>
                            <div class="bg-transparent card-header pt-4 border-0">
                                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">$<span class="price">60</span></h1>
                            </div>
                            <div class="card-body pt-0">
                                <ul class="list-unstyled mb-4">
                                    <li>35,000 Emails Per Day</li>
                                    <li>Unlimited Contacts</li>
                                    <li>Open & clicks Statatics</li>
                                    <li>Contact Import CSV/TXT file</li>
                                    <li>Inbuild Email verfification</li>
                                    <li>4 Months Trial</li>


                                </ul>
                                {this.props.auth.isAuthenticated ? <Link to='payment3' href="#0" target="_blank" class="btn btn-primary mb-3">Order Now</Link> :
                                    <Link to='login' href="#0" target="_blank" class="btn btn-primary mb-3">Order Now</Link>}

                            </div>
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
export default connect(mapStateToProps)(Plans);