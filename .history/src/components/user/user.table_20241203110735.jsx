import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {  Table } from 'antd';


const UserTable=(props)=>{
     const {dataUsers}=props;
    const columns = [
      {
        title: 'Id',
        dataIndex: '_id',
        render: (_, record) => {
        return(
          <a href="#">{record._id}</a>
        )
      },
        
      },
        {
          title: 'Full Name',
          dataIndex: 'fullName',
          
        },
        {
          title: 'Email',
          dataIndex: 'email',
        
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
               <>
                      <a><EditOutlined/>
                      <a><DeleteOutlined/></a>
               </>
          ),
        },
      ];
    
  return (
       <Table
          columns={columns}
           dataSource={dataUsers} 
         rowKey={"_id"}
      />
      )
}
export default UserTable;