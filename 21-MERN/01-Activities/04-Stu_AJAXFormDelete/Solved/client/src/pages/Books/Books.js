import React, { useEffect, useState, useRef } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState({
  //   title: "",
  //   author: "",
  //   synopsis: ""
  // })
  const titleRef = useRef();
  const authorRef = useRef();
  const synopsisRef = useRef();

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(() => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({...formObject, [name]: value})
  // };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (titleRef.current.value && authorRef.current.value) {
      API.saveBook({
        title: titleRef.current.value,
        author: authorRef.current.value,
        synopsis: synopsisRef.current.value
      })
        .then(() => {
          titleRef.current.value = '';
          authorRef.current.value = '';
          synopsisRef.current.value = '';
        })
        .then(() => loadBooks())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <input
                ref={titleRef}
                name="title"
                placeholder="Title (required)"
              />
              <input
                ref={authorRef}
                name="author"
                placeholder="Author (required)"
              />
              <input
                ref={synopsisRef}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                // disabled={!(authorRef.current.value && titleRef.current.value)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => deleteBook(book._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
