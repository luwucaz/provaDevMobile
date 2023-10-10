import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function ForgotPasswordPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Recuperar Senha</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
            <Link to={{screen: 'HomePage'}}>Voltar para Home </Link>
                <Link to={{screen: 'RegisterPage'}}>Cadastre-se </Link>
            </View>
        </View>
    )
}