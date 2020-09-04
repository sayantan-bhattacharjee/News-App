import React, {Component} from 'react';        
import { Dimensions, Modal, Share, } from 'react-native';
import { Container, Content, Header, Icon, Left, Body, Right, Title, Button } from 'native-base';
import { WebView } from 'react-native-webview';

const webViewHeight = Dimensions.get('window').height - 56;

export default class ModalComponent extends Component { 

    constructor(props) {
        super(props);     
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        return this.props.onClose();
    }

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if ( url != undefined) {
        return(
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Container style={{ margin: 15, marginBottom: 0, backgroundColor: '#ffffff' }}>
                    <Header style={{ backgroundColor: '#009387' }}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="Close" style={{color: 'white', fontSize: 12}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare} transparent>
                                <Icon name="Share" style={{color: 'white', fontSize: 12}}/>
                            </Button>
                        </Right>
                    </Header>
                    
                    <Content contentContainerStyle={{height: webViewHeight}}>
                        <WebView source={{uri: url}} style={{flex: 1}}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                    </Content>
                </Container>
            </Modal>
        );
        } else {
            return null;
        }
    }
        
}