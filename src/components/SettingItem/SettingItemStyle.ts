import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#555555',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  header: {
    padding: 15,
    backgroundColor: '#555555',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  content: {
    overflow: 'hidden',
    backgroundColor: '#555555',
    paddingHorizontal: 15,
  },
  bottomLine: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ffffff',
    marginBottom: 10,
  },
});
