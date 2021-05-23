import axios from "axios";
import {$cms} from '@jx3box/jx3box-common/js/https'

const URL = '/api/cms/app/meridians'

// 列出自己的经脉模拟器方案
function getMeridiansList() {
    return $cms().get(URL).then(res => {return res})
}

// 创建经脉模拟器方案
function createMeridians(data) {
    return $cms().post(URL, data).then(res => {return res})
}

// 更新经脉模拟器方案
function updateMeridians({id, data}) {
    return $cms().put(URL + '/' + id, data).then(res => {return res})
}

// 获取指定经脉模拟器方案
function getMeridians(id) {
    return $cms().get(URL + '/' + id).then(res => {return res})
}

// 删除经脉模拟器方案
function removeMeridians(id) {
    return $cms().delete(URL + '/' + id).then(res => {return res})
}


export {getMeridiansList, createMeridians, updateMeridians, getMeridians, removeMeridians}