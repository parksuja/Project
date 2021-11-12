import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const Update = (props) => {
  const id = props.match.params.id;

  const [book, setBook] = useState({
    title: "",
    author: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/book/" + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  });

  const changeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/book/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res.status !== null) {
          if (res !== null) {
            props.history.push("/book/" + id); //해당페이지로 이동
          } else {
            alert("수정실패");
          }
        }
      });
  };

  return (
    <div>
      <Form onSubmit={submitBook}>
        <Form.Group className="mt-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={changeValue}
            name="title"
            value={book.title}
          />
        </Form.Group>

        <Form.Group className="mt-3" controlId="formBasicEmail">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="author"
            onChange={changeValue}
            value={book.author}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Update;
