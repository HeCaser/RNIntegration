
/**
 * 
 */
export class TsTestFunction {

    static test() {
        const OtherProps = {};
        const a ={"a":"aa"}
        Object.keys(a).map(item=>{
            OtherProps[item] = a[item]
        })
      
        alert(`a1 = ${JSON.stringify(OtherProps)}`)
    }
}
