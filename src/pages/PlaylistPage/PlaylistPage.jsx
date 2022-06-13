import "./playlistPage.css";
import { useState } from "react";
import { PlayListModal } from "../../component";
import { usePlayList } from "../../context";

const PlaylistPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { playlist } = usePlayList();
  console.log(playlist);
  return (
    <>
      <div className='playlist-grid-container'>
        <div className='playlist-category'>
          <button
            className='button  button-overlay'
            onClick={() => setOpenModal(true)}
          >
            New Playlist
          </button>
          <ul className='list'>
            {playlist.map((obj) => {
              return (
                <li key={obj._id} className='list-item '>
                  <button
                    // style={obj._id === selectedPlaylist ? styleObj : {}}
                    className='button button-sec'
                    // onClick={() => switchPlaylist(obj._id)}
                  >
                    {obj.title}
                  </button>
                </li>
              );
            })}
          </ul>
          <PlayListModal setOpenModal={setOpenModal} openModal={openModal} />
        </div>
      </div>
      {/* <button className='button outline-button'>Delete Playlist</button> */}
    </>
  );
};
export { PlaylistPage };
