import { Drawer } from "antd";
const ViewUserDetail=()=>{
    return(
        <Drawer title="Chi tiết User" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    )
}