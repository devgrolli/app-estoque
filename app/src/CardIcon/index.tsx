import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { Loading } from "../../../components/Loading/index";
import { View } from "../../../components/Themed";

export interface IconCardProps {
  img?: any;
  loading: boolean;
}

export const IconCard = (props: IconCardProps) => {
  const { img, loading } = props;
  return (
    <View style={styles.cards}>
      {loading ? (
        <Loading />
      ) : (
        <TouchableOpacity>
          <Image style={styles.icons} source={img} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    backgroundColor: "#ffff",
    height: 300,
    width: 190,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icons: {
    height: 80,
    width: 80,
    tintColor: "#80B3FF",
  },
});
