import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        // Note: To call the onVideoSelect we use an arrow function or you could use another function callback
		<div
			className="video-item item"
			onClick={() => {
				onVideoSelect(video);
			}}
		>
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.high.url} />
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
