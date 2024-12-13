import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
    const[isBalanceVisible,setIsBalanceVisible]=useState(true);

    const toggleBalanceVisibility =()=>{
        setIsBalanceVisible(!isBalanceVisible);
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerContainer}>
                <View style={styles.profileSection}>
                    <Image source={require('./assets/po.png')} style={styles.profileImage} />
                    <View>
                        <Text style={styles.profileName}>Khafidhotul Urfa</Text>
                        <Text style={styles.profileAccountType}>Personal Account</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <TouchableOpacity>
                        <Image source={require('./assets/Vec.png')} style={styles.settingsIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Greeting Section */}
            <View style={styles.greetingSection}>
                <View>
                    <Text style={styles.greetingText}>Good Morning, Urfa</Text>
                    <Text style={styles.greetingSubtext}>Check all your incoming and outgoing transactions here</Text>
                </View>
                <Image source={require('./assets/mat.png')} style={styles.sunIcon} />
            </View>

            {/* Account Number Section */}
            <View style={styles.accountContainer}>
                <Text style={styles.accountText}>Account No.</Text>
                <Text style={styles.accountNumber}>100899</Text>
            </View>

            {/* Balance Section */}
            <View style={styles.balanceContainer}>
                <View style={styles.balanceInfo}>
                <Text style={styles.balanceLabel}>Balance</Text>
                <View style={styles.balanceRow}>
                    <Text style={styles.balanceValue}>
                        {isBalanceVisible ? 'Rp 10.000.000' : '********'}</Text>
                    <TouchableOpacity onPress={toggleBalanceVisibility}>
                        <Image source={require('./assets/vi.png')} style={styles.eyeIcon} />
                    </TouchableOpacity>
                </View>
                </View>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Image source={require('./assets/PLUS.png')} style={styles.actionIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('./assets/SHARE.png')} style={styles.actionIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Transaction History Section */}
            <ScrollView style={styles.transactionHistory}>
                <View style={{flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 15,
                backgroundColor: 'white',
                borderRadius: 5,
                marginVertical: 5,
                elevation: 1,}}>
                <Text style={{fontSize: 25, font:'bold', color: 'black', fontWeight:700}}>Transaction Historis</Text></View>
                <View style={styles.transactionRow}>
                <Image source={require('./assets/elip.png')} style={{widht:30, height:30}}></Image>
                <View style={{marginRight:70}}>
                        <Text style={styles.transactionName}>Adityo Gizwanda</Text>
                        <Text style={styles.transactionType}>Transfer</Text>
                        <Text style={styles.transactionDate}>08 December 2024</Text>
                    </View>
                    <Text style={styles.transactionAmountNegative}>- 75.000,00</Text>
                </View>

                <View style={styles.transactionRow}>
                    <Image source={require('./assets/elip.png')} style={{widht:30, height:30}}></Image>
                    <View style={{marginRight:70}}>
                        <Text style={styles.transactionName}>Adityo Gizwanda</Text>
                        <Text style={styles.transactionType}>Topup</Text>
                        <Text style={styles.transactionDate}>08 December 2024</Text>
                    </View>
                    <Text style={styles.transactionAmountPositive}>+ 75.000,00</Text>
                </View>

                <View style={styles.transactionRow}>
                <Image source={require('./assets/elip.png')} style={{widht:30, height:30}}></Image>
                <View style={{marginRight:70}}>
                        <Text style={styles.transactionName}>Adityo Gizwanda</Text>
                        <Text style={styles.transactionType}>Transfer</Text>
                        <Text style={styles.transactionDate}>08 December 2024</Text>
                    </View>
                    <Text style={styles.transactionAmountNegative}>- 75.000,00</Text>
                </View>

                <View style={styles.transactionRow}>
                <Image source={require('./assets/elip.png')} style={{widht:30, height:30}}></Image>
                <View style={{marginRight:70}}>
                        <Text style={styles.transactionName}>Adityo Gizwanda</Text>
                        <Text style={styles.transactionType}>Transfer</Text>
                        <Text style={styles.transactionDate}>08 December 2024</Text>
                    </View>
                    <Text style={styles.transactionAmountNegative}>- 75.000,00</Text>
                </View>

                {/* Add more rows as needed */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    headerContainer: {
        padding: 15,
        backgroundColor: 'white',
        elevation: 3,
        marginTop:28
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 46,
        height: 46,
        marginRight: 10,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    profileAccountType: {
        fontSize: 14,
        color: 'gray',
    },
    settingsIcon: {
        width: 26,
        height: 26,
    },
    greetingSection: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    greetingText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginRight:10,
    },
    greetingSubtext: {
        fontSize: 17,
        color: 'black',
        marginTop: 5,
        marginRight:15,
        width:250
    },
    sunIcon: {
        width: 76,
        height: 74,
    },
    accountContainer: {
        flexDirection: 'row',
        backgroundColor: 'teal',
        padding: 15,
        borderRadius: 10,
        margin: 8,
        justifyContent: 'space-between',
        marginTop:0,
    },
    accountText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '500',
    },
    accountNumber: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    balanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        margin: 8,
        elevation: 2,
        marginTop:0,
    },
    balanceInfo: {
        flex:4
    },
    balanceLabel: {
        fontSize: 14,
        color: 'gray',
    },
    balanceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    balanceValue: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    eyeIcon: {
        width: 27,
        height: 18,
    },
    actionButtons: {
        flexDirection:'column',
        marginLeft: 60,
    },
    actionButton: {
        marginVertical: 4,
    },
    actionIcon: {
        width: 60,
        height: 60,
    },
    transactionHistory: {
        margin: 8,
        marginTop: 0,
    },
    transactionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 5,
        elevation: 1,
    },
    transactionName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    transactionType: {
        fontSize: 14,
        color: 'gray',
    },
    transactionDate: {
        fontSize: 12,
        color: 'gray',
    },
    transactionAmountPositive: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
    },
    transactionAmountNegative: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    },
});


// export default function App() {
//     return ( 
//     <View style = {styles.container} > 
//    <Box style={{backgroundColor:'red'}}>Box 1</Box>
//    <Box style={{backgroundColor:'blue'}}>Box 2</Box>
//    <Box style={{backgroundColor:'green'}}>Box 3</Box>
//    <Box style={{backgroundColor:'yellow'}}>Box 4</Box>
//    <Box style={{backgroundColor:'pink'}}>Box 5</Box>
//    <Box style={{backgroundColor:'orange'}}>Box 6</Box>
//         </View > );
// }

// export const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         flexDirection:'row',
//         flexWrap:'wrap',
//         padding:50,
//         height:300,
//         borderWidth: 6
//         // alignItems: 'center',
//         // justifyContent: 'center',
//     },
//     box: {
//         width: 700,
//         height:700,
//         paddingHorizontal: 20,
//         paddingVertical:20,
//         margin: 20,
//     },
//     green:{
//         backgroundColor:'green',
//     },
//     blue:{
//         backgroundColor:'blue',
//     }
// });