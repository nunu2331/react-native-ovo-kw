import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import IconIon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerWrapper}>
                    <IconIon
                        onPress={() => navigation.goBack()}
                        style={{ marginHorizontal: 10 }}
                        color='gray'
                        size={24}
                        name='arrow-back' />
                    <View style={styles.searchContainer}>
                        <IconIon
                            style={{ marginRight: 5 }}
                            size={20}
                            color='gray'
                            name='search' />
                        <TextInput
                            placeholder={'Cari Merchants'} />

                    </View>
                </View>
                <View style={styles.marketWrapper}>
                    <View style={styles.imageBox}>
                        <Image
                            style={styles.marketImg}
                            source={require('../assets/market.png')} />
                    </View>
                    <Text style={styles.textStyle}>Warung Nasi Goreng</Text>
                </View>
                <View style={styles.marketWrapper}>
                    <View style={styles.imageBox}>
                        <Image
                            style={styles.marketImg}
                            source={require('../assets/market.png')} />
                    </View>
                    <Text style={styles.textStyle}>Bakso Bakar Mas Agung</Text>
                </View>
                <View style={styles.marketWrapper}>
                    <View style={styles.imageBox}>
                        <Image
                            style={styles.marketImg}
                            source={require('../assets/market.png')} />
                    </View>
                    <Text style={styles.textStyle}>Soto Seger Yono</Text>
                </View>
                <View style={styles.marketWrapper}>
                    <View style={styles.imageBox}>
                        <Image
                            style={styles.marketImg}
                            source={require('../assets/market.png')} />
                    </View>
                    <Text style={styles.textStyle}>Kedai Aro</Text>
                </View>
                <View style={styles.marketWrapper}>
                    <View style={styles.imageBox}>
                        <Image
                            style={styles.marketImg}
                            source={require('../assets/market.png')} />
                    </View>
                    <Text style={styles.textStyle}>Soto Bu Karti</Text>
                </View>
                <View style={styles.marketWrapper}>
                    <View style={styles.imageBox}>
                        <Image
                            style={styles.marketImg}
                            source={require('../assets/market.png')} />
                    </View>
                    <Text style={styles.textStyle}>Dapur Mama Sehat</Text>
                </View>
                <View style={styles.marketWrapper}>
                    <View style={styles.imageBox}>
                        <Image
                            style={styles.marketImg}
                            source={require('../assets/market.png')} />
                    </View>
                    <Text style={styles.textStyle}>Warung Normal</Text>
                </View>
                <View style={styles.marketWrapper}>
                    <View style={styles.imageBox}>
                        <Image
                            style={styles.marketImg}
                            source={require('../assets/market.png')} />
                    </View>
                    <Text style={styles.textStyle}>Siomay Bakar</Text>
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
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginHorizontal: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#f4f4f4'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFF0F4',
        paddingLeft: 15,
        width: '85%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        height: 40,
        paddingRight: 30
    },
    marketWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#f4f4f4'
    },
    marketImg: {
        width: 40,
        height: 40,
        tintColor: 'gray'
    },
    imageBox: {
        width: 55,
        height: 55,
        backgroundColor: 'white',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 3,
        //  padding:20,
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    textStyle: {
        fontWeight: 'bold',
        marginLeft: 25,
        fontSize: 16
    }
})

export default SearchScreen;