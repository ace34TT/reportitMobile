import { get, post } from "./https"

const urls = {
    all: "message/all",
    add: "user/add"
}

export const addUser = async (data: any): Promise<any> => {
    const rep = await post(urls.add, data);
    return rep.body;
}