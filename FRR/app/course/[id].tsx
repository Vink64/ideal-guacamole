import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function CourseDetail() {

  const navigation = useNavigation();
  
    useEffect(() => {
      navigation.setOptions({
        header: () => (
          <View style={{width: "100%", backgroundColor: "#000000", alignItems: "center", paddingVertical: 10}}>
            <Text style={{ color: "#CC2200", fontSize: 24, fontWeight: 700,}}>{course.title}</Text>
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
      {
        id: "4",
        title: "Navegação com React Navigation",
        thumbnail: "https://picsum.photos/id/96/4752/3168",
        duration: "12:45",
        desc: "Veja como implementar a navegação entre telas no React Native utilizando a biblioteca React Navigation. Exploramos diferentes tipos de navegação, como Stack Navigation, Tab Navigation e Drawer Navigation",
      },
    ],
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000000", flexWrap: "wrap"}}>
      {/* 🔹 Imagem de capa do curso */}
      <Image source={{ uri: course.coverImage }} style={{ width: "100%", height: 200 }} />
      <Text style={{ fontSize: 16, color: "white", margin:20, fontWeight: "bold" }}>{course.description}</Text>
      {/* 🔹 Lista de aulas */}
      <FlatList
        data={course.lessons}
        horizontal
        style={{marginLeft: 20, marginBottom: 20, marginRight: 20, flexWrap:"wrap"}}
        keyExtractor={(lesson) => lesson.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{maxHeight: "40%", marginRight: 20, flexDirection: "column", alignItems: "center"}}>
            <View style={{width: "100%", alignItems: "center",}}>
              <View style={{width: "100%"}}>
                <Image source={{ uri: item.thumbnail }} style={{width: 320, height: 180, borderRadius: 5,}} />
                <Text style={{ fontSize: 14, color: "#FFFFFF", position: "absolute"}}>{item.duration}</Text>
              </View>
              <Text style={{ fontSize: 16, color: "#FFFFFF",}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
  );
}
