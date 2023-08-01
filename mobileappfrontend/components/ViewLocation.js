import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const ViewLocation = () => {
  const route = useRoute();
  const id = route.params.id;
  const [beach, setBeach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      setError('Invalid beach id.');
      setLoading(false);
      return;
    }
  
    axios
      .get(`http://192.168.127.214:8060/beaches/beach/view/${id}`)
      .then((response) => {
        setBeach(response.data);
        setLoading(false);
        setError('');
      })
      .catch((error) => {
        setLoading(false);
        setError('Error while fetching beach details.');
        console.error('Error while fetching beach details:', error);
      });
  }, [id]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!beach) {
    return <Text>Location not found</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>{beach.title}</Text>
        <Image
          source={{ uri: `https://www.yovoyagin.com/uploads/0000/76/2022/04/05/galle-fort-main-1200x556.jpg` }}
          style={styles.image}
        />
        <View style={styles.cardBody}>
          <Text style={styles.text}>Province: {beach.province}</Text>
          <Text style={styles.text}>District: {beach.district}</Text>
          <Text style={styles.text}>{beach.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  cardBody: {
    maxHeight: 200,
    overflow: 'hidden',
    marginTop: 10,
  },
  text: {
    textAlign: 'justify',
    marginBottom: 5,
  },
});

export default ViewLocation;