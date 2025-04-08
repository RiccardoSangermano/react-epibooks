import React, { useState } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)

  const handleBookSelection = (asin) => {
    setSelectedBook(asin)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredBooks = props.books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Row>
      <Col md={8}>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {filteredBooks.map((book) => (
            <Col xs={12} md={4} key={book.asin}>
              <SingleBook
                book={book}
                selectedBook={selectedBook}
                changeSelectedBook={handleBookSelection}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <Col md={4}>
        <CommentArea asin={selectedBook} />
      </Col>
    </Row>
  );
};

export default BookList