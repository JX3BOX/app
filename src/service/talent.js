import axios from "axios";
import { __ossRoot } from "@jx3box/jx3box-common/js/jx3box.json";

function getTalentVersions() {
    return axios.get(__ossRoot + "data/qixue/index.json");
}

export {getTalentVersions};
