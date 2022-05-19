import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import AddSong from "./AddSong";
import Song from "./Song";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import {
  getSongs as getSongList,
  uploadSong,
  //createSong,
  editSong,
  deleteSong,
} from "../../utils/api";

const Songs = () => {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);

    const onLoading = () => {
      setLoading(true);
  };

  const offLoading = () => {
    setLoading(false);
};

    const getSongs = useCallback(async () => {
      try {
        setLoading(true);
        setSongs(await getSongList());
      } catch (error) {
        console.log({ error });
      } finally {
        setLoading(false);
      }
    });


    const addSong = async (data) => {
        try {
          setLoading(true);
          uploadSong(data).then((resp) => {
            getSongs();
          });
          toast(<NotificationSuccess text="Song added successfully." />);
        } catch (error) {
          console.log({ error });
          toast(<NotificationError text="Failed to create a song." />);
        } finally {
          setLoading(false);
        }
      };

      const edit = async (data) => {
        try {
          debugger;
          setLoading(true);
          editSong(data).then((resp) => {
            getSongs();
          });
          toast(<NotificationSuccess text="Song updated successfully." />);
        } catch (error) {
          console.log({ error });
          toast(<NotificationError text={error.toString()} />);
        } finally {
          setLoading(false);
        }
      };

      const deleteSongF = async (id) => {
          try {
            setLoading(true);
            deleteSong(id).then((resp) => {
              getSongs();
            });
            toast(<NotificationSuccess text="Song deleted successfully." />);
          } catch (error) {
            console.log({ error });
            toast(<NotificationError text={error.toString()} />);
          } finally {
            setLoading(false);
          }
        };

      // const buy = async (id, price) => {
      //   try {
      //     await buySong({
      //       id,
      //       price,
      //     }).then((resp) => getSongs());
      //     toast(<NotificationSuccess text="Song bought successfully" />);
      //   } catch (error) {
      //     toast(<NotificationError text="Failed to purchase song." />);
      //   } finally {
      //     setLoading(false);
      //   }
      // };
      
      useEffect(() => {
        getSongs();
      }, []);

      return (
        <>
          {!loading ? (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fs-4 fw-bold mb-0">Music Shared</h1>
                <AddSong save={addSong} onLoading={onLoading} offLoading={offLoading} />
              </div>
              <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
                {songs.map((_song) => (
                  <Song
                    song={{
                      ..._song,
                    }}
                      edit={edit} deleteFunc={deleteSongF}
                  />
                ))}
              </Row>
            </>
          ) : (
            <Loader />
          )}
        </>
      );
    };
    
    export default Songs;