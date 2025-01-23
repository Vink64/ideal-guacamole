import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams(); // Pega o ID do curso da URL

  // Dados fictícios dos cursos
  const courseData = {
    title: "React Native do Zero",
    image: "https://via.placeholder.com/600x300",
    description: "Aprenda a criar apps mobile com React Native, desde o básico até avançado.",
    lessons: [
      { id: "1", title: "Introdução ao React Native" },
      { id: "2", title: "Configurando Ambiente de Desenvolvimento" },
      { id: "3", title: "Criando o Primeiro App" },
      { id: "4", title: "Trabalhando com Componentes e Props" },
    ],
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: courseData.image }} style={styles.image} />
      <Text style={styles.title}>{courseData.title}</Text>
      <Text style={styles.description}>{courseData.description}</Text>

      <Text style={styles.sectionTitle}>Aulas:</Text>
      <FlatList
        data={courseData.lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.lessonItem}>• {item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    color: "#bbb",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  lessonItem: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
});