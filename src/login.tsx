/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import React, { useState } from "react"
import {
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Center,
    useToast,
    Text,
    useTheme,
    View,
} from 'native-base';

import { color } from '../../theme/color'
import { StyleSheet, ImageBackground } from "react-native";
import { login } from '../../webservices/userSvc'
import { UserModal } from "./modal";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "#FFFFFF",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30
    },
    icon: {
        width: 50,
        height: 100
    }
});



export default function Login() {
    const toast = useToast();
    const [userData, setUserData] = useState<{ email?: string, password?: string }>({});
    const [showModal, setShowModal] = React.useState(false);
    const [focus, setFocusColor] = useState<string>("grey");
    const { colors } = useTheme();
    const [loading, setLoading] = useState<boolean>(false);

    const bg = require("../../../assets/images/bg.png");


    const handleSubmit = () => {
        setLoading(true); //  verification loading
        const _login = login(userData);
        setTimeout(() => {
            setLoading(false);
            switch (_login) {
                case 1:
                    setShowModal(true)
                    break;
                case 0:
                    toast.show({
                        title: "Information incorrect",
                        status: "error",
                        description: ""
                    })
                default:
                    break;
            }
        }, 3000)
        console.log(userData);
    }

    return (
        <><View style={styles.container}>
            <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
                <Center alignItems="center">
                    <Text style={styles.text}>
                        {"Bienvenue"}
                    </Text>
                </Center>
                <Center flex={2}>
                    <Box shadow={8} borderRadius="lg" bg={colors.white} p={6} w="90%">
                        <Heading color="muted.400" size="xs">
                            {"Connecter-vous ,"}
                        </Heading>
                        <VStack mt={5}>
                            <FormControl>
                                <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600, mt: 2 }}>
                                    {"E-mail"}
                                </FormControl.Label>
                                <Input borderRadius="lg" style={{ borderColor: focus }} placeholder="Example@gmail.com" onChangeText={(t) => { setUserData({ ...userData, email: t }); }} />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600, mt: 2 }}>
                                    {"Mot de passe"}
                                </FormControl.Label>
                                <Input borderRadius="lg" style={{ borderColor: focus }} placeholder="Mot de passe" type="password" onChangeText={(t) => { setUserData({ ...userData, password: t }); }} />
                                <Link _text={{ fontSize: 'xs', fontWeight: '700', color: color.blue }} alignSelf="flex-end" mt={2} mb={2} p={1}>
                                    {"Mot de passe oublié"}?
                                </Link>
                            </FormControl>
                            <VStack space={2} alignItems="center" justifyContent="space-between" flexDirection="row">
                                <Button borderRadius="lg" isLoading={loading} backgroundColor={color.blue} _text={{ color: 'white' }} onPress={handleSubmit}>
                                    {"Se connecter"}
                                </Button>
                                <Button borderRadius="lg" backgroundColor={color.blue} onPress={() => setShowModal(false)} _text={{ color: 'white' }}>
                                    {"S'inscrire"}
                                </Button>
                            </VStack>
                        </VStack>
                    </Box>
                </Center>
            </ImageBackground>
        </View>
            <UserModal setShowModal={setShowModal} showModal={showModal} title={"Connexion"} />
        </>
    )
}

