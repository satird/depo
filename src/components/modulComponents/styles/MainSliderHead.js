import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  headingLeft: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  headingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingRightText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '400',
    marginRight: 7,
  },
  headingRightIcon: {
    color: '#bababa',
    fontSize: 15,
  },
  headingAlone: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  }
})

export default styles;
