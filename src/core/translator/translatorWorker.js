// 这个文件不用啦！worker在html里
self.addEventListener("message", (event) => {
    let data = event.data;
    let cmd = data.cmd;
    let dict = data.dict;
    let encoding = data.encoding;
    switch (cmd) {
        case "translate-str":
            postResult(tr2j3(cn2tr(data.str, dict), dict), "str");
            break;
        case "translate-file":
            let reader = new FileReaderSync();
            let preText = reader.readAsText(data.file, encoding);
            let jx3str = tr2j3(cn2tr(preText, dict), dict);
            // 创建文件
            let blob = new Blob([jx3str]);
            postResult(blob, "file");
            break;
        default:
            break;
    }
});

function postResult(result, type) {
    self.postMessage({ success: true, type: type, result: result });
}

//标准简体->台湾正体
function cn2tr(str, dict) {
    let arr = new Array(str.length);
    let i = -1;
    let currentIndexInStr = 0;
    // 进度条
    let progress = 0;
    let lastProgress = 0;

    for (let char of str) {
        i = dict["zh-cn"].indexOf(char);
        i > -1 ? arr.push(dict["zh-tr"][i]) : arr.push(char);
        currentIndexInStr += 1;
        progress = Math.floor((((currentIndexInStr / str.length) * 99.5) / 100) * 10000) / 100;
        if (progress >= Math.floor(lastProgress) + 1) {
            lastProgress = progress;
            postResult(Math.round(progress * 100) / 100, "progress");
        }
    }
    return arr.join("");
}

//台湾正体->剑三词汇
function tr2j3(str, dict) {
    let x = -1; //匹配位置
    let progress = 0;
    let lastProgress = 99.5;
    let dictLength = dict["jx3box-cn"].length;
    let currentIndexInDict = 0;
    dict["jx3box-cn"].forEach((word, i) => {
        x = str.indexOf(word);
        if (x > -1) {
            let re = new RegExp(word, "g");
            str = str.replace(re, dict["jx3box-tr"][i]);
        } else {
        }
        currentIndexInDict += 1;
        progress = Math.floor((((currentIndexInDict / dictLength) * 0.5) / 100) * 10000) / 100 + 50;
        if (progress >= Math.floor(lastProgress) + 1) {
            lastProgress = progress;
            postResult(Math.round(progress * 100) / 100, "progress");
        }
    });
    return str;
}
