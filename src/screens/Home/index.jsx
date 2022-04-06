import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { RepositoriesCard } from '../../components/RepositoriesCard';
import { useApi } from '../../hooks/useApi';

export default function Home() {

    const { data: repositories } = useApi('/users/GuiAlcantaraa/repos')

    return (
        <View style={styles.container}>
            <Text>Consumindo Api</Text>
            <StatusBar style="auto" />

            <FlatList
                data={repositories}
                keyExtractor={item => item.full_name}
                renderItem={({ item }) => (
                    <RepositoriesCard repositories={item} />
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30
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
