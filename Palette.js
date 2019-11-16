import React,{Component} from 'react';
import Appservice from '../servises/Appservice';
import ErrorMessage from "./Error";

export default class Palette extends Component{
    Appservice = new Appservice();
    state = {
        error:false,
        photos:[]
    }
    componentDidMount(){
        this.updatePhotos();
    }
    updatePhotos(){
        this.Appservice.getAllmyPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError)
    }
    onError = () =>{
        this.setState({
            error:true
        })
    }
    onPhotosLoaded = (photos) =>{
        this.setState({
            photos,
            error:false
        })
    }
    renderItems(arr){
        return arr.map(item => {
            const {src,alt} = item;
            return (
                <img src={src} alt={alt}></img>
            )
        })
    }
    render(){
        const { error,photos } = this.state;
         if (error){
             return <ErrorMessage/>
         }
         const items = this.renderItems(photos);
        return(
            <div className="palette">
                {items}
            </div>
        )
    }
}