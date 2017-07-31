import {
  StyleSheet,
  Dimensions,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  row: {
    height: 50,
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#efefef',
  },
  Label: {
    color: '#4D4D4F',
  },
  navLeftContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 15,
  },
  navRightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginRight: 15,
  },
  Content: {
    color: '#A6A6A7',
  },
  navCenterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 6,
  },
  iconrow:{
    width:40,
  },
  righticon: {
    marginRight: 1,
  },
  next: {
    width: 10,
    height: 18,
    marginLeft: 16,
  },
  number:{
    color:'#007cca'
  }
});
export default styles;
