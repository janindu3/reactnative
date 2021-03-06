import React from 'react';
import { View, Text, Image ,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

import Button from './Button';

const AlbumDetail = (props) => {


    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: props.album.thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>

            </CardSection>

            <CardSection>
                <Image style={styles.imageStyle} source={{uri:props.album.image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(props.album.url)}/>
                    
              
            </CardSection>
        </Card>
    );

}

const styles = {
    thumbnailStyle: {

       width:50,
       height:50

    },
    thumbnailContainerStyle:{

        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    headerContentStyle: {

        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null,

    }

}

export default AlbumDetail;