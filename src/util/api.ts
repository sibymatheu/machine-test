import { API_URL } from "../config/config";
const _path = (path: string, query?: any): string => {
    var queryString = ``;
    if (query && Object.keys(query).length > 0) {
        for (var key in query) {
            queryString += `&${key}=${query[key]}`;
        }
    }
    return (`${path}${queryString ? queryString : ''}`);
}
export const getData = async (params: any, callback: (res: any) => void) => {
    let response = await fetch(_path(API_URL, params));
    if (response.status === 200) {
        let pollution = await response.json();
        callback(pollution);
    } else {
        callback(null);
    }
}