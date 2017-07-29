
// Components
// Think of them as a collection of html css js and some internal data specific to that component
// They have everything you need in a bundle, they are either pure js or JSXif done is jsx, we need to compile and convert the jsx to js.

// Data is either received from a component's parent component, or it's contained in the component itself.
// The 'state' of the data for itself and the children components live in the parent component.
// We pass on the parent's data as an attribute for the children components to use this information

var React = require('react');
var ReactDOM = require('react-dom');
class HelloWorld extends React.Component {
    render() {
        return (
            <div>Hello World!</div>
        )
    }
}

  // Functions in react will take some arguments and return some UI
  // Think of it like this: f(d) = V.

  var getProfilePic = funcion(username) {
    return 'http://photo.fb.com/' + username
  }

  var getProfilePic = function(username) {
    return 'https://www.fb.com' + username
  }

  var getProfileData = function(username) {
    return {
      pic: getProfilePic(username),
      link: getProfileLink(username)
    }
  }

  getProfileData('pkayokay');
  // Three functions and one function invocation


//

  class ProfilePic extends React.Component {
     render() {
       return (
         <img src={'https://photo.fb.com/' + this.props.username} />
       )
     }
   })
   class ProfileLink extends React.Component {
     render() {
       return (
         <a href={'https://www.fb.com/' + this.props.username}>
           {this.props.username}
         </a>
       )
     }
   })
   class Avatar extends React.Component {
     render() {
       return (
         <div>
           <ProfilePic username={this.props.username} />
           <ProfileLink username={this.props.username} />
         </div>
       )
     }
   })
   <Avatar username="tylermcginnis" />


 // Now let's compose functions to get some UI
   var ProfilePic = function (props) {
     return <img src={'https://photo.fb.com/' + props.username} />
   }
   var ProfileLink = function (props) {
     return (
       <a href={'https://www.fb.com/' + props.username}>
         {props.username}
       </a>
     )
   }
   var Avatar = function (props) {
     return (
       <div>
         <ProfilePic username={props.username} />
         <ProfileLink username={props.username} />
       </div>
     )
   }
   <Avatar username="tylermcginnis" />


// These are all in 'pure functions'
// React gives a light intro to functional programming (consistency and preditability)
// Characteristics of pure functions
// 1. Always return the same results given the same arguments
// 2. Execution doesn't depend on the state of the application.
// 3. Don't modify the variables outside of their scope.


// When calling a 'pure' funciton, it is easy to predict what's going to happen
// here are some examples
  function add(x,y) {
    return x + y
  }

  var friends = ['Ryan','Michael','Dan']
  friends.slice(0, 1) // 'Ryan'
  friends.slice(0, 1) // 'Ryan'
  friends.slice(0, 1) // 'Ryan'

  var friends = ['Ryan', 'Michael', 'Dan']
  friends.splice(0, 1) // ["Ryan"]
  friends.splice(0, 1) // ["Michael"]
  friends.splice(0, 1) // ["Dan"]

