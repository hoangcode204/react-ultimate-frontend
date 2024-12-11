import {  Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
const UserTable=()=>{

    const columns = [
      {
        title: 'Id',
        dataIndex: '_id',
        
      },
        {
          title: 'Full Name',
          dataIndex: 'fullName',
          
        },
        {
          title: 'Email',
          dataIndex: 'email',
        
        },
      ];
      const loadUser=async()=>{ //hàm bất đồng bộ để gọi API
        const res=await fetchAllUserAPI()//chờ kết quả trả về từ API
        setDataUsers(res.data)//cập nhật danh sách người dùng
      }
      console.log(">>run render 000")
      return (
    <Table
     columns={columns}
      dataSource={dataUsers} 
      rowKey={"_id"}
      />
      )
}
export default UserTable;