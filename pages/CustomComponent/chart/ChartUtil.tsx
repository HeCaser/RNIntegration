
import { Line } from 'react-native-svg'
import LINES from './DATA.json'
import { IBaseChartModel } from './interface';

export default class ChartUtils {
    static getLine() {
        let lenght = LINES.length
        let res: IBaseChartModel[] = new Array[lenght]
        for (let i = 0; i < lenght; i++) {
            let p: IBaseChartModel = { x: i, y: parseFloat(LINES[i].fund_point) };
            res[i] = p
        }
        return res
    }
}
