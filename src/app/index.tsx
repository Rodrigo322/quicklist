import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";

interface BuysProps {
  id: number;
  name: string;
}

export default function Index() {
  const [buys, setBuys] = useState<BuysProps[]>([]);
  const [item, setItem] = useState("");

  function includeItemOnBuy() {
    if (item) {
      setBuys([
        ...buys,
        {
          id: Math.random(),
          name: item,
        },
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compras da semana</Text>

      <TextInput
        style={styles.input}
        placeholder="Adicione um novo item"
        placeholderTextColor="9CA3AF"
        onChangeText={setItem}
      />
      <TouchableOpacity onPress={includeItemOnBuy} style={styles.button}>
        <Text style={styles.textButton}>Adicionar item</Text>
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        {buys.map((item) => (
          <View style={styles.card}>
            <View style={styles.infoCard}>
              <MaterialIcons
                name="check-box-outline-blank"
                size={20}
                color="#D1D5DB"
              />
              <Text style={styles.textItem}>{item.name}</Text>
            </View>
            <AntDesign name="delete" size={24} color="#D1D5DB" />
          </View>
        ))}

        <View style={styles.card}>
          <View style={styles.infoCard}>
            <MaterialIcons
              name="check-box-outline-blank"
              size={20}
              color="#D1D5DB"
            />
            <Text style={styles.textItem}> item 1</Text>
          </View>
          <AntDesign name="delete" size={24} color="#D1D5DB" />
        </View>

        <View style={styles.card}>
          <View style={styles.infoCard}>
            <MaterialIcons
              name="check-box-outline-blank"
              size={20}
              color="#D1D5DB"
            />
            <Text style={styles.textItem}> item 1</Text>
          </View>
          <AntDesign name="delete" size={24} color="#D1D5DB" />
        </View>

        <View style={styles.card}>
          <View style={styles.infoCard}>
            <MaterialIcons
              name="check-box-outline-blank"
              size={20}
              color="#D1D5DB"
            />
            <Text style={styles.textItem}> item 1</Text>
          </View>
          <AntDesign name="delete" size={24} color="#D1D5DB" />
        </View>

        <View style={styles.card}>
          <View style={styles.infoCard}>
            <MaterialIcons
              name="check-box-outline-blank"
              size={20}
              color="#D1D5DB"
            />
            <Text style={styles.textItem}> item 1</Text>
          </View>
          <AntDesign name="delete" size={24} color="#D1D5DB" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5FB",
    paddingHorizontal: 30,
    paddingTop: 60,
    alignItems: "center",
  },
  title: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
  },
  input: {
    width: "100%",
    height: 44,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  button: {
    width: "100%",
    height: 44,
    backgroundColor: "#CA3884",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  textButton: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 16,
  },

  card: {
    width: "100%",
    height: 57,
    backgroundColor: "#FFFFFF",
    elevation: 15,
    borderRadius: 12,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  textItem: {
    color: "#374151",
    fontSize: 16,
  },
  cardContainer: {
    gap: 20,
  },
});
