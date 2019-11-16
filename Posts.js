import React, {Component} from 'react';
import Appservice from '../servises/Appservice';
import User from './User';
import ErrorMessage from "./Error";
import Loading from "./Loading";
import Heart from "../heart.png";
export default class Posts extends Component{
    Appservice = new Appservice();
    state = {
        posts:[],
        err:false,
        loading:true,
    }

    componentDidMount(){
        this.updatePosts();
    }

    updatePosts(){
        this.Appservice.getAllPosts()
        .then(this.onpostLoaded)
        .catch(this.onError)
    }
    
    onpostLoaded = (posts) =>{
        this.setState({
            posts,
            err:false,
            loading:false
        })
        console.log(this.state.posts);
        }
    onError = (error) =>{
        this.setState({
            err:false,
            loading:false
        })
    }

    renderitems (arr){
        return arr.map(item =>{
            const {name,altname,photo,src,descr,id,likes} = item;
            return(
                <div key={id} className="post">
                <User 
                     src={photo} 
                     alt={altname}
                     name={name}
                     min/>
                <div className="img_block">
                    <span className="likes_block">
                        <img className="heart" src={Heart} width="20px" height="20px;"  alt="heart"></img>
             <p>{likes}</p>
                    </span>
                    <img src={src} alt={this.props.alt}></img>
                </div>
                <div className="post__name">
                    {name}
                </div>
                <div className="post__descr">
                    {descr}
                </div>
            </div>
            )
        });
    }

    render(){
        const {error,posts,loading} = this.state;
        if (loading){
            return <Loading/>
        }
        if (error){
            return <ErrorMessage />
        }
        const items = this.renderitems(posts);
        return (
            <div className="left">  
               {items}
               
            </div>
        )
    }
}