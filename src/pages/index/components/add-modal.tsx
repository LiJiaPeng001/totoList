import React from "react";
import dayjs from "dayjs";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import type { PayloadOption, StatusSelectItem } from "../types";
import addIcon from '../images/add.webp'

interface Props {
  visible: boolean;
  payload: PayloadOption;
  onClose: () => void;
  onSubmit: (e: PayloadOption) => void;
}

function handleCancel(props: Props) {
  props.onClose();
}

const statusMaps: StatusSelectItem[] = [
  { label: "未完成", value: 1 },
  { label: "已完成", value: 2 },
  { label: "进行中", value: 4 },
];

const AddModal: React.FC<Props> = (props: Props) => {
  if (!props.visible) return;
  const [form] = Form.useForm();
  const { visible, payload } = props;
  function onFinish(values: PayloadOption) {
    props.onSubmit({ ...props.payload, ...values });
    props.onClose();
  }
  form.setFieldsValue({
    ...payload,
    date: dayjs(payload.date),
  });
  return (
    <>
      <Modal title="日程" open={visible} footer={null} closeIcon={null} onCancel={() => handleCancel(props)}>
        <img src={addIcon} alt="" className="add-icon" />
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
          style={{ marginTop: "50px" }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item<PayloadOption>
            label="任务名"
            name="name"
            rules={[{ required: true, message: "请输入任务名" }]}
          >
            <Input placeholder="请输入任务名" />
          </Form.Item>

          <Form.Item<PayloadOption>
            label="日期"
            name="date"
            rules={[{ required: true, message: "请输入日期" }]}
          >
            <DatePicker
              format="YYYY-MM-DD"
              style={{ width: "100%" }}
              placeholder="请输入日期"
            />
          </Form.Item>

          {payload.id ? (
            <Form.Item<PayloadOption> label="状态" name="status">
              <Select
                placeholder="请选择状态"
                allowClear
                options={statusMaps}
              />
            </Form.Item>
          ) : null}

          <Form.Item<PayloadOption> label="备注" name="remark">
            <Input.TextArea rows={4} placeholder="请输入备注" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button
              onClick={() => handleCancel(props)}
              style={{ margin: "0 8px" }}
            >
              取消
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddModal;
