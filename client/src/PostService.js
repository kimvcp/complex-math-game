import axios from 'axios';
import lodash from 'lodash'

const backUrl = 'backend/';

class PostService{
    //Get Posts
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
}

export default PostService;