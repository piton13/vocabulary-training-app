import GLOBALS from '../globalVariables';

export default {
    CONTAINER: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'black'
    },
    TEXT: Object.assign({
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    }, {
        padding: 14,
        borderRadius: 8
    }),
    BLUE: {
        backgroundColor: GLOBALS.COLOR.BLUE
    },
    GREEN: {
        backgroundColor: GLOBALS.COLOR.GREEN
    },
    VIOLET: {
        backgroundColor: GLOBALS.COLOR.VIOLET
    },
    PURPLE: {
        backgroundColor: GLOBALS.COLOR.PURPLE
    }
}