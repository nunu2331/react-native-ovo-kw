import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';

const Dashboard = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#49268C" />
            <View style={styles.header}>
                <View style={{ height: 40, width: 40, justifyContent: 'center' }}>
                    <Image
                        style={{ tintColor: 'white', width: 55, height: 55, resizeMode: 'contain' }}
                        source={require('../assets/ovo.png')} />
                </View>
                <IconIon
                    size={24}
                    color='white'
                    name='md-notifications' />
            </View>
            <ScrollView>
                <View style={styles.menuContainer}>
                    <View style={styles.moneyContainer}>
                        <Text style={{ fontSize: 11, marginBottom: 5, color: 'white', fontWeight: 'bold' }}>
                            OVO Cash
                        </Text>
                        <View style={styles.moneyWrapper}>
                            <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold' }}>
                                Rp
                            </Text>
                            <Text style={{ fontSize: 24, color: 'white', marginLeft: 5, fontWeight: 'bold', marginBottom: 5, }}>
                                10.000.000
                            </Text>
                        </View>
                        <View style={styles.pointWrapper}>
                            <Text style={{ fontSize: 11, marginBottom: 5, color: 'white', fontWeight: 'bold' }}>
                                OVO Points
                            </Text>
                            <Text style={{ fontSize: 11, marginBottom: 10, color: 'gold', marginLeft: 5, fontWeight: 'bold' }}>
                                800.000
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{position: 'absolute', alignSelf: 'center', top : 70}}>
                    <View style={styles.quest}>
                        <View style={styles.questBox}>
                            <IconIon
                                style={{ marginTop: 0, }}
                                size={34}
                                color={'#49268C'}
                                name='add-circle-outline' />
                            <Text style={{ fontSize: 11, marginBottom: 5, marginTop: 0, color: '#49268C', fontWeight: 'bold' }}>Top Up</Text>

                        </View>
                        <View style={styles.questBox}>
                            <IconIon
                                style={{ marginTop: 0, }}
                                size={34}
                                color={'#49268C'}
                                name='arrow-up-circle-outline' />
                            <Text style={{ fontSize: 11, marginBottom: 5, marginTop: 0, color: '#49268C', fontWeight: 'bold' }}>Transfer</Text>

                        </View>
                        <View style={styles.questBox}>
                            <IconIon
                                style={{ marginTop: 0, }}
                                size={34}
                                color={'#49268C'}
                                name='arrow-undo-circle-outline' />
                            <Text style={{ fontSize: 11, marginBottom: 5, marginTop: 0, color: '#49268C', fontWeight: 'bold' }}>History</Text>

                        </View>
                    </View>
                </View>

                <View style={styles.fiturContainer}>
                    <View style={styles.menuCard}>
                        <View style={styles.imageWrapper}>
                            <IconIon
                                size={34}
                                color='gold'
                                name='flash' />
                        </View>
                        <Text style={styles.menuText}>PLN</Text>
                    </View>
                    <View style={styles.menuCard}>
                        <View style={styles.imageWrapper}>
                            <IconIon
                                color="#156DE6"
                                size={34}
                                name='phone-portrait' />
                        </View>
                        <Text style={styles.menuText}>Pulsa</Text>
                    </View>
                    <View style={styles.menuCard}>
                        <View style={styles.imageWrapper}>
                            <IconIon
                                color="mediumspringgreen"
                                size={34}
                                name='md-globe-outline' />
                        </View>
                        <Text style={styles.menuText}>Paket Data</Text>
                    </View>
                    <View style={styles.menuCard}>
                        <View style={styles.imageWrapper}>
                            <IconIon
                                color="#2DDDE4"
                                size={34}
                                name='phone-portrait-sharp' />
                        </View>
                        <Text style={styles.menuText}>Pascabayar</Text>
                    </View>
                    <View style={styles.menuCard}>
                        <View style={styles.imageWrapper}>
                            <IconIon
                                color="palegreen"
                                size={34}
                                name='shield-checkmark' />
                        </View>
                        <Text style={styles.menuText}>BPJS</Text>
                    </View>
                    <View style={styles.menuCard}>
                        <View style={styles.imageWrapper}>
                            <IconIon
                                color="#FF936B"
                                size={34}
                                name='tv' />
                        </View>
                        <Text style={styles.menuText}>Internet & TV Kabel</Text>
                    </View>
                    <View style={styles.menuCard}>
                        <View style={styles.imageWrapper}>
                            <IconIon
                                color="lightcyan"
                                size={34}
                                name='home' />
                        </View>
                        <Text style={styles.menuText}>Iuran Linkungan</Text>
                    </View>
                    <View style={styles.menuCard}>
                        <View style={styles.imageWrapper}>
                            <IconIon
                                color="mediumslateblue"
                                size={34}
                                name='apps' />
                        </View>
                        <Text style={styles.menuText}>Lainnya</Text>
                    </View>
                </View>
                <View style={styles.popularContainer}>
                    <View style={styles.popularHeader}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Rekomendasi Pilihan</Text>
                        {/* <Text style={{ fontWeight: 'bold', color: 'steelblue' }}>See all</Text> */}
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row' }}>
                        <View style={styles.popularCard}>
                            <Image
                                style={styles.popularImg}
                                source={require('../assets/klee.jpg')} />
                            <Text style={styles.textCard1}>Voucher Game</Text>
                            <Text style={styles.textCard}>Karakter & Senjata Baru Sudah Menunggumu</Text>
                            {/* <View style={styles.reviewWrapper}>
                                <View style={{ flexDirection: 'row' }}>
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                </View>
                                <Text style={{ fontSize: 9, color: '#9CA6B6' }}>(1500 reviews)</Text>
                            </View> */}
                        </View>
                        <View style={styles.popularCard}>
                            <Image
                                style={styles.popularImg}
                                source={require('../assets/diskon.jpg')} />
                            <Text style={styles.textCard1}>Diskon</Text>
                            <Text style={styles.textCard}>Siap KETIBAN DISKON di Blibli pake OVO?</Text>
                            {/* <View style={styles.reviewWrapper}>
                                <View style={{ flexDirection: 'row' }}>
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                </View>
                                <Text style={{ fontSize: 9, color: '#9CA6B6' }}>(1500 reviews)</Text>
                            </View> */}
                        </View>
                        <View style={styles.popularCard}>
                            <Image
                                style={styles.popularImg}
                                source={require('../assets/cashback.jpg')} />
                            <Text style={styles.textCard1}>Cashback</Text>
                            <Text style={styles.textCard}>Semua Produk Elektronik, Ada Diskonnya!</Text>
                            {/* <View style={styles.reviewWrapper}>
                                <View style={{ flexDirection: 'row' }}>
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                    <IconIon
                                        size={10}
                                        color='#F59C03'
                                        name='star' />
                                </View>
                                <Text style={{ fontSize: 9, color: '#9CA6B6' }}>(1500 reviews)</Text>
                            </View> */}
                        </View>
                    </ScrollView>
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
        paddingHorizontal: 15,
    },
    menuContainer: {
        backgroundColor: '#49268C',
        paddingHorizontal: 15,
        paddingBottom: 50
    },
    moneyWrapper: {
        flexDirection: 'row'
    },
    pointWrapper: {
        flexDirection: 'row'
    },
    quest: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        // borderWidth: 1,
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal: 15,
        height: 70,
        borderRadius: 10,
        elevation: 3,
        //  padding:20,
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 1
        },
        paddingVertical: 40
    },
    questBox: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        width: 90,
    },
    fiturContainer: {
        paddingHorizontal: 15,
        // paddingHorizontal: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderColor: '#F4F4F4',
        paddingBottom: 5,
        paddingTop: 50
    },
    menuCard: {
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: 5,
        // borderWidth: 1,
        marginRight: 5,
        // width: 70,
        height: 100,
        marginVertical: 3,
        // borderWidth: 1,
        padding: 5,
        width: 70
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        height: 55,
        // borderWidth: 1,
        backgroundColor: `rgba(73, 38, 140,0.1)`,
        borderRadius: 50
    },
    menuText: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 11,
        textAlign: 'center',
        marginTop: 10,
    },
    popularContainer: {
        marginVertical: 10,
        // borderTopWidth: 2,
        // borderColor: '#EFF4F9'
    },
    popularHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 5,
        marginHorizontal: 15,
        // borderWidth: 1
    },
    popularCard: {
        // height: 220,
        width: 155,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginRight: 5,
        borderRadius: 15,
        marginTop: 10,
        elevation: 0,
        //  padding:20,
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 1
        },
        // borderWidth: 1
    },
    popularImg: {
        height: 100,
        width: 170,
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 10,
        resizeMode: 'contain'
    },
    reviewWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 3

    },
    textCard: {
        marginLeft: 0,
        fontWeight: 'bold',
        fontSize: 12
    },
    textCard1: {
        marginLeft: 0,
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 12,
    }
})


export default Dashboard;
