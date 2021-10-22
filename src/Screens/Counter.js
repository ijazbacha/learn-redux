import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, SafeAreaViewBase } from "react-native";


const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count+1)
    }

    const handleDecrease = () => {
        setCount(count-1)
    }
    return (

        <View style={styles.container}>
            <Button title="Decrease" color="red" onPress={handleDecrease} />
            <Text style={styles.textStyle}>{count}</Text>
            <Button title="Increase" color="green" onPress={handleIncrease} />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    textStyle:{
        fontSize:25,
        paddingVertical:20
    }
})


export default Counter;