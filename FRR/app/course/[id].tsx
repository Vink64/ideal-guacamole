import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CourseDetail() {
  const { id } = useLocalSearchParams(); // Obtém o ID do curso pela URL

  // 🔹 Simulando dados do curso
  const course = {
    id,
    title: "Curso de React Native",
    description: "Aprenda a criar apps mobile com React Native e Expo.",
    coverImage: "https://picsum.photos/id/96/4752/3168",
    lessons: [
      {
        id: "1",
        title: "Introdução ao React Native",
        thumbnail: "https://picsum.photos/id/96/4752/3168",
        duration: "10:30",
      },
      {
        id: "2",
        title: "Componentes e Props",
        thumbnail: "https://picsum.photos/id/96/4752/3168",
        duration: "15:20",
      },
      {
        id: "3",
        title: "Navegação com React Navigation",
        thumbnail: "https://picsum.photos/id/96/4752/3168",
        duration: "12:45",
      },
    ],
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* 🔹 Imagem de capa do curso */}
      <Image source={{ uri: course.coverImage }} style={{ width: "100%", height: 200, borderRadius: 10 }} />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>{course.title}</Text>
      <Text style={{ fontSize: 16, color: "gray", marginVertical: 10 }}>{course.description}</Text>

      {/* 🔹 Lista de aulas */}
      <FlatList
        data={course.lessons}
        keyExtractor={(lesson) => lesson.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ flexDirection: "column", alignItems: "center", marginBottom: 10 }}>
            <Image source={{ uri: item.thumbnail }} style={{ width: 320, height: 180, borderRadius: 5, marginRight: 10 }} />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ fontSize: 14, color: "gray" }}>{item.duration}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
