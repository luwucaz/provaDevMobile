import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function HomePage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>

            <Text style={styles.textoPadrao}>Olá! Seja bem-vindo ao sistema de atendimento eletrônico!</Text>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'LoginPage'}} >Faça seu login</Link>
                <Link to={{screen: 'RegisterPage'}}>Cadastre-se </Link>
                <Link to={{screen: 'HelpPage'}}>Ajuda </Link>
            </View>
        </View>
    )
}