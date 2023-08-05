import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ViewLocations = () => {
  const [beaches, setLocationes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('http://192.168.209.214:8060/beaches/location/view')
      .then((response) => {
        setLocationes(response.data);
        setLoading(false);
        setError('');
      })
      .catch((error) => {
        setLoading(false);
        setError('Error while fetching beaches.');
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://192.168.127.214:8060/beaches/location/delete/${id}`)
      .then(() => {
        setLocationes((prevLocationes) => prevLocationes.filter((location) => location._id !== id));
        setError('');
      })
      .catch((error) => {
        setError('Error deleting location.');
      });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        {/* <Text style={styles.title}>View Locations</Text> */}
        {error && <Text style={styles.error}>{error}</Text>}
        {beaches.length === 0 && <Text style={styles.noDataText}>No beaches found</Text>}
        {beaches.map((location) => (
          <View key={location._id} style={styles.beachCard}>
            <Text style={styles.beachTitle}>{location.title}</Text>
            {/* Display the image1 */}
            <Image source={{ uri: `https://www.yovoyagin.com/uploads/0000/76/2022/04/05/galle-fort-main-1200x556.jpg` }} style={styles.image} />
            {/* <Image src={`/beachimages/${location.image1}`} style={styles.image} /> */}
            <Image
                style={styles.image}
                source={{
                  uri: `http://172.28.19.253:8000/webfrontend/public/beachimages/${location.image1}`,
                }}
              />
            <Text style={styles.detailsText}>Province: {location.province}</Text>
            <Text style={styles.detailsText}>District: {location.district}</Text>
            <Text style={styles.detailsText}>Category: {location.category}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ViewLocation", { id: location._id })}
                style={styles.button}
              >
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  noDataText: {
    marginBottom: 10,
  },
  beachCard: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
  },
  beachTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 8,
    width: '48%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ViewLocations;