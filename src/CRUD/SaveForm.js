import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SaveForm = (props) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
  });

  const changeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        console.log(1, res);
        if (res.status === 201) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res.status !== null) {
          if (res !== null) {
            props.history.push("/JoinForm"); //해당페이지로 이동
          } else {
            alert("등록실패");
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
          />
        </Form.Group>

        <Form.Group className="mt-3" controlId="formBasicEmail">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="author"
            onChange={changeValue}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SaveForm;
