import axios from "axios";
import { __ossRoot, __ossMirror } from "@jx3box/jx3box-common/data/jx3box.json";
import { $cms } from "@jx3box/jx3box-common/js/https";

function getTalentVersions() {
    return axios.get(__ossRoot + "data/qixue/index.json");
}

function getTalents(param) {
    return $cms().get(`/api/cms/app/talents`, {
        params: param,
    });
}

function addTalent(data) {
    return $cms().post("/api/cms/app/talent", data);
}

function putTalent(id, data) {
    return $cms().put("/api/cms/app/talent/" + id, data);
}

function removeTalent(id) {
    return $cms().delete("/api/cms/app/talent/" + id);
}

function getTalent(id) {
    return $cms().get("/api/cms/app/talent/" + id);
}

export { getTalentVersions, getTalents, addTalent, putTalent, removeTalent, getTalent };
