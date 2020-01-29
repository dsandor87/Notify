import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <section className="section home">
        <div className="container">
          <h1 className="title has-text-white	has-text-centered">{'Search by Artist'}</h1>
          <h2 className="subtitle headingtitle has-text-centered">with Deezer Engine</h2>
          <hr />
        </div>
      </section>

      <section className="section featured">
        <div className="container">
          <div className="columns is-multiline is-centered">
            <Link to="/search/ed sheeran" className="column is-rounded is-half-desktop is-full-mobile is-half-tablet is-vcentered" id="art-one"><div> Ed Sheeran</div> </Link>
            <Link to="/search/marron5" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-two"><div>Marron 5</div> </Link>
            <Link to="/search/lizzo" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-three"><div>Lizzo</div> </Link>
            <Link to="/search/lady gaga" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-four"><div>Gaga</div> </Link>
            <Link to="/search/black eyed peas" className="column is-rounded is-half-desktop is-full-mobile is-half-tablet is-vcentered" id="art-five"><div>B. E. P.</div> </Link> 
            <Link to="/search/ariana grande" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-six"><div>Ariana</div> </Link>
            <Link to="/search/rihanna" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-seven"><div>Rihanna</div> </Link>
            <Link to="/search/justin bieber" className="column is-half-desktop is-full-mobile is-half-tablet" id="art-eight"><div>Justin </div> </Link>
            {/* <Link to="/search/" className="column is-rounded is-half-desktop is-full-mobile is-half-tablet is-vcentered" id="art-one"><div></div> </Link> */}
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
