import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from "react"; //quản lí trạng thái và hiệu ứng
import { fetchAllUserAPI } from "../services/api.service";
const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]); // Khởi tạo state để lưu danh sách người dùng.
  const[current,setCurrent]=useState(1);
  const[pageSize,setPageSize]=useState(10);
  const[total,setTotal]=useState(0);
  useEffect(() => {
    loadUser(); //// Chạy 1 lần khi component được render lần đầu
  }, []);
  const loadUser = async () => {
    //hàm bất đồng bộ để gọi API
    const res = await fetchAllUserAPI(); //chờ kết quả trả về từ API
    if(res.data){
      setDataUsers(res.data.result); //cập nhật danh sách người dùng
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);

    }
   
  };
  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} loadUser={loadUser} />
      current={current}
      pageSize={pageSize}
    </div>
  );
};
export default UserPage;
