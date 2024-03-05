import React, { ForwardedRef, forwardRef, useContext, useEffect, useRef } from "react";
import { FlashList, FlashListProps } from "@shopify/flash-list";
import { OS } from "snowbox-ui";
import { LinkedGroupProps, LinkedScrollHandler, LinkedScrollViewsContext } from "./LinkedContext";

// TODO: forwardedRef 会导致泛型 T 丢失
// const LinkedFlashList = <T,>(props: LinkedFlashListProps & FlashListProps<T>, ref: ForwardedRef<FlashList<T>>) => {
const LinkedFlashList = <T,>(props: LinkedGroupProps & FlashListProps<T>) => {

  const beginEventName = OS === 'web' ? 'onTouchMove' : 'onScrollBeginDrag';

  const { onScroll, onTouchStart, [beginEventName]: onBeginEvent, groupKey, ...other } = props

  const context = useContext(LinkedScrollViewsContext);

  const scrollViewRef = useRef<FlashList<T> | null>(null);
  const registerId = useRef(0);

  useEffect(() => {
    const handler = new LinkedScrollHandler()
    handler.groupKey = groupKey
    handler.handleScroll = ({x, y, horizontal}) => {
      const offset = horizontal === true ? x : y
      if (offset !== undefined) {
        scrollViewRef.current?.scrollToOffset({offset, animated: false})
      }
    }

    // 注册
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
    <FlashList 
      {...other}
      // ref={(node) => {
      //   if (node) {
      //     if (typeof ref === 'function') {
      //       ref(node);
      //     } else if (ref) {
      //       ref.current = node;
      //     }
      //   }
      //   scrollViewRef.current = node;
      // }}
      ref={scrollViewRef} 
      onScroll={handleScroll}
      {...{[beginEventName]: handleBeginEvent}}
      {...context.scrollViewProps(groupKey)}
    />
  )
}

export default LinkedFlashList;
