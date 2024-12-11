import { Table } from "antd";
const BookTable=(props)=>{
    const {
        dataUsers,
        loadUser,
        current,
        pageSize,
        total,
        setCurrent,
        setPageSize,
      } = props;
      const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
}