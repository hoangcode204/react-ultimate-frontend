import { Button, Drawer } from "antd";
import { useState } from "react";
const ViewUserDetail=(props)=>{
    const{
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen
    }=props;
    const[selectedFile,setSelectedFile]=useState();
    const[prev]
    const handleOnChangeFile=(event)=>{
        if(!event.target.files||event.target.files.length===0){
            return;
        }
        const file=event.target.files[0];
        console.log(file);
    }
    return(
        <Drawer
        width={"40vw"} 
        title="Chi tiết User"
         onClose={()=>{
            setDataDetail(null);
            setIsDetailOpen(false);
         }}
         open={isDetailOpen}
         >
         {dataDetail ?<>
            <p>Id: {dataDetail._id}</p>
            <br/>
            <p>Full name: {dataDetail.fullName}</p>
            <br/>
             <p>Email: {dataDetail.email}</p>
             <br/>
             <p>Phone Number: {dataDetail.phone}</p>
             <br/>
             <p>Avatar:</p>
             <div>  
             <img height={250} width={300}
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}/>
             </div>
             <div>
                <label htmlFor="btnUpload" style={{
                    display:"block",
                    width:"fit-content",
                    marginTop:"15px",
                    padding:"5px 10px",
                    background:"orange",
                    borderRadius:"5px",
                    cursor:"pointer"
                }}>
                     Upload Avatar
                </label>
                <input type="file"hidden id="btnUpload"
                    onChange={(even)=>handleOnChangeFile(event)}
                />
             </div>
            
         </>
            :
            <>
                <p>Không có dữ liệu</p>
            </>
         }
      
      </Drawer>
    )
}
export default ViewUserDetail