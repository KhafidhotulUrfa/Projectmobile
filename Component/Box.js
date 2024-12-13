import { StyleSheet,Text, View, Image } from "react-native";
export default function Box ({children, style}){
    return(
        <View style={[style.box, style]}>
            <Text style={style.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'blue',
        padding:10
    },
    text:{
        fontSize:24,
        color:'white',
        textAlign:'center'
    }
})