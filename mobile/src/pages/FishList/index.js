import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
class App extends React.Component {
  state = {
    data: [
      { id: "00", name: "Peixe 1 " },
      { id: "01", name: "Peixe 2" },
      { id: "02", name: "Peixe 3" },
      { id: "03", name: "Peixe 4" },
      { id: "04", name: "Peixe 5" },
      { id: "05", name: "Peixe 6" },
      { id: "06", name: "Peixe 7" },
      { id: "07", name: "Peixe 8" }
    ]
  };
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flexBasis: 0
  },
  text: {
    color: "#333333"
  }
});
export default App;
