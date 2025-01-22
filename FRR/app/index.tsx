import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

// Exemplo de cursos
const featuredCourse = {
  id: "0",
  title: "Curso Destaque: React Native Avançado",
  image: "https://picsum.photos/id/58/1280/853",
};

const categories = [
  {
    id: "1",
    title: "Desenvolvimento Web",
    courses: [
      { id: "1.1", name: "HTML & CSS", image: "https://picsum.photos/id/74/4288/2848" },
      { id: "1.2", name: "JavaScript Moderno", image: "https://picsum.photos/id/76/4912/3264" },
      { id: "1.3", name: "React JS", image: "https://picsum.photos/id/96/4752/3168" },
    ],
  },
  {
    id: "2",
    title: "Programação Mobile",
    courses: [
      { id: "2.1", name: "React Native", image: "https://picsum.photos/id/104/3840/2160" },
      { id: "2.2", name: "Flutter", image: "https://picsum.photos/id/82/1500/997" },
      { id: "2.3", name: "Swift", image: "https://picsum.photos/id/102/4320/3240" },
    ],
  },
];

export default function HomeScreen() {
  const renderCategory = ({ item }: any) => (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <FlatList
        data={item.courses}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(course) => course.id}
        renderItem={({ item: course }) => (
          <TouchableOpacity style={styles.courseCard} onPress={() => alert(`Abrir ${course.name}`)}>
            <Image source={{ uri: course.image }} style={styles.courseImage} />
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Banner Principal */}
      <TouchableOpacity style={styles.banner} onPress={() => alert(`Abrir ${featuredCourse.title}`)}>
        <Image source={{ uri: featuredCourse.image }} style={styles.bannerImage} />
        <Text style={styles.bannerText}>{featuredCourse.title}</Text>
      </TouchableOpacity>

      {/* Lista de Categorias */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Fundo escuro igual Netflix
  },
  banner: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  bannerText: {
    position: "absolute",
    bottom: 20,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 5,
  },
  categoryContainer: {
    marginVertical: 10,
    paddingLeft: 10,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  courseCard: {
    marginRight: 10,
  },
  courseImage: {
    width: 120,
    height: 170,
    borderRadius: 5,
  },
});
