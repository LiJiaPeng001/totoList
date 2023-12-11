import React from 'react'
import dayjs from 'dayjs'
import { Button, DatePicker, Form, Input, Modal } from 'antd'
import type { PayloadOption } from '../types'

interface Props {
  visible: boolean
  payload: PayloadOption
  onClose: () => void
}

function handleCancel(props: Props) {
  props.onClose()
}

function onFinish(values: any) {
  console.log('Success:', values)
}

const AddModal: React.FC<Props> = (props: Props) => {
  const { visible, payload } = props
  return <>
    <Modal title="日程" open={visible} footer={null}>
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      style={{ marginTop: '50px' }}
        initialValues={{
          ...payload,
          date: payload.date ? dayjs(payload.date) : null,
        }}
        autoComplete="off"
        onFinish={onFinish}
  >
    <Form.Item<PayloadOption>
      label="任务名"
      name="name"
      rules={[{ required: true, message: '请输入任务名' }]}
    >
      <Input placeholder="请输入任务名" />
    </Form.Item>

    <Form.Item<PayloadOption>
      label="日期"
      name="date"
      rules={[{ required: true, message: '请输入日期' }]}
    >
      <DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} placeholder='请输入日期' />
    </Form.Item>

    <Form.Item<PayloadOption>
      label="备注"
      name="remark"
    >
      <Input.TextArea rows={4} placeholder='请输入备注' />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
      <Button onClick={() => handleCancel(props)} style={{ margin: '0 8px' }}>
        取消
      </Button>
    </Form.Item>
  </Form>
      </Modal>
  </>
}

export default AddModal
