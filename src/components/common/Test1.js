import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Test1 = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>제목1</Card.Title>
        <Link to={"/post/1"} className="btn btn-primary" variant="primary">
          상세보기
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Test1;
