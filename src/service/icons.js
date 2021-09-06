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

function getMyFavIcons(client = 'std') {
    let key = client == 'origin' ? 'origin_favicons' : 'favicons'
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

function setMyFavIcons(data,client = 'std') {
    let key = client == 'origin' ? 'origin_favicons' : 'favicons'
    return $cms()
        .post(`/api/cms/user/my/meta`,{
            val : data,
        },{
            params: {
                key: key,
            },
        })
        .then((res) => {
            return res.data.data;
        });
}

export { getIconsByName, getMyFavIcons, setMyFavIcons };
