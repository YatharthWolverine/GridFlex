import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from "styled-components";
const Box=styled.div`
width:40rem;
margin-left:20rem;
margin-top:5rem;
`;
const TabsDemo= () => {
  return(
      <Box>
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
  </Box>
);
}
export default TabsDemo