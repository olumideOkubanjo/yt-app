import React from "react";
import VideoItem from "./VideoItem";

//We destuctured the props to get videos
const VideoList = ({ videos, onVideoSelect }) => {
	const renderList = videos.map((video) => {
		return (
			<VideoItem
				video={video}
				onVideoSelect={onVideoSelect}
				key={video.id.videoId}
			/>
		);
	});

	return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
