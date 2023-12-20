import type { Dayjs } from "dayjs";
import type { CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import React, { Key } from "react";
import { PayloadOption } from "../types";
import {badgeMaps} from '../utils'
import dayjs from "dayjs";

interface Props {
  list: PayloadOption[];
  date: string;
  select: (date: string) => void;
}

const ToList: React.FC<Props> = (props) => {
  let { list = [] } = props;
  const monthCellRender = (value: Dayjs) => {
    let newList = list.filter(
      (it) => (it.date as string).indexOf(value.format("YYYY-MM")) > -1
    );
    let noNum = newList.filter((it) => it.status == 1).length;
    let yesNum = newList.filter((it) => it.status == 2).length;
    let ingNum = newList.filter((it) => it.status == 4).length;
    // 完成率
    let rate = Math.floor(yesNum / newList.length * 100) + '%';
    return newList.length ? (
      <div className="notes-month">
        <div>总任务数：{newList.length}<span style={{marginLeft:'12px'}}>完成率：{rate}</span></div>
        <Badge status='error' text={`未完成：${noNum}`} /><br />
        <Badge status='processing' text={`进行中：${ingNum}`} /><br />
        <Badge status='success' text={`已完成：${yesNum}`} />
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const ingList = list.filter(
      (it) => it.date == value.format("YYYY-MM-DD") && (it.status == 1 || it.status == 4)
    )
    const yesList = list.filter(
      (it) => it.date == value.format("YYYY-MM-DD") && (it.status == 2)
    )
    return (
      <div className="events">
        {ingList.map((item) => (
          <div key={item.id as Key} className="e-item middle-flex">
            <Badge status={badgeMaps[item.status]} />
            <div className="text">{item.name}</div>
          </div>
        ))}
        {
          !ingList.length && yesList.length ? <div>已全部完成
            <span style={{color: '#000',fontWeight:'bold'}}> {yesList.length} </span>
            个任务
           </div> : null
        }
      </div>
    );
  };
  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  function onSelect(
    date: Dayjs,
    info: { source: "year" | "month" | "date" | "customize" }
  ) {
    if (info.source === "date") props.select(dayjs(date).format("YYYY-MM-DD"));
  }
  return <Calendar onSelect={onSelect} cellRender={cellRender} />;
};

export default ToList;
