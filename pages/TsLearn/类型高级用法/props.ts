let colors = {
    "T010": {
        "day": "#101423",
        "night": "#CCCCCC"
    },
    "T020": {
        "day": "#797C86",
        "night": "#898A8E"
    },
    "T030": {
        "day": "#AEB0BB",
        "night": "#5A5C61"
    },
    "T040": {
        "day": "#CCD0D9",
        "night": "#42454B"
    },
    "T060": {
        "day": "#FFFFFF",
        "night": "#EEEEEE"
    },
    "T070": {
        "day": "#282C39",
        "night": "#B8B9BB"
    },
    "T080": {
        "day": "#447BD7",
        "night": "#4C79C3"
    }
}

type colorStrings = keyof typeof colors;  // 等价 "T010" | "T020" | "T030" | "T040" | "T060" | "T070" | "T080"


let color: colorStrings = "T010" // 编辑器会提示可输入的具体值

let colorNotRight: colorStrings = "black" // "black" 不符合 colorStrings 定义, 编辑器会有报错提示