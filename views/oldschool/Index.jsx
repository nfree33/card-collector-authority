const React = require('react');
const OldSchoolDefault = require('../components/OldSchoolDefault.jsx')


class Index extends React.Component {
    render() {
        const { oldschool } = this.props;
        return (
            <OldSchoolDefault>
                <div>
                    <div className="container d-flex p-4 flex-wrap wood">
                        {
                            oldschool.map((oldschool, i) => {
                                return (
                                    <div className="card w-25 full-card">
                                        <div className="index-name index-height"><h3>{oldschool.name}</h3></div><br />
                                        <div style={{ borderRadius: '10px' }} >
                                            <a href={`/oldschools/${oldschool._id}`}>
                                                <img src={oldschool.imgFront} style={{ width: '100%', height: '20vw', borderRadius: '10px' }} alt={oldschool.name} /></a></div><br />
                                        {/* <h3><img src={oldschool.imgBack} style={{width: '30%'}}alt={oldschool.name}/></h3><br/> */}
                                        {/* <h4>{oldschool.team}</h4><br />
                                    <h4>{oldschool.year}</h4><br />
                                    <h3>{oldschool.sport}</h3><br />
                                    <h3>Condition: {oldschool.condition}</h3><br />
                                    <h3>Quantity: {oldschool.quantity}</h3><br /> */}
                                        <h3 className="money">${oldschool.value}</h3><br />
                                        <h4>{oldschool.isRookie ? 'Rookie Card' : 'Non-Rookie'}</h4><br />
                                        {/* <form action={`/oldschool/${card._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form> */}
                                        

                                        {/* Button that triggers Modal */}
                                        <button type="button" className="btn btn-warning delete-button" data-toggle="modal" data-target="#deleteModal">Delete</button>


                                        {/* Delete Modal */}
                                        <div class="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="deleteModalLabel">You sure about this?</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>This is permanent. You can't just "pkill node npm run dev" to get this back.</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <form action={`/oldschool/${card._id}?_method=DELETE`} method="POST"><input type="submit" className="btn btn-danger delete-button" value="Delete"/></form>
                                                        </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </OldSchoolDefault>
        )
    }
}

module.exports = Index