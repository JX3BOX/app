import { axios } from "./axios";
// DOC http://j3pz.com:8080/developer/#/FurnitureCtrl/FurnitureCtrl.list
// category 是类别，是一个五位数字，万位表示一级类别，千位百位表示二级类别，三级类别是0。比如 10900 就是水池
// source 是来源搜索字符串，来源中含有 source 的都会匹配到。
// interactable 查询可交互
// limit 限制最大家园等级
// environment 是风水
// beauty 是观赏
// robustness 是坚固
// practicality 是实用
// fun 是趣味
// orderBy 填需要用于排序的字段
// order=1 表示按升序排列，0表示降序排列


const furnitureApi = 'https://apis.j3pz.com/furniture';  //TODO:
// const furnitureApi = '/furniture';
// const furnitureApi = 'http://localhost:1024/house';

function getFurnitures(query) {
    return axios.get(furnitureApi, {
        params: query,
    });
}

export { getFurnitures };