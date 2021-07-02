import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const SearchBox = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SearchScreen')}
                    style={styles.searchContainer}>
                    {/* <IconEvil
                  size={22}
                  color='gray'
                  name='search' /> */}
                    <Text style={{ color: '#B1B4B9', marginLeft: 2 }}>Cari Merchants</Text>

                </TouchableOpacity >
                <TouchableOpacity
                    style={{ marginLeft: 0 }}
                >
                    <Image
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#29B7CC',
                            transform: [{ rotate: "-30deg" }]
                        }}
                        source={require('../assets/kupon.png')} />
                </TouchableOpacity >
            </View>
        </View>
    )
}


export default SearchBox;

export const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        paddingVertical: 10


    },
    headerWrapper: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    logoWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: 45,
        marginLeft: 5,
        // borderWidth: 1,
        // borderColor: 'white'
    },
    logoheader: {
        // position: 'absolute'
        height: 30,
        width: 30,
        borderRadius: 50
    },
    searchContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFF0F4',
        // paddingLeft: 10,
        padding: 5,
        width: '85%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        height: 40,
    },
});
