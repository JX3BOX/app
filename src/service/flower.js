import { __spider } from "@jx3box/jx3box-common/data/jx3box.json";
import { $https } from "@jx3box/jx3box-common/js/https";
import axios from "axios";

function getFlower(params) {
    return axios.get(__spider + "flower", {
        params: params,
    });
}

function getFlowerRank(query, vm) {
    return $https("next", {
        proxy: true,
        interceptor: "next",
    })
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
