const React = require('react')
const Default = require('../components/Default.jsx')

class About extends React.Component{
    render(){
        return(
            <Default>
            <div>
            <h1>About Us</h1>
            <p>We are a longstanding organization, founded less than one week ago. Our extensive knowledge and experience has led us to being one of the leaders in the trading card world.</p>
            <p>If you would like to reach out to a team member, please visit our <a href="/contact-us">Contact Us Page.</a></p>

            </div>
            </Default>
        )
    }
}

module.exports = About