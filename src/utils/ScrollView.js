import { FlatList } from 'native-base';
import { forwardRef } from 'react';
// fixed virtualizedLists should never be nested inside plain scrollViews with the same orientation
// because it can break windowing and other functionality - use another virtualizedList-backed container instead.
const ScrollView = (props, ref) => {
  return (
    <FlatList
      {...props}
      ref={ref}
      data={[]}
      keyExtractor={(_e, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => <>{props.children}</>}
    />
  );
};
export default forwardRef(ScrollView);
