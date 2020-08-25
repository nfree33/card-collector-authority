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
                    <div className={card.isRookie?'showInfoRookie':'showInfo'}>
                    <h1 className={card.value>100?'money':'regularColor'}
                                        >${card.value}</h1><br />
                        <h3>{card.name}</h3>
                        <h4><a href={`/cards/${card._id}/edit`}>Edit This Card</a></h4>
                    </div>
                </div>
            </Default>
        )
    }
}



module.exports = Show