import { axios, $ } from "../service/axios";
import { __next } from "@jx3box/jx3box-common/js/jx3box.json";
// 排行榜
// const rank = __next + 'api/flower/price/rank';   //TODO:
const rank = "/api/flower/price/rank";

// 类型
// const kind = __next + 'api/flower/price/rank'    //TODO:
const kind = "/api/flower/price/rank";

// 详情
// const detail = __next + "api/flower/price/query";        //TODO:
const detail = "/api/flower/price/query";

// https://github.com/JX3BOX/jx3box-api/blob/master/DOCS/flower-price.md

function getFlowerRank(server, vm) {
    return axios
        .get(rank, {
            params: {
                server: server,
            },
            withCredentials: true,
        })
        .then((res) => {
            if (vm) {
                // vm.$notify({
                //     title: "加载成功",
                //     message: "数据加载成功",
                //     type: "success",
                // });
            }
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            if (vm) {
                vm.loading = false;
            }
        });
}

function getFlowerPrices(query, vm) {
    return axios
        .get(kind, {
            params: query,
            withCredentials: true,
        })
        .then((res) => {
            // vm.$notify({
            //     title: "加载成功",
            //     message: "数据加载成功",
            //     type: "success",
            // });
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            vm.loading = false;
        });
}

function getFlowerPrice(query, vm) {
    return axios
        .get(detail, {
            params: query,
            withCredentials: true,
        })
        .then((res) => {
            // vm.$notify({
            //     title: "加载成功",
            //     message: "数据加载成功",
            //     type: "success",
            // });
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            vm.loading = false;
        });
}

export { getFlowerPrice, getFlowerPrices, getFlowerRank };
