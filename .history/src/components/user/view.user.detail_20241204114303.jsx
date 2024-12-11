import { Drawer } from "antd";
const ViewUserDetail=(props)=>{
    const{
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen
    }=props;
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
             <div>
                <img height={250} width={300}
                 src={`${import.meta.env.VITE_BACKEND_URL}/images/avartar/${dataDetail.}`}>
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