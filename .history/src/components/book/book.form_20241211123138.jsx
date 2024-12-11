import {
  Button,
  Input,
  notification,
  Modal,
  InputNumber,
  Select,
} from "antd";
import { useState } from "react";
import { createBookAPI, handleUploadFile } from "../../services/api.service";

const BookForm = (props) => {
  const { loadBooks } = props;
  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmitBtn = async () => {
 if(!selectedFile){
notification.error({
  message:"Error create book",
  description:"Vui lòng upload ảnh thumbnail"
})
return;
 }
 const resUpload=await handleUploadFile(selectedFile,"book");
 if(resUpload.data){
  const newThumbnail=resUpload.data.fileUploaded;
  //step2: create book
  const resBook=await createBookAPI(mainText,
    author,
    price,
    quantity,
    category,
    newThumbnail);
    
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
    setSelectedFile(null);
    setPreview(null);
  };

  const handleOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
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
              value={mainText}
              onChange={(event) => setMainText(event.target.value)}
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
            <InputNumber
              style={{ width: "100%" }}
              addonAfter={" đ"}
              value={price}
              onChange={(event) => setPrice(event)}
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
            <Select
              style={{ width: "100%" }}
              value={category}
              onChange={(value) => setCategory(value)}
              options={[
                { value: "Arts", label: "Arts" },
                { value: "Business", label: "Business" },
                { value: "Comics", label: "Comics" },
                { value: "Cooking", label: "Cooking" },
                { value: "Entertainment", label: "Entertainment" },
                { value: "History", label: "History" },
                { value: "Music", label: "Music" },
                { value: "Sports", label: "Sports" },
                { value: "Teen", label: "Teen" },
                { value: "Travel", label: "Travel" },
              ]}
            />
          </div>
          <div>
            <span>Ảnh thumbnail</span>
            <div>
              <label
                htmlFor="btnUpload"
                style={{
                  display: "block",
                  width: "fit-content",
                  marginTop: "15px",
                  padding: "5px 10px",
                  background: "orange",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Upload Thumbnail
              </label>
              <input
                type="file"
                hidden
                id="btnUpload"
                onChange={(event) => handleOnChangeFile(event)}
                onClick={(event)=>event.target.value=null}
              />
            </div>
            {preview && (
              <>
                <div>
                  <img height={250} width={300} src={preview}  />
                </div>
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookForm;
