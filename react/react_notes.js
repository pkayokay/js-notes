// REACT FUNDAMENTALS
// https://tylermcginnis.com/courses/react-fundamentals/

/////////////////////
// React Ecosystem //
/////////////////////

// To build a large app build a bunch of small apps
// Part of an application with its own isolated environment



  // Components
    // Concept with functions
    var getProfilePic = function(username) {
      return 'https://photo.fb.com/' + username;
    }

    var getProfileLink = function(username) {
      return 'http://www.fb.com/' + username;
    }

    var getAvatarInfo = function(username) {
      return {
        pic: getProfileLink(username),
        link: getProfileLink(username)
      }
    }

    getAvatarInfo('Paul');
    //{ pic: 'http://www.fb.com/Paul',
    //   link: 'http://www.fb.com/Paul' }

    //

    var ProfilePic = function() {
      return (
      <img src={'https://photo.fb.com/' + this.props.username }/>
      )
    }

    var ProfileLink = function() {
      return (
        <a href={'https://www.fb.com/' + this.props.username }>
          {this.props.username}
        </a>
      )
    }

    var Avatar = function() {
      return (
        <div>
        <ProfilePic username = {this.props.username }/>
        <ProfileLink username = {this.props.username }/>
        </div>
      )
    }

    <Avatar username="Paul"/>



  // It is Declarative

    // Let's look at imperative (HOW)
    // Specific.

    var numbers = [4,2,3,6];
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    // You are telling the machine how to add the values in the array.



    // Declarative (WHAT)
    // Level of abstraction, you trust the abstraction to take care of the details, under the hood.
    // We declare what we want to happen.
    // .reduce is taking care of things under the hood.

    var numbers = [4,2,3,6];
    numbers.reduce(function(previous, current) {
      return previous + current
    });

    // Benefits of this?
      // Reduce side effects (whenever you are mutating things)
      // Minimize mutability, more readable code, less bugs
    //


    // Is React Declarative? (for the most part)
    // https://learn.tylermcginnis.com/courses/50507/lectures/2466381

    $('#paul-btn').click(function() {
      $(this).toggleClass('highlight');
      $(this).text() === 'Add highlight' ? $(this).text('Remove Highlight') : $(this).text('Add highlight');
    });

    // the code above is wrapped in the component below
    // We can look at it at a glance and tell what's going on...
    <paulsbtn
      onClick={this.handleToggleHighlight}
      highlight={this.state.highlight} />

    // Why "for the most part"?
      // We need to declare the state in order to update the state of a component

    this.setState({
      highlight: !this.state.highlight
    })




//  Unidirectional Data Flow
    // Main purpose of react is to manage state inside your application
    // UI is a function of your state.
    // Simply put, if the state updates, then the UI updates...



// Explicit Mutations
  // If we want to update a state, we must first declare/set the state of a component
    this.setState({
      highlight: !this.state.highlight
     })
  // When we set the state, it sets the state but also kicks of a re-render
  // A re-render means it updates the UI.



// Just JavaScript
<ul>
  {friends.map(function(name){
    return (
      <li> {name} </li>
    )
  })}
</ul>






//////////////////////////
// Pieces of the Puzzle //
//////////////////////////




  // React Router: mapping of specific URL to specific components

  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>



  // Webpack: code bundler...

  var path = require('path');
  var HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: './app/index.js',
    output: {
      path: path.resolve(_dirname, 'dist'),
      filename: 'index_bundle.js',
    },
    module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader'},
        { test: /\.css$/, use: [ 'style-loader', 'css-loader']}
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'app/index.html'
      })
    ]
  };

  // takes all of the files under entry
  // runs them through a set of rules (transformations)
  // and outputs them (bundles) into one file




  // Babel (code tranformer)

    "babel": {
      "presents": [
        "env",
        "react"
      ]
    }
  // env: use modern syntax
  // react: take jsx and trasforms them into JavaScript



  // Axios: allows for AJAX requests

  function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + param + '$per_page=100');
  }





// IMPERATIVE VS DECLARATIVE Functions

  // Examples of imperative functions
    // We're explicitly iterating over an array (laying out steps)
      function double(arr) {
        let results = []
        for (let i = 0; i < arr.length; i++) {
          results.push(arr[i]*2)
        }
        return results
      }

      double([1,3]);

    //
      function add(arr) {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
          result = result + arr[i];
        }
        return result
      }

      add([1,3,5]);

    // Subjective case, code is not understood at a glance, we still need to read each step to figure it out
      $('#btn').click(function(){
        $(this).toggleClass('highlight');
        $(this).text() === 'Add Highlight' ? $(this).text('Remove Highlight') : $(this).text('Add Highlight');
      });

  // Examples of declarative functions

    funciton double(arr) {
      return arr.map((item) => item * 2)
    }


    function add(add) {
      return arr.reduce((prev, current) => prev + current, 0)
    }


    <Btn
      onToggleHighlight={this.handleToggleHighlight}
      highlight={this.state.highlight}>
        {this.state.buttonText}
    </Btn>


    // Declarative code is context-independent, it can be used in different programs
    // rather than concerning about the steps needed to accomplish the program's goal.

    // The declarative functions and components can be used in any program we want.
    // On the other hand, imperative code relies on the context of the current state.

