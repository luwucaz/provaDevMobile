import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function RegisterPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>
            <TextInput placeholder='Confirmar Password' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'HomePage'}}>Voltar para Home </Link>
                <Link to={{screen: 'LoginPage'}}>Já tem um login? </Link>
            </View>
        </View>
    )
}