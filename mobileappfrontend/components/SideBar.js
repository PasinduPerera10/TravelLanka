import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sidebar = () => {
  const navigation = useNavigation();

  const handleSidebarItemPress = () => {
    // Implement logic to handle sidebar item press here
  };

  return (
    <View style={styles.sidebarContainer}>
      <TouchableOpacity onPress={handleSidebarItemPress}>
        <Text style={styles.sidebarItem}>Sidebar Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSidebarItemPress}>
        <Text style={styles.sidebarItem}>Sidebar Item 2</Text>
      </TouchableOpacity>
      {/* Add more sidebar items as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  sidebarItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Sidebar;