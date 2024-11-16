import FooterView from "@/layout/footer/view/footer-view";
import Header from "@/layout/header/header";
import { Outlet } from "react-router-dom";
import { PageContainer } from "../page-container/page-container";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <FooterView />
    </>
  );
};

export default DefaultLayout;
