import axios from "axios";
import { $cms } from "@jx3box/jx3box-common/js/https";
import { __node } from "@jx3box/jx3box-common/data/jx3box.json";

function getIconsByName(str,client = 'std') {
    return axios.get(`${__node}icon/name/${str}`,{
        params : {
            client : client
        }
    }).then((res) => {
        return res.data;
    });
}

function getMyFavIcons() {
    return $cms()
        .get(`/api/cms/user/my/meta`, {
            params: {
                key: "favicons",
            },
        })
        .then((res) => {
            return res.data.data;
        });
}

function setMyFavIcons(data) {
    return $cms()
        .post(`/api/cms/user/my/meta`,{
            val : data,
        },{
            params: {
                key: "favicons",
            },
        })
        .then((res) => {
            return res.data.data;
        });
}

export { getIconsByName, getMyFavIcons, setMyFavIcons };
