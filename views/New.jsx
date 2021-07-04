const React = require('react');
class New extends React.Component{
  render(){
    return(
      <div>
      <h2>ADD A NEW CANDY</h2>
      <form action = "/candystore" method="POST" id="candyform" className ="form">
      <label>Name:</label>
      <input type="text" name="name"/><br/><br/>

      <label>Description:</label><br/>
      <textarea name="description" form="candyform"></textarea><br/><br/>

      <label>Image:</label>
      <input type="text" name="image"/><br/><br/>

      <label>Price:</label>
      <input type="number" name="price"/><br/><br/>

      <label>Quantity:</label>
      <input type="number" name="quantity"/><br/><br/>

      <input type="submit" name="" value="CREATE NEW CANDY ENTRY"/>

      </form>
      </div>

    )
  }
}

module.exports = New;
