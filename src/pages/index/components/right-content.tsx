import React from "react";
import { Card, Badge, Popconfirm } from "antd";
import {
  PlusCircleFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { PayloadOption } from "../types";

interface Props {
  date: string;
  takeData: PayloadOption[];
  open: () => void;
  edit: (e: PayloadOption) => void;
  remove: (e: PayloadOption) => void;
}

function addModal(props: Props) {
  props.open();
}

function confirm(props: Props, item: PayloadOption) {
  props.remove(item);
}

const RightList: React.FC<Props> = (props: Props) => {
  let { date, takeData } = props;
  // 未完成
  let notList = takeData.filter((it) => it.status == 1);
  let okList = takeData.filter((it) => it.status == 2);
  return (
    <>
      <div className="right-content">
        <div className="no-box">
          <Card
            title={date}
            extra={
              <PlusCircleFilled
                onClick={() => addModal(props)}
                style={{ fontSize: "22px" }}
              />
            }
          >
            <div className="title middle-flex">
              <span>进行中 Fighting</span>
              <img src="" alt="" className="icon" />
            </div>
            {/* 添加 */}
            {/* 未完成列表 */}
            {notList.map((item, i) => (
              <div className="take-item middle-flex" key={i}>
                <div className="l-text flex1">
                  <div className="text">{item.name}</div>
                  <div className="remark">备注：{item.remark}</div>
                </div>
                <div className="r-icon">
                  <EditOutlined
                    onClick={() => props.edit(item)}
                    style={{
                      fontSize: "18px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  />
                  <Popconfirm
                    title="删除"
                    description="您确定要删除嘛？"
                    onConfirm={() => confirm(props, item)}
                  >
                    <DeleteOutlined
                      style={{ fontSize: "18px", cursor: "pointer" }}
                    />
                  </Popconfirm>
                </div>
              </div>
            ))}
          </Card>
        </div>
        <Card>
          <div className="title middle-flex">
            <span>已完成</span>
            <img src="" alt="" className="icon" />
          </div>
          {/* 已完成列表 */}
          {okList.map((item, i) => (
            <div key={i}>
              <Badge status="success" size="default" text={item.name} />
            </div>
          ))}
        </Card>
      </div>
    </>
  );
};

export default RightList;
