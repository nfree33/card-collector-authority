const React = require('react')
const Default = require('../components/Default.jsx')

class New extends React.Component {
    render() {
        return (
            <Default>
                <div className="container container-new">
                    <div className="sidebar-image"></div>
                    <div className="form-container">
                        <form action="/cards" method="POST" className="new-form">
                            <h1 className="title">Add Your Card</h1>
                            <input type="text" name="name" placeholder="Name" /><br />

                            <input type="text" name="imgFront" placeholder="Image (front)" /><br />

                            <input type="text" name="imgBack" placeholder="Image (back)" /><br />
                            <input type="text" name="team" placeholder="Team" /><br />
                            <input type="text" name="year" placeholder="Year" />  <br />
                            <input type="text" name="sport" placeholder="Sport" /><br />
                            <input type="text" name="condition" placeholder="Condition" /><br />
                            <input type="number" name="quantity" placeholder="Quantity" /><br />
                            <input type="number" name="value" placeholder="Value" /><br />
                Rookie Card:<input type="checkbox" name="isRookie" /><br />
                            <input type="submit" name="" value="Submit Card" className="btn btn-secondary submit-btn"></input>
                        </form>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = New