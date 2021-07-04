const React = require('react');
class Edit extends React.Component{
  render(){
    const CandyStoreJSX = this.props.CandyStoreJS
    return(
      <div>
      <h2>EDIT THE CANDY</h2>
      <form method="POST" action = {`/candystore/${CandyStoreJSX._id}?_method=PUT`} id="candyform" className ="form">

      <label>Name:</label>
      <input type="text" name="name" defaultValue={CandyStoreJSX.name}/><br/><br/>

      <label>Description:</label><br/>
      <textarea name="description" form="logsform" defaultValue={CandyStoreJSX.desciption}></textarea><br/><br/>

      <label>Image:</label>
      <input type="text" name="img" defaultValue={CandyStoreJSX.img}/><br/><br/>

      <label>Price:</label>
      <input type="Number" name="price" defaultValue={CandyStoreJSX.price}/><br/><br/>

      <label>Quantity:</label>
      <input type="Number" name="qty" defaultValue={CandyStoreJSX.qty}/><br/><br/>

      <br/><br/>
      <input type="submit" name="" value="SUBMIT"/>

      </form>
      </div>

    )
  }
}

module.exports = Edit;
