import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView, TextInput, Dimensions } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={{ uri: "https://picsum.photos/id/96/4752/3168" }} style={styles.profileImage} />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput placeholder="Buscar cursos..." style={styles.searchInput} />
          </View>
          <Image source={{ uri: "https://picsum.photos/id/96/4752/3168" }} style={styles.logo} />
        </View>
      ),
    });
  }, [navigation]);

  const featuredCourse = {
    id: "0",
    title: "Curso Destaque: React Native Avançado",
    image: "https://picsum.photos/id/96/4752/3168",
  };

  const categories = [
    {
      id: "1",
      title: "Desenvolvimento",
      courses: [
        { id: "101", title: "React Native do Zero", image: "https://picsum.photos/id/96/4752/3168" },
        { id: "102", title: "Next.js Avançado", image: "https://picsum.photos/id/96/4752/3168" },
        { id: "103", title: "Next.js Avançado", image: "https://picsum.photos/id/96/4752/3168" },
        { id: "104", title: "Next.js Avançado", image: "https://picsum.photos/id/96/4752/3168" },
        { id: "105", title: "Next.js Avançado", image: "https://picsum.photos/id/96/4752/3168" },
      ],
    },
    {
      id: "2",
      title: "Design & UX",
      courses: [
        { id: "201", title: "Figma para Iniciantes", image: "https://picsum.photos/id/96/4752/3168" },
        { id: "202", title: "UI Design com Adobe XD", image: "https://picsum.photos/id/96/4752/3168" },
        { id: "203", title: "Next.js Avançado", image: "https://picsum.photos/id/96/4752/3168" },
        { id: "204", title: "Next.js Avançado", image: "https://picsum.photos/id/96/4752/3168" },
        { id: "205", title: "Next.js Avançado", image: "https://picsum.photos/id/96/4752/3168" },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Banner principal */}
      <TouchableOpacity style={styles.banner} onPress={() => alert(`Abrir ${featuredCourse.title}`)}>
        <Image source={{ uri: featuredCourse.image }} style={styles.bannerImage} />
        <Text style={styles.bannerText}>{featuredCourse.title}</Text>
      </TouchableOpacity>

      <View style={{ paddingHorizontal: width * 0.05 }}>
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
              showsHorizontalScrollIndicator={true}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchWrapper: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "80%",
  },
  searchInput: {
    width: "60%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    textAlign: "left",
  },
  logo: {
    width: 50,
    height: 50,
  },
  banner: {
    width: "100%",
    height: height * 0.6, // 25% da altura da tela
    justifyContent: "flex-end",
    alignItems: "center",
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
  title: {
    color: "#fff",
    fontSize: width > 600 ? 28 : 22, // Maior para telas grandes
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: width > 600 ? 22 : 18,
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
    width: width > 600 ? 280 : 320, // Ajusta conforme o tamanho da tela
    height: width > 600 ? 160 : 180,
    borderRadius: 10,
  },
  courseTitle: {
    color: "#fff",
    fontSize: width > 600 ? 18 : 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
});