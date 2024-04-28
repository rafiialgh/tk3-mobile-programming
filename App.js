import { useEffect } from 'react'
import Routes from './src/navigation/AppNavigator'
import openDatabase from './src/modules/openDatabase'

const db = openDatabase()

export default function App() {
  // Open database & create table if not exist
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
          "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, value TEXT);"
      );
    });
  }, []);

  return <Routes />
}