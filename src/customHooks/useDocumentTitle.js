import { useEffect } from "react";

const useDocumentTitle = (documentTitle) => {
  useEffect(() => {
    document.title = `${documentTitle}`;
  }, [documentTitle]);
};

export { useDocumentTitle };
