import React, { Component } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';

class DraggableProgressBar extends Component {
  constructor(props) {
    super(props);
    alert('init')

    this.state = {
      progress: 0,
      panResponder: PanResponder.create({
        onShouldBlockNativeResponder: () => false,
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant:(event)=>{
        },
        onPanResponderMove: (event, gesture) => {
          const newProgress = gesture.dy / this.props.height;
          this.props.onProgressUpdate(newProgress);
          this.setState({ progress: newProgress });
        },
      }),
    };
  }

  render() {
    const { style, height } = this.props;
    const { progress } = this.state;

    return (
      <View style={[styles.container, style]} height={height} {...this.state.panResponder.panHandlers}>
        <View style={styles.progressBar} pointerEvents="none">
          <View style={[styles.progress, { height: progress }]} />
        </View>
        <View style={styles.thumb} pointerEvents="box-none" >
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  progress: {
    backgroundColor: '#007aff',
    borderRadius: 10,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007aff',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default DraggableProgressBar;