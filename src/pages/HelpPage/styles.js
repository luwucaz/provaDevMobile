import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2E0FB',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '200px',
        height: '200px',
        marginBottom: '20px'
    },
    input:{
        width: '75%',
        height: '50px',
        backgroundColor: '#ECEE81',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    inputMensagem:{
        width: '75%',
        height: '300px',
        backgroundColor: '#ECEE81',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    btn: {
        backgroundColor: '#DFCCFB',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btnTxt: {
        fontSize: '22px',
        color: 'blue'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    },
    textoHeader: {
        marginBottom: '40px',
        fontSize: '15pt'
    }
});

export default styles;