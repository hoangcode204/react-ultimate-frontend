import { Input, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import { updateBookAPI } from "../../services/api.service";

const UpdateBookModal = (props) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const { 
    isModalUpdateOpen, 
    setIsModalUpdateOpen, 
    dataUpdate, 
    setDataUpdate, 
    loadBooks 
  } = props;

  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate._id); // Assuming `_id` is the unique identifier
      setTitle(dataUpdate.title);
      setAuthor(dataUpdate.author);
      setPrice(dataUpdate.price);
      setQuantity(dataUpdate.quantity);
      setCategory(dataUpdate.category);
      setThumbnail(dataUpdate.thumbnail);
    }
  }, [dataUpdate]);

  const handleSubmitBtn = async () => {
    const res = await updateBookAPI(id, title, author, price, quantity, category, thumbnail);
    if (res.data) {
      notification.success({
        message: "Update Book",
        description: "Cập nhật sách thành công",
      });
      setIsModalUpdateOpen(false);
      await loadBooks();
    } else {
      notification.error({
        message: "Error Update Book",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalUpdateOpen(false);
    setId("");
    setTitle("");
    setAuthor("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setThumbnail("");
    setDataUpdate(null);
  };

  return (
    <Modal 
      title="Update Book" 
      open={isModalUpdateOpen} 
      onOk={() => handleSubmitBtn()} 
      onCancel={() => resetAndCloseModal()} 
      maskClosable={false} 
      okText={"SAVE"}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <Input value={id} disabled />
        </div>
        <div>
          <span>Title</span>
          <Input value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div>
          <span>Author</span>
          <Input value={author} onChange={(event) => setAuthor(event.target.value)} />
        </div>
        <div>
          <span>Price</span>
          <Input value={price} type="number" onChange={(event) => setPrice(event.target.value)} />
        </div>
        <div>
          <span>Quantity</span>
          <Input value={quantity} type="number" onChange={(event) => setQuantity(event.target.value)} />
        </div>
        <div>
          <span>Category</span>
          <Input value={category} onChange={(event) => setCategory(event.target.value)} />
        </div>
        <div>
          <span>Thumbnail</span>
          <Input value={thumbnail} onChange={(event) => setThumbnail(event.target.value)} />
        </div>
      </div>
    </Modal>
  );
};

export default UpdateBookModal;
