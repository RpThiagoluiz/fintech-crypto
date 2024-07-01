import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
   interpolate,
   useAnimatedStyle,
   useSharedValue,
   withSpring,
} from 'react-native-reanimated';

export const TabBarButton = (
   props: import('@react-navigation/bottom-tabs').BottomTabBarButtonProps & {
      label: string;
   },
) => {
   const { onPress, accessibilityState } = props;
   const focused = accessibilityState?.selected;

   const scale = useSharedValue(0);

   useEffect(() => {
      scale.value = withSpring(focused ? 1 : 0);
   }, [scale, focused]);

   const animatedIconStyle = useAnimatedStyle(() => {
      const scaleValue = interpolate(scale.value, [0, 1], [1, 1.6]);
      const top = interpolate(scale.value, [0, 8], [0, 1]);

      return {
         transform: [{ scale: scaleValue }],
         top,
      };
   });
   return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
         <Animated.View style={[animatedIconStyle]}>{props.children}</Animated.View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
});
