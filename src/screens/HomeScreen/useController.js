import { useState } from "react";
import openDatabase from "../../modules/openDatabase";

const db = openDatabase();

export default function useController() {
  const [val, setVal] = useState("");

  const onSetValue = (num) => () => {
    setVal((v) => v + num);
  };

  const onSave = () => {
    requestAnimationFrame(() => {
      if (val.length > 0) {
        db.transaction((tx) => {
          tx.executeSql("INSERT INTO items (value) VALUES (?)", [val]);
        }, null);

        setTimeout(() => {
          setVal("");
        }, 50);
      }
    });
  };

  return { val, onSetValue, onSave };
}