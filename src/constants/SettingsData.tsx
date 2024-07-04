import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const SettingsData = (
  autoApprove: boolean,
  setAutoApprove: (value: boolean) => void,
  isPublic: boolean,
  setIsPublic: (value: boolean) => void,
  showGridNumbers: boolean,
  setShowGridNumbers: (value: boolean) => void,
  privateMessageBoard: boolean,
  setPrivateMessageBoard: (value: boolean) => void,
  membersNameVisible: boolean,
  setMembersNameVisible: (value: boolean) => void,
  gridSize: string,
  setGridSize: (value: string) => void,
  handleGridSelection: () => void,
) => [
  {
    id: '1',
    label: 'Basic Settings',
    icon: 'settings',
    content: (
      <View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Pool ID</Text>
          <Text style={styles.settingValue}>23423423</Text>
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Pool Name</Text>
          <TextInput
            style={styles.input}
            maxLength={50}
            placeholder="Enter Pool Name"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Auto Approve</Text>
          <Switch value={autoApprove} onValueChange={setAutoApprove} />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Public</Text>
          <Switch value={isPublic} onValueChange={setIsPublic} />
        </View>
      </View>
    ),
  },
  {
    id: '2',
    label: 'Grid Settings',
    icon: 'grid-on',
    content: <Text style={styles.comingSoon}>Coming Soon</Text>,
  },
  {
    id: '3',
    label: 'Display Settings',
    icon: 'display-settings',
    content: (
      <View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Pool branding/Image</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add/Edit Branding</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Show grid numbers?</Text>
          <Switch value={showGridNumbers} onValueChange={setShowGridNumbers} />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Private Message Board?</Text>
          <Switch
            value={privateMessageBoard}
            onValueChange={setPrivateMessageBoard}
          />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Members name visible?</Text>
          <Switch
            value={membersNameVisible}
            onValueChange={setMembersNameVisible}
          />
        </View>
      </View>
    ),
  },
  {
    id: '4',
    label: 'Dashboard Settings',
    icon: 'dashboard-customize',
    content: <Text style={styles.comingSoon}>Coming Soon</Text>,
  },
  {
    id: '5',
    label: 'Grid Selection',
    icon: 'grid-view',
    content: (
      <View>
        <Text style={styles.settingLabel}>Grid Size</Text>
        <TextInput
          style={styles.gridInput}
          value={gridSize}
          onChangeText={setGridSize}
          placeholder="Enter Grid Size"
          keyboardType="numeric"
          placeholderTextColor="#888"
        />
        <TouchableOpacity
          style={styles.customButton}
          onPress={handleGridSelection}>
          <Text style={styles.customButtonText}>Go to Grid</Text>
        </TouchableOpacity>
      </View>
    ),
  },
  {
    id: '6',
    label: 'Pool Rule',
    icon: 'wine-bar',
    content: <Text style={styles.comingSoon}>Coming Soon</Text>,
  },
  {
    id: '7',
    label: 'Pool Entries',
    icon: 'wine-bar',
    content: <Text style={styles.comingSoon}>Coming Soon</Text>,
  },
];

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  settingValue: {
    fontSize: 16,
    color: '#BBBBBB',
  },
  input: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    height: 40,
    marginVertical: 10,
    borderRadius: 5,
    color: '#FFFFFF',
    paddingHorizontal: 10,
    marginLeft: 40,
  },
  gridInput: {
    backgroundColor: '#2E2E2E',
    height: 50,
    marginVertical: 10,
    borderRadius: 5,
    color: '#FFFFFF',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#555555',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  comingSoon: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  customButton: {
    backgroundColor: '#1E1E1E',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  customButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
