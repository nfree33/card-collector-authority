const React = require('react')
const Default = require('../components/Default.jsx')

class ContactUs extends React.Component{
    render(){
        return(
            <Default>
            <div>
            <h1>Contact Us</h1>
            <ul>
                <li>Phone: 555-555-5555</li>
                <li>Email: CCC@fakeemail.net</li>
            </ul>
            </div>
            </Default>
        )
    }
}

module.exports = ContactUs