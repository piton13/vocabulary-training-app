import React from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    offlineContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width,
        height: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    offlineText: {
        color: 'white'
    }
});

function MiniOfflineSign() {
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
    );
}

class OfflineNoticeComponent extends React.PureComponent {
    state = {
        isConnected: false
    };

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    handleConnectivityChange = isConnected => {
        this.setState({ isConnected });
    };

    render() {
        if(this.state.isConnected) {
            return null;
        }

        return <MiniOfflineSign />;
    }
}

export default OfflineNoticeComponent;