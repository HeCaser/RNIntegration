import {
  NativeEventEmitter,
  NativeModules,
  DeviceEventEmitter,
  Platform,
} from 'react-native';

const { RNSubscription } = NativeModules;

const RNManagerEmitter = new NativeEventEmitter(RNSubscription);

const Manager = Platform.OS === 'ios' ? RNManagerEmitter : DeviceEventEmitter;

class RNSubscriptions {
  /**
   * nav button 点击回调
   * @param callback
   */
  rightNavigationButtonClickSubscription(callback) {
    return Manager.addListener(
      'rightNavigationButtonClickSubscription',
      callback,
    );
  }

  viewWillAppear(callback) {
    return Manager.addListener(
      'viewWillAppear',
      callback,
    );
  }

  viewWillDisappear(callback) {
    return Manager.addListener(
      'viewWillDisappear',
      callback,
    );
  }

  viewDidAppear(callback) {
    return Manager.addListener(
      'viewDidAppear',
      callback,
    );
  }
}

export default new RNSubscriptions();
