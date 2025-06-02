import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const BetoneiraCard = ({ betoneira, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: betoneira.imagem }}
        style={styles.imagem}
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.nomeBetoneira}>{betoneira.nome}</Text>
        <Text style={styles.descricaoCard}>{betoneira.descricao}</Text>
        <Text style={styles.preco}>{betoneira.preco}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Your existing styles here
});

export default BetoneiraCard;