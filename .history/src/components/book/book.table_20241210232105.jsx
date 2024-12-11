import { Table } from "antd";
import { useState } from "react";
const BookTable=(props)=>{
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

}