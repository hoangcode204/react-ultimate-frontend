import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from "react"; //quản lí trạng thái và hiệu ứng
import { fetchAllUserAPI } from "../services/api.service";
const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]); // Khởi tạo state để lưu danh sách người dùng.
  const[current,setCurrent]=useState(1);
  const[pageSize,setPageSize]=useState(9);
  const[total,setTotal]=useState(0);
  useEffect(() => {
    loadUser(); //// Chạy 1 lần khi component được render lần đầu
  }, []);
  const loadUser = async () => {
    //hàm bất đồng bộ để gọi API
    const res = await fetchAllUserAPI(current,pageSize); //chờ kết quả trả về từ API
    console.log("API Response:", res.data);
    if(res.data){
      setDataUsers(res.data.result);
      setCurrent(Number(res.data.meta.current)); // Chuyển đổi sang number
      setPageSize(Number(res.data.meta.pageSize)); // Chuyển đổi sang number
      console.log("Total Response:", res.data.meta.total);
      setTotal(res.data.meta.total); // total đã là number

    }
   
  };
  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} loadUser={loadUser} 
      current={current}
      pageSize={pageSize}
      total={total}
    </div>
  );
};
export default UserPage;
