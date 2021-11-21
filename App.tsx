import React from "react";
import { Navigation } from "./navigation";
import { RootStack } from "./navigation/stacks/RootStack";
import { Home } from "./screens/Home";

export default function App() {
  return (
    <Navigation>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </Navigation>
  );
}
