import React from 'react'
import images from '../images';


const commonStyle={
    width: "400px",
    height: "400px",
    backgroundPosition:'center', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}
const left={
    backgroundImage: "linear-gradient(to left, transparent, rgba(255, 255, 255, 1.0))",
    height: "100%",
    height:"100%"
}
const right={
    backgroundImage: "linear-gradient(to right, transparent, rgba(255, 255, 255, 1.0))",
    height: "100%",
    height:"100%"
}

class ImageCard extends React.Component{

render(){
    const {index, type} = this.props;
    const url = images[index].url;
    console.log(url);
        return(
            <div style={{...commonStyle, backgroundImage: `url(${url})`}}>
                {(type !== "center") &&
                <div style={eval(type)}></div>
                }      
            </div>
        );
    }
}

export default ImageCard;