// Props Practice
// https://codepen.io/tylermcginnis/pen/RpvEvL
// https://codepen.io/tylermcginnis/pen/NpoezB
// https://codepen.io/tylermcginnis/pen/OpdreE
  // map review
  let digits = [3,2,3,4];
  var addOne = digits.map(function(i) {
    return i + 1
  })
  console.log(addOne);

  var numbers = [1,2,3];
  var numbersPlusTen = numbers.map(function(num) {
    return num + 10
  });
  console.log(numbersPlusTen);

  // filter review
  var friends = ['Ean', 'Tyler', 'Mikenzi', 'Eric', 'Jessica'];
  var newFriends = friends.filter(function (friend) {
    return friend[0] === 'E'
  });
  console.log(newFriends) // ['Ean', 'Eric']



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