import React from 'react';
import { View, Text, Image } from 'react-native';


export default function EntryCard({entry}){
const thumb = Array.isArray(entry.media) && entry.media[0] && entry.media[0].url;
return (
<View style={{flexDirection:'row', padding:8, borderBottomWidth:1, alignItems:'center'}}>
{thumb ? <Image source={{uri:thumb}} style={{width:64, height:64, marginRight:8}} /> : null}
<View style={{flex:1}}>
<Text style={{fontWeight:'700'}}>{entry.title}</Text>
<Text numberOfLines={2} style={{color:'#666'}}>{entry.content}</Text>
</View>
</View>
)
}