import styled from 'styled-components'
import IDE from '../../assets/ide.png'

const LandingPage = () => {
  return (
    <NewLandingPageWrapper>
      <ImagesWrapper>
        <FirstImage src={IDE} alt="IDE icon 1" />
        <SecondImage src={IDE} alt="IDE icon 2" />
        <ThirdImage src={IDE} alt="IDE icon 3" />
      </ImagesWrapper>
      <LandingPageWrapper>
        <h1>Reactor</h1>
        <h2>Practice React interview questions</h2>
        <p>Use the navigation on the left hand side to practise different React interview questions. Those are meant to give junior developers a taster on what to expect during their first interviews.</p>
        <p>Reactor is still very much in development. Please do not be discouraged if you encounter bugs!</p>
      </LandingPageWrapper>
    </NewLandingPageWrapper>
  )
}

export default LandingPage

const NewLandingPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  /* width: 100%; */
  height: 100vh;
`

const ImagesWrapper = styled.div`
  min-width: 50%;
  margin-right: 20px;

  img {
    transition: 0.1s ease-in;
  }

  img:hover {
    transform: scale(1.05);
  }

`

const FirstImage = styled.img`
  position: absolute;
  top: 10%;
  max-height: 30vw;
  max-width: 30vw;
`

const SecondImage = styled.img`
  position: absolute;
  left: 10%;
  top: 30%;
  max-height: 30vw;
  max-width: 30vw;
`

const ThirdImage = styled.img`
  position: absolute;
  top: 50%;
  max-height: 30vw;
  max-width: 30vw;
`

const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px;
  overflow: scroll;

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
    font-weight: 300;
  }
`