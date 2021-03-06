const React = require('react');
const Default = require('../components/Default.jsx')


class Index extends React.Component {
    render() {
        const { card } = this.props;
        return (
            <Default>
                <div>
                    <h1 className="index-header"> The Master Index</h1>
                    <div className="container d-flex p-4 flex-wrap wood">
                    {/* <h3 className="diagonalIndex">The Master Index</h3> */}
                        {
                            card.map((card, i) => {
                                return (
                                    <div className={card.isRookie?'full-card-rookie card ':'full-card card '}>
                                        <h4 className="index-name index-height">{card.name}</h4><br />
                                        <div style={{ borderRadius: '10px' }} >
                                            <a href={`/cards/${card._id}`}>
                                                <img className="indexFront" src={card.imgFront} style={{ width: '100%', height: '20vw', borderRadius: '10px' }} alt={card.name} /></a></div><br />
                                        <h3 className={card.value>100?'money':'regularColor'}
                                        >${card.value}</h3><br />
                                        

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
                                                        <p>This is permanent. You can't just "pkill node and npm run dev" to get this back.</p>
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