import User from "@jx3box/jx3box-common/js/user";
import {$cms} from '@jx3box/jx3box-common/js/https'

function setFlowerServer(server) {
    localStorage && localStorage.setItem("flower_server", server);
}

function getProfile() {
    return $cms().get('/api/cms/user/my/profile')
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

function getTempServer(type) {
    return localStorage && localStorage.getItem(type);
}

async function getServer(type) {
    let isLogin = User.isLogin();
    // 1.如果已登录
    if (isLogin) {
        // 1.1尝试获取资料设定服务器
        return getProfile()
            .then((data) => {
                return data.server;
            })
            .then((server) => {
                if (server) {
                    return server;
                } else {
                    // 1.2尝试获取本地搜索记录
                    return getTempServer(type);
                }
            });
    } else {
        // 2.如果未登录，直接尝试获取本地搜索记录
        return getTempServer();
    }
}

export { setFlowerServer, getServer, getProfile,getTempServer };
