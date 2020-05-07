function dattxt(data, type) {
  data = TxT(data)
  switch (type) {
    case 'lanren':
      return lanren(data)
    case 'fstt':
      return fstt(data)
  }
}
//通用第一遍转数组
function TxT(str) {
  let newstr = str
    .replace(/[\r\n\s]/g, '')
    .replace(/return/g, '')
    .replace(/=/g, ':')
  newstr = newstr.slice(1, -1)
  return newstr
}
//通用第二遍处理
function STR(str) {
  let num = 0
  let txt = ''
  let arr = []
  for (let i = 0; i < str.length; i++) {
    txt += str[i]
    if (num == 0 && str[i] == ',') {
      txt = txt.slice(0, -1)
      arr.push(txt)
      txt = ''
    } else if (str[i] == '{') {
      num += 1
    } else if (str[i] == '}') {
      num = num - 1
    } else if (str[i] == '[') {
      txt = txt.slice(0, -1) + '"'
    } else if (str[i] == ']') {
      txt = txt.slice(0, -1) + '_layer' + num + '"'
    }
  }
  if (txt !== '') {
    arr = arr.concat(txt)
  }
  str = arr
  return str
}
//懒人
function lanren(data) {
  data = data.replace(/,}/g, '}')
  data = STR(data)
  data = LRA(data)
  let arr = []
  for (let i = 0; i < data.length; i++) {
    data[i] = LRB(data[i])
    arr.push(JSON.parse(data[i]))
  }
  return arr
}
//懒人 -第二遍STR
function LRA(data) {
  let arr = []
  for (let i = 0; i < data.length; i++) {
    let str = data[i]
    if (str.indexOf('{') == 0) {
      str = str.slice(1, -1)
    }
    str = STR(str)
    arr.push(str)
  }
  return arr
}
//懒人 -所有：前添加""
function LRB(data) {
  for (let i = 0; i < data.length; i++) {
    let a = data[i].indexOf(':')
    let t = '"' + data[i].slice(0, a) + '"'
    let u = data[i].slice(a)
    if (u.indexOf(':{') !== -1) {
      u = u.slice(2, -1)
      u = u.split(',')
      for (let i = 0; i < u.length; i++) {
        u[i] = u[i].split(':')
        u[i][0] = '"' + u[i][0] + '"'
        u[i] = u[i].join(':')
      }
      u = u.join(',')
      u = ':{' + u + '}'
    }
    data[i] = t + u
  }
  data = '{' + data.join(',') + '}'
  return data
}
//茗伊
function fstt(data) {
  data = STR(data)
  let type = ''
  data.forEach((e) => {
    if (e.indexOf('"') == 0) {
      type = 'old'
    } else if (e.indexOf('{') == 0) {
      type = 'new'
    }
  })
  switch (type) {
    case 'old':
      return FSO(data)
    case 'new':
      return FSN(data)
  }
}
//茗伊 -old
function FSO(str) {
  //替换
  for (let i = 0; i < str.length; i++) {
    if (str[i].indexOf('"') == 0 && str[i].indexOf('{') !== -1) {
      let n = str[i].indexOf('":')
      let m = str[i].slice(n)
      let c = str[i].slice(1, n).split('_layer')
      c = FSNUM(c[1], c[0])
      str[i] = c + m.slice(1)
    }
  }
  //获取 名字 技能名 和 战斗记录
  let obj = {
    NAME_LIST: null,
    EFFECT_LIST: null,
    EVERYTHING: null,
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i].indexOf('NAME_LIST') !== -1) {
      str[i] = str[i].split('_layer1')
      str[i] = str[i].join('').slice(12)
      console.log(str[i])
      obj.NAME_LIST = JSON.parse(str[i])
    } else if (str[i].indexOf('EFFECT_LIST') !== -1) {
      str[i] = str[i]
        .split('_layer1')
        .join('')
        .slice(15, -1)
        .split('},')
      let arr = FSARR(str[i])
      obj.EFFECT_LIST = arr
    } else if (str[i].indexOf('EVERYTHING') !== -1) {
      str[i] = str[i].slice(15, -1).split('},{')
      let arr = []
      for (let j = 0; j < str[i].length; j++) {
        if (str[i][j].indexOf('{') == -1) {
          str[i][j] = str[i][j].replace(/}/g, '')
        }
        str[i][j] = FSJSON(str[i][j])
        arr.push(str[i][j])
      }
      obj.EVERYTHING = arr
    }
  }
  return obj
}
//鸣音 -new
function FSN(data) {
  let obj = {
    NAME_LIST: null,
    EFFECT_LIST: null,
    EVERYTHING: {
      EVE_1: null,
      EVE_2: null,
      EVE_3: null,
      EVE_4: null,
    },
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].indexOf('{') == 0) {
      data[i] = data[i].slice(1, -1)
    }
    switch (i) {
      case 8:
        data[i] = data[i].split('_layer1')
        data[i] = '{' + data[i].join('') + '}'
        obj.NAME_LIST = JSON.parse(data[i])
        break
      case 10:
        data[i] = data[i]
          .split('_layer1')
          .join('')
          .split('},')
        let arr = FSARR(data[i])
        obj.EFFECT_LIST = arr.filter((l) => l)
        break
      case 11:
        data[i] = FSDATA(data[i], obj.EFFECT_LIST)
        data[i] = JSON.parse(data[i].slice(1))
        obj.EVERYTHING.EVE_1 = data[i]
        break
      case 12:
        data[i] = FSDATA(data[i], obj.EFFECT_LIST)
        data[i] = JSON.parse(data[i].slice(1))
        obj.EVERYTHING.EVE_2 = data[i]
        break
      case 13:
        data[i] = FSDATA(data[i], obj.EFFECT_LIST)
        data[i] = JSON.parse(data[i].slice(1))
        obj.EVERYTHING.EVE_3 = data[i]
        break
      case 14:
        data[i] = FSDATA(data[i], obj.EFFECT_LIST)
        data[i] = JSON.parse(data[i].slice(1))
        obj.EVERYTHING.EVE_4 = data[i]
        break
    }
  }
  return obj
}
// 技能转数组格式显示
function FSARR(data) {
  let arr = []
  for (let j = 0; j < data.length; j++) {
    data[j] = data[j].replace(/\{|}/g, '')
    data[j] = data[j].split(':')
    data[j][1] = data[j][1].split(',')
    data[j][0] = data[j][0].replace(/"/g, '').split(',').join('_')
    let a = ['"'+data[j][0]+'"', data[j][1][0].replace(/"/g, '')]
    arr.push(a)
  }
  return arr
}
// EVERYTHING
function FSDATA(data, obj) {
  data = STR(data)
  let newdata = null
  for (let i = 0; i < data.length; i++) {
    if (data[i].indexOf('{') !== -1) {
      let n = data[i].indexOf('":')
      let m = data[i].slice(n)
      newdata = m.slice(1).split('""')

      for (let j = 0; j < newdata.length; j++) {
        let a = newdata[j].indexOf('"')
        let c = newdata[j].slice(0, a)
        let m = newdata[j]
          .slice(a)
          .split('"_layer')
          .join('_layer')
        c = FSSKILL(obj, c)
        newdata[j] = c + m
      }
      newdata = newdata.join('"')
    }
  }
  return newdata
}
//茗伊  EVERYTHING转对象格式
function FSJSON(data) {
  let str = data.split(',')
  let obj = {}
  if (str[3] == '1') {
    let a = data.indexOf('{')
    let b = data.slice(0, a) //截取{}前的内容
    let c = data.slice(a) //{}
    let d = b.indexOf('"')
    let e = data.slice(d + 1) //截取 "" 后的
    let f = e.indexOf('"')
    let s = e.slice(0, f) //获取到"1,*,1"技能数值
    s = '"' + s.split(',').join('_')
    data = data.slice(0, d) + s + e.slice(f) //拼接全部的数据
    let n = data.slice(0, a)
    n = n.split(',')
    for (let i = 0; i < n.length; i++) {
      let key = 'ev_' + i
      let val = n[i]
      obj[key] = val
      if (i == n.length - 1) {
        i = 'ev_' + i
        obj[i] = data.slice(a)
      }
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      obj[i] = str[i]
    }
  }
  return obj
}
//茗伊 -技能替换
function FSSKILL(obj, key) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i][0] == key) {
      key = obj[i][1]
    }
  }
  return key
}
//茗伊 -type数字替换
function FSNUM(str, str2) {
  switch (str) {
    case '0':
      switch (str2) {
        case '1':
          return '"UUID"'
        case '2':
          return '"BOSSNAME"'
        case '3':
          return '"VERSION"'
        case '4':
          return '"TIME_BEGIN"'
        case '5':
          return '"TICK_BEGIN"'
        case '6':
          return '"TIME_DURING"'
        case '7':
          return '"TICK_DURING"'
        case '8':
          return '"AWAYTIME"'
        case '9':
          return '"NAME_LIST"'
        case '10':
          return '"FORCE_LIST"'
        case '11':
          return '"EFFECT_LIST"'
        case '12':
          return '"DAMAGE"'
        case '13':
          return '"HEAL"'
        case '14':
          return '"BE_HEAL"'
        case '15':
          return '"BE_DAMAGE"'
        case '16':
          return '"EVERYTHING"'
      }
      return str2
    case '1':
      return str2
  }
}
export { dattxt }
