import axios from 'axios';
import lodash from 'lodash'

const backUrl = 'backend/';
const highScoreUrl = 'api/posts/end/:id/:hishscore'

class PostService{

    //Get question according to the index
    static getMultiplication(index){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.get(backUrl + index + '/');
                const data = lodash.shuffle(res.data);
                resolve(
                    data.map(element => ({
                        ...element,
                        createdAt: new Date(element.createAt)
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }
    static getAllHighScore(index){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.get(highScoreUrl + index);
                const data = res.data
                resolve(
                    data.map(element => ({
                        ...element,
                        createdAt: new Date(element.createAt)
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }
}

export default PostService;