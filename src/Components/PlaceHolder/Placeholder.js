import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardLoading = () => {
  return (
    <Card style={{ width: "18rem" }} className="p-0 bg-dark">
      <div className="p-0 m-0" style={{ width: "100%", cursor: "progress" }}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height={200} />
        </SkeletonTheme>
      </div>
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow" className="">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};

export default CardLoading;
