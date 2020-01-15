import axios from 'axios';

//this destructures data and extracts height directly.
export async function get_height(obj) {
    return axios({
        method: 'post',
        url: 'http://' + obj.daemon_host + ':' + obj.daemon_port + '/get_info',
        data: obj,
    }).then((resp) => {
        return resp.data.height;
    });
}

//generic grab for get_info on a safexd full node
export async function get_chain_info(obj) {
    return axios({
        method: 'get',
        url: 'http://' + obj.daemon_host + ':' + obj.daemon_port + '/get_info',
        data: obj,
    }).then((resp) => {
        return resp.data;
    });
}