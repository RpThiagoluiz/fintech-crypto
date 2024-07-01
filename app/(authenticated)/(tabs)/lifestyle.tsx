import { View, Text } from 'react-native';

import { defaultStyles } from '@/constants/Styles';

export const Page = () => (
   <View
      style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'blue' }}
   >
      <Text style={defaultStyles.header}>Welcome LIFESTYLE!!!</Text>
   </View>
);

export default Page;
