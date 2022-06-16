import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginLogoutToast = (text) => {
  toast.success(text, {
    position: "top-center",
    autoClose: 1500,
    closeOnClick: true,
  });
};

const addToWatchLaterToast = (text) => {
  toast.success(text, {
    position: "top-center",
    autoClose: 1500,
    closeOnClick: true,
  });
};
const playlistToast = (text) => {
  toast.success(text, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
  });
};
const likedVideoToast = (text) => {
  toast.success(text, {
    position: "top-center",
    autoClose: 1500,
  });
};
const addVideoToPlaylistoast = (text) => {
  toast.success(text, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
  });
};

const errorToast = (text) => {
  toast.error(text, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
  });
};
const removeFromWatchLater = (text) => {
  toast.warn(text, {
    position: "top-center",
    autoClose: 1500,
  });
};
const unlikeVideoToast = (text) => {
  toast.warn(text, {
    position: "top-center",
    autoClose: 1500,
  });
};
const deletePlaylist = (text) => {
  toast.warn(text, {
    position: "top-center",
    autoClose: 1500,
  });
};
const removeFromPlaylist = (text) => {
  toast.warn(text, {
    position: "top-center",
    autoClose: 1500,
  });
};
const removeFromHistory = (text) => {
  toast.warn(text, {
    position: "top-center",
    autoClose: 1500,
  });
};

export {
  loginLogoutToast,
  addToWatchLaterToast,
  playlistToast,
  likedVideoToast,
  addVideoToPlaylistoast,
  errorToast,
  removeFromWatchLater,
  unlikeVideoToast,
  deletePlaylist,
  removeFromPlaylist,
  removeFromHistory,
};
