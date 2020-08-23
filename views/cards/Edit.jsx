const React = require('react')
const Default = require('../components/Default.jsx')

class Edit extends React.Component{
    render(){
        const {_id, name, imgFront, imgBack, team, year, sport, condition, quantity, value, isRookie} = this.props.card
        return(
            <Default>
            <div>
                <h1>Edit your {name} Card</h1>
                <form action={`/cards/${_id}?_method=PUT`} method="POST">
                Name:             <input type="text" name="name"       defaultValue={name} /><br/>
                Image (front):    <input type="text" name="imgFront"   defaultValue={imgFront} /><br/>
                Image (back):     <input type="text" name="imgBack"    defaultValue={imgBack} /><br/>
                Team:             <input type="text" name="team"       defaultValue={team} /><br/>
                Year:             <input type="text" name="year"       defaultValue={year} /><br/>
                Sport:            <input type="text" name="sport"      defaultValue={sport} /><br/>
                Condition:        <input type="text" name="condition"  defaultValue={condition} /><br/>
                Quantity:         <input type="number" name="quantity" defaultValue={quantity} /><br/>
                Value:            <input type="number" name="value"    defaultValue={value} /><br/>
                Rookie Card: <input type="checkbox" name="isRookie"    defaultValue={isRookie} /><br/>
                <input type="submit" name="" value="Submit Card"></input>
                </form>
            </div>
            </Default>
        )
    }
}


module.exports = Edit

