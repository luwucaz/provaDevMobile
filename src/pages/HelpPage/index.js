import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function HelpPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            
            <Text style={styles.textoHeader}>Preencha esse formulário para entramos em contato!</Text>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput editable
        multiline
        numberOfLines={4}
        placeholder='Mensagem' style={styles.inputMensagem}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Enviar</Text>
            </TouchableOpacity>

            <View style={styles.viewLinks}>
                <Link to={{screen: 'HomePage'}}>Voltar para Home</Link>
            </View>
        </View>
    )
}