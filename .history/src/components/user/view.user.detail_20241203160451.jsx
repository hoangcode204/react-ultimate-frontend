import { Drawer } from "antd";
const ViewUserDetail=()=>{
    const{
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen
    }=props;
    return(
        <Drawer title="Chi tiết User"
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
            <b
        <p>Some contents...</p>
         </>
         }
      
      </Drawer>
    )
}
export default ViewUserDetail