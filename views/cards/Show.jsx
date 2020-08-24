const React = require('react')
const Default = require('../components/Default.jsx')

class Show extends React.Component {
    render() {
        const { card } = this.props
        return (
            <Default>
                <div className="container-show">
                    <div>
                        
                        <img className="showImage" src={card.imgFront} alt={card.name} />
                    </div>
                    <div className="showInfo">
                        <h1 className="showCardValue">${card.value}</h1>
                        <h3>{card.name}</h3>
                    </div>
                </div>
            </Default>
        )
    }
}



module.exports = Show