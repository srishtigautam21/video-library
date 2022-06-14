import "./playlistPage.css";
import { useState } from "react";
import { PlayListModal } from "../../component";
import { usePlayList } from "../../context";
import { PlayListCard } from "../../component";

const PlaylistPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { playlist, removePlaylist } = usePlayList();

  const [selectedPlaylist, setSelectedPlaylist] = useState(
    playlist.length > 0 ? playlist[0].title : ""
  );

  const switchPlaylist = (playlistId) => {
    setSelectedPlaylist(playlistId);
  };

  const getSelectedPlaylistVideos = (playlist) => {
    return (
      playlist.find((playlis) => playlis._id === selectedPlaylist)?.videos ?? []
    );
  };

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
                    onClick={() => switchPlaylist(obj._id)}
                  >
                    {obj.title}
                  </button>
                </li>
              );
            })}
          </ul>
          <PlayListModal setOpenModal={setOpenModal} openModal={openModal} />
        </div>
        {playlist.length > 0 && (
          <div className='playlist-video-container'>
            <div className='playlist-video-cta'>
              <h1>
                {
                  playlist.find((playlis) => playlis._id === selectedPlaylist)
                    ?.title
                }
              </h1>
              {selectedPlaylist && (
                <button
                  className='button outline-button'
                  onClick={() => removePlaylist(selectedPlaylist)}
                >
                  Delete playlist
                </button>
              )}
            </div>
            <div className='playlist-video-content'>
              {getSelectedPlaylistVideos(playlist).map((video) => (
                <PlayListCard
                  video={video}
                  playlistId={selectedPlaylist}
                  key={video._id}
                />
              ))}
              {getSelectedPlaylistVideos(playlist).length === 0 && (
                <div className='playlist-video-container font-normal'>
                  No videos in playlist.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {/* <button className='button outline-button'>Delete Playlist</button> */}
    </>
  );
};
export { PlaylistPage };
