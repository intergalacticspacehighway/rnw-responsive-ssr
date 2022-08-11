import Head from "next/head";
import Image from "next/image";
import { View } from "react-native";
import { useResponsiveQuery } from "react-native-responsive-query";

export default function Home() {
  const { styles } = useResponsiveQuery({
    initial: { height: 300, width: 300 },
    query: [
      {
        minWidth: 0,
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
      {
        minWidth: 1250,
        style: {
          backgroundColor: "yellow",
        },
      },
    ],
  });

  return <View style={styles} />;
}
