import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("/createBlog")}>Add Blog</Button>;
};

export default AddBlog;
