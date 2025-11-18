import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { supabase } from '../supabase';


export default function LoginScreen(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


async function submit(){
const { data, error } = await supabase.auth.signInWithPassword({ email, password });
if(error) Alert.alert('Erro', error.message);
}


return (
<View style={{padding:16}}>
<TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{borderWidth:1, marginBottom:8, padding:8}} />
<TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={{borderWidth:1, marginBottom:8, padding:8}} />
<Button title="Entrar" onPress={submit} />
<View style={{height:8}} />
<Button title="Criar conta" onPress={()=>supabase.auth.signUp({email, password})} />
</View>
)
}