import React, { createContext, useRef, useMemo } from 'react';
import LinkedScrollView from './LinkedScrollView';
import { GlobalScrollableProps, LinkedScrollHandler, LinkedScrollViewsContext, defaultGlobalScrollViewProps } from './LinkedContext';

interface LinkedScrollViewsProviderProps extends GlobalScrollableProps {
  children: React.ReactNode
}

type LinkedScrollHandlerCache = Map<string, Map<number, LinkedScrollHandler>>

const LinkedScrollViewsProvider = (props: LinkedScrollViewsProviderProps ) => {
  const { children, propsOfGroup, ...other } = props;
  const scrollViewRefs = useMemo<LinkedScrollHandlerCache>(() => new Map(), [])
  const currentRegisterIdOfGroup = useMemo<Map<string, number>>(() => new Map(), [])
  const registerId = useRef(0)
  const currentOffset = useRef<{x?: number, y?: number}>({})

  const cacheOfGroup = (groupKey?: string) => {
    const key = groupKey ?? ''
    let cache = scrollViewRefs.get(key)
    if (cache === undefined) {
      cache = new Map()
      scrollViewRefs.set(key, cache)
    }
    return cache
  }

  const scrollViewProps = (groupKey?: string) => ({ ...defaultGlobalScrollViewProps, ...other, ...propsOfGroup?.[groupKey ?? '']});

  const registerScrollView = (scrollViewRef: LinkedScrollHandler, groupKey?: string) => {
    const { horizontal } = scrollViewProps(groupKey)

    scrollViewRef.handleScroll?.({...currentOffset.current, horizontal});
    registerId.current += 1
    scrollViewRef.registerId = registerId.current
    cacheOfGroup(groupKey).set(registerId.current, scrollViewRef)
    return registerId.current
  };

  const unregisterScrollView = (id: number, groupKey?: string) => {
    cacheOfGroup(groupKey).delete(id)
  };

  const setCurrentRegisterId = (id: number, groupKey?: string) => {
    currentRegisterIdOfGroup.set(groupKey ?? '', id)
  }

  const handleScroll = (offset, id, groupKey?: string) => {
    const currentId = currentRegisterIdOfGroup.get(groupKey ?? '')
    if (currentId !== undefined && currentId !== -1 && currentId !== id) { return; }

    const { horizontal } = scrollViewProps(groupKey)

    // 适配 web 中滑动
    if (horizontal) {
      if (currentOffset.current.x !== undefined && offset.x !== undefined && Math.abs(currentOffset.current.x - offset.x) < Number.EPSILON) {
        return;
      }
    } else if (currentOffset.current.y !== undefined && offset.y !== undefined && Math.abs(currentOffset.current.y - offset.y) < Number.EPSILON) {
      return;
    }

    const value = horizontal ? {x: offset.x} : {y: offset.y};
    currentOffset.current = value

    Array.from(cacheOfGroup(groupKey)).forEach(([key, ref]) => {
      if (key !== id) {
        ref.handleScroll?.({...currentOffset.current, horizontal});
      }
    });
  };

  const scrollToTop = (groupKey?: string) => {
    const { horizontal } = scrollViewProps(groupKey)

    const currentId = currentRegisterIdOfGroup.get(groupKey ?? '')
    if (currentId !== undefined && currentId !== -1) {
      const currentRef = cacheOfGroup(groupKey).get(currentId)
      if (currentRef) {
        currentRef.handleScroll?.({y: 0, x: 0, horizontal});
        return
      }
    }
    const refs = Array.from(cacheOfGroup(groupKey).values());
    if (refs.length > 0) {
      refs[0]?.handleScroll?.({y: 0, x: 0, horizontal});
    }
  }

  const contextValue = {
    registerScrollView,
    unregisterScrollView,
    scrollViewProps,
    setCurrentRegisterId,
    handleScroll,
    scrollToTop,
  };
``
  return (
    <LinkedScrollViewsContext.Provider value={contextValue}>
      {children}
    </LinkedScrollViewsContext.Provider>
  );
};

export { LinkedScrollViewsProvider, LinkedScrollView };
