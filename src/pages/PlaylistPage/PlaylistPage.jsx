import "./playlistPage.css";
import { useState } from "react";
import { PlayListModal } from "../../component";

const PlaylistPage = () => {
  const [openModal, setOpenModal] = useState(false);
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
            {/* {playlist.map((obj) => { */}
            {/* return ( */}
            <li className='list-item '>
              <button
                // style={
                //     obj._id === selectedPlaylist
                //         ? styleObj
                //         : {}
                // }
                className='button button-sec'
                // onClick={() => switchPlaylist(obj._id)}
              >
                {/* {obj.title} */}
                hello
              </button>
            </li>
            {/* ); */}
            {/* })} */}
          </ul>
          <PlayListModal setOpenModal={setOpenModal} openModal={openModal} />
        </div>
      </div>
      {/* <button className='button outline-button'>Delete Playlist</button> */}
    </>
  );
};
export { PlaylistPage };
