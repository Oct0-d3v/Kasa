
import './Banner.scss'

function Banner ({image,title}) {
    let divTitle;
    if (title) {
      divTitle = <h1 className="centered">{title}</h1>
    }
    return  (
        <div className="Banner">
          <img src={image} alt="Image de la bannière" className="ImgBanner" />
          {divTitle}
        </div>
)
}

export default Banner