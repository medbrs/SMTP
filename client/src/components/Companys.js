import React, { Component } from 'react';

class Companys extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src='https://mk0sibcorpsiten6p6bw.kinstacdn.com/wp-content/uploads/2018/08/feature-5-2.png' alt='ss' height='250px' />
                    </div>
                    <div class="col-6">
                        <h1>Expert Tools You Can Trust</h1>
                        <div className='optimal p'>
                            <h2>Optimal deliverability</h2>
                            <p>Ensure your welcome messages, order confirmations, shipping notifications, app alerts, and other important emails reach the inbox.</p>
                        </div>
                        <div className='Logss p'>
                            <h2>Message Archiving And Logs</h2>
                            <p>Archive and search all historical transactional email and SMS messages.</p>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Companys;