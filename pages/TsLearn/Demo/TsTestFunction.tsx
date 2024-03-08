
/**
 * 
 */
export class TsTestFunction {

    static ObjectAPI() {
        const target = {}
        const source = { 'key': 'value', "key1": 'value1' }

        // copy source to target
        Object.assign(target, source)
        console.log(`target = ${JSON.stringify(target)}`)  // {"key":"value","key1":"value1"}

        // 获取对象所有的 key
        const keyArray = Object.keys(source).map(key => key)
        console.log(`keyArray = ${JSON.stringify(keyArray)}`)  // ["key","key1"]

    }
}
