import { $cms, $node } from "@jx3box/jx3box-common/js/https";

function getBhhjInfo(){
    return $node()
        .get('/bahuang')
        .then((res) => {
            return res.data;
        });
}
function savebh(data){
    return $cms().post("/api/cms/app/bahuang", data);
}
function delBh(id) {
    return $cms().delete("/api/cms/app/bahuang/" + id);
}
function putBh(id, data) {
    return $cms().put("/api/cms/app/bahuang/" + id, data);
}
function getBh(id) {
    return $cms().get("/api/cms/app/bahuang/" + id);
}
function getBhList() {
    return $cms().get("/api/cms/app/bahuang/my" );
}

export { getBhhjInfo,savebh,getBh,putBh,delBh,getBhList };
