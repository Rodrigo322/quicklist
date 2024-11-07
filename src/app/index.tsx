import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

interface BuysProps {
  id: number;
  name: string;
  complete: boolean;
}

export default function Index() {
  const [buys, setBuys] = useState<BuysProps[]>([]);
  const [item, setItem] = useState("");

  function saveItem() {
    if (item.trim()) {
      setBuys([...buys, { id: buys.length + 1, name: item, complete: false }]);
      setItem("");
    }
  }

  function toggleComplete(id: number) {
    setBuys((prevBuys) =>
      prevBuys.map((buy) =>
        buy.id === id ? { ...buy, complete: !buy.complete } : buy
      )
    );
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
      <TouchableOpacity onPress={saveItem} style={styles.button}>
        <Text style={styles.textButton}>Adicionar item</Text>
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        {buys.map((item) => (
          <View
            key={item.id}
            style={
              item.complete
                ? [styles.card, { backgroundColor: "#a9ffbe" }]
                : styles.card
            }
          >
            <View style={styles.infoCard}>
              <Pressable onPress={() => toggleComplete(item.id)}>
                {item.complete ? (
                  <MaterialIcons name="check-box" size={20} color="black" />
                ) : (
                  <MaterialIcons
                    name="check-box-outline-blank"
                    size={20}
                    color="#D1D5DB"
                  />
                )}
              </Pressable>

              <Text style={styles.textItem}>{item.name}</Text>
            </View>
            <AntDesign
              name="delete"
              size={24}
              color={item.complete ? "black" : "#D1D5DB"}
            />
          </View>
        ))}
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
