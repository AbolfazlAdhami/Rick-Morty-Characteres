import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAllCharacter, getNewPage } from "../Api/axiosApi";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardLoading from "./PlaceHolder/Placeholder";
import CharacterCard from "./CharacterCard";
import PaginationCom from "./Pagination/PaginationCom";
import ToastCom from "./ToastCom/ToastCom";

const CharacterList = () => {
  const [character, setCharacter] = useState([]);
  const [metaData, setMetaData] = useState({});
  const queryClient = useQueryClient();
  const { data, isFetching, isLoading, error, isError } = useQuery("character", getAllCharacter);
  const newCharacter = useMutation(getNewPage, {
    onSuccess: () => {
      queryClient.invalidateQueries("character");
      console.log(data);
    },
  });

  let content;
  if (isFetching && isLoading) {
    content = Array(10)
      .fill("")
      .map((item, index) => (
        <Col lg="4" md="6" sm="12" key={index} className="gy-5">
          <CardLoading />
        </Col>
      ));
  } else if (!isError || data != null || data.results == null) {
    content = character.map((item) => (
      <Col lg="4" md="6" sm="12" key={item.id} className="gy-5">
        <CharacterCard image={item.image} name={item.name} status={item.status} species={item.species} />
      </Col>
    ));
  } else if (isError) {
    content = <ToastCom message={error.message} />;
  }

  useEffect(() => {
    if (data != null) {
      setCharacter([...data.results]);
      setMetaData({ ...data.info });
    }
  }, [data]);
  useEffect(() => {
    console.log(newCharacter.isLoading, newCharacter.context);
  }, [newCharacter.isLoading]);

  const pageHandler = (url) => {
    newCharacter.mutate(url);
  };

  return (
    <Container fluid className="h-100">
      <Row className="mt-3 py-2 px-1">{content}</Row>
      <Row className="mt-2 ">
        {!isError ? (
          <Col className="col-12 ">
            <PaginationCom data={metaData} pageChanger={pageHandler} />
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default CharacterList;
