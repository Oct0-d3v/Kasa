import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import imgsrc1 from '../../assets/ImgSrc1.png'

function Home ({ logements }) {
  return (
    <div>
      <Banner title = "Chez vous, partout et ailleurs" image = {imgsrc1} />
      <Card logements={logements} />
    </div>
  )
}

export default Home