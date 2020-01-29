# SEI-Project-02: Hackathon

## Technologies used

* Javascript
* React
* Axios
* SCSS
* Bulma
* HTML
* Git
* GitHub

## Overview

[Link to project](https://dsandor87.github.io/Notify/#/home)

* Project two was a 2 day hackathon to build a React application that consumes a public API. It was a paired project.

### Brief

* Build a React application that consumes a public API
* The React app must have at least one classical and one functional
* The app should include a router with several pages
* Have semantically clean HTML
* Be deployed online and accessible to the public

### Timeframe
* 2 days


### Home Page
![Home Page](https://github.com/dsandor87/Notify/blob/master/home.gif)

### Process

 we decided we wanted to use a music or events API so after looking into numerous API documentations, we decided to use Deezer's API. Once we had an idea of what we wanted our frontend to consist of, we began by building components for the home page, navbar, album index and finally album show page.

To begin with we hard coded everything so the only artist displayed was Coldplay. Once we had this working we worked on the search bar to return any artist the user searches for (see below in challenges for more info on this).


### Search results

![Search result](https://github.com/dsandor87/Notify/blob/master/single.gif)


We then worked on the styling, using SCSS to complement the basic Bulma styling. Finally, we added a loading gif in a loading component.

The whole project was coded together on one laptop, something I really enjoyed and found particularly beneficial learning off one another.


## Wins

* One major win from this project was getting used to accessing nested data within APIs
* Another win was mapping over arrays, as we did in the example below, to get the tracklisting and track previews from Deezer's API

```javascript
<ul>
  {this.state.album.tracks.data.map(track =>
    <li key={track.id}>
      <h4 className="title is-4">{track.title}</h4>
      <audio src={track.preview} controls />
    </li>)}
</ul>
```

## Challenges

* The biggest challenge was the search bar, setting the search value data to state and then transferring this data from the navbar component to the albumsindex component via props.

Navbar.js:
```javascript

handleSearch(e) {
  this.setState({ data: e.target.value })
}

handleSubmit(e) {
  e.preventDefault()
  this.props.history.push(`/search/${this.state.data}`)
}
```

AlbumsIndex.js:
```javascript
getData() {
  axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/search/album', {
    params: {
      q: this.props.match.params.query
    }
  })
    .then(res => {
      console.log(res.data)
      this.setState({ albums: res.data.data })
    })
}
```

## Future Features

* Something we'd have loved to do if we had longer is to have random featured artists on the home page, rather than having eight artists picked by the team.
