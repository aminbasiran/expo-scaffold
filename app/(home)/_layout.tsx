import React from "react";
import { Stack } from "expo-router";

const HomeLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name='index' options={{headerShown:false}}/> */}
            <Stack.Screen name="testing" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
};

export default HomeLayout;
