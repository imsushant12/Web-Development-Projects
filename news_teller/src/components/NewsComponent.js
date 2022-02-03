import React, { Component } from "react";

export class NewsComponent extends Component {
  render() {
    let default_image =
      "https://thumbs.dreamstime.com/b/newspaper-headline-news-51970209.jpg";
    let default_title = "No Title Provided";
    let default_description = "No Description is Available :(";
    // Destructuring the props
    let { title, description, urlToImage, url} = this.props;

    return (
      <div>
        <div className="card my-3 bg-dark2 text-info">
          <img
            className="card-img-top"
            src={urlToImage ? urlToImage : default_image}
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title text-changer2 ">
              {title ? title : default_title}
            </h5>
            <hr />
            <p className="card-text text-white">
              {description ? description : default_description}
            </p>

            <hr />
            <div className="text-center text-changer2">
              <a
                href={url ? url : default_image}
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline-warning"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
