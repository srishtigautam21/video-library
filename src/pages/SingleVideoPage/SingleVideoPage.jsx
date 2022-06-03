import YouTube from "react-youtube";

const SingleVideoPage = ({ _id }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  return <YouTube videoId={_id} opts={opts} onReady={this._onReady} />;
};
export { SingleVideoPage };
