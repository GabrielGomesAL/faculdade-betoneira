import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useBetoneiras } from '../hooks/useBetoneiras';
import BetoneiraCard from '../components/BetoneiraCard';
import LoadingIndicator from '../components/LoadingIndicator';

const DashboardScreen = ({ navigation }) => {
  const { betoneiras, loading } = useBetoneiras();
  const [selectedBetoneira, setSelectedBetoneira] = useState(null);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Your existing content here, modified to use navigation */}
      {betoneiras.map((betoneira) => (
        <BetoneiraCard 
          key={betoneira.id}
          betoneira={betoneira}
          onPress={() => navigation.navigate('Details', { betoneira })}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});

export default DashboardScreen;