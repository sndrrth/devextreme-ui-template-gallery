import React, { useState, useEffect, useCallback } from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import Sortable from 'devextreme-react/sortable';
import LoadPanel from 'devextreme-react/load-panel';
import { PlanningProps, Task } from '../../shared/types/task';
import { STATUS_ITEMS } from '../../shared/constants';
import { DragStartEvent, ReorderEvent } from 'devextreme/ui/sortable';
import { List } from './list/List';
import './PlanningKanban.scss';

const reorder = (items: any[], item: Object, fromIndex: number, toIndex: number) => {
  let result = items;
  if (fromIndex >= 0) {
    result = [...result.slice(0, fromIndex), ...result.slice(fromIndex + 1)];
  }

  if (toIndex >= 0) {
    result = [...result.slice(0, toIndex), item, ...result.slice(toIndex)];
  }

  return result;
};
export const PlanningKanban = ({ dataSource }: PlanningProps) => {
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState<Task[][]>([]);
  const [statuses, setStatuses] = useState(STATUS_ITEMS);
  useEffect(() => {
    if (dataSource.length !== 0) {
      setLoading(false);
      const initialLists: Task[][] = [];
      STATUS_ITEMS.forEach((status) => {
        initialLists.push(dataSource.filter((task) => task.status === status));
      });
      setLists(initialLists);
    }
  }, [dataSource]);
  const onListReorder = useCallback(
    ({ fromIndex, toIndex }: ReorderEvent) => {
      setLists(reorder(lists, lists[fromIndex], fromIndex, toIndex));
      setStatuses(reorder(statuses, statuses[fromIndex], fromIndex, toIndex));
    },
    [lists, statuses]
  );

  const onTaskDragStart = useCallback(
    (e: DragStartEvent) => {
      e.itemData = lists[e.fromData][e.fromIndex];
    },
    [lists]
  );

  const onTaskDrop = useCallback(
    (e: ReorderEvent) => {
      const updatedList = [...lists];
      e.itemData.status = statuses[e.toData];
      updatedList[e.fromData] = reorder(updatedList[e.fromData], e.itemData, e.fromIndex, -1);
      updatedList[e.toData] = reorder(updatedList[e.toData], e.itemData, -1, e.toIndex);

      setLists(updatedList);
    },
    [lists, statuses]
  );

  return loading ? (
    <LoadPanel container='.content' visible position={{ of: '.content' }} />
  ) : (
    <div id='kanban'>
      <ScrollView className='scrollable-board' direction='horizontal' showScrollbar='always'>
        <Sortable className='sortable-lists' itemOrientation='horizontal' handle='.list-title' onReorder={onListReorder}>
          {lists.map((tasks, listIndex) => {
            const status = statuses[listIndex];
            return <List key={status} title={status} index={listIndex} tasks={tasks} onTaskDragStart={onTaskDragStart} onTaskDrop={onTaskDrop} />;
          })}
        </Sortable>
      </ScrollView>
    </div>
  );
};
