import React, {Component} from 'react';
import Appservice from '../servises/appservice';
import User from './User';
import ErrorMessage from "./Error";

export default class Posts extends Component{
    Appservice = new Appservice();
    state = {
        posts:[],
        err:false
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
            err:false
        })
        console.log(this.state.posts);
    }

    onError = (error) =>{
        this.setState({
            err:false
        })
    }

    renderitems (arr){
        return arr.map(item =>{
            const {name,altname,photo,src,descr,id} = item;
            return(
                <div key={id} className="post">
                <User 
                     src={photo} 
                     alt={altname}
                     name={name}
                     min/>
                <img src={src} alt={this.props.alt}></img>
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
        const {error,posts} = this.state;
        
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