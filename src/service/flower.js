import { __spider } from "@jx3box/jx3box-common/data/jx3box.json";
import { $next } from "@jx3box/jx3box-common/js/https";
import axios from "axios";

function getFlower(params) {
    return axios.get(__spider + "flower", {
        params: params,
    });
}

function getFlowerRank(query, vm) {
    return $next()
        .get("/api/flower/price/rank", {
            params: query,
        })
        .then((res) => {
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

export { getFlower, getFlowerRank };
