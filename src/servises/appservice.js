export default class Appservice{
    constructor(){
        this._apiBase = 'http://localhost:3000';
    }
    getResourse = async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`); 
        if (!res.ok){
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }
        return await res.json();
    }
    getAllPosts = async () =>{
        return await this.getResourse('/posts/');
    }
}