import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from "react"; //quản lí trạng thái và hiệu ứng
import { fetchAllUserAPI } from "../services/api.service";
const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]); // Khởi tạo state để lưu danh sách người dùng.
  
  useEffect(() => {
    loadUser(); //// Chạy 1 lần khi component được render lần đầu
  }, []);
  const loadUser = async () => {
    //hàm bất đồng bộ để gọi API
    const res = await fetchAllUserAPI(); //chờ kết quả trả về từ API
    setDataUsers(res.data.result); //cập nhật danh sách người dùng
  };
  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} loadUser={loadUser} />
    </div>
  );
};
export default UserPage;
