import "./playlistPage.css";
import { useState, useEffect } from "react";
import { PlayListModal, Footer, PlayListCard } from "../../component";
import { usePlayList } from "../../context";

import { useDocumentTitle } from "../../customHooks/useDocumentTitle";

const PlaylistPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { playlist, removePlaylist } = usePlayList();
  useDocumentTitle("Playlist Page");

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

  useEffect(() => {
    if (playlist.length > 0 && selectedPlaylist === "") {
      setSelectedPlaylist(playlist[0]._id);
    } else if (
      playlist.length > 0 &&
      !playlist.find((list) => list._id === selectedPlaylist)
    ) {
      setSelectedPlaylist(playlist[0]._id);
    } else if (playlist.length === 0) {
      setSelectedPlaylist("");
    }
    // eslint-disable-next-line
  }, [playlist]);

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
      <div className='footer footer-mediaquery'>
        <Footer />
      </div>
    </>
  );
};
export { PlaylistPage };
