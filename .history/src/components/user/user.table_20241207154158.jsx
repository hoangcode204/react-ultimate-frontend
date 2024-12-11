import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Table, Popconfirm } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";
import { deleteUserAPI } from "../../services/api.service";

const UserTable = (props) => {
  const { dataUsers, loadUser, current, pageSize, total } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null); // Lưu trữ thông tin người dùng cần cập nhật
  const [dataDetail, setDataDetail] = useState(null); // Lưu thông tin chi tiết người dùng cần hiển thị
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Cột hiển thị trong bảng
  const columns = [
    {
      title: "STT",
      render: (_, __, index) => <>{index + 1}</>,
    },
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => (
        <a
          href="#"
          onClick={() => {
            setDataDetail(record);
            setIsDetailOpen(true);
          }}
        >
          {record._id}
        </a>
      ),
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              setIsModalUpdateOpen(true);
            }}
            style={{ cursor: "pointer", color: "orange" }}
          />
          <Popconfirm
            title="Xóa người dùng"
            description="Bạn có chắc chắn muốn xóa người dùng này?"
            onConfirm={() => handleDeleteUser(record._id)}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  // Xử lý xóa người dùng
  const handleDeleteUser = async (id) => {
    try {
      const res = await deleteUserAPI(id);
      if (res?.data) {
        notification.success({
          message: "Delete User",
          description: "Xóa người dùng thành công",
        });
        await loadUser();
      }
    } catch (error) {
      notification.error({
        message: "Error Deleting User",
        description: "Đã xảy ra lỗi khi xóa người dùng.",
      });
    }
  };

  // Xử lý khi thay đổi phân trang, bộ lọc hoặc sắp xếp
  const onChange = async (pagination) => {
    const { current: newCurrent, pageSize: newPageSize } = pagination;
    await loadUser(newCurrent, newPageSize);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
        pagination={{
          current,
          pageSize,
          total,
          showSizeChanger: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} trên tổng số ${total} bản ghi`,
        }}
        onChange={onChange}
      />

      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <ViewUserDetail
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        loadUser={loadUser}
      />
    </>
  );
};

export default UserTable;
