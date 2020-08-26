const React = require('react')
const HomeDefault = require('../components/HomeDefault.jsx')


class Home extends React.Component {
    render() {
        return (
            <HomeDefault>
                <div>   
                    
                    <div className="container closed-binder">
                        <a href="/cards"></a>
                    </div>
                </div>
            </HomeDefault>
        )
    }
}

module.exports = Home