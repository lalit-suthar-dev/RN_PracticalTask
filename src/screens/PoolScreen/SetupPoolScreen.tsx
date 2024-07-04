import React, {useState, useEffect} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {setGridSize} from '../../redux/reducer/gridSizeReducer';
import {clearSelectedItems} from '../../redux/reducer/selectedItemsReducer';
import {SettingItem} from '../../components';
import {SettingsData} from '../../constants/SettingsData';
import styles from './PoolStyle';

export const SetupPoolScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch();
  const gridSize = useSelector((state: RootState) => state.gridSize.value);
  const [autoApprove, setAutoApprove] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [showGridNumbers, setShowGridNumbers] = useState(false);
  const [privateMessageBoard, setPrivateMessageBoard] = useState(false);
  const [membersNameVisible, setMembersNameVisible] = useState(false);
  const [inputGridSize, setInputGridSize] = useState(gridSize);

  useEffect(() => {
    if (gridSize) {
      setInputGridSize(gridSize.toString());
    }
  }, [gridSize]);

  const handleGridSelection = () => {
    if (!inputGridSize) {
      return Alert.alert('Error', 'Please enter grid size !!!');
    }
    const newGridSize = parseInt(inputGridSize, 10);
    if (newGridSize !== parseInt(gridSize, 10)) {
      dispatch(clearSelectedItems());
    }
    dispatch(setGridSize(inputGridSize));
    navigation.navigate('Grid', {gridSize: newGridSize});
  };

  const data = SettingsData(
    autoApprove,
    setAutoApprove,
    isPublic,
    setIsPublic,
    showGridNumbers,
    setShowGridNumbers,
    privateMessageBoard,
    setPrivateMessageBoard,
    membersNameVisible,
    setMembersNameVisible,
    inputGridSize,
    setInputGridSize,
    handleGridSelection,
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SettingItem label={item.label} icon={item.icon}>
            {item.content}
          </SettingItem>
        )}
        extraData={data}
      />
    </View>
  );
};
