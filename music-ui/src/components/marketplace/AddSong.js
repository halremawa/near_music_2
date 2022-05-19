import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { arweave } from "../../lib/api";


const AddSong = ({ save, onLoading, offLoading }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [artist, setArtist] = useState("");
  const [location, setLocation] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  // const [price, setPrice] = useState(0);
  const isFormFilled = () => name && image && artist && location;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //arweave post data
  async function onPostButtonClicked() {

    onLoading();

    try {
      debugger;
      let formData= new FormData();
      formData.append('file', selectedFile);
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    // var ret= await fetch('http://localhost:3001/arweave/postSong', {
    //   method: 'POST',
    //   headers: {
    //     //'Accept': 'application/json',
    //     //'Content-Type': 'application/json',
    //     'Content-Type' : 'multipart/form-data',
    //   },
    //   // body: JSON.stringify({
    //   //   file: selectedFile,
    //   // })
    //   body: formData//)
    // });
    debugger;
    var ret=await axios.post('http://localhost:3001/arweave/postSong',formData);
    // ret.data().json().then(function(data) {
    //   debugger;
    // setLocation(data.Body.address);
    // });
    } catch (err) {
      debugger;
      console.error(err);
    }
    offLoading();
  }


  // On file select (from the pop up)
  let onFileChange = event => {
    console.log('[onFileChange]', event.target.files[0]);
    // Update the state
    setSelectedFile(event.target.files[0]);
  };
  // File content to be displayed after
  // file upload is complete
  let fileData = () => {
    if (selectedFile) {
      return (
        <>
          <div>
            <h2>File Details:</h2>
            <p>File Name: {selectedFile.name}</p>
            <p>File Type: {selectedFile.type}</p>
            {/* 
             */}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Button
        onClick={handleShow}
        variant="dark"
        className="rounded-pill px-0"
        style={{ width: "38px" }}
      >
        <i class="bi bi-plus"></i>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Song</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputName"
              label="Title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter title of song"
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
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="inputDescription"
              label="Artist"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Artist"
                onChange={(e) => {
                  setArtist(e.target.value);
                }}
              />
            </FloatingLabel>
            <FloatingLabel
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
              />
            </FloatingLabel>


            <div>
              <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onPostButtonClicked}>
                  Upload!
                </button>
              </div>
              {fileData()}
            </div>

          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              save({
                name,
                image,
                artist,
                location,
              });
              handleClose();
            }}
          >
            Save song
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AddSong.propTypes = {
  save: PropTypes.func.isRequired,
};

export default AddSong;