const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Cart extends React.Component{
  render(){
    const CandyStoreJSX = this.props.CandyStoreJS
    return(
      <DefaultLayout
        styles={[{ key: 0, href: '/css/app.css' }, { key: 1, href: '/css/cartpage.css' }]}
        >
      <div>
        <a href="/candystore"><img src={"/images/homeicon.png"} width="30" height="30"/></a> &nbsp; &nbsp;
        <a href="/candystore/new"><img src={"/images/chocicon.png"} width="30" height="30"/></a> &nbsp; &nbsp;
        <a href="/candystore/cart"><img src={"/images/shopping-cart-icon.png"} width="30" height="30"/></a>

        <div className = "flexcol">
        {
            CandyStoreJSX.map((eachcandy)=>{
              return (
                <div className = "flexrowitem" key={eachcandy._id}>
                  <h3>{eachcandy.name}</h3>
                  <a href={`/candystore/${eachcandy._id}`}>
                  <img src={eachcandy.img} alt={eachcandy.name} width="50" height="50"/>
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
module.exports = Cart;
