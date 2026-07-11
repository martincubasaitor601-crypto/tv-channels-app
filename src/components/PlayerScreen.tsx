import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  ScrollView,
} from 'react-native';

const PlayerScreen = ({ route, navigation }: any) => {
  const { channel } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayPress = async () => {
    try {
      setIsLoading(true);
      const canOpen = await Linking.canOpenURL(channel.url);
      if (canOpen) {
        await Linking.openURL(channel.url);
        setIsPlaying(true);
      } else {
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setIsPlaying(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePausePress = () => {
    setIsPlaying(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>‹ Volver</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{channel.name}</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.playerContainer}>
          <View style={styles.videoArea}>
            {isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#e94560" />
                <Text style={styles.loadingText}>Conectando...</Text>
              </View>
            ) : isPlaying ? (
              <View style={styles.videoPlaceholder}>
                <Text style={styles.placeholderText}>🎬 En directo</Text>
                <Text style={styles.placeholderSubtext}>{channel.name}</Text>
              </View>
            ) : (
              <View style={styles.videoPlaceholder}>
                <Text style={styles.emoji}>📺</Text>
                <Text style={styles.placeholderText}>Reproductor de Video</Text>
              </View>
            )}
          </View>

          <View style={styles.controlsContainer}>
            <View style={styles.playerControls}>
              {!isPlaying ? (
                <TouchableOpacity
                  style={styles.playButton}
                  onPress={handlePlayPress}
                  activeOpacity={0.8}
                >
                  <Text style={styles.playButtonText}>▶ REPRODUCIR</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[styles.playButton, styles.pauseButton]}
                  onPress={handlePausePress}
                  activeOpacity={0.8}
                >
                  <Text style={styles.playButtonText}>⏸ PAUSAR</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Canal:</Text>
              <Text style={styles.infoValue}>{channel.name}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>País:</Text>
              <Text style={styles.infoValue}>{channel.country}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Categoría:</Text>
              <Text style={styles.infoValue}>
                {channel.category.charAt(0).toUpperCase() + channel.category.slice(1)}
              </Text>
            </View>
            <View style={styles.urlContainer}>
              <TouchableOpacity
                style={styles.linkButton}
                onPress={() => Linking.openURL(channel.url)}
              >
                <Text style={styles.linkButtonText}>Abrir sitio web →</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#0f3460',
    borderBottomWidth: 1,
    borderBottomColor: '#16213e',
  },
  backButton: {
    marginBottom: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#e94560',
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  playerContainer: {
    padding: 16,
  },
  videoArea: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#16213e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 60,
    marginBottom: 12,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  placeholderSubtext: {
    fontSize: 14,
    color: '#a0a0a0',
    marginTop: 8,
    textAlign: 'center',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loadingText: {
    marginTop: 12,
    color: '#e94560',
    fontSize: 16,
  },
  controlsContainer: {
    marginBottom: 20,
  },
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  playButton: {
    backgroundColor: '#e94560',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  pauseButton: {
    backgroundColor: '#f39c12',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#0f3460',
  },
  infoLabel: {
    fontSize: 14,
    color: '#a0a0a0',
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  urlContainer: {
    marginTop: 12,
  },
  linkButton: {
    backgroundColor: '#0f3460',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e94560',
  },
  linkButtonText: {
    color: '#e94560',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default PlayerScreen;