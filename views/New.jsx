const React = require('react');
const DefaultLayout = require('./layouts/Default');

class New extends React.Component{
  render(){
    return(
      <DefaultLayout
        styles={[{ key: 0, href: '/css/app.css' }, { key: 1, href: '/css/newpage.css' }]}
        >
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
      <input type="number" name="quantity"/><br/><br/>

      <input type="submit" name="" value="CREATE NEW CANDY ENTRY"/>

      </form>
      </div>
      </DefaultLayout>
    )
  }
}

module.exports = New;
