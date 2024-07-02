import React from 'react';
import { View } from 'react-native';

import { MARGIN } from './Config';
import { SortableList } from './SortableList';
import { Tile } from './Tile';

const tiles = [
   {
      id: 'spent',
   },
   {
      id: 'cashback',
   },
   {
      id: 'recent',
   },
   {
      id: 'cards',
   },
];

type Positions = {
   spent: number;
   cashback: number;
   recent: number;
   cards: number;
};

export const WidgetList = () => (
   <View
      style={{
         paddingHorizontal: MARGIN,
         marginBottom: 80,
      }}
   >
      <SortableList
         editing
         onDragEnd={(positions: Partial<Positions>) =>
            console.log(JSON.stringify(positions, null, 2))
         }
      >
         {[...tiles].map((tile, index) => (
            <Tile onLongPress={() => true} key={tile.id + '-' + index} id={tile.id} />
         ))}
      </SortableList>
   </View>
);
