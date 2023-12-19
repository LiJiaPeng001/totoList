import React from "react";
import { Card, Badge, Popconfirm } from "antd";
import {
  PlusCircleFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { PayloadOption } from "../types";
import { badgeMaps } from "../utils";
import ingIcon from "../images/ing.webp";
import endIcon from "../images/end.jpg";
import blankIcon from "../images/fish.webp";

interface Props {
  date: string;
  takeData: PayloadOption[];
  open: () => void;
  edit: (e: PayloadOption) => void;
  remove: (e: PayloadOption) => void;
  changeStatus: (e: PayloadOption) => void;
}

function addModal(props: Props) {
  props.open();
}

function confirm(props: Props, item: PayloadOption) {
  props.remove(item);
}

function changeStatus(props: Props, item: PayloadOption) {
  if (item.status == 1) item.status = 4;
  else if (item.status == 4) item.status = 2;
  else if (item.status == 2) item.status = 1;
  props.changeStatus(item);
}

const RightList: React.FC<Props> = (props: Props) => {
  let { date, takeData } = props;
  // 未完成
  let notList = takeData.filter((it) => it.status == 1 || it.status == 4);
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
            {notList.length ? (
              <div className="title middle-flex">
                <span>待完成 Fighting</span>
                <div
                  className="icon"
                  style={{ backgroundImage: `url(${ingIcon})` }}
                />
              </div>
            ) : (
              <div className="blank-page center-flex">
                <img src={blankIcon} className="fish-icon"></img>
                <div className="text">开摸！</div>
              </div>
            )}
            {/* 添加 */}
            {/* 未完成列表 */}
            {notList.map((item, i) => (
              <div className="take-item flex" key={i}>
                <div
                  className="status-icon"
                  onClick={() => changeStatus(props, item)}
                >
                  <Badge status={badgeMaps[item.status]} />
                </div>
                <div className="l-text flex1">
                  <div className="text">{item.name}</div>
                  {item.remark ? (
                    <div className="remark">备注：{item.remark}</div>
                  ) : null}
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
        {okList.length ? (
          <div className="yes-box">
            <Card>
              <div className="title middle-flex">
                <span>已完成 Finished</span>
                <div
                  className="icon"
                  style={{ backgroundImage: `url(${endIcon})` }}
                />
              </div>
              {/* 已完成列表 */}
              {okList.map((item, i) => (
                <div className="take-item flex" key={i}>
                  <div
                    className="status-icon"
                    onClick={() => changeStatus(props, item)}
                  >
                    <Badge status={badgeMaps[item.status]} />
                  </div>
                  <div className="l-text flex1">
                    <div className="text">{item.name}</div>
                    {item.remark ? (
                      <div className="remark">备注：{item.remark}</div>
                    ) : null}
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
        ) : null}
      </div>
    </>
  );
};

export default RightList;
