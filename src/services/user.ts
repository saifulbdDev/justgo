import axios from "axios";

export const getUserList = async () => {
    const params = {
        results: 100,
        inc: 'name,email,picture,registered,login,gender'
    }
    try {
        let res = await axios.get('https://randomuser.me/api', {params: params});
        return JSON.parse(JSON.stringify(res)).data;
    } catch (error) {
        console.log(error);
        
    }
}