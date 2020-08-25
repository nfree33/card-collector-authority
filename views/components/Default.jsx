const React = require('react')

class Default extends React.Component {

    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
                    <link rel="stylesheet" href="../css/style.css" />
                    <title>CARDS</title>
                </head>
                <body>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top increase-height">
                        <a className="navbar-brand" href="#">Card Collector's Cooperative</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/oldschool">Kick it Old School <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cards/new">Add Card</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cards">Index</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Additional Info</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/about">About</a>
                                        <a className="dropdown-item" href="/contact-us">Contact Us</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/application">Submit Application</a>
                                    </div>
                                </li>

                            </ul>
                            {/* <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search Cards" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form> */}
                        </div>
                    </nav>
                   
                    {this.props.children}
                    
                    <footer className="footer sticky-bottom bottom-footer">
                        <div>
                            <h5 className="footer-font">Copyright &#169; 2020 Card Collectors Cooperative</h5>
                            </div>
                        <div>
                            <h5 className="footer-font">CCC is a part of Freeman Media International</h5>
                            </div>
                        </footer>


                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <script src="script/app.js"></script>
                </body>
            </html>
        )
    }
}

module.exports = Default