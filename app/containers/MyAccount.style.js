import {
  StyleSheet,
} from 'react-native';
const styles = StyleSheet.create({
  renderRight: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor:'#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  header: {
    backgroundColor: '#FFFFFF',
    marginTop: 13,
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    paddingLeft: 13,
    paddingRight: 13,
  },
  buttonrow: {
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingLeft: 25,
    paddingRight: 13,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    height: 25,
    width: 25,
    marginBottom: 10,
  },
  buttontext: {
    color: 'white',
    fontSize: 14,
  },
  headertext: {
    fontSize: 14,
    //color: globalColors.fontBasicColor,
  },
  bottomview: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: globalColors.pink,
  },
  sept:{
    backgroundColor:'#dcdcdc',
    height:15,
  },
  logoutbutton:{
    marginLeft:16,
    marginRight:16,
    marginTop:30,
    borderRadius:5,
    backgroundColor:'#d23e3a',
    height:50,
    alignItems:'center',
    justifyContent:'center'
  }
});
export default styles;
