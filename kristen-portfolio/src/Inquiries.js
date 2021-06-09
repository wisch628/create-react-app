function Inquiries () {
    return (
        
        <div id="inquiries" className="section"> 
        <div id="sayhi">
         <h3 id="email-header"> Say hi 👋</h3>
         </div>
       <div id="form-div">
         <form id="form" action="https://www.freecodecamp.com/email-submit">
         <label for="email">  </label>  <br />
        <input type="name" id="name" name="name" placeholder="Name" required /> 
        <br /> <br />
         <input type="email" id="email" name="email" placeholder="Email Address" required /> <br /> <br />
        <textarea rows="5" cols="30" placeholder="Describe project"></textarea>
        <br /> <br />
         <input id="submit" type="submit" />
       
       </form>
         </div>
        </div>
    )
}

export default Inquiries;