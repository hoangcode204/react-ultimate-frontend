import { Table } from "antd";
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