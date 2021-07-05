const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Show extends React.Component{
  render(){
    const selectedCandy = this.props.CandyStoreJS
    let stockmessage = ""
    if (selectedCandy.qty <=0 ){stockmessage = "OUT OF STOCK"}
    else {stockmessage = "Stock Left: "+ selectedCandy.qty }
    return(
      <DefaultLayout
        styles={[{ key: 0, href: '/css/app.css' }, { key: 1, href: '/css/showpage.css' }]}
        >

              <a href="/candystore"><img src={"/images/homeicon.png"} width="50" height="50"/></a> &nbsp; &nbsp;
              <a href="/candystore/new"><img src={"/images/chocicon.png"} width="50" height="50"/></a>


      <div className = "heading">
        <h2>{selectedCandy.name}</h2>
        <img src={selectedCandy.img} alt={selectedCandy.name} width="200" height="200"/>
        <h3>{selectedCandy.description}</h3>
        <h3>{'Price: $ '+selectedCandy.price}</h3>
        <h3>{stockmessage}</h3>
        {/*delete the candy*/}
        <div className = "flexcont">
        <form method="POST" action={`/candystore/${selectedCandy._id}?_method=DELETE`}>
          <input type="submit" value="DELETE"/>
        </form>
        {/*edit the candy*/}
        <form action={`/candystore/${selectedCandy._id}/edit`}>
            <button type="submit">EDIT</button>
        </form>
        {/*buy the candy*/}
        <form method="POST" action={`/candystore/buy/${selectedCandy._id}?_method=PUT`}>
          <input type="submit" value="BUY"/>
        </form>
      </div>
      </div>

      </DefaultLayout>
    )
  }
}
module.exports = Show;
