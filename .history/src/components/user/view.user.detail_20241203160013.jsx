import { Drawer } from "antd";
const ViewUserDetail=()=>{
    const{
        dataDe
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