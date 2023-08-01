import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ViewLocations = () => {
  const [beaches, setBeaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://192.168.127.214:8060/beaches/beach/view')
      .then((response) => {
        setBeaches(response.data);
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
      .delete(`http://localhost:8060/beaches/beach/delete/${id}`)
      .then(() => {
        setBeaches((prevBeaches) => prevBeaches.filter((beach) => beach._id !== id));
        setError('');
      })
      .catch((error) => {
        setError('Error deleting beach.');
      });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View>
        <Text>View Beaches</Text>
        <View>
          {error && <Text>{error}</Text>}
          {beaches.length === 0 && <Text>No beaches found</Text>}
          {beaches.map((beach) => (
            <View key={beach._id}>
              <Text>{beach.title}</Text>
              {/* Display the image1 */}
              <Image source={{ uri: `/beachimages/${beach.image1}` }} style={{ width: 200, height: 200 }} />
              <Text>Province: {beach.province}</Text>
              <Text>District: {beach.district}</Text>
              <Text>Category: {beach.category}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <TouchableOpacity onPress={() => handleDelete(beach._id)}>
                  <Button title="Delete" color="#d9534f" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   // Your styles go here if needed
// });

export default ViewLocations;