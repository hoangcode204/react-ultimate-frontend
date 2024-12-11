import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
     const error = useRouteError();
      console.error(error);
return (
<div id="error-page">
<h1>Oops!</h1>
<p>Sorry, an unexpected error has occurred.</p>
<p>
<i>{error.statusText || error.message}</i>
</p>
<div>
<Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
<Link to="/">
<span>Back to HomePage</span>
</Link>
    
</div>
</div>
);
}