import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardContainerLink: {
      width: 128,
      backgroundColor: 'transparent',
      marginHorizontal: 10,
      overflow: 'hidden',
    },
    cardContainer: {
      height: '100%',
    },
    cardImageContainer: {
      width: '100%',
      height: 97,
      overflow: 'hidden',
      flex: 2,
      flexGrow: 0,
    },
    cardImage: {
      width: undefined,
      height: undefined,
      flex: 1,
    },
    cardContentContainer: {
      paddingVertical: 7,
      flex: 1,
    },
    cardTitle: {
      fontSize: 13,
      fontWeight: '400',
      color: '#f9f9f9',
    },
    cardCooks: {
      fontSize: 12,
      fontWeight: '400',
      color: '#f9f9f9',
    },
    cardData: {
      fontSize: 20,
      fontWeight: '900',
      color: '#f9f9f9',
    },
})

export default styles;
