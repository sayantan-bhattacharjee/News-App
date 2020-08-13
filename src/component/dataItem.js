import React, {Component} from 'react';        
import { ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';

export default class DataItem extends Component { 

    constructor(props){
        super(props);
        this.data = props.data;
    }

    render() {
        return(
            <ListItem thumbnail>
            <Left>
                <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://www.google.com/search?q=image&rlz=1C1CHBD_enIN910IN910&sxsrf=ALeKk02AQorEu4T5mddSrCmtJTjSbZcfGg:1597340880755&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjfhKG-3pjrAhXlzjgGHexSAoEQ_AUoAXoECA4QAw&biw=1920&bih=969#imgrc=jAd1jhKbTeGn8M'}} />
            </Left>
            <Body>
                <Text>{this.data.title}</Text>
                <Text note noOfLines={2}>{this.data.description}</Text>
            </Body>
            <Right>
                <Button transparent>
                    <Text>Go</Text>
                </Button>
            </Right>
        </ListItem>
        );
    }
        
}