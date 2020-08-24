const React = require('react');
const Default = require('../components/Default.jsx')


class Index extends React.Component {
    render() {
        const { card } = this.props;
        return (
            <Default>
                <div>
                    <div className="container d-flex p-4 flex-wrap wood">
                        {
                            card.map((card, i) => {
                                return (
                                    <div className="card w-25 full-card">
                                        <div className="index-name"><h3>{card.name}</h3></div><br />
                                        <div style={{ borderRadius: '10px' }} >
                                            <a href={`/cards/${card._id}`}>
                                                <img src={card.imgFront} style={{ width: '100%', height: '20vw', borderRadius: '10px' }} alt={card.name} /></a></div><br />
                                        {/* <h3><img src={card.imgBack} style={{width: '30%'}}alt={card.name}/></h3><br/> */}
                                        {/* <h4>{card.team}</h4><br />
                                    <h4>{card.year}</h4><br />
                                    <h3>{card.sport}</h3><br />
                                    <h3>Condition: {card.condition}</h3><br />
                                    <h3>Quantity: {card.quantity}</h3><br /> */}
                                        <h3>${card.value}</h3><br />
                                        <h3>{card.isRookie ? 'Rookie Card' : 'Not Rookie'}</h3><br />
                                        {/* <form action={`/cards/${card._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form> */}
                                        <h4><a href={`/cards/${card._id}/edit`}>Edit This Card</a></h4>

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
                                                        <form action={`/cards/${card._id}?_method=DELETE`} method="POST"><input type="submit" className="btn btn-danger delete-button" value="Delete"/></form>
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
            </Default>
        )
    }
}

module.exports = Index