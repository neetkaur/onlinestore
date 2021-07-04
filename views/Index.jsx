const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Index extends React.Component{
  render(){
    const CandyStoreJSX = this.props.CandyStoreJS
    return(
      <DefaultLayout
        styles={[{ key: 0, href: '/css/app.css' }, { key: 1, href: '/css/indexpage.css' }]}
        >
      <div>
        <div className = "heading">
         <img className = "leftimage" src="https://cdn.chocolatemonthclub.com/media/wysiwyg/chocolate/content/gourmet-chocolate-of-the-month-club-hero-450px.png" width="150" height="150"/>
         <h2>WELCOME TO CANDY STORE</h2>
         <img className = "rightimage" src="http://www.winecountrychocolates.com/wp-content/uploads/2014/07/Group.png" width="200" height="150"/>
        </div>
        <div className = "flexcont">
        {
            CandyStoreJSX.map((eachcandy)=>{
              return (
                <div className = "flexitem" key={eachcandy._id}>
                  <h3>{eachcandy.name}</h3>
                  <a href={`/candystore/${eachcandy._id}`}>
                  <img src={eachcandy.img} alt={eachcandy.name} width="200" height="200"/>
                  </a>
                  <h3>{'$ '+eachcandy.price}</h3>
                </div>
              )
            })
          }
        </div>
        <a href="/candystore/new">Add a New Candy</a>
      </div>
      </DefaultLayout>
    )
  }
}
module.exports = Index;
