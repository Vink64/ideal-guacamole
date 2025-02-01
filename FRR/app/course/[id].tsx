import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

const { width, height } = Dimensions.get("window");

export default function CourseDetail() {
  const navigation = useNavigation();
  let imageWidth = width > 600 ? width*0.4 : width*0.9; // Define a largura das imagens como 90% da tela

  const { id } = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{course.title}</Text>
        </View>
      ),
    });
  }, [navigation]);

  const course = {
    id,
    title: "Curso de React Native",
    description: "Aprenda a criar apps mobile com React Native e Expo.",
    coverImage: "https://picsum.photos/id/96/4752/3168",
    lessons: [
      { id: "1", title: "Introdução ao React Native", thumbnail: "https://picsum.photos/id/96/4752/3168", duration: "10:30" },
      { id: "2", title: "Componentes e Props", thumbnail: "https://picsum.photos/id/96/4752/3168", duration: "1:15:20" },
      { id: "3", title: "Navegação com React Navigation", thumbnail: "https://picsum.photos/id/96/4752/3168", duration: "12:45" },
      { id: "4", title: "Navegação com React Navigation", thumbnail: "https://picsum.photos/id/96/4752/3168", duration: "12:45" },
    ],
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.banner}>
      <Image source={{ uri: course.coverImage }} style={[styles.coverImage, { width: "100%" }]} />
      <Text style={styles.description}>{course.description}</Text>
      </View>

      <FlatList
        data={course.lessons}
        keyExtractor={(lesson) => lesson.id}
        numColumns={width > 600 ? 2 : 1} // Adapta o layout conforme a tela
        contentContainerStyle={[styles.lessonList, {maxWidth: "100%"}]}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.lessonItem, { width: imageWidth }]}>
            {/* 🔥 AQUI: Define a proporção da imagem sem alterar o espaço do container */}
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
              <Text style={styles.lessonDuration}>{item.duration}</Text>
            </View>
            <Text style={styles.lessonTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    paddingVertical: 10,
    verticalAlign: "middle",
  },
  headerTitle: {
    color: "#CC2200",
    fontSize: 24,
    fontWeight: "bold",
  },
  coverImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  description: {
    fontSize: 16,
    color: "white",
    margin: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  lessonList: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  lessonItem: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 16 / 9, // 🔥 Mantém a proporção 16:9 sem distorcer
    borderRadius: 5,
    overflow: "hidden", // 🔹 Garante que a borda arredondada funcione corretamente
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  lessonDuration: {
    fontSize: 14,
    color: "#FFFFFF",
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 5,
    borderRadius: 5,
  },
  lessonTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 10,
    textAlign: "center",
  },
  banner: {
    width: "81%",
    height: height * 0.7, // 35% da altura da tela
    aspectRatio: 16 / 9,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "center",
  },
});
