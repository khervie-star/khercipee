import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";

const HomeScreen = () => {
  const [search, setSearch] = React.useState("");

  const trendingProducts = [
    {
      id: 1,
      name: "Product 1",
      image: require("../../assets/images/Video.png"),
    },
    {
      id: 2,
      name: "Product 2",
      image: require("../../assets/images/Video.png"),
    },
    {
      id: 3,
      name: "Product 3",
      image: require("../../assets/images/Video.png"),
    },
    // Add more products here
  ];

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Find best recipes {"\n"}for cooking</Text>
        <SearchBar
          placeholder="Search products..."
          onChangeText={setSearch}
          value={search}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
        />
      </View>
      <FlatList
        data={trendingProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    padding: 10,
    backgroundColor: "white",
    borderBottomColor: "lightgray",
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    color: "#303030",
    fontFamily: "Poppins_600SemiBold",
    marginVertical: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: "blue",
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchBarInputContainer: {
    backgroundColor: "white",
    borderColor: "#C1C1C1",
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 24,
    paddingHorizontal: 12,
    fontFamily: "Poppins_400Regular",
  },
  productList: {
    padding: 10,
  },
  productContainer: {
    alignItems: "center",
    padding: 10,
  },
  productImage: {
    width: 280,
    height: 180,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});

export default HomeScreen;
