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
            onClick={(open) => setOpenModal(!open)}
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
        </div>
      </div>
      <button className='button outline-button'>Delete Playlist</button>
      {openModal && <PlayListModal setOpenModal={setOpenModal} />}
    </>
  );
};
export { PlaylistPage };
