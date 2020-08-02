import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos("Buildings");
	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={search} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="5 wide column">
						<VideoList
							videos={videos}
							// This can be refactored more but i'm leaving it this way for you to understand more
							onVideoSelect={(video) => {
								setSelectedVideo(video);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
