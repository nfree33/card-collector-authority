const React = require('react')
const Default = require('../components/Default.jsx')

class New extends React.Component{
    render(){
        return(
            <Default>
            <div>
                <h1>Add to the Collection</h1>
                <form action="/cards" method="POST">
                Name:      <input type="text" name="name"/><br/>
                Image (front):     <input type="text" name="imgFront"/><br/>
                Image (back):     <input type="text" name="imgBack"/><br/>
                Team:      <input type="text" name="team"/><br/>
                Year:      <input type="text" name="year"  />  <br/>
                Sport:     <input type="text" name="sport"/><br/>
                Condition: <input type="text" name="condition"/><br/>
                Quantity:  <input type="number" name="quantity"/><br/>
                Value:     <input type="number" name="value"/><br/>
                Rookie Card: <input type="checkbox" name="isRookie"/><br/>
                <input type="submit" name="" value="Submit Card"></input>
                </form>
            </div>
            </Default>
        )
    }
}

module.exports = New