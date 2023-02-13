import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function LoginAPI({ email, password }) {
  return fetch("http://192.168.43.83:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Something is wrong");
      return response.json();
    })
    .then((data) => {
      const { access_token, username } = data;
      const setter = [
        ["access_token", access_token],
        ["username", username],
      ];
      return AsyncStorage.multiSet(setter);
    })
    .then((_) => {
      return Promise.resolve("Done");
    })
    .catch((err) => Promise.reject(err));
}
