import { $helper } from '@jx3box/jx3box-common/js/https'
import { __spider } from '@jx3box/jx3box-common/data/jx3box.json'

function getCampServers() {
  return $helper()
    .get('/api/sandmaps')
    .then((res) => {
      return res.data
    })
}

function getCamplist(params) {
  return $helper()
    .get('/api/sandmap', { params })
    .then((res) => {
      return res.data
    })
}
function getCampDetail(params) {
  return $helper()
    .get('/api/sandmap/detail', { params })
    .then((res) => {
      return res.data.data
    })
}

function getCampLog(sandmap_id, castle_id) {
  return $helper()
    .get(`/api/sandmap/${sandmap_id}/castle/${castle_id}/logs`)
    .then((res) => {
      return res.data
    })
}

export { getCamplist, getCampServers, getCampLog, getCampDetail }
