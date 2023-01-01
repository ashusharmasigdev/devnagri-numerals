type dictType = {
    [key: string]: string
}

export const arabicTodevnagriDictionary: dictType = {
    '0': '०',
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९'
}

export const devnagriToArabicDictionary: dictType = {
    '०': '0',
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9'
}

export const toDevnagriNumeral = (num: number): string => {
    let str: string = `${num}`;
    let result: Array<string> = [];
    str.split('').map((x) => {
        result.push(arabicTodevnagriDictionary[x]);
    });
    return result.join('');
}


export const toArabicNumeral = (devnagri_num: string): number => {
    let result: string = '';
    devnagri_num.split('').map((v) => {
        result += devnagriToArabicDictionary[v];
    });
    return parseInt(result);
}