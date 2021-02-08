import { __spider } from "@jx3box/jx3box-common/js/jx3box.json";
import { $next } from "@jx3box/jx3box-common/js/axios";
import axios from "axios";

function getFlower(params) {
    return axios.get(__spider + "flower", {
        params: params,
    });
}

function getFlowerRank(query, vm) {
    return $next
        .get("api/flower/price/rank", {
            params: query,
            withCredentials: true,
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
