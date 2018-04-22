import GLOBALS from '../globalVariables';

const inputStyles = {
    COMMON: Object.assign({
        marginTop: 15,
        marginBottom: 15,
        fontSize: 24,
        fontWeight: 'bold',
        borderColor: 'black'
    }, {
        padding: 14,
        borderWidth: 1,
        borderRadius: 8
    }),
    BLUE: {
        borderColor: GLOBALS.COLOR.BLUE,
        color: GLOBALS.COLOR.BLUE
    },
    GREEN: {
        borderColor: GLOBALS.COLOR.GREEN,
        color: GLOBALS.COLOR.GREEN
    },
    VIOLET: {
        borderColor: GLOBALS.COLOR.VIOLET,
        color: GLOBALS.COLOR.VIOLET
    }
};

export default inputStyles;