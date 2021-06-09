import {Link} from 'react-router-dom';
function NavBar () {
    return (
<div id="header">
            <Link to="/">
            <h2 id="kristen">KRISTEN PATINO</h2>
            </Link>
  <nav> 
    <Link to="/sketches">Sketches</Link>
    <Link to="/art">Art</Link>
    <Link to="/graphic-design">Graphic Design</Link>
    <Link to="/landscape">Landscape Design</Link>
    {/* <Link to="/about">About</Link> */}
    <Link to="/inquiries">Inquiries</Link>
  </nav> 
</div>
    )
}

export default NavBar;