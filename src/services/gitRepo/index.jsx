import { api } from "../api";

export async function find (path) {
    try {
        const { data } = await api.get (`repos/${path}`);
        return data;
    } catch (error) {
        throw (error);
    }
}