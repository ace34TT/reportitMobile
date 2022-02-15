import { IMessage } from "../interfaces/IMessage";
import { get, post } from "./https"

const urls = {
    all: "message/all"
}

export const allMsg = async (): Promise<IMessage[]> => {
    return get(urls.all).then((rep: any) => {
        return rep.data
    });
}