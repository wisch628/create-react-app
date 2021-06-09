import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Grid from './Grid';
import NavBar from './NavBar';
import Footer from './Footer';
// import About from './About';
import Inquiries from './Inquiries';
// import Contact from '/Contact';
import { connect } from "react-redux";
import ImageOverlay from './ImageOverlay';

function Routes (props) {

   let landscape = ["https://i.imgur.com/yEdyE5X.jpg", "https://i.imgur.com/F4hCNAn.jpg", "https://i.imgur.com/tjT3uJy.jpg", "https://i.imgur.com/g3gr8ed.jpg", "https://i.imgur.com/pcsezLy.jpg", "https://i.imgur.com/ejQu0KQ.jpg", "https://i.imgur.com/1awUYo4.jpg", "https://i.imgur.com/JePmmeo.jpg"] 

   let sketch = ["https://i.imgur.com/xa8PK0X.jpg", "https://i.imgur.com/FqsLPRk.jpg", "https://i.imgur.com/4jNnxV2.jpg", "https://i.imgur.com/zUSQusn.jpg", "https://i.imgur.com/FTeIO3I.jpg", "https://i.imgur.com/yg8ySih.jpg", "https://i.imgur.com/MfJkeQh.jpg", "https://i.imgur.com/NaIWQkQ.jpg", "https://i.imgur.com/tX3zmTt.png", "https://i.imgur.com/wpSOvzw.jpg", "https://i.imgur.com/OFIBApv.png"]

  let art = ["https://i.imgur.com/slliSdt.png?1", "https://i.imgur.com/EoosIsw.jpg", "https://i.imgur.com/KZBA2ol.png", "https://i.imgur.com/a1G9NPv.png?1", "https://i.imgur.com/nJWgnJV.png", "https://i.imgur.com/32d0PwS.png", "https://i.imgur.com/ZBi7wRY.jpg", "https://i.imgur.com/nRbAJXl.png?1", "https://i.imgur.com/EuEZQjR.jpg"]

  let graphicDesign = ["https://i.imgur.com/gVSdkfE.png", "https://i.imgur.com/bC5aAt0.png", "https://i.imgur.com/qs9WMHt.jpg", "https://i.imgur.com/xXzbYNw.png", "https://i.imgur.com/cwr4MWV.jpg", "https://i.imgur.com/coYw19j.jpg", "https://i.imgur.com/1owNqcu.jpg", "https://i.imgur.com/QZyVweB.jpg", "https://i.imgur.com/bzsSQXX.png", "https://i.imgur.com/sSk8c4k.jpg", "https://i.imgur.com/Ba2zenS.jpg"]
   console.log(props);
    
    return (
        <Router>
            <NavBar />
            {props.image.url && 
            <ImageOverlay />
            }
            <Switch>
            <Route exact path="/" render={() => <Grid sectionType="landscape" images={landscape}/>} />
            <Route exact path="/landscape" render={() => <Grid sectionType="landscape" images={landscape}/>} />
            <Route exact path="/sketches" render={() => <Grid sectionType="sketch" images={sketch}/>} />
            <Route exact path="/art" render={() => <Grid sectionType="art" images={art}/>} />
            <Route exact path="/graphic-design" render={() => <Grid sectionType="art" images={graphicDesign}/>} />
            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path="/inquiries" component={Inquiries} />
            {/* <Route exact path="/contact" component={Contact} /> */}
            <Redirect to="/" />
            </Switch>
            <Footer />
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
      image: state.image
    };
  };

export default connect(mapStateToProps)(Routes);