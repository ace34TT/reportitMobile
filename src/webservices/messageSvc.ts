import { get, post } from "./https"

const urls = {
    all: "message/all"
}

export const allMsg = async (): Promise<any[]> => {
    return get(urls.all).then((rep: { data: any; }) => {
        // console.log(rep.data);
        return rep.data
    });
}