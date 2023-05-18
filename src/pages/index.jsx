import styled from "styled-components";
import {SectionsContainer, Section} from 'react-fullpage';
import First from "components/main/First";
import Second from "components/main/Second";
import Third from "components/main/Third";

const Container = styled.div`
  width: 100%;
`

const Scene = styled(Section)`
  width: 100%;
`

export default function Main(){
  let options = {
    activeClass:          'active',
    anchors:              ['one', 'two', 'three'],
    arrowNavigation:      true,
    className:            'SectionContainer', 
    delay:                700,
    navigation:           false,
    scrollBar:            false,
    sectionClassName:     'Section',
    sectionPaddingTop:    '0',
    sectionPaddingBottom: '0',
    verticalAlign:        false 
  };

  return(
    <Container>
      <SectionsContainer {...options}>
        <Scene>
          <First />
        </Scene>
        <Scene>
          <Second />
        </Scene>
        <Scene>
          <Third />
        </Scene>
    </SectionsContainer>
      
    </Container>
  )
}