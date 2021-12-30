import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { allMsg } from "./../webservices/messageSvc";

export default function ListMessage() {
    const [message, setmessage] = useState(
        allMsg().then((res: any) => {
            setmessage(res)
        }));
    console.log(message)
    return (
        <View>

        </View>
    )
}

const styles = StyleSheet.create({})
