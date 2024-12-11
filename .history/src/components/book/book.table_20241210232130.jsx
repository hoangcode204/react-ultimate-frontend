import { Table } from "antd";
import { useState } from "react";
const BookTable = (props) => {
  const {
    dataBooks,
    loadBook,
    current,
    pageSize,
    total,
    setCurrent,
    setPageSize,
  } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null); //Lưu trữ thông tin người dùng cần cập nhật.
  const [dataDetail, setDataDetail] = useState(null); //Lưu thông tin chi tiết người dùng cần hiển thị.
  const [isDetailOpen, setIsDetailOpen] = useState(false);
};
