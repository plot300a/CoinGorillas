import React, { Component } from "react";

class FlikPhotos extends Component {
  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    //const zebrabot = "stmaarten";
    alert(process.env.REACT_APP_API_KEY);
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
        process.env.REACT_APP_API_KEY +
        "&tags=mahobeach&per_page=150&page=1&format=json&nojsoncallback=1"
    )
      .then(function (response) {
        return response.json();
      })
      .then(
        function (j) {
          alert(JSON.stringify(j));
          let picArray = j.photos.photo.map((pic) => {
            var srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              ".jpg";
            var ownerAddress = "https://www.flickr.com/people/" + pic.owner;
            return (
              <div className="sxmhilight">
                <li>
                  <a href="#">{pic.owner}</a>
                </li>
                <li>xxx{pic.realname}xxx</li>
                <li>{ownerAddress}</li>
                <li>{pic.title}</li>
                <li>{srcPath}</li>
                {/*<img
                  className="highlight__img"
                  alt={pic.title}
                  src={srcPath}
                ></img> 
                <br />
                <span className="sxmhilight__pictitle">{pic.title}</span>
                <br />
                () Likes
                <br />
                [tw] [fb] [pin] social share*/}
              </div>
            );
          });
          this.setState({ pictures: picArray });
        }.bind(this)
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="SXM Photos" />
        </header>
        <p className="App-intro">{this.state.pictures}</p>
      </div>
    );
  }
}

export default FlikPhotos;
