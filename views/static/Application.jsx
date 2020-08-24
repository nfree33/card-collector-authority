const React = require('react')
const Default = require('../components/Default.jsx')

class Application extends React.Component{
    render(){
        return(
            <Default>
            <div>
            <h1>Submit Application</h1>
            <p>We are a longstanding organization, founded less than one week ago. Our extensive knowledge and experience has led us to being one of the leaders in the trading card world.</p>
            <p>If you are interested in joining our team, please fill out this application, and we will get back to you once our Immersive Course is complete.</p>

            </div>
            </Default>
        )
    }
}

module.exports = Application