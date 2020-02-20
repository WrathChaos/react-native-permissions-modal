import React from "react";
import { Text, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import {
  PermissionModal,
  PermissionItem
} from "react-native-permissions-modal";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.permModal.openModal()}
        >
          <Text style={{ color: "#31243f" }}>Open Permission Modal</Text>
        </TouchableOpacity>
        <PermissionModal
          panGestureEnabled={false}
          closeOnOverlayTap={false}
          ref={ref => (this.permModal = ref)}
        >
          <PermissionItem />
          <PermissionItem
            title="Camera"
            iconStatusColor="red"
            subtitle="To access camera features"
            source={require("./assets/photo.png")}
            onPress={() => alert("hello")}
          />
          <PermissionItem
            title="Internet"
            source={require("./assets/wifi.png")}
            subtitle="To access the services, give us the permission"
          />
        </PermissionModal>
      </SafeAreaView>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
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
  }
};

export default App;
