// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Form from './src/Screens/Form/Form';

// // create a component
// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Form/>
//       </View>
//     );
//   }
// }

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
// });

// //make this component available to the app
// export default App;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
