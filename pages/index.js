import { StyleSheet, View, Text } from "react-native";
import { useResponsiveQuery } from "react-native-responsive-query";

export default function App() {
  const { styles, dataSet } = useResponsiveQuery({
    initial: {
      backgroundColor: "black",
      height: 200,
      width: 200,
    },
    query: [
      {
        minWidth: 800,
        style: {
          backgroundColor: "yellow",
          height: 400,
          width: 400,
        },
      },
    ],
  });

  const { styles: textStyles, dataSet: textDataSet } = useResponsiveQuery({
    initial: {
      color: "white",
    },
    query: [
      {
        minWidth: 800,
        style: {
          color: "black",
        },
      },
    ],
  });

  return (
    <View dataSet={dataSet} style={styles}>
      <Text dataSet={textDataSet} style={textStyles}>
        This box will turn black when screen width is less than 800px
      </Text>
    </View>
  );
}
