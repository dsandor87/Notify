import React from 'react'
import { Link  ,withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSearch(e) {
    this.setState({ data: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.history.push(`/search/${this.state.data}`)
  }

  render() {
    return (
      <nav className="navbar is-black is-active">
        <div className="navbar-start">
          <Link to="/home" className="navbar-item"><div className="navbar-item" id="logo"></div></Link>
        </div>
        <div className="container">
          {/* <div className="navbar-brand">
           
            

            <a role="button" className="navbar-burger">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div> */}

          <div className="navbar-menu navbar is-black is-active is-centered">
            <div className="navbar-start">

              <div className="navbar-item">

                <form onSubmit={this.handleSubmit}>
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input is-small is-centered is-full-width " type="search" onChange={this.handleSearch} placeholder="Who is your Favorite?" />
                    </div>
                    <div className="control">
                      <button className="button is-dark is-small">
                        <i className="fas fa-caret-right"></i>
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>

            
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
