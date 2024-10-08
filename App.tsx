import RootStack from "./app/_layout";
import { useEffect, useState } from "react";
import React from "react";
import { GestureHandlerRootContainer } from "./App.styles";
import NetInfo from "@react-native-community/netinfo";
import "./i18n/i18n";
import NoInternet from "./components/molecules/NoInternet/NoInternet";

export default function App() {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(
      (state: { isConnected: boolean | null }) => {
        return setIsConnected(state?.isConnected);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <GestureHandlerRootContainer>
      {isConnected ? <RootStack /> : <NoInternet />}
    </GestureHandlerRootContainer>
  );
}
