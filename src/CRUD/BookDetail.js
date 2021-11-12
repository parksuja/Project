import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

const BookDetail = (props) => {
  const id = props.match.params.id; //id params 전달

  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/book/" + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);

  const deleteBook = () => {
    fetch("http://localhost:8080/book/" + id, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          props.history.push("/JoinForm");
        } else {
          alert("삭제실패");
        }
      });
  };

  const UpdateBook = () => {
    props.history.push("/Update/" + id);
  };

  return (
    <div>
      <h1>상세보기</h1>
      <Button variant="warning" onClick={UpdateBook}>
        수정
      </Button>
      <Button variant="danger" onClick={deleteBook}>
        삭제
      </Button>
      <h3>{book.author}</h3>
      <h3>{book.title}</h3>
    </div>
  );
};

export default BookDetail;
