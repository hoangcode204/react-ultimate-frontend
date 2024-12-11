import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { handleUploadFile, updateUserAvatarAPI} from "../../services/api.service";
const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen,loadUser } = props;
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const handleOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      selectedFile(null);
      setPreview(null);
      return;
    }
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
    console.log("check file: ", preview);
  };
  const handleUpdateUserAvatar = async() => {
    console.log(">>>check file: ",selectedFile)
    const resUpload=await handleUploadFile(selectedFile,"avatar");
    if(resUpload.data){
          //sucess
          const newAvatar=resUpload.file.fileUploaded;
          //step 2: update user
          const resUpdateAvatar=await updateUserAvatarAPI(newAvatar,dataDetail._id,dataDetail.fullName,dataDetail.phone)
       if(resUpdateAvatar.data){
        setIsDetailOpen(false);
        setSelectedFile(null);
        setPreview(null);
        await loadUser()
        notification.success({
          message:"Update user avatar",
          description: "Cập nhật avatar thành công"
        })
       }
    else{
      notification.error({
        message:"Error upload file",
        description: JSON.stringify(resUpdateAvatar.message)
      })

    }
  }};
  return (
    <Drawer
      width={"40vw"}
      title="Chi tiết User"
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>Id: {dataDetail._id}</p>
          <br />
          <p>Full name: {dataDetail.fullName}</p>
          <br />
          <p>Email: {dataDetail.email}</p>
          <br />
          <p>Phone Number: {dataDetail.phone}</p>
          <br />
          <p>Avatar:</p>
          <div>
            <img
              height={250}
              width={300}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataDetail.avatar
              }`}
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
              Upload Avatar
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
                <img height={250} width={300} src={preview} />
              </div>
              <Button type="primary"
              onClick={()=>handleUpdateUserAvatar()}>Save</Button>
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
export default ViewUserDetail;
