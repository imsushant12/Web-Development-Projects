import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
  // setting default props
  static defaultProps = {
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  // initially there will be no articles, and we will fetch the articles from the NEWS API. We will set the articles to the fetched articles using setState();
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  // getting the data from the NEWS API.
  async componentDidMount() {
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=in&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=${this.props.apiKey}`;

    // loading...
    this.setState({ loading: true });

    let newsData = await fetch(newsUrl);

    // converting the raw data into JSON format.
    let parsedData = await newsData.json();

    // setting the articles with the real time data and as the data is loading, set the loading to false.
    this.setState({ articles: parsedData.articles, loading: false });
  }

  render() {
    return (
      <div className="container my-3">
        <h3 className="text-white my-5 text-changer text-center">
          NewsTeller - Get your Daily Dose of News!
        </h3>

        {/* Will show the spinner at the time of loading only. */}
        {this.state.loading && <Spinner />}

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsComponent
                  title={element.title}
                  description={element.description}
                  urlToImage={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
