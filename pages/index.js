import Head from "next/head";
import Image from "next/image";
import { View } from "react-native";
import { useResponsiveQuery } from "react-native-responsive-query";

export default function Home() {
  const { styles } = useResponsiveQuery({
    initial: { height: 100, width: 100 },
    query: [
      {
        minWidth: 100,
        style: {
          backgroundColor: "pink",
        },
      },
      {
        minWidth: 400,
        style: {
          backgroundColor: "red",
        },
      },
      {
        minWidth: 800,
        style: {
          backgroundColor: "black",
        },
      },
    ],
  });

  return <View style={styles} />;
}
