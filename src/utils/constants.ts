export const BASE_URL = "http://localhost:3000";

export const buildURL = (url, params) => {
    let urlWithParams = url;

    Object.entries(params).forEach(([key, value], i) => {
        key = key.replace(/__/g, ".");
        const sign = !i ? "?" : "&";
        urlWithParams += `${sign}${key}=${value}`;
    });

    return urlWithParams;
};