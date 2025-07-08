import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import useBinanceSocket from '../hooks/useBinanceSocket';
import PriceCard from '../components/PriceCard';

const HomeScreen = () => {
  const { price } = useBinanceSocket();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bitcoin.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Live BTC/USDT Price</Text>
      <PriceCard symbol="BTC/USDT" price={price} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});
