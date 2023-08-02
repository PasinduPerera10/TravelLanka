import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const ViewLocation = () => {
  const route = useRoute();
  const id = route.params.id;
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      setError('Invalid location id.');
      setLoading(false);
      return;
    }

    axios
      .get(`http://192.168.127.214:8060/beaches/location/view/${id}`)
      .then((response) => {
        setLocation(response.data);
        setLoading(false);
        setError('');
      })
      .catch((error) => {
        setLoading(false);
        setError('Error while fetching location details.');
        console.error('Error while fetching location details:', error);
      });
  }, [id]);

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (!location) {
    return <Text style={styles.errorText}>Location not found</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{location.title}</Text>
        <Image
          source={{ uri: `https://www.yovoyagin.com/uploads/0000/76/2022/04/05/galle-fort-main-1200x556.jpg` }}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.detailText}>Province: {location.province}</Text>
          <Text style={styles.detailText}>District: {location.district}</Text>
          <Text style={styles.descriptionText}>{location.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  details: {
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
    lineHeight: 22,
  },
  loadingText: {
    fontSize: 18,
    marginBottom: 10,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 10,
  },
});

export default ViewLocation;