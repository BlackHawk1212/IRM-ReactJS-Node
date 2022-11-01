import React, { FC, ReactNode, useState } from 'react';
import './App.css';
import { Row, Col, Typography, Input, Button, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import _ from "lodash";


const { Title } = Typography

interface DataType {
  task: string;
  status: string;
  remove: ReactNode;
}

const App: FC = () => {
  const [data, setData] = useState<DataType[]>([]);

  const [inputValue, setInputValue] = useState<string>('')

  const columns = [
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: '',
      dataIndex: 'remove',
      key: 'remove',
      render: () => <DeleteOutlined />
    }
  ]

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const addRecord = () => {
    data.push({
      task: inputValue,
      status: 'To do',
      remove: ""
    })
    setInputValue('')
    setData(_.cloneDeep(data))
  }

  return (
    <Row>
      <Col span={12} offset={6}>
        <Title>To Do Application</Title>
        <Row gutter={16}>
          <Col span={20}>
            <Input placeholder='Type a Task Name' value={inputValue} onChange={onChange} />
          </Col>
          <Col span={4}>
            <Button onClick={addRecord}>Add Task</Button>
          </Col>
        </Row>
        <Row>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Row>
      </Col>
    </Row>
  );
}

export default App;