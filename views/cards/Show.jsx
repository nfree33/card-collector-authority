const React = require('react')
const Default = require('../components/Default.jsx')

class Show extends React.Component {
    render() {
        const { card } = this.props
        return (
            <Default>
            <div>
                <h1>{card.name}</h1>
                <h3><img src={card.imgFront} style={{ width: '40%' }} alt={card.name} /></h3>
                <h4>${card.value}</h4>
            </div>
            </Default>
        )
    }
}



module.exports = Show