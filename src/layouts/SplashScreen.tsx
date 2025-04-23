import { useEffect, useState } from "react";
import { View, Image, StyleSheet} from "react-native";
import LoginScreen from "./LoginScreen";

export default function SplashScreen(){
    const [showLoging, setShowLogin ] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogin(true);
        }, 3000); //3 seconds
        return () => clearTimeout(timer);
    }, []);

    if(showLoging){
        return <LoginScreen />;
    }

    return (
        <View>
        <Image source={ require("../assets/medicina.png")}/>
        </View>
    );
}