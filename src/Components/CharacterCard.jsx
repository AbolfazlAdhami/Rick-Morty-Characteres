import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CharacterCard({ image, name, status, species }) {
  const statusClassName = status == "Alive" ? "mb-2 text-success" : status == "unknown" ? "mb-2 text-warning" : "mb-2 text-danger";

  return (
    <Card style={{ width: "100%", textTransform: "capitalize" }} bg="dark" variant="dark">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-secondary fs-5 inline-block">
          Name:
          <span className="text-primary fs-6 m-0 inline-block"> {name} </span>
        </Card.Title>
        <Card.Subtitle className={statusClassName}>
          <span className="text-secondary"> Status : </span>
          {status}
        </Card.Subtitle>
        <Card.Subtitle className="text-primary fs-6 inline-block my-2">
          <span className="text-secondary"> species : </span>
          {species}
        </Card.Subtitle>
        <Button variant="primary">Show More</Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
