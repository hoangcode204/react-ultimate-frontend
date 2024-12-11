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
            <p>Id</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
         </>
         }
      
      </Drawer>
    )
}
export default ViewUserDetail