import axios from 'axios';

const KEY = 'AIzaSyBlPHkp2GhMPTv6dIWeY7VAh-WugnDVlEQ';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3'
})