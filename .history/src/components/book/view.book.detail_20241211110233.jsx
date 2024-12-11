import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import {
  handleUploadFile,
  updateBookThumbnailAPI,
} from "../../services/api.service";

const ViewBookDetail = (props) => {
  const {
    dataDetail,
    setDataDetail,
    isDetailOpen,
    setIsDetailOpen,
    loadBooks,
  } = props;

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

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

  const handleUpdateBookThumbnail = async () => {
    const resUpload = await handleUploadFile(selectedFile, "thumbnail");
    if (resUpload.data) {
      const newThumbnail = resUpload.file.fileUploaded;
      const resUpdateThumbnail = await updateBookThumbnailAPI(
        newThumbnail,
        dataDetail.id
      );

      if (resUpdateThumbnail.data) {
        setIsDetailOpen(false);
        setSelectedFile(null);
        setPreview(null);
        await loadBooks();
        notification.success({
          message: "Update Book Thumbnail",
          description: "Cập nhật thumbnail thành công",
        });
      } else {
        notification.error({
          message: "Error upload file",
          description: JSON.stringify(resUpdateThumbnail.message),
        });
      }
    }
  };

  return (
    <Drawer
      width={"40vw"}
      title="Chi tiết Book"
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>Id: {dataDetail.id}</p>
          <br />
          <p>Tiêu đề: {dataDetail.mainText}</p>
          <br />
          <p>Tác giả: {dataDetail.author}</p>
          <br />
          <p>Thể loại: {dataDetail.category}</p>
          <br />
          <p>Giá tiền: {dataDetail.price} đ</p>
          <br />
          <p>Số lượng: {dataDetail.quantity}</p>
          <br />
          <p>Đã bán: {dataDetail.sold}</p>
          <br />
          <p>Thumbnail:</p>
          <div>
            <img
              height={250}
              width={300}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/books/${
                dataDetail.thumbnail
              }`}
              alt="Thumbnail"
            />
          </div>
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
            />
          </div>
          {preview && (
            <>
              <div>
                <img height={250} width={300} src={preview} alt="Preview" />
              </div>
              <Button
                type="primary"
                onClick={() => handleUpdateBookThumbnail()}
              >
                Save
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <p>Không có dữ liệu</p>
        </>
      )}
    </Drawer>
  );
};

export default ViewBookDetail;
