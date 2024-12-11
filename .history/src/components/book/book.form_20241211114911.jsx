import { Button, Input, notification, Modal, Upload } from "antd";
import { useState } from "react";
import { createBookAPI } from "../../services/api.service";

const BookForm = (props) => {
  const { loadBooks } = props;
  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitBtn = async () => {
    const res = await createBookAPI(mainText, author, price, quantity, category, thumbnail);
    if (res.data) {
      notification.success({
        message: "Create Book",
        description: "Tạo sách thành công",
      });
      setIsModalOpen(false);
      await loadBooks();
    } else {
      notification.error({
        message: "Error create book",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setMainText("");
    setAuthor("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setThumbnail(null);
  };

  const handleUploadChange = (info) => {
    if (info.file.status === "done") {
      setThumbnail(info.file.response.url); // Backend trả URL của ảnh
    }
  };

  return (
    <div className="book-form" style={{ margin: "10px 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Table Books</h3>
        <Button onClick={() => setIsModalOpen(true)} type="primary">
          Create Book
        </Button>
      </div>
      <Modal
        title="Create Book"
        open={isModalOpen}
        onOk={() => handleSubmitBtn()}
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
        okText={"CREATE"}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>Tiêu đề</span>
            <Input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
            <span>Tác giả</span>
            <Input
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
          <div>
            <span>Giá tiền</span>
            <Input
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              type="number"
            />
          </div>
          <div>
            <span>Số lượng</span>
            <Input
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              type="number"
            />
          </div>
          <div>
            <span>Thể loại</span>
            <Input
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>
          <div>
            <span>Ảnh thumbnail</span>
            <Upload
              name="file"
              action="/api/upload" // URL backend xử lý upload
              onChange={handleUploadChange}
              showUploadList={false}
            >
              <Button type="primary">Upload</Button>
            </Upload>
            {thumbnail && <img src={thumbnail} alt="thumbnail" style={{ width: 100, marginTop: 10 }} />}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookForm;
