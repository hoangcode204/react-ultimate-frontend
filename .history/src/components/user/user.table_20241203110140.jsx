import {  Table } from 'antd';


const UserTable=(props)=>{
     const {dataUsers}=props;
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
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
          
           
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
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