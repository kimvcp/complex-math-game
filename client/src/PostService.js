import axios from 'axios';
import lodash from 'lodash'

const multUrl = 'backend/'
const highScoreUrl = 'api/posts/'

class PostService{

    // get question according to the index
    static getMultiplication(index){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.get( multUrl + "playing/" + index +"/");
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
                const res = await axios.get(highScoreUrl);
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

export default PostService;