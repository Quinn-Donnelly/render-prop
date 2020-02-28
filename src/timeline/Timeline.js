import React, {Component} from "react";
import moment from "moment";
import "react-calendar-timeline/lib/Timeline.css";

import Timeline from "react-calendar-timeline";

import generateFakeData from "../dataFaker/DataFaker";
import BatchData from '../dataFaker/BatchData';
import RoomData from '../dataFaker/RoomData';

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title"
};

export default class CustomTimeline extends Component {
  constructor(props) {
    super(props);

    const {groups, items} = BatchData;

    const newGroups = groups;

    console.log("items", items);
    const defaultTimeStart = moment()
        .startOf("day")
        .toDate();
    const defaultTimeEnd = moment()
        .startOf("day")
        .add(1, "day")
        .toDate();

    const visibleTimeStart = moment()
        .startOf("day")
        .valueOf();
    const visibleTimeEnd = moment()
        .startOf("day")
        .add(1, "day")
        .valueOf();

    // // convert every 2 groups out of 3 to nodes, leaving the first as the root
    // const newGroups = groups.map(group => {
    //   const isRoot = (parseInt(group.id) - 1) % 3 === 0;
    //   const parent = isRoot ? null : Math.floor((parseInt(group.id) - 1) / 3) * 3 + 1;
    //
    //   return Object.assign({}, group, {
    //     root: isRoot,
    //     parent: parent
    //   });
    // });
    //
    // console.log("new groups", newGroups);
    this.state = {
      groups: newGroups,
      items,
      defaultTimeStart,
      defaultTimeEnd,
      visibleTimeStart,
      visibleTimeEnd,
      openGroups: {}
    };
  }

  toggleGroup = id => {
    const {openGroups} = this.state;
    this.setState({
      openGroups: {
        ...openGroups,
        [id]: !openGroups[id]
      }
    });
  };

  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const {items, groups} = this.state;

    const group = groups[newGroupOrder];

    this.setState({
      items: items.map(item =>
          item.id === itemId
              ? Object.assign({}, item, {
                start: dragTime,
                end: dragTime + (item.end - item.start),
                group: group.id
              })
              : item
      )
    });

    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  handleItemResize = (itemId, time, edge) => {
    const {items} = this.state;

    this.setState({
      items: items.map(item =>
          item.id === itemId
              ? Object.assign({}, item, {
                start: edge === "left" ? time : item.start,
                end: edge === "left" ? item.end : time
              })
              : item
      )
    });

    console.log("Resized", itemId, time, edge);
  };

  handleTimeChange = (visibleTimeStart, visibleTimeEnd, updateScrollCanvas) => {
    this.setState({ visibleTimeStart, visibleTimeEnd });
  };

  render() {
    const {groups, items, defaultTimeStart, defaultTimeEnd, visibleTimeStart, visibleTimeEnd, openGroups} = this.state;

    const newGroups = groups
        .filter(g => g.root || openGroups[g.parent])
        .map(group => {
          return Object.assign({}, group, {
            title: group.root ? (
                <div onClick={() => this.toggleGroup(parseInt(group.id))} style={{ cursor: "pointer" }}>
                  {openGroups[parseInt(group.id)] ? "[-]" : "[+]"} {group.title}
                </div>
            ) : (
                <div style={{ paddingLeft: 20 }}>{group.title}</div>
            )
          });
        });

    return (
        <React.Fragment>
          <Timeline
              groups={newGroups}
              items={items}
              keys={keys}
              sidebarWidth={150}
              canMove
              canResize={"both"}
              canSelect
              itemsSorted
              itemTouchSendsClick={false}
              stackItems
              itemHeightRatio={0.75}
              showCursorLine
              // defaultTimeStart={defaultTimeStart}
              // defaultTimeEnd={defaultTimeEnd}
              visibleTimeStart={visibleTimeStart}
              visibleTimeEnd={visibleTimeEnd}
              onItemMove={this.handleItemMove}
              onItemResize={this.handleItemResize}
              onTimeChange={this.handleTimeChange}
          />
          <Timeline
              groups={newGroups}
              items={items}
              keys={keys}
              sidebarWidth={150}
              canMove
              canResize={"both"}
              canSelect
              itemsSorted
              itemTouchSendsClick={false}
              stackItems
              itemHeightRatio={0.75}
              showCursorLine
              // defaultTimeStart={defaultTimeStart}
              // defaultTimeEnd={defaultTimeEnd}
              visibleTimeStart={visibleTimeStart}
              visibleTimeEnd={visibleTimeEnd}
              onItemMove={this.handleItemMove}
              onItemResize={this.handleItemResize}
              onTimeChange={this.handleTimeChange}
          />
        </React.Fragment>
    );
  }
}