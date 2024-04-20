import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { collection, getDocs, DocumentData, query } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import { db } from "./firebase";

const Activity = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Query Firestore collection "Items" and order by createdAt in descending order
        const q = query(collection(db, "Items"), orderBy("time", "desc"));
        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      borderBottomWidth: 1,
      borderBottomColor: "lightgray", // Gray bar between items
      flexDirection: "row", // Arrange content horizontally
      justifyContent: "space-between", // Align items at each end of the container
      alignItems: "center", // Center items vertically
    },
    itemContent: {
      flex: 1, // Take up remaining space
    },
    timeText: {
      marginLeft: 10, // Add some margin to separate time from content
    },
  });

  const Box = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemContent}>
          <Text>
            <Ionicons name={item.image} /> {item.key}
          </Text>
          <Text>{item.type}</Text>
        </View>
        <Text style={styles.timeText}>
          {item.time.toDate().toLocaleString()}
          {"\n\n"}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        // data={[
        //   {
        //     key: "Kitchen Window",
        //     type: "Open",
        //     image: "grid-outline",
        //     time: "",
        //   },
        //   {
        //     key: "Bedroom Door",
        //     type: "Closed",
        //     image: "tablet-portrait-outline",
        //     time: "",
        //   },
        //   {
        //     key: "Security System",
        //     type: "Armed",
        //     image: "lock-closed-outline",
        //     time: "",
        //   },
        //   {
        //     key: "Fire Detector",
        //     type: "Detected",
        //     image: "flame-outline",
        //     time: "",
        //   },
        //   {
        //     key: "Living Room Motion",
        //     type: "Detected",
        //     image: "alert-circle-outline",
        //     time: "",
        //   },
        //   {
        //     key: "Backyard",
        //     type: "Recording",
        //     image: "play-outline",
        //     time: "",
        //   },
        // ]}
        data={users}
        renderItem={({ item }) => <Box item={item} />}
      />
    </View>
  );
};

export default Activity;
