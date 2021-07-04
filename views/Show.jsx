const React = require('react');
class Show extends React.Component{
  render(){
    const selectedCandy = this.props.CandyStoreJS
    let stockmessage = ""
    if (selectedCandy.qty <=0 ){stockmessage = "OUT OF STOCK"}
    else {stockmessage = "Stock Left: "+ selectedCandy.qty }
    return(
      <div>
        <h2>{selectedCandy.name}</h2><br/>
        <img src={selectedCandy.img} alt={selectedCandy.name} width="200" height="200"/>
        <h3>{'Price: $ '+selectedCandy.price}</h3><br/>
        <h3>{stockmessage}</h3><br/>
        {/*delete the candy*/}
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

        <br/><br/>
        <a href="/candystore">Go Back to Candy Store</a>
      </div>
    )
  }
}

module.exports = Show;
