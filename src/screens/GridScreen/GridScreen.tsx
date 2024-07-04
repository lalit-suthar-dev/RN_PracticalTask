/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {setSelectedItems} from '../../redux/reducer/selectedItemsReducer';
import {Popup} from '../../components';
import styles from './GridStyle';

const {width, height} = Dimensions.get('window');

export const GridScreen: React.FC<{route: any}> = ({route}) => {
  const {gridSize} = route.params;
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState<number | null>(null);
  const gridData = Array.from({length: gridSize * gridSize}, (_, i) => i);
  const itemSize = Math.min(width / gridSize, height / gridSize);

  useEffect(() => {
    if (selectedItems.length > 0) {
      dispatch(setSelectedItems(selectedItems));
    }
  }, [selectedItems, dispatch]);

  const handleItemPress = (index: number) => {
    if (!selectedItems.includes(index) && selectedItems.length >= 10) {
      Alert.alert('Limit Reached', 'You can only select up to 10 items.');
    } else {
      setCurrentItem(index);
      setModalVisible(true);
    }
  };

  const handleSelect = () => {
    if (currentItem !== null) {
      let newSelectedItems;
      if (selectedItems.includes(currentItem)) {
        newSelectedItems = selectedItems.filter(item => item !== currentItem);
      } else if (selectedItems.length < 10) {
        newSelectedItems = [...selectedItems, currentItem];
      } else {
        newSelectedItems = selectedItems;
      }
      dispatch(setSelectedItems(newSelectedItems));
      setModalVisible(false);
    }
  };

  const renderItem = ({item}: {item: number}) => (
    <TouchableOpacity
      style={[
        styles.gridItem,
        {width: itemSize, height: itemSize},
        selectedItems.includes(item) && styles.selectedItem,
      ]}
      onPress={() => handleItemPress(item)}>
      <Text style={styles.gridItemText}>Max</Text>
    </TouchableOpacity>
  );

  const renderLabel = (label: string, key: string, isTop: boolean) => (
    <View
      key={key}
      style={[
        styles.labelContainer,
        isTop ? {width: itemSize, height: 40} : {width: 40, height: itemSize},
      ]}>
      <Text style={styles.labelText}>{label}</Text>
    </View>
  );

  const topLabels = Array.from({length: gridSize}, (_, i) => '?');
  const sideLabels = Array.from({length: gridSize}, (_, i) => '?');

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <View style={styles.row}>
            <View style={styles.emptyCorner} />
            {topLabels.map((label, index) =>
              renderLabel(label, `top-${index}`, true),
            )}
          </View>
          <ScrollView>
            {sideLabels.map((label, rowIndex) => (
              <View key={`row-${rowIndex}`} style={styles.row}>
                {renderLabel(label, `side-${rowIndex}`, false)}
                <FlatList
                  data={gridData.slice(
                    rowIndex * gridSize,
                    (rowIndex + 1) * gridSize,
                  )}
                  renderItem={renderItem}
                  keyExtractor={item => item.toString()}
                  numColumns={gridSize}
                  scrollEnabled={false}
                  contentContainerStyle={styles.grid}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <Popup
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleSelect}
        confirmText={
          selectedItems.includes(currentItem!) ? 'Deselect' : 'Select'
        }
        cancelText="Cancel"
        message={
          selectedItems.includes(currentItem!)
            ? 'Deselect this item?'
            : 'Select this item?'
        }
      />
    </View>
  );
};
