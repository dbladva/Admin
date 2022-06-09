import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from 'react-native-reanimated';
import {StatusBar} from 'react-native';

const Basket = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.back}>
          <TouchableOpacity
            style={styles.backArrow}
            onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" color={'#000000'} size={30} />
          </TouchableOpacity>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.favrioteText}>My Order</Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="delete-outline" color={'#FA4A0C'} size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.FavoriteItemView}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#D3F2FF',
              padding: 7,
              marginTop: 20,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Feather name="bell" color={'#FA4A0C'} size={20} />
            <Text style={{color: '#000000', fontWeight: '600', fontSize: 12}}>
              Delivery for FREE until the end of the month
            </Text>
          </View>
        </View>
        <View style={{height: '65%', marginHorizontal: 20}}>
          <ScrollView>
            <View style={styles.itemView}>
              <View style={styles.itemImage}>
                <Image
                  style={styles.image}
                  source={require('../images/15.png')}
                />
              </View>
              <View style={styles.itemText}>
                <Text style={styles.itemTitle}>2020 Apple iPad Air 10.9"</Text>
                <Text style={styles.itemPrice}>$579.00</Text>
                <View style={styles.Quantity}>
                  <Text style={styles.quantityText}>Quantity</Text>
                  <TouchableOpacity>
                    <Text style={styles.decreasBtn}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterNum}> 1 </Text>
                  <TouchableOpacity>
                    <Text style={styles.decreasBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.itemView}>
              <View style={styles.itemImage}>
                <Image
                  style={styles.image}
                  source={require('../images/15.png')}
                />
              </View>
              <View style={styles.itemText}>
                <Text style={styles.itemTitle}>2020 Apple iPad Air 10.9"</Text>
                <Text style={styles.itemPrice}>$579.00</Text>
                <View style={styles.Quantity}>
                  <Text style={styles.quantityText}>Quantity</Text>
                  <TouchableOpacity>
                    <Text style={styles.decreasBtn}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterNum}> 1 </Text>
                  <TouchableOpacity>
                    <Text style={styles.decreasBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        
          </ScrollView>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
            justifyContent: 'space-around',
            height: '20%',
          }}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
          <Text style={{color: '#000000'}}>Total</Text>
          <Text style={styles.itemPrice}>$ 579</Text>
          </View>
         
          <TouchableOpacity style={{width: '90%', alignSelf: 'center',marginVertical: 10,}}>
        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            backgroundColor: '#5956E9',
            borderRadius: 10,
          }}>
          <Text style={styles.btnText}>Checkout</Text>
        </View>
      </TouchableOpacity>

        </View>
      </View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  container2: {
    flex: 1,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#ffffff',
  },
  back: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  favrioteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  backArrow: {},
  FavoriteItemView: {
    alignItems: 'center',
  },
  NoitemFavorite: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailFavoriteText: {
    textAlign: 'center',
    marginVertical: 7,
    color: 'gray',
  },
  itemView: {
    overflow: 'hidden',
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
  },
  itemImage: {
    width: '35%',
    backgroundColor: '#F4F4F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    height: 100,
    width: 90,
  },
  itemText: {
    justifyContent: 'space-around',
    margin: 10,
    marginVertical: 20,
  },
  itemTitle: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5956E9',
  },
  Quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 15,
    color: '#000000',
    marginRight: 10,
  },
  decreasBtn: {
    backgroundColor: '#7DCCEC',
    paddingHorizontal: 5,
    borderRadius: 2,
    marginHorizontal: 3,
    // color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  counterNum: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
    marginHorizontal: 3,
  },
});