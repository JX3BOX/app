import { $helper } from '@jx3box/jx3box-common/js/https'
import { __spider } from '@jx3box/jx3box-common/data/jx3box.json'

function getCampServers() {
  return $helper().get('/api/sandmaps')
}

function getCamplist(params) {
  return $helper().get('/api/sandmap', { params })
}
function getCampLog(sandmap_id, castle_id) {
  return $helper().get(`/api/sandmap/${sandmap_id}/castle/${castle_id}/logs`)
}

export { getCamplist, getCampServers,getCampLog }
