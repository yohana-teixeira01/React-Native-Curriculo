import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import FlatListComponent from '../components/FlatListComponent';


export function ExtraActivities() {

  const [dadosExtras,setDadosExtras] = useState();
   
  useEffect( async () => {
    const response = await api.get("/extra")
    setDados(response.data)
  },[])

  console.log(dadosExtras)

  return(
    <SafeAreaView style={styles.container}>
        <FlatListComponent/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
});