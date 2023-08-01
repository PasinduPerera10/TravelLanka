import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero section */}
      <View style={styles.hero}>
        <Image
          source={{ uri: `https://www.yovoyagin.com/uploads/0000/76/2022/04/05/galle-fort-main-1200x556.jpg` }}
          style={styles.image}
        />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Welcome to VisitLanka</Text>
          <Text style={styles.heroSubtitle}>Your gateway to the paradise island!</Text>
        </View>
      </View>

      {/* Brief description about VisitLanka */}
      <View style={styles.briefDescription}>
        <View style={styles.descriptionContent}>
          <Text style={styles.descriptionTitle}>About VisitLanka</Text>
          <Text style={styles.descriptionText}>
            VisitLanka is your ultimate guide to exploring the paradise island of Sri Lanka. From pristine beaches
            to lush green landscapes, from ancient temples to vibrant cities, Sri Lanka offers a diverse range of
            experiences for every traveler. Whether you are seeking adventure, relaxation, or cultural immersion,
            VisitLanka has got you covered. Plan your journey with our curated travel itineraries, discover hidden
            gems, and create unforgettable memories in this tropical paradise. Start your adventure today and
            experience the magic of Sri Lanka with VisitLanka.
          </Text>
        </View>
      </View>

      {/* Discover the Enchanting Beauty of Sri Lanka */}
      <View style={styles.briefDescription}>
        <View style={styles.descriptionContent}>
          <Text style={styles.descriptionTitle}>Discover the Enchanting Beauty of Sri Lanka</Text>
          <Text style={styles.descriptionText}>
            Discover the enchanting beauty of Sri Lanka, a tropical paradise where stunning landscapes, idyllic beaches,
            and ancient cultural heritage converge to offer an unforgettable experience. Immerse yourself in the charm of
            ancient temples, vibrant cities, and the warm hospitality of the locals. From thrilling adventures like
            trekking and wildlife safaris to serene beach resorts and rejuvenating Ayurvedic treatments, Sri Lanka caters
            to every traveler's desires. Experience a vibrant underwater world as you dive into crystal-clear waters and
            savor the delectable flavors of Sri Lankan cuisine, a fusion of diverse heritage. Whether you seek romance,
            adventure, or family fun, Sri Lanka has it all. Let this magical island captivate your senses and create
            cherished memories. Welcome to Sri Lanka, a treasure trove of unforgettable moments. Sri Lanka's appeal
            lies in its diverse offerings, making it an ideal destination for a variety of travelers seeking different
            experiences.
          </Text>
        </View>
      </View>

      {/* Featured Cards */}
      <View style={styles.featureContainer}>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Explore Beautiful Destinations</Text>
          <Text style={styles.featureText}>Discover the best travel destinations in Sri Lanka with VisitLanka.</Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Plan Your Trip</Text>
          <Text style={styles.featureText}>Plan your dream vacation with our easy-to-use trip planner.</Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>Capture Memories</Text>
          <Text style={styles.featureText}>Create lasting memories with unforgettable experiences.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  hero: {
    backgroundColor: '#f4511e',
    paddingVertical: 40,
    marginBottom: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#fff',
  },
  briefDescription: {
    marginBottom: 20,
  },
  descriptionContent: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  featureCard: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default Home;