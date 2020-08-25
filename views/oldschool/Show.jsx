const React = require('react')
const OldSchoolDefault = require('../components/OldSchoolDefault.jsx')

class Show extends React.Component {
    render() {
        const { oldschool } = this.props
        return (
            <OldSchoolDefault>
                <div className="container-show">
                    <div>
                        
                        <img className="showImage" src={oldschool.imgFront} alt={oldschool.name} />
                    </div>
                    <div className="showInfo">
                        <h1 className="showoldschoolValue">${oldschool.value}</h1>
                        <h3>{oldschool.name}</h3>
                        <h4><a href={`/oldschool/${oldschool._id}/edit`}>Edit This Card</a></h4>
                    </div>
                </div>
            </OldSchoolDefault>
        )
    }
}



module.exports = Show