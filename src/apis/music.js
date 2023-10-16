import axios from "../axios";

export const getSong = (sid) => new Promise(async(resolve,reject) => {
    try {
        const response = await axios({
            url:'/song',
            method:'get',
            params:{id:sid}
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const getDetailSong = (sid) => new Promise(async(resolve,reject) => {
    try {
        const response = await axios({
            url:'/infoSong',
            method:'get',
            params:{id:sid}
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})