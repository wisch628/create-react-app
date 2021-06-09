import {connect} from 'react-redux';
import {addImage} from "./redux/reducer";

const Grid = (props) => {
return (
<div id={props.sectionType} className="section"> 
  <div className="image-display">
    {props.images.map((image, index) => 
        <img key={index} alt="landscape" className={[props.sectionType, "images"].join(" ")} src={image} onClick={() => props.chooseImage({url: image})}></img>
    )}
  </div>
  </div>
)
}

const mapDispatchToProps = (dispatch) => {
    return {
      chooseImage: (image) =>
        dispatch(addImage(image))
    };
  };

export default connect(null, mapDispatchToProps)(Grid);