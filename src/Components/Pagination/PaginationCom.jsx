import Pagination from "react-bootstrap/Pagination";

function PaginationCom({ data, pageChanger }) {
  const activePervBtn = data.perv != null ? false : true;
  const activeNextBtn = data.next != null ? false : true;
  const clickHandler = (dir) => {
    if (dir == "perv" && data.perv != null) {
      pageChanger(data.perv);
    } else if (dir == "next" && data.next != null) {
      pageChanger(data.next);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Pagination size="lg">
        <Pagination.Prev />
        <Pagination.Item className="text-dark" active={activePervBtn} onClick={() => clickHandler("perv")}>
          Perv
        </Pagination.Item>
        <Pagination.Item active={activeNextBtn} onClick={() => clickHandler("next")}>
          Next
        </Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  );
}

export default PaginationCom;
