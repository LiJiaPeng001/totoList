import type { Dayjs } from "dayjs";
import type { CalendarProps, BadgeProps } from "antd";
import { Badge, Calendar } from "antd";
import React, { Key } from "react";
import { PayloadOption, StatusMaps } from "../types";
import dayjs from "dayjs";

interface Props {
  list: PayloadOption[];
  date: string;
  select: (date: string) => void;
}

const badgeMaps: { [K in StatusMaps]: BadgeProps["status"] } = {
  1: "warning",
  2: "success",
  3: "error",
};

function getListData(value: Dayjs, list: PayloadOption[]): PayloadOption[] {
  return list.filter((it) => it.date == value.format("YYYY-MM-DD"));
}

const ToList: React.FC<Props> = (props) => {
  let { list = [] } = props;
  const monthCellRender = (value: Dayjs) => {
    let newList = list.filter((it) => (it.date as string).indexOf(value.format("YYYY-MM")) > -1)
    let noNum = newList.filter((it) => it.status == 1).length;
    let yesNum = newList.filter((it) => it.status == 2).length;
    let removeNum = newList.filter((it) => it.status == 3).length;
    return newList.length ? (
      <div className="notes-month">
        <section>未完成：{noNum}</section>
        <section>已完成：{yesNum}</section>
        <section>已删除：{removeNum}</section>
      </div>
    ) : null
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value, list);
    return (
      <div className="events">
        {listData.map((item) => (
          <div key={item.id as Key}>
            <Badge status={badgeMaps[item.status]} text={item.name} />
          </div>
        ))}
      </div>
    );
  };
  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  function onSelect(date: Dayjs) {
    props.select(dayjs(date).format("YYYY-MM-DD"))
  }
  return <Calendar onSelect={onSelect} cellRender={cellRender} />;
};

export default ToList;
