import { View, Text } from 'react-native';

import { defaultStyles } from '@/constants/Styles';

export const Page = () => (
   <View
      style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'pink' }}
   >
      <Text style={defaultStyles.header}>Welcome INVEST!!!</Text>
   </View>
);

export default Page;
