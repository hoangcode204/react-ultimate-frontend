import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useState } from 'react';
const UserTable=()=>{
  const [dataUsers,setDataUsers]=useState([
    {name:"erric",age:25,address:"Hà Nội"}
  ])
    const columns = [
      {
        title: 'Id',
        dataIndex: '_id',
        
      },
        {
          title: 'fullName',
          dataIndex: 'fullame',
          
        },
        {
          title: 'Age',
          dataIndex: 'age',
        
        },
        {
          title: 'Address',
          dataIndex: 'address',
          
        }
      ];
      // const data = [
      //   {
      //     key: '1',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York No. 1 Lake Park',
      //     tags: ['nice', 'developer'],
      //   },
      //   {
      //     key: '2',
      //     name: 'Jim Green',
      //     age: 42,
      //     address: 'London No. 1 Lake Park',
      //     tags: ['loser'],
      //   },
      //   {
      //     key: '3',
      //     name: 'Joe Black',
      //     age: 32,
      //     address: 'Sydney No. 1 Lake Park',
      //     tags: ['cool', 'teacher'],
      //   },
      // ];
      const loadUser=async()=>{
        console.log(">>run load start")
        const res=await fetchAllUserAPI()
        console.log(">>run load end",res)
      }
      loadUser();
      return (
<Table columns={columns} dataSource={dataUsers} />
      )
}
export default UserTable;