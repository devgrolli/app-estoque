import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Clientes from "../../../assets/images/clientes.png";
import Compras from "../../../assets/images/compras.png";
import Graficos from "../../../assets/images/graficos.png";
// import { Text, View } from "../../components/Themed";
import { IconCard } from "../CardIcon";
import * as S from "./styles";

export default function TabOneScreen() {
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView>
      <View style={{ flexDirection: "row" }}>
        <S.ViewCard>
          <IconCard loading={loading} img={Clientes} />
        </S.ViewCard>

        <S.ViewCard>
          <IconCard loading={loading} img={Compras} />
        </S.ViewCard>
      </View>

      <View style={{ flexDirection: "row" }}>
        <S.ViewCard>
          <IconCard loading={loading} img={Graficos} />
        </S.ViewCard>

        <S.ViewCard>
          <IconCard loading={loading} img={Graficos} />
        </S.ViewCard>
      </View>
    </ScrollView>
  );
}
