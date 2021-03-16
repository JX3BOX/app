import { $, axios } from "./axios";
import { __node, __Root } from "@jx3box/jx3box-common/data/jx3box.json";
const parse = __node + "facedat";
// const parse = 'http://localhost:3001/' + "facedat";

function uploadData(formdata, vm) {
    return $.post("upload/data", formdata).catch((err) => {
        vm.failCallback(err, vm);
    });
}

function parseData(data,vm) {
    return axios.post(parse, {
        raw : data
    }).catch((err) => {
        vm.failCallback(err, vm);
    });
    
}

export { uploadData, parseData };
