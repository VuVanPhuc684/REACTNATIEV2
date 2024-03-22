import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Resigter = () => {
    const navigation = useNavigation();

    const navigateToRegister = () => {
        navigation.navigate('Login'); 
    };

    return (
        <View>
            <ImageBackground source={require('../img/2.jpg')} style={styles.anhnen}>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', width: "100%", height: "100%", }}>
                    {/* logo */}
                    <Image source={require('../img/1.png')} style={styles.anhlogo} />
                    {/* tiêu đề */}
                    <Text style={{ color: "#9181f2", fontWeight: "bold", fontSize: 30, width: "90%", textAlign: "center" }}>    Resigter</Text>
                    {/* nơi nhập họ và tên  */}
                    <TextInput placeholder='Nhập họ và tên ' style={{ width: "70%", height: 50, backgroundColor: "#aaa", opacity: 0.75, borderRadius: 20, marginLeft: 70, marginTop: 20 }} />
                    {/* nơi nhập mật khẩu  */}
                    <TextInput placeholder='Nhập mật khẩu  ' style={{ width: "70%", height: 50, backgroundColor: "#aaa", opacity: 0.75, borderRadius: 20, marginLeft: 70, marginTop: 20 }} />
                    {/* nơi nhập mật khẩu nhập lại  */}
                    <TextInput placeholder='Nhập lại mật khẩu  ' style={{ width: "70%", height: 50, backgroundColor: "#aaa", opacity: 0.75, borderRadius: 20, marginLeft: 70, marginTop: 20 }} />
                    {/* button đăng nhập  */}
                    <Pressable style={styles.nut} onPress={navigateToRegister}>
                        <Text style={{ textAlign: "center", lineHeight: 50 }}>ĐĂNG Ký </Text>
                    </Pressable>
                </View>
            </ImageBackground>

        </View>
    )
}

export default Resigter

const styles = StyleSheet.create({
    anhnen: {
        width: "100%",
        height: "100%",

    },
    anhlogo: {
        width: 100,
        height: 100,
        marginTop: 150,
        marginLeft: 150
    },
    nut: {
        width: "70%",
        height: 50,
        backgroundColor: "#9181f2",
        marginLeft: 70,
        marginTop: 50,
        borderRadius: 20
    }
})