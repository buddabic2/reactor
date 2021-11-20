import styled from 'styled-components'

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <h1>Reactor</h1>
      <h2>Practice React interview questions</h2>
      <p>Use the navigation on the left hand side to practise different React interview questions. Those are meant to give junior developers a taster on what to expect during their first interviews.</p>
      <p>Reactor is still very much in development. Please do not be discouraged if you encourage bugs!</p>
    </LandingPageWrapper>
  )
}

export default LandingPage

const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    color: #ff6ec7;
    font-size: 5rem;
    font-weight: 200;
    margin: 0 0 40px 0 ;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
    margin: 0 0 60px 0 ;
  }

  p {
    width: 60vw;
    font-weight: 300;
  }
`