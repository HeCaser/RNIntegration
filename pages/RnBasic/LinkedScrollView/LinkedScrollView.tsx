import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from "react";
import { Platform, ScrollView, ScrollViewProps } from "react-native";
import { LinkedGroupProps, LinkedScrollHandler, LinkedScrollViewsContext } from "./LinkedContext";

const LinkedScrollView: React.ForwardRefRenderFunction<ScrollView | null, LinkedGroupProps & ScrollViewProps> = (props, ref) => {

  const beginEventName = Platform.OS === 'web' ? 'onTouchMove' : 'onScrollBeginDrag';

  const { onScroll, onTouchStart, [beginEventName]: onBeginEvent, children, groupKey, ...other } = props

  const context = useContext(LinkedScrollViewsContext);

  
  const scrollViewRef = useRef<ScrollView | null>(null);
  const registerId = useRef(0);

  useEffect(() => {
    const handler = new LinkedScrollHandler()
    handler.groupKey = groupKey
    handler.handleScroll = ({x, y}) => {
      scrollViewRef.current?.scrollTo({x, y, animated: false})
    }

    registerId.current = context.registerScrollView(handler, groupKey);
    return () => context.unregisterScrollView(registerId.current, groupKey);
  }, [])

  const handleScroll = (event) => {
    onScroll && onScroll(event)
    const { contentOffset } = event.nativeEvent;
    context.handleScroll(contentOffset, registerId.current, groupKey)
  };

  const handleBeginEvent = (event) => {
    onBeginEvent && onBeginEvent(event);
    context.setCurrentRegisterId(registerId.current, groupKey);
  }

  return (
    <ScrollView 
      {...other}
    
      ref={(node) => {
        if (node) {
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }
        scrollViewRef.current = node;
      }}
      onScroll={handleScroll}
      {...{[beginEventName]: handleBeginEvent}}
      {...context.scrollViewProps(groupKey)}
    >
      {children}
    </ScrollView>
  )
}

export default forwardRef(LinkedScrollView);