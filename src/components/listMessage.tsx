import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IMessage } from "../interfaces/IMessage";
import { allMsg } from "./../webservices/messageSvc";

export default function ListMessage() {
  const [messages, setMessages] = useState(null);

  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   const getData = () => {
  //     allMsg().then((rep: IMessage[]) => {
  //       setMessages(rep);
  //     });
  //   };
  return (
    <View>
      <Text>Bonjour</Text>
      {/* <ul>
                {
                    messages.map((m: IMessage) => (
                        <li>{m.content}</li>
                    ))
                }
            </ul> */}
    </View>
  );
}

// const styles = StyleSheet.create({})
