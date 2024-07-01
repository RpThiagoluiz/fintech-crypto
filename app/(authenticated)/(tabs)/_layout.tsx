import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { TabBarButton } from './components/tabBarButton';

import { CustomHeader } from '@/app/components/CustomHeader';
import Colors from '@/constants/Colors';

const Layout = () => (
   <Tabs
      screenOptions={{
         tabBarActiveTintColor: Colors.primary,
         tabBarStyle: {
            position: 'absolute',
            bottom: 15,
            height: 60,
            backgroundColor: Colors.white,
            marginHorizontal: 20,
            borderRadius: 25,
            borderCurve: 'continuous',
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 10 },
            shadowRadius: 10,
            shadowOpacity: 0.1,
         },
      }}
   >
      <Tabs.Screen
         name="home"
         options={{
            title: 'Home',
            tabBarShowLabel: false,
            tabBarIcon: ({ size, color }) => <FontAwesome name="home" size={size} color={color} />,
            tabBarButton: (props) => <TabBarButton {...props} label="home" />,
            header: () => <CustomHeader />,
            headerTransparent: true,
         }}
      />
      <Tabs.Screen
         name="invest"
         options={{
            title: 'Invest',
            tabBarShowLabel: false,
            tabBarIcon: ({ size, color }) => (
               <FontAwesome name="line-chart" size={size} color={color} />
            ),
            tabBarButton: (props) => <TabBarButton {...props} label="invest" />,
         }}
      />
      <Tabs.Screen
         name="transfers"
         options={{
            title: 'Transfers',
            tabBarShowLabel: false,
            tabBarIcon: ({ size, color }) => (
               <FontAwesome name="exchange" size={size} color={color} />
            ),
            tabBarButton: (props) => <TabBarButton {...props} label="transfers" />,
         }}
      />
      <Tabs.Screen
         name="crypto"
         options={{
            title: 'Crypto',
            tabBarShowLabel: false,
            tabBarIcon: ({ size, color }) => (
               <FontAwesome name="bitcoin" size={size} color={color} />
            ),
            tabBarButton: (props) => <TabBarButton {...props} label="crypto" />,
            header: () => <CustomHeader />,
            headerTransparent: true,
         }}
      />
      <Tabs.Screen
         name="lifestyle"
         options={{
            title: 'Lifestyle',
            tabBarShowLabel: false,
            tabBarIcon: ({ size, color }) => <FontAwesome name="glass" size={size} color={color} />,
            tabBarButton: (props) => <TabBarButton {...props} label="lifestyle" />,
         }}
      />
   </Tabs>
);

export default Layout;
