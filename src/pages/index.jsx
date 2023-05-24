import styled from "styled-components";
import {SectionsContainer, Section} from 'react-fullpage';
import First from "components/main/First";
import Second from "components/main/Second";

const Container = styled.div`
  width: 100%;
  margin-top: -20px;
  @media (max-device-height:840px) {
        /* margin-top: -70px; */
    }
  padding: 0 25px;
`

const Scene = styled(Section)`
  width: 100%;
  height: 100vw;
`

export default function Main(){
  let options = {
    activeClass:          'active',
    anchors:              ['one', 'two'],
    arrowNavigation:      true,
    className:            'SectionContainer', 
    delay:                800,
    navigation:           false,
    scrollBar:            false,
    sectionClassName:     'Section',
    sectionPaddingTop:    '0',
    sectionPaddingBottom: '0',
    verticalAlign:        false 
  };

  return(
    <Container>
      <a style={{display:"none"}}href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=http%3A%2F%2Fdgu-bom.site&count_bg=%23FFB84E&title_bg=%23EC8E8E&icon=apacheairflow.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
      <SectionsContainer {...options}>
        <Scene>
          <First />
        </Scene>
        <Scene>
          <Second />
        </Scene>
    </SectionsContainer>
      
    </Container>
  )
}