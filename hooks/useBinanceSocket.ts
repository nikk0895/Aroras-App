import { useEffect, useState } from 'react';

const useBinanceSocket = () => {
  const [price, setPrice] = useState('0.00');

  useEffect(() => {
    const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(parseFloat(data.p).toFixed(2));
    };

    return () => {
      socket.close();
    };
  }, []);

  return { price };
};

export default useBinanceSocket;
