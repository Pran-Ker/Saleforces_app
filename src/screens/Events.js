import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Table, Row } from 'react-native-table-component';



import { Block, Button as GaButton, Text, theme } from "galio-framework";
import { Button, Header, Icon, Input, Select, Switch } from "../components";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { argonTheme, tabs } from "../constants";


const { width } = Dimensions.get("screen");


const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the events from an API or database
    // and update the state
    const fetchEvents = async () => {
      const response = await fetch('');
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const tableHead = ['Subject', 'Start Date', 'End Date', 'Description'];

  const tableData = events.map((event) => [
    event.Subject,
    event.StartDateTime,
    event.EndDateTime,
    event.Description,
  ]);

  return (
    <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
    <View style={styles.container}>
      <Table borderStyle={styles.tableBorder}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <FlatList
          data={tableData}
          renderItem={({ item }) => (
            <Row data={item} style={styles.row} textStyle={styles.text} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Table>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  row: { height: 40 },
  text: { margin: 6 }
});

export default EventList;



// class Elements extends React.Component {
    
//   render() {
//     return (
//       <Block flex center>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: 30, width }}
//         >

//     <View style={styles.container}>
//       <Table borderStyle={styles.tableBorder}>
//         {/* <Row data={tableHead} style={styles.head} textStyle={styles.text} />
//         <FlatList
//           data={tableData}
//           renderItem={({ item }) => (
//             <Row data={item} style={styles.row} textStyle={styles.text} />
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         /> */}
//       </Table>
//     </View>
//         </ScrollView>
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   title: {
//     paddingBottom: theme.SIZES.BASE,
//     paddingHorizontal: theme.SIZES.BASE * 2,
//     marginTop: 44,
//     color: argonTheme.COLORS.HEADER,
//   },
//   group: {
//     paddingTop: theme.SIZES.BASE * 2,
//   },
//   shadow: {
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     shadowOpacity: 0.2,
//     elevation: 2,
//   },
//   button: {
//     marginBottom: theme.SIZES.BASE,
//     width: width - theme.SIZES.BASE * 2,
//   },
//   optionsButton: {
//     width: "auto",
//     height: 34,
//     paddingHorizontal: theme.SIZES.BASE,
//     paddingVertical: 10,
//   },
//   input: {
//     borderBottomWidth: 1,
//   },
//   inputDefault: {
//     borderBottomColor: argonTheme.COLORS.PLACEHOLDER,
//   },
//   inputTheme: {
//     borderBottomColor: argonTheme.COLORS.PRIMARY,
//   },
//   inputInfo: {
//     borderBottomColor: argonTheme.COLORS.INFO,
//   },
//   inputSuccess: {
//     borderBottomColor: argonTheme.COLORS.SUCCESS,
//   },
//   inputWarning: {
//     borderBottomColor: argonTheme.COLORS.WARNING,
//   },
//   inputDanger: {
//     borderBottomColor: argonTheme.COLORS.ERROR,
//   },
//   social: {
//     width: theme.SIZES.BASE * 3.5,
//     height: theme.SIZES.BASE * 3.5,
//     borderRadius: theme.SIZES.BASE * 1.75,
//     justifyContent: "center",
//   },
// });