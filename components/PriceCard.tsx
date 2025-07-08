import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PriceCardProps {
  symbol: string;
  price: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ symbol, price }) => {
  const [timestamp, setTimestamp] = useState<string>('');
  const [previousPrice, setPreviousPrice] = useState<number | null>(null);
  const [priceColor, setPriceColor] = useState<string>('#ffffff');

  useEffect(() => {
    if (price) {
      const current = parseFloat(price);

      // Determine price movement color
      if (previousPrice !== null) {
        if (current > previousPrice) {
          setPriceColor('#00ff99'); // green
        } else if (current < previousPrice) {
          setPriceColor('#ff4d4d'); // red
        } else {
          setPriceColor('#ffffff'); // no change
        }
      }

      setPreviousPrice(current);

      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTimestamp(formattedTime);
    }
  }, [price]);

  return (
    <View style={styles.card}>
      <Text style={styles.symbol}>{symbol}</Text>
      <Text style={[styles.price, { color: priceColor }]}>
        ${parseFloat(price).toFixed(2)}
      </Text>
      <Text style={styles.timestamp}>Last updated: {timestamp}</Text>
    </View>
  );
};

export default PriceCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  symbol: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 8,
  },
  price: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  timestamp: {
    marginTop: 10,
    color: '#888',
    fontSize: 14,
  },
});
