import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <div className="header">{video.snippet.title}</div>
        <h4>{video.snippet.description}</h4>
      </div>
    </div>
  );
};
export default VideoDetail;
