const React = require('react');
const DefaultLayout = require('./layouts/Default');

class New extends React.Component{
  render(){
    return(
      <DefaultLayout
        styles={[{ key: 0, href: '/css/app.css' }, { key: 1, href: '/css/newpage.css' }]}
        >

        <a href="/candystore"><img src={"/images/homeicon.png"} width="30" height="30"/></a> &nbsp; &nbsp;
        <a href="/candystore/new"><img src={"/images/chocicon.png"} width="30" height="30"/></a> &nbsp; &nbsp;
        <a href="/candystore/cart"><img src={"/images/shopping-cart-icon.png"} width="30" height="30"/></a>
      <div className = "heading">
      <h2>ADD A NEW CANDY</h2>
      <form action = "/candystore" method="POST" >
      <label>Name:</label>
      <input type="text" name="name"/><br/><br/>

      <label>Description:</label><br/>
      <textarea name="description" ></textarea><br/><br/>

      <label>Image:</label>
      <input type="text" name="image"/><br/><br/>

      <label>Price:</label>
      <input type="number" name="price"/><br/><br/>

      <label>Quantity:</label>
      <input type="number" name="qty"/><br/><br/>

      <input type="submit" name="" value="CREATE NEW CANDY ENTRY"/>

      </form>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = New;
