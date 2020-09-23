import axios from "axios";
import { __node } from "@jx3box/jx3box-common/js/jx3box.json";
const API = __node   //TODO:
// const API = "http://localhost:3001/";

function loadResource(type, condition, query, params) {
    return axios
        .get(API + `${type}/${condition}/${query}`, {
            params: params,
        })
        .then((res) => {
            return res.data;
        });
}

function loadStat() {
    return axios.get(__node).then((res) => {
        return res.data;
    });
}

export { loadResource, loadStat };
