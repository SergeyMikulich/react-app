export default class Appservice{
    constructor(){
        this._apiBase = 'http://localhost:300';
    }
    getResourse = async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`); 
        if (!res.ok){
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }
        return await res.json();
    }
    getAllmyPosts = async () => {
        return await this.getResourse('2/my_posts/');
    }
    getAllmyPhotos = async () => {
        const res = await this.getResourse('2/my_posts/');
        return res.map(this._transformmyPosts)
    }
    getAllPosts = async () => {
        return await this.getResourse('0/posts/');
    }
    getAllPhotos = async () =>{
        const res =  await this.getResourse('0/posts/');
        return res.map(this._transformPosts);
    }
    getAllUsers = async () =>{
        const res =  await this.getResourse('0/posts/');
        return res.map(this._transformUsers);
    }
    getAllLikes = async () =>{
        const res = await this.getResourse('0/posts/');
        return res.map(this._transformlikes);
    }
    _transformUsers = (post) =>{
        return{
            name:post.name,
            photo:post.photo
        }
    }
    _transformlikes = (post) =>{
        return{
            likes:post.likes
        }
    }
    _transformmyPosts = (my_post) =>{
        return{
            src:my_post.src,
            alt:my_post.alt
        }
    }
    _transformPosts = (post) =>{
        return{
            src:post.src,
            alt:post.alt

        }
    }
}

