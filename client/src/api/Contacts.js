import AsyncStorage from "@react-native-async-storage/async-storage";

const ACCESS_TOKEN = "access_token";

export async function getContacts({ signal }) {
  const access_token = await AsyncStorage.getItem(ACCESS_TOKEN);
  return fetch("http://192.168.43.83:3000/contacts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      access_token,
    },
    signal,
  })
    .then((response) => {
      if (!response.ok) throw new Error("something is wrong");
      return Promise.resolve(response.json());
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export async function addContact({ email, alias }) {
  const access_token = await AsyncStorage.getItem(ACCESS_TOKEN);
  return fetch("http://192.168.43.83:3000/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      access_token,
    },
    body: JSON.stringify({ email, alias }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("something is wrong");
      return Promise.resolve(response.json());
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}
