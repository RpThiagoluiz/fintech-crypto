import { View, Text } from 'react-native';

import { defaultStyles } from '@/constants/Styles';

export const Page = () => (
   <View
      style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'gray' }}
   >
      <Text style={defaultStyles.header}>Welcome Transfer!!!</Text>
   </View>
);

export default Page;
