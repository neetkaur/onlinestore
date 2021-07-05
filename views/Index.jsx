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
         <h2>SWEET DELIGHTS</h2>
         <img className = "rightimage" src="http://www.winecountrychocolates.com/wp-content/uploads/2014/07/Group.png" width="200" height="150"/>
        </div><br/>
        &nbsp; &nbsp;  &nbsp; &nbsp;  <a href="/candystore"><img src={"/images/homeicon.png"} width="50" height="50"/></a> &nbsp; &nbsp;
        <a href="/candystore/new"><img src={"/images/chocicon.png"} width="50" height="50"/></a>
        <div className = "flexcont">
        {
            CandyStoreJSX.map((eachcandy)=>{
              return (
                <div className = "flexitem" key={eachcandy._id}>
                <h3>{eachcandy.name}</h3>
                  <a href={`/candystore/${eachcandy._id}`}>
                  <img src={eachcandy.img} alt={eachcandy.name} width="150" height="150"/>
                  </a>
                  <h3>{'$ '+eachcandy.price}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
      </DefaultLayout>
    )
  }
}
module.exports = Index;
