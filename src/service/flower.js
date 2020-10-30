import { $next } from "@jx3box/jx3box-common/js/axios";

// https://github.com/JX3BOX/jx3box-api/blob/master/DOCS/flower-price.md

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

function getFlowerPrices(query, vm) {
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
            vm.loading = false;
        });
}

function getFlowerPrice(query, vm) {
    return $next
        .get("api/flower/price/query", {
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
            vm.loading = false;
        });
}

export { getFlowerPrice, getFlowerPrices, getFlowerRank };
