import http from "../axios/axios";

const query = {
    post(url, params) {
        return http.post(url, params);
    },
    get() {
        return http.get(url)
    }
}

export default { query }
