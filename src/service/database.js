import axios from "axios";
import { __node } from "@jx3box/jx3box-common/data/jx3box.json";
const API = __node;
// const API = "http://localhost:7002/";
import { $cms } from "@jx3box/jx3box-common/js/https";

function loadResource(type, condition, query, params) {
    return axios
        .get(API + `${type}/${condition}/${query}`, {
            params: params,
        })
        .then((res) => {
            return res.data;
        });
}

function loadStat(client) {
    return axios
        .get(__node, {
            params: {
                client,
            },
        })
        .then((res) => {
            return res.data;
        });
}

function getIsSuperAuthor(uid) {
    return $cms().get(`/api/cms/user/is_super_author/${uid}`);
}

export { loadResource, loadStat, getIsSuperAuthor };
