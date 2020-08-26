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
                    <div className={card.isRookie ? 'showInfoRookie' : 'showInfo'}>
                        <h1 className={card.value > 100 ? 'money' : 'regularColor'}
                        >${card.value}</h1><br />

                        <h3 className="bottom-border">{card.name}</h3>
                        <h3>{card.team}</h3>
                        <h3>Year Issued: {card.year}</h3>
                        <h3>Condition: {card.condition}</h3>
                        <h4><a href={`/cards/${card._id}/edit`}>Edit This Card</a></h4>
                        <a href="/buypage"><button type="button" class={card.quantity > 1 ? "btn btn-success":"btn btn-danger"}>
                            In Stock: <span class="badge badge-light">{card.quantity}</span>
                           
                        </button></a>


                    </div>
                </div>
            </Default>
        )
    }
}



module.exports = Show