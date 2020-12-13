import React, { Component } from "react";
import Jumbotron from "./../components/Jumbotron";
import Search from "../components/Search";
import ResultsPage from "../components/ResultsPage";
import { Grid } from "@material-ui/core";
import API from "../utils/API";

export class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search",
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    // console.log(q)
    console.log(value)
    this.setState({
      q: value,
    });
    console.log(this.state.q)
  };

  getBooks = () => {
    API.search(this.state.q)
      .then((res) =>
        this.setState({
          books: res.data.items
        })
      )
      .then(console.log(this.state.books)
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query",
        })
      );
    // API.getAllBooks(this.state.q)
    //   .then((res) =>
    //     this.setState({
    //       books: res.data,
    //     })
    //   )
    //   .catch(() =>
    //     this.setState({
    //       books: [],
    //       message: "No Books Found, Try a Different Query",
    //     })
    //   );
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.q);
    this.getBooks();
  };

  handleBookSave = (id) => {
    const book = this.state.books.find((book) => book.id === id);

    API.addBook({
      // googleId: book.id,
      title: book.volumeInfo.title,
      // subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(() => this.getAllBooks());
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Search
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          q={this.state.q}
        />
        <Grid
          container
          style={{
            padding: 10,
            backgroundColor: "#9ba4b4",
            marginLeft: 50,
            width: "90%",
          }}
        >
          <h3>Results</h3>
          {console.log(typeof this.state.books)}
          {console.log(this.state.books)}
          {this.state.books.map(book => (
          <ResultsPage
            key={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors.join(", ")}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
          />
          ))}
        </Grid>
      </div>
    );
  }
}
