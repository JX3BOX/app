import { $helper } from '@jx3box/jx3box-common/js/https'
import { __spider } from '@jx3box/jx3box-common/data/jx3box.json'

function getCamplist(params) {
  return $helper().get('/api/sandmap', {
    params: params,
  })
}

export { getCamplist }
