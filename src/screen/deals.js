import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import SearchBox from '../components/SearchBox';


const Deals = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#49268C" />
      <View style={styles.header}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Deals</Text>
          {/* <Image
            style={{ tintColor: 'white', width: 55, height: 55, resizeMode: 'contain' }}
            source={require('../assets/ovo.png')} /> */}
        </View>
        <IconIon
          size={24}
          color='white'
          name='md-notifications' />
      </View>
      <View>
        <SearchBox />
      </View>

      <ScrollView>
        <View style={{ padding: 20, backgroundColor: '#f4f4f4', width: '100%', height: 160, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: '100%', height: 135, borderRadius: 10, }}
            source={require('../assets/banner.jpg')} />
          <IconIon
            style={{ position: 'absolute', right: 35 }}
            color='white'
            size={24}
            name='chevron-forward' />
        </View>

        <View style={styles.cashbackContainer}>
          <View style={styles.cashbackHeader}>
            <Text style={styles.leftHeaderstyle}>Cashback Lagi dan Lagi</Text>
            <Text style={styles.rightHeaderstyle}>Lihat Semua</Text>
          </View>
          <View style={styles.cashbackDesc}>
            <Text style={{
              color: '#7E7E7E',
              fontSize: 14
            }}>Serbu Berbagai promo terbaru OVO</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.imgWrapper}>
              <Image
                style={styles.imgStyle}
                source={require('../assets/loki.jpg')} />
              <Image
                style={styles.imgStyle}
                source={require('../assets/pb.jpg')} />
              <Image
                style={styles.imgStyle}
                source={require('../assets/genshin.jpg')} />
            </View>
          </ScrollView>
        </View>
        <View style={{ backgroundColor: '#f4f4f4', height: 1, marginHorizontal: 20, marginBottom: 5 }}>
        </View>
        <View style={styles.cashbackContainer}>
          <View style={styles.cashbackHeader}>
            <Text style={styles.leftHeaderstyle}>Kolom Kebahagiaan</Text>
            <Text style={styles.rightHeaderstyle}>Lihat Semua</Text>
          </View>
          {/* <View style={styles.cashbackDesc}>
            <Text style={{
              color: '#7E7E7E',
              fontSize: 14
            }}>Serbu Berbagai promo terbaru OVO</Text>
          </View> */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.imgWrapper}>
              <Image
                style={styles.imgStyle}
                source={require('../assets/rapid.jpg')} />
              <Image
                style={styles.imgStyle}
                source={require('../assets/kolom1.jpg')} />
              <Image
                style={styles.imgStyle}
                source={require('../assets/kolom2.jpg')} />
            </View>
          </ScrollView>
        </View>
        <View style={{ backgroundColor: '#f4f4f4', height: 1, marginHorizontal: 20, marginBottom: 5 }}>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: '#49268C',
    height: 55,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  cashbackContainer: {
    paddingVertical: 15
  },
  cashbackHeader: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftHeaderstyle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  rightHeaderstyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#29B7CC'
  },
  cashbackDesc: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  imgWrapper: {
    flexDirection: 'row',
    elevation: 1,
    //  padding:20,
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1
    },

  },
  imgStyle: {
    height: 140,
    width: 300,
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 10
  }
})

export default Deals;
