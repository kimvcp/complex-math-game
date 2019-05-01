import axios from 'axios';
import lodash from 'lodash'

const url = 'api/game/';

class APIService{

    // get question according to the index
    static getMultiplication(number){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.get( url + "play/" + number +"/");
                const data = lodash.shuffle(res.data);
                resolve(
                    data.map(element => ({
                        ...element,
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }
    // get all the highscore in each table
    static getAllHighScore(){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.get(url + "highscores");
                const data = res.data
                resolve(
                    data.map(element => ({
                        ...element,
                    }))
                    );
                }catch(err){
                    reject(err);
                }
            });
        }
        // get the highscore according to the number
        static getHighScore(number){
            return new Promise(async (resolve,reject) => {
                try{
                    const res = await axios.get(url + "highscore/" + number);
                    const data = res.data
                resolve(
                    data.map(element => ({
                        ...element,
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }

    static postHighScore(number,highscore){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.post(url + "highscore/" + number + "/" + highscore);
                const data = res.data
                resolve(
                    data.map(element => ({
                        ...element,
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }
}

export default APIService;