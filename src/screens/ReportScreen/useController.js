import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import openDatabase from "../../modules/openDatabase";

const db = openDatabase();

export default function useController() {
  const isFocused = useIsFocused();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (isFocused) {
      db.transaction((tx) => {
        tx.executeSql("SELECT id, value FROM items", [], (_, { rows: { _array } }) => {
          setItems(_array);
        });
      });
    }
  }, [isFocused]);

  return {items};
}