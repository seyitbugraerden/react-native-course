import { StyleSheet, Text, FlatList } from "react-native";

export default function HomeScreen() {
  const courses = [
    { name: "Angular", id: 1 },
    { name: "React Js", id: 2 },
    { name: "C#", id: 3 },
    { name: "C Programlama", id: 4 },
    { name: "Bootstrap", id: 5 },
  ];
  return (
    <FlatList
      data={courses} //Verileri çekiyoruz
      // horizontal={true} Yatay şekilde uzatır
      // showsHorizontalScrollIndicator={false} //scroll bar görüntüsünü ortadan kaldırır.
      keyExtractor={(item: any) => item.id} //her bir elemanın özel olduğunu belirtmemiz gerek.
      renderItem={({ item }) => { //Çekin verileri map'liyoruz
        return (
          <Text style={styles.content}>
            {item.name} / {item.id}
          </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: "yellow",
    marginVertical: 10,
    padding: 20,
  },
});
