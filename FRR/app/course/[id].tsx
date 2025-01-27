import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function CourseDetail() {

  const navigation = useNavigation();
  
    useEffect(() => {
      navigation.setOptions({
        header: () => (
          <View style={{width: "100%", backgroundColor: "#000000", alignItems: "center", paddingVertical: 10}}>
            <Text style={{ color: "#990000", fontSize: 24, fontWeight: 700,}}>{course.title}</Text>
          </View>
        ),
      });
    }, [navigation]);

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
        desc: "Descubra o que é o React Native, como ele funciona e quais são suas principais vantagens no desenvolvimento de aplicativos móveis. Vamos explorar a estrutura básica de um projeto e preparar seu ambiente de desenvolvimento.",
      },
      {
        id: "2",
        title: "Componentes e Props",
        thumbnail: "https://picsum.photos/id/96/4752/3168",
        duration: "1:15:20",
        desc: "Aprenda sobre os blocos fundamentais do React Native: os componentes. Entenda como utilizar props para tornar seus componentes reutilizáveis e flexíveis, permitindo a criação de interfaces dinâmicas.",
      },
      {
        id: "3",
        title: "Navegação com React Navigation",
        thumbnail: "https://picsum.photos/id/96/4752/3168",
        duration: "12:45",
        desc: "Veja como implementar a navegação entre telas no React Native utilizando a biblioteca React Navigation. Exploramos diferentes tipos de navegação, como Stack Navigation, Tab Navigation e Drawer Navigation",
      },
    ],
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000000"}}>
      {/* 🔹 Imagem de capa do curso */}
      <Image source={{ uri: course.coverImage }} style={{ width: "100%", height: 200 }} />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>{course.title}</Text>
      <Text style={{ fontSize: 16, color: "white", marginVertical: 10 }}>{course.description}</Text>

      <View style={{padding: 20}}>
      {/* 🔹 Lista de aulas */}
      <FlatList
        data={course.lessons}
        keyExtractor={(lesson) => lesson.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ flexDirection: "column", alignItems: "flex-start", marginBottom: 10 }}>
            <View style={{flexDirection: "row"}}>
              <View>
                <Image source={{ uri: item.thumbnail }} style={{ width: 320, height: 180, borderRadius: 5, marginRight: 10 }} />
                <Text style={{ fontSize: 14, color: "white", alignSelf: "center", position: "absolute", right: 14, bottom: 1}}>{item.duration}</Text>
              </View>
              <View style={{alignItems: "flex-start", marginLeft: 10}}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
                <Text style={{fontSize: 14, maxWidth: 400, marginTop: 5}}>{item.desc}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
    </View>
  );
}
