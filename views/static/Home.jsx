const React = require('react')
const HomeDefault = require('../components/HomeDefault.jsx')


class Home extends React.Component {
    render() {
        return (
            <HomeDefault>
                <div>   
                    <h1>Open the Binder to Begin</h1>
                    <div className="container closed-binder">
                        <a href="/cards"></a>
                    </div>
                </div>
            </HomeDefault>
        )
    }
}

module.exports = Home