import * as React from 'react';
import { Layout } from 'antd';
import { LayoutSidebar } from './Sidebar/LayoutSidebar';
import LayoutHeader from './Header/LayoutHeader';
import { ContentStyled } from './LayoutComponentStyled';
import { LayoutFooter } from './Footer/LayoutFooter';

type Props = {
  children: React.ReactNode;
}

export const MainWrapper: React.FC<Props> = (props) => (
  <Layout>
    <LayoutSidebar/>
    <Layout>
      <LayoutHeader/>
      <ContentStyled>
        {props.children}
      </ContentStyled>
      <LayoutFooter/>
    </Layout>
  </Layout>
);
