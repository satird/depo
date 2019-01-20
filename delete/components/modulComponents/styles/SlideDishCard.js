import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardContainerLink: {
      width: 250,
      borderRadius: 4,
      backgroundColor: '#e8e8e8',
      marginHorizontal: 10,
      overflow: 'hidden',
    },
    cardContainer: {
      height: '100%',
    },
    cardImageContainer: {
      width: '100%',
      height: 122,
      overflow: 'hidden',
      flex: 2,
    },
    cardImage: {
      width: undefined,
      height: undefined,
      flex: 1,
    },
    cardContentContainer: {
      paddingVertical: 7,
      paddingHorizontal: 16,
      flex: 1,
    },
    cardTitle: {
      fontSize: 15,
      fontWeight: '900',
      color: '#232323',
      paddingBottom: 5,
    },
    cardNote: {
      fontSize: 12,
      fontWeight: '700',
      color: '#232323',
      paddingBottom: 5,
    },
    cardAddress: {
      fontSize: 12,
      fontWeight: '400',
      color: '#777777',
    }
})

export default styles;
