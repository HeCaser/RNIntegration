/**
 * 记录 function 相关 Demo
 */


 function map<Input, OutPut>(arr: Input[], fuc: (arg: Input) => OutPut): OutPut[] {
    return arr.map(fuc)
}

