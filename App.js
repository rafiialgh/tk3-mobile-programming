import { useEffect } from 'react'
import openDatabase from './src/modules/openDatabase'
import AppNavigator from './src/navigation/AppNavigator'

const db = openDatabase()

export default function App() {
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
          "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, value TEXT);"
      );
    });
  }, []);

  return <AppNavigator />
}