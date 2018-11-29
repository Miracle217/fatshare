import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default{
    item: {
        marginLeft: 0,
        borderBottomWidth: 0,
        marginTop: 15
    },

    input: {
        fontSize: 20,
        paddingLeft: 0,
        color: 'white',
        fontWeight: 'bold'
    },

    inputLabel: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
        paddingTop: 0
    },

    itemDivider: {
        height: 1.5,
        backgroundColor: 'rgba(0,0,0,0.6)',
        marginTop: -5
    },

    itemIndicator: {
        height: 1.5,
        backgroundColor: 'yellow',
        width: 50
    },

    inputActiveLabel: {
        fontSize: 12,
        color: 'yellow',
        paddingTop: 0
    }
}