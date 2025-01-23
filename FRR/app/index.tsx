import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const categories = [
    {
      id: "1",
      title: "Desenvolvimento",
      courses: [
        { id: "101", title: "React Native do Zero", image: "https://via.placeholder.com/400x200" },
        { id: "102", title: "Next.js Avançado", image: "https://via.placeholder.com/400x200" },
      ],
    },
    {
      id: "2",
      title: "Design & UX",
      courses: [
        { id: "201", title: "Figma para Iniciantes", image: "https://via.placeholder.com/400x200" },
        { id: "202", title: "UI Design com Adobe XD", image: "https://via.placeholder.com/400x200" },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bem-vindo às Vídeo Aulas</Text>

      {categories.map((category) => (
        <View key={category.id} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          <FlatList
            data={category.courses}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.courseItem}
                onPress={() => router.push(`./course/${item.id}` as const)}
              >
                <Image source={{ uri: item.image }} style={styles.courseImage} />
                <Text style={styles.courseTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 15,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  courseItem: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    alignItems: "center",
  },
  courseImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  courseTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
});
