import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '@/constants/Colors';

type Props = {
   icon: typeof Ionicons.defaultProps;
   text: string;
   onPress?: () => void;
};

export const RoundBtn = ({ icon, text, onPress }: Props) => (
   <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.circle}>
         <Ionicons name={icon} size={25} color={Colors.primary} />
      </View>
      <Text style={styles.label}>{text}</Text>
   </TouchableOpacity>
);
const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      gap: 10,
   },
   circle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: Colors.lightGray,
      justifyContent: 'center',
      alignItems: 'center',
   },
   label: {
      fontSize: 16,
      fontWeight: '500',
      color: Colors.primary,
   },
});
