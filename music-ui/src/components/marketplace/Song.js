import React from "react";
import PropTypes from "prop-types";
import { utils } from "near-api-js";
import { Card, Button, Col, Badge, Stack } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";
import moment from "moment";

import EditSong from "./EditSong";
import DeleteSong from "./DeleteSong";

  

const Song = ({ song, edit, deleteFunc }) => {
  const { id,  artist, name, tags, timeStamp, location, image, owner } =
    song;

  // const triggerBuy = () => {
  //   buy(id, artist);
  // };

  return (
    <Col key={id}>
      <Card className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <span className="font-monospace text-secondary">{owner}</span>
            {/* <Badge bg="secondary" className="ms-auto">
              {sold} Sold
            </Badge> */}
          </Stack>
        </Card.Header>
        <div className=" ratio ratio-4x3">
          <img src={image} alt={name} style={{ objectFit: "cover" }} />
        </div>
        <Card.Body className="d-flex  flex-column text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-secondary">
            <span>{artist}</span>
          </Card.Text>
          <Card.Body className="flex-grow-1 ">
            <ReactAudioPlayer src={`${location}`} controls />
            </Card.Body>
          



          <EditSong song={song} save={edit} /> 
        <DeleteSong songName={song.name} songId={song.id} deleteFunc={deleteFunc} />  
            

          {/* <Button
            variant="outline-dark"
            onClick={triggerBuy}
            className="w-100 py-3"
          >
            Buy for {utils.format.formatNearAmount(artist)} NEAR
          </Button> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

Song.propTypes = {
  song: PropTypes.instanceOf(Object).isRequired
};

export default Song;