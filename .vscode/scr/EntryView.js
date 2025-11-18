import React from 'react';
import { View, Text, Button, Image, ScrollView, Alert } from 'react-native';
import { supabase } from '../supabase';


export default function EntryView({route, navigation}){
const { entry } = route.params;


async function remove(){
const { error } = await supabase.from('entries').delete().eq('id', entry.id);
if(error) return Alert.alert('Erro', error.message);
Alert.alert('Removido');
navigation.goBack();
}


return (
<ScrollView style={{padding:12}}>
<Text style={{fontSize:20, fontWeight:'700'}}>{entry.title}</Text>
<Text style={{color:'#666'}}>{new Date(entry.created_at).toLocaleString()}</Text>
<View style={{height:8}} />
<Text>{entry.content}</Text>
<View style={{height:12}} />
{Array.isArray(entry.media) && entry.media.map((m, i)=> (
<Image key={i} source={{uri: m.url}} style={{width:'100%', height:220, marginBottom:8}} />
))}


<Button title="Excluir" onPress={remove} />
</ScrollView>
)
}