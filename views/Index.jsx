const React = require('react');
class Index extends React.Component{
  render(){
    const CandyStoreJSX = this.props.CandyStoreJS
    return(
      <div>
        <h2>WELCOME TO CANDY STORE</h2>
        <ul>
        {
            CandyStoreJSX.map((eachcandy)=>{
              return (
                <li key={eachcandy._id}>
                  <h3>{eachcandy.name}</h3>
                  <a href={`/candystore/${eachcandy._id}`}>
                  <img src={eachcandy.img} alt={eachcandy.name} width="200" height="200"/>
                  </a>
                  <h3>{'$ '+eachcandy.price}</h3>
                </li>
              )
            })
          }
        </ul>
        <a href="/candystore/new">Add a New Candy</a>
      </div>
    )
  }
}
module.exports = Index;
