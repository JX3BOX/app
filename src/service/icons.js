import axios from "axios";
import { $cms, $node } from "@jx3box/jx3box-common/js/https";
import { __staticPath } from "@jx3box/jx3box-common/data/jx3box.json";

function getIconsByName(str, client = "std") {
	return $node()
		.get(`/icon/name/${str}`, {
			params: {
				client: client,
			},
		})
		.then((res) => {
			return res.data;
		});
}

function getMyFavIcons(client = "std") {
	let key = client == "origin" ? "origin_favicons" : "favicons";
	return $cms()
		.get(`/api/cms/user/my/meta`, {
			params: {
				key: key,
			},
		})
		.then((res) => {
			return res.data.data;
		});
}

function setMyFavIcons(data, client = "std") {
	let key = client == "origin" ? "origin_favicons" : "favicons";
	return $cms()
		.post(
			`/api/cms/user/my/meta`,
			{
				val: data,
			},
			{
				params: {
					key: key,
				},
			}
		)
		.then((res) => {
			return res.data.data;
		});
}

function getEmoList() {
	return axios.get(__staticPath.jsdelivr + `jx3-icon@1.1.0/emotion.json`).then((res) => {
		return res.data;
	});
}

export { getIconsByName, getMyFavIcons, setMyFavIcons, getEmoList };
