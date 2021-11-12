import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";

const JoinForm = () => {
  const [books, setBooks] = useState([]);

  //함수 실행시 최초 한번 실행되는 것
  useEffect(() => {
    fetch("http://localhost:8080/book")
      .then((res) => res.json()) //응답이 오면 응답이 온 것을 json으로 바꿔준다.
      .then((res) => {
        setBooks(res);
      }); //비동기 함수  fetch요청 데이터 요청 (기본값 Get요청), 첫번째 인자 프로미스 들어옴 3초후 두번째 인자 프로미스 들어옴
  }, []); //한번만 실행될 수 있도록 설정

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default JoinForm;
