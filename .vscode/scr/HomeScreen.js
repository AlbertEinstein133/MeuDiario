import React, {useState} from 'react';
// res.uri
setPicked(p=>[...p, res.uri])



async function uploadFile(uri){
try{
const response = await fetch(uri);
const blob = await response.blob();
const filename = `${Date.now()}_${uri.split('/').pop()}`;
const { data, error } = await supabase.storage.from(Constants.manifest?.extra?.STORAGE_BUCKET || 'diary-media')
.upload(filename, blob);
if(error) throw error;
const { data: publicData } = supabase.storage.from(Constants.manifest?.extra?.STORAGE_BUCKET || 'diary-media').getPublicUrl(filename);
return publicData.publicUrl;
}catch(e){
console.error(e);
Alert.alert('Upload erro', e.message);
}
}


async function save(){
try{
const user = (await supabase.auth.getUser()).data.user;
let media = [];
for(const uri of picked){
const url = await uploadFile(uri);
media.push({url});
}
const { data, error } = await supabase.from('entries').insert([{ title, content, media, user_id: user.id }]).select().single();
if(error) return Alert.alert('Erro', error.message);
Alert.alert('Pronto', 'Entrada criada');
navigation.goBack();
}catch(e){
Alert.alert('Erro', e.message);
}
}


return (
<ScrollView style={{padding:12}}>
<TextInput placeholder="Título" value={title} onChangeText={setTitle} style={{borderWidth:1, padding:8, marginBottom:8}} />
<TextInput placeholder="Conteúdo" value={content} onChangeText={setContent} multiline style={{borderWidth:1, padding:8, height:120, marginBottom:8}} />
<Button title="Adicionar mídia" onPress={pickImage} />
<View style={{height:8}} />
{picked.map((uri, idx)=>(
<Image key={idx} source={{uri}} style={{width:120, height:120, marginBottom:8}} />
))}
<Button title="Salvar" onPress={save} />
</ScrollView>
)