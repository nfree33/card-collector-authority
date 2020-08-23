const React = require('react');
const Default = require('../components/Default.jsx')


class Index extends React.Component {
    render() {
        const { card } = this.props;
        return (
            <Default>
            <div>
                <ul className="container d-flex p-4 flex-wrap">
                    {
                        card.map((card, i) => {
                            return (
                                <div className="card w-25">
                                    <h2>{card.name}</h2><br />
                                    <div><a href={`/cards/${card._id}`}> <img src={card.imgFront} style={{ width: '100%' }} alt={card.name} /></a></div><br />
                                    {/* <h3><img src={card.imgBack} style={{width: '30%'}}alt={card.name}/></h3><br/> */}
                                    <h4>{card.team}</h4><br />
                                    <h4>{card.year}</h4><br />
                                    <h3>{card.sport}</h3><br />
                                    <h3>Condition: {card.condition}</h3><br />
                                    <h3>Quantity: {card.quantity}</h3><br />
                                    <h3>${card.value}</h3><br />
                                    <h3>{card.isRookie ? 'Rookie Card!!' : 'Not Rookie'}</h3><br />
                                    <form action={`/cards/${card._id}?_method=DELETE`} method="POST" disabled>
                                        <input type="submit" value="delete"/>
                                    </form>
                                    <h3><a href={`/cards/${card._id}/edit`}>Edit This Card</a></h3>
                                </div>
                            )
                        })
                    }
                </ul>
                
            </div>
            </Default>
        )
    }
}

module.exports = Index