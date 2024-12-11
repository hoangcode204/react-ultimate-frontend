import { Drawer } from "antd";
const ViewUserDetail=()=>{
    const{
        dataDetail,
        setData
    }
    return(
        <Drawer title="Chi tiết User"
         onClose={()=>{
            
         }
         } open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    )
}