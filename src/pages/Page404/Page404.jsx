import "./page404.css";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";

const Page404 = () => {
  useDocumentTitle("**404**");
  return (
    <div className='page-404-container'>
      <h1>404 Page Not Found</h1>
    </div>
  );
};
export { Page404 };
