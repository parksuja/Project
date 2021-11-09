import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookItem = (props) => {
  const { id, title } = props.book;
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Link
            to={"/post/" + id}
            className="btn btn-primary"
            variant="primary"
          >
            상세보기
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookItem;
