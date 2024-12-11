import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
     const error = useRouteError();
      console.error(error);
return (

<Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
</>
);
}