import axios from "axios"

const getPageMsg = () =>
    axios.post("http://gitee.com/oauth/token")


export default getPageMsg