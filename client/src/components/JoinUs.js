import React, { Component } from 'react';

class JoinUs extends Component {
    tab = [
        {
            title: 'Set up in minutes',
            image: 'https://mk0sibcorpsiten6p6bw.kinstacdn.com/wp-content/uploads/2019/06/Email-Marketing.svg',
            desc: 'Easily integrate your emails'
        },
        {
            title: 'Deliver Inbox',
            image: 'https://mk0sibcorpsiten6p6bw.kinstacdn.com/wp-content/uploads/2019/06/Marketing-Automation.svg',
            desc: 'Optimize the deliverability'
        },
        {
            title: 'Track your Results',
            image: 'https://mk0sibcorpsiten6p6bw.kinstacdn.com/wp-content/uploads/2019/06/Real-Time.svg',
            desc: 'Track & Analyze Performance'
        }
    ]
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="head">
                        <h1>SMTP Expert Deliverability</h1>
                        <h2>We accept Bitcoin. Buy SMTP Mail Server with Bitcoin. SMTP username and password with Bitcoin.</h2>
                    </div>

                    <div className='small-12 medium-4 large-4 text-center columns  boxes'>
                        {
                            this.tab.map(e => <div>
                                <h3 className='titles'>{e.title}</h3>
                                <img src={e.image} height='150px' />
                                <h2 className='desc'>{e.desc}</h2>
                            </div>)
                        }
                    </div>
                </div>
               



            </div>
        );
    }
}



export default JoinUs;