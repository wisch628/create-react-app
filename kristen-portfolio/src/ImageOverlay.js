import { connect } from "react-redux";
import {addImage} from "./redux/reducer";
import React from 'react';

//    function myFunction(imgs) {
//     var expandImg = document.getElementById("expandedImg");
//     var imgText = document.getElementById("imgtext");
//     expandImg.src = imgs.src;
//     imgText.innerHTML = imgs.alt; expandImg.parentElement.style.display = "block";
//   }

  class ImageOverlay extends React.Component {
   constructor () {
       super();
       this.handleKeyPress=this.handleKeyPress.bind(this);
   }
    handleKeyPress = (event) => {
        if(event.charCode === 13){
            this.props.chooseImage({})
        }
      } 
    render() {
        return (
            <div tabIndex="0" onKeyDown={this.handleKeyPress} className="overlay">
                <img alt="test" id="expandedImg"src={this.props.image.url}/>
                <button className="close" onClick={() => this.props.chooseImage({})}>x</button>
            </div>
        )
    }
  }

  const mapStateToProps = (state) => {
    return {
      image: state.image
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      chooseImage: (image) =>
        dispatch(addImage(image))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ImageOverlay);