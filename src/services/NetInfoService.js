import { NetInfo } from 'react-native';

const NetInfoService = {
    isInternetAvailable() {
        return new Promise((resolve, reject) => {
            NetInfo.getConnectionInfo().then(connectionInfo => {
                const connectionType = connectionInfo.type;
                const effectiveType = connectionInfo.effectiveType;
                alert(`type: ${connectionType} - effective type: ${effectiveType}`);
                if(connectionType === 'wifi'
                    || (connectionType === 'cellular'
                        && (effectiveType === '3g' || effectiveType === '4g'))) {
                    resolve();
                } else {
                    reject();
                }
            });
        });
    }
};

export default NetInfoService;