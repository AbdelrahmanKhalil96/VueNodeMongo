import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService{

 /* eslint-disable */
//Get

static getPosts(){
    return new Promise(async(resolve, reject)=>{
        try{
            const res = await axios.get(url);
            const data = res.data;
            resolve(
                data.map(post =>({
                ...post,
                CreatedAt: new Date(post.CreatedAt)
                }))
            );
            }
            catch(err){
                reject(err);
            }
        
    })
}

static insertPost(text){
    return axios.post(url, {
text });

}
static deletePost(id){
    return axios.delete(`${url}${id}`);
}
}

export default PostService;