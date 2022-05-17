import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { utils } from "near-api-js";


const EditSong = ( prop ) => {
  const [name, setName] = useState(prop.song.name);
  const [image, setImage] = useState(prop.song.image);
  const [artist, setArtist] = useState(prop.song.artist);
  // const [location, setLocation] = useState(prop.song.location);
  const id=prop.song.id;
  const isFormFilled = () => name && image && artist;

  const [show, setShow] = useState(false);

  const handleCloseEdit = () => setShow(false);
  const handleShowEdit = () => setShow(true);

  const triggerEdit = () => {
    prop.save({
      id,
      name,
      image,
      artist
    });
  };

  return (
    <>
      {/* <Button
        onClick={handleShowEdit}
        variant="dark"
        className="rounded-pill px-0"
        style={{ width: "38px" }}
      >
        <i class="bi bi-plus"></i>
      </Button> */}
      <Button
            variant="outline-dark"
            onClick={handleShowEdit}
            className="w-100 py-3"
          >
            Edit
          </Button>
      <Modal show={show} onHide={handleCloseEdit} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Song</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputName"
              label={"Song titel"}
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                //placeholder={name}
                placeholder="Title of song"
                value={name}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDescription"
              label="Artist"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="artist"
                onChange={(e) => {
                  setArtist(e.target.value);
                }}
                // placeholder={description}
                value={artist}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputUrl"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Image URL"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                // placeholder={imageurl}
                value={image}
              />
            </FloatingLabel>
            {/* <FloatingLabel
              controlId="inputLocation"
              label="Location"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                 placeholder={location}
                value={location}
              />
            </FloatingLabel> */}
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              prop.save({
                id,
                name,
                image,
                artist,
              });
              handleCloseEdit();
            }}
          >
            Update song
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// AddSong.propTypes = {
//   save: PropTypes.func.isRequired,
// };

export default EditSong;