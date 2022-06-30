import "./playListModal.css";
import ReactDom from "react-dom";
import { useModal } from "../../context";
import { usePlayList } from "../../context";

const PlayListModal = ({ setOpenModal, openModal, video }) => {
  const { modal, setModal } = useModal();
  const { addToPlaylist, playlist, addVideoToPlaylist, removeFromPlaylist } =
    usePlayList();

  const addVideoToPlaylistHandler = (e, obj, video) => {
    !e.target.checked
      ? removeFromPlaylist(obj._id, video)
      : addVideoToPlaylist(obj._id, video);
  };

  const playlistHandler = () => {
    addToPlaylist(modal.title.trim(), modal.desc.trim());
    setModal({ title: "", desc: "" });
  };
  if (!openModal) return null;
  return ReactDom.createPortal(
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='btn-cross-modal'>
          <button className='btn-cross' onClick={() => setOpenModal(false)}>
            X
          </button>
        </div>
        <div className='add-edit-note '>
          {playlist.length > 0 ? (
            <div className='border'>
              <h3>Add to Playlist</h3>
              {playlist.map((obj) => {
                return (
                  <div key={obj._id}>
                    <label htmlFor={obj._id} className='checkbox-input'>
                      <input
                        type='checkbox'
                        id={obj?._id}
                        className='margin-right checkbox-input'
                        checked={obj?.videos?.some((v) => v._id === video._id)}
                        onChange={(e) => {
                          addVideoToPlaylistHandler(e, obj, video);
                        }}
                      />
                      {obj.title}
                    </label>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <div className=' input-container input-margin'>
            <h3>New Playlist</h3>
            <label htmlFor='input-title' className='input-title'>
              <div>Title:</div>
              <input
                id='input-title'
                className='border-note sm-pd title-input '
                placeholder='Title'
                type='text'
                value={modal.title}
                onChange={(e) =>
                  setModal((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </label>
            <label htmlFor='input-title' className='input-title'>
              Description:
              <input
                id='input-title'
                className='border-note sm-pd title-input '
                placeholder='Description'
                type='text'
                value={modal.desc}
                onChange={(e) =>
                  setModal((prev) => ({ ...prev, desc: e.target.value }))
                }
              />
            </label>
          </div>
        </div>
        <button
          className='no-border save-btn'
          onClick={() => {
            playlistHandler();
            setOpenModal(false);
          }}
        >
          Create Playlist
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
export { PlayListModal };
