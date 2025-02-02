import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';
export default function ErrorPage() {
     const error = useRouteError();
      console.error(error);
return (

<Result
    status="403"
    title="Oops"
    subTitle={error.status}
    extra={<Button type="primary">Back Home</Button>}
  
  />
);
}