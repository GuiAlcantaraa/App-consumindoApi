import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useApi } from '../../hooks/useApi';


export default function Home() {

    const { data } = useApi('https://api.github.com/users/GuiAlcantaraa/repos')

    console.log(data)

    return (
        <View style={styles.container}>
            <Text>Consumindo Api</Text>
            <StatusBar style="auto" />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={6}
            >

                <Text style={styles.buttonText}>
                    Consumir
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
});
