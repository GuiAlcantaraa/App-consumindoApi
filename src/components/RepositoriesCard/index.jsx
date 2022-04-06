import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';



export function RepositoriesCard({ repositories }) {

    return (
        <TouchableOpacity style={styles.buttonRepo}>

            <Text style={styles.textName}>
                {repositories.full_name}
            </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonRepo:
    {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10

    },
    textName:
    {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});