import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Button, Modal, Form, FloatingLabel, Spinner } from "react-bootstrap";
import { arweave } from "../../lib/api";
import { toast } from "react-toastify";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";


axios.defaults.timeout = 0;

const AddSong = ({ save, onLoading, offLoading }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [artist, setArtist] = useState("");
  const [location, setLocation] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  // const [price, setPrice] = useState(0);
  const isFormFilled = () => name && image && artist && location;

  const [show, setShow] = useState(false);

  const [showUploading, setShowUploading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  //arweave post data
  async function onUploadButtonClicked() {

    setShowUploading(true);

    try {
      //debugger;
      let formData = new FormData();
      formData.append('file', selectedFile);
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }
      //debugger;
      var ret = await axios.post('http://localhost:3001/arweave/postSong', formData, {timeout:0});

      //debugger;
      setLocation(ret.data.address);
      setShowUploading(false);
      toast(<NotificationSuccess text="Song uploaded successfully." />);
      return ret.data;

    } catch (err) {
      //debugger;
      console.error(err);
      setShowUploading(false);
      toast(<NotificationSuccess text="Network congestion. Please try again later." />);
    };
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
            {/* <FloatingLabel
              controlId="inputLocation"
              label="Location"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Location"
                contentEditable="false"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </FloatingLabel> */}


            <div>
              <di>
                Location: {location}
              </di>
              <div>
                <input type="file" onChange={onFileChange} />
                {!showUploading ? (
                  <>
                    <button onClick={onUploadButtonClicked}>
                      Upload!
                    </button>
                  </>
                ) : (
                  <>
                    <Button disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Uploading...
                    </Button>
                  </>
                )

                }
              </div>
              {/* {fileData()} */}
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