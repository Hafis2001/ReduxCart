import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    SafeAreaView,
    TouchableHighlight,
  } from "react-native";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../CartReducer'
  import { useNavigation } from "@react-navigation/native";
  import AntDesign from 'react-native-vector-icons/AntDesign'
  

  
  const HomeScreen = () => {
    const navigation = useNavigation();
    const cart = useSelector((state) => state.cart.cart);
    console.log(cart);
    const dispatch = useDispatch();
    const images = [
      {
        id: "0",
        image:
          "https://archive.org/download/coloritsapplicat00andriala/page/cover_w200.jpg",
        name: "book",
      },
      {
        id: "1",
        image:
          "https://archive.org/download/coloritsapplicat00andriala/page/cover_w200.jpg",
        name: "book",
      },
      {
        id: "2",
        image:
          "https://archive.org/download/coloritsapplicat00andriala/page/cover_w200.jpg",
        name: "book",
      },
    ];
    const addItemToCart = (item) => {
      dispatch(addToCart(item));
    };
    const removeItemFromCart = (item) => {
      dispatch(removeFromCart(item));
    };
    const increaseQuantity = (item) => {
      dispatch(incrementQuantity(item));
    }
    const decreaseQuantity = (item) => {
      if(item.quantity == 1){
        dispatch(removeFromCart(item));
      }else{
        dispatch(decrementQuantity(item));
      }
    }
    return (
      <SafeAreaView>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <Text style={{ textAlign: "center", fontSize: 18,color:'#000' }}>
          BOOKS
        </Text>
        <TouchableHighlight onPress={()=>navigation.navigate('Cart')}>
            <AntDesign
            name="shoppingcart"
            size={24}
            color="#000"/>
            </TouchableHighlight>

        </View>
        {images.map((item) => (
          <Pressable
            key={item.id}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View style={{ margin: 10 }}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 8 }}
                source={{ uri: item.image }}
              />
            </View>
            <View>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              {cart.some((value) => value.id == item.id) ? (
                <Pressable onPress={() => removeItemFromCart(item)}>
                  <Text
                    style={{
                      borderColor: "gray",
                      borderWidth: 1,
                      marginVertical: 10,
                      padding: 5,
                    }}
                  >
                    REMOVE FROM CART
                  </Text>
                </Pressable>
              ) : (
                <Pressable onPress={() => addItemToCart(item)}>
                  <Text
                    style={{
                      borderColor: "gray",
                      borderWidth: 1,
                      marginVertical: 10,
                      padding: 5,
                    }}
                  >
                    ADD TO CART
                  </Text>
                </Pressable>
              )}
            </View>
          </Pressable>
        ))}



  
        {cart.map((item,index) => (
          <View style={{padding:10}} key={index}>
            <Text>{item.name}</Text>
            <Image style={{ width: 100, height: 100, borderRadius: 8,marginTop:6 }}
                source={{ uri: item.image }}/>
            <Pressable
              style={{
                flexDirection: "row",
                marginTop:20,
                alignItems: "center",
                backgroundColor: "#FF3366",
                borderRadius: 5,
                width: 120,
              }}
            >
              <Pressable onPress={() => decreaseQuantity(item)}>
                <Text
                  style={{
                    fontSize: 25,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  -
                </Text>
              </Pressable>
  
              <Pressable>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  {item.quantity}
                </Text>
              </Pressable>
  
              <Pressable onPress={() => increaseQuantity(item)}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        ))}
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({});
  