import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import useController from "./useController";

export default function ReportScreen() {
  const { items } = useController();

  const renderItem = ({ item }) => (
      <View style={style.item}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item?.value}</Text>
      </View>
  );

  return (
      <SafeAreaView style={style.container}>
        <FlatList
            data={items}
            keyExtractor={(item) => (item?.id ?? 0).toString()}
            renderItem={renderItem}
        />
      </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 16,
    borderBottomWidth: 1,
    borderColor: 'rgb(199, 199, 204)',
  },
});