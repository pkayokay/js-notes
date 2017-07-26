// Props Practice
// https://codepen.io/tylermcginnis/pen/RpvEvL
// https://codepen.io/tylermcginnis/pen/NpoezB
// https://codepen.io/tylermcginnis/pen/OpdreE

class FriendsContainer extends React.Component {
  render() {
    var name = 'Tyler';
    var friends = ['bob', 'scott'];
    return(
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
}

class ShowList extends React.Component {
  render() {
    return(
      <div>
        <h3> Friends </h3>
        <ul>
          {this.props.names.map(function(friend) {
            return <li> {friend} </li>;
          })}
        </ul>
      </div>
    )
  }
}