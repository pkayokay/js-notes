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






  // filter review
  var friends = ['Ean', 'Tyler', 'Mikenzi', 'Eric', 'Jessica'];
  var newFriends = friends.filter(function (friend) {
    return friend[0] === 'E'
  });
  console.log(newFriends) // ['Ean', 'Eric']




// Maps and filter practice
// https://codepen.io/tylermcginnis/pen/peGGzX?editors=0010
// https://codepen.io/tylermcginnis/pen/mWoVJE?editors=0010


class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter(function(user) {
            return user.friend === true
          }).map(function(user) {
             return <li> {user.name} </li>
          })}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter(function(user) {
            return user.friend !== true
          }).map(function(user) {
             return <li> {user.name} </li>
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
);


// Refactor the above

class Users extends React.Component {
  render() {
    var friends = this.props.list.filter(function(user) {
      return user.friend === true
    });
    var nonFriends = this.props.list.filter(function(user) {
      return user.friend !== true
    });

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(function(user) {
             return <li> {user.name} </li>
          })}
        </ul>

        <hr />

        <h1> Non Friednds </h1>
        <ul>
          {nonFriends.map(function(user) {
             return <li> {user.name} </li>
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
);