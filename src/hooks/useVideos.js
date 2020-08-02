//The name of this hook has to be similar to the function that you want it to perfrom.
// This custom hook will take a dfault search term then return a list of videos and a function to search
import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async (term) => {
		// Remember q here is specific.
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});

		setVideos(response.data.items);
	};

	return [videos, search];
};

export default useVideos;
