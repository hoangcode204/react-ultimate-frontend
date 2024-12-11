import { Table } from "antd";
const BookTable=(props)=>{
    const {
        dataBooks,
        loadUser,
        current,
        pageSize,
        total,
        setCurrent,
        setPageSize,
      } = props;
      const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
}