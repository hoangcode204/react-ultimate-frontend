import BookForm from "../components/book/book.form"; // Form thêm/sửa sách
import BookTable from "../components/book/book.table"; // Bảng hiển thị danh sách sách
import { useEffect, useState } from "react"; // Quản lý trạng thái và hiệu ứng
import { fetchAllBookAPI } from "../services/api.service"; // Gọi API để lấy dữ liệu

const BookPage = () => {
  const [dataBooks, setDataBooks] = useState([]); // Khởi tạo state lưu danh sách sách
  const [current, setCurrent] = useState(1); // Trang hiện tại
  const [pageSize, setPageSize] = useState(5); // Số bản ghi mỗi trang
  const [total, setTotal] = useState(0); // Tổng số bản ghi

  useEffect(() => {
    loadBooks(); // Gọi loadBooks khi component được render lần đầu và khi current/pageSize thay đổi
  }, [current, pageSize]);

  const loadBooks = async () => {
    // Hàm bất đồng bộ để gọi API
    const res = await fetchAllBookAPI(current, pageSize); // Chờ kết quả trả về từ API
    console.log("API Response:", res.data);
    if (res.data) {
      setDataBooks(res.data.result); // Lưu danh sách sách vào state
      setCurrent(res.data.meta.current); // Cập nhật trang hiện tại
      setPageSize(res.data.meta.pageSize); // Cập nhật kích thước trang
      console.log("Total Response:", res.data.meta.total);
      setTotal(res.data.meta.total); // Cập nhật tổng số bản ghi
    }
  };

  console.log(">> check pageSize: ", pageSize);

  return (
    <div style={{ padding: "20px" }}>
      <BookForm loadBooks={loadBooks} /> 
      <BookTable
        dataBooks={dataBooks}
        loadBooks={loadBooks}
        current={current}
        pageSize={pageSize}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default BookPage;
