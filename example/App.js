import React from "react";
import { Text, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import PermissionModal from "./lib/PermissionModal";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <TouchableOpacity
          style={{
            height: 40,
            width: 250,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f7f7f7",
            shadowRadius: 8,
            shadowOpacity: 0.2,
            shadowColor: "#757575",
            shadowOffset: {
              width: 0,
              height: 0
            }
          }}
          onPress={() => this.permModal.openModal()}
        >
          <Text style={{ color: "#31243f" }}>Open Permission Modal</Text>
        </TouchableOpacity>
        <PermissionModal ref={ref => (this.permModal = ref)} />
      </SafeAreaView>
    </>
  );
};

export default App;
