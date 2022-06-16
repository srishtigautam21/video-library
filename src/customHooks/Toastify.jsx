import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginToast = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1500,
    closeOnClick: true,
  });
};

const addToWatchLaterToast = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1500,
    closeOnClick: true,
  });
};
const playlistToast = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
  });
};
const likedVideoToast = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1500,
  });
};
const addVideoToPlaylistoast = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
  });
};

const errorToast = (text) => {
  toast.error(text, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
  });
};
const orderSuccessToast = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1500,
  });
};

export {
  loginToast,
  addToWatchLaterToast,
  playlistToast,
  likedVideoToast,
  addVideoToPlaylistoast,
  errorToast,
  orderSuccessToast,
};
