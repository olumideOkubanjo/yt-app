import axios from "axios";

const KEY = "AIzaSyArVBytvisQoxkx7deA8OHtbCipgwZsTW4";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
        key: KEY,
        type: 'video'
	},
});
