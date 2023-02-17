import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { addContact, getContacts } from "../api/Contacts";
import Contact from "../components/Contact";
import NewContact from "../components/NewContact";

export default function Contacts() {
  const fetchContacts = useCallback(getContacts, []);
  const submitContact = useCallback(addContact, []);
  const [flag, setFlag] = useState(false);
  const [contacts, setContacts] = useState("");
  const [modalShown, setModalShown] = useState(false);

  function newContactHandler({ email, alias }) {
    submitContact({ email, alias })
      .then((_) => {
        setFlag((prev) => !prev);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally((_) => {
        setModalShown(false);
      });
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchContacts({ signal })
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, [flag]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalShown}
        onRequestClose={() => {
          setModalShown(false);
        }}>
        <NewContact onNewContact={newContactHandler} />
      </Modal>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <Contact contact={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 10 }}>No Contact</Text>
        }
      />
      <Ionicons name="log-out-outline" size={32} />
      <Pressable
        style={styles.btn}
        android_ripple={{ color: "#DFF" }}
        onPress={() => setModalShown(true)}>
        <Ionicons
          name="person-add-outline"
          size={20}
          style={{ marginHorizontal: 5 }}
        />
        <Text
          style={{
            letterSpacing: 2,
            fontSize: 15,
            fontWeight: "bold",
            marginHorizontal: 5,
          }}>
          New Contact
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  btn: {
    flexDirection: "row",
    alignSelf: "stretch",
    minWidth: 100,
    height: 50,
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
  },
});
