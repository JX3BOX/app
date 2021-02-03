import axios from "axios";
import { __ossRoot,__ossMirror } from "@jx3box/jx3box-common/js/jx3box.json";

function getTalentVersions() {
    return axios.get(__ossMirror + "data/qixue/index.json");
}

export {getTalentVersions};
