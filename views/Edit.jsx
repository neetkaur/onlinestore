const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Edit extends React.Component{
  render(){
    const CandyStoreJSX = this.props.CandyStoreJS
    return(
      <DefaultLayout
        styles={[{ key: 0, href: '/css/app.css' }, { key: 1, href: '/css/editpage.css' }]}
        >
      <div className = "heading">
      <h2>EDIT THE CANDY</h2>
      <form method="POST" action = {`/candystore/${CandyStoreJSX._id}?_method=PUT`} >

      <label>Name:</label>
      <input type="text" name="name" defaultValue={CandyStoreJSX.name}/><br/><br/>

      <label>Description:</label><br/>
      <textarea name="description" defaultValue={CandyStoreJSX.description}></textarea><br/><br/>

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
      </DefaultLayout>


    )
  }
}

module.exports = Edit;
