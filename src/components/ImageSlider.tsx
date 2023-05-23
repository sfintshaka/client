import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';


// const spanStyle = {
//     padding: '20px',
//     background: '#efefef',
//     color: '#808080'
//   }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
  }

  const slideImages = [
    {
      url: './assets/alysyed.webp',
      caption: 'alsyed'
    },
    {
      url: './assets/reception.webp',
      caption: 'Slide 2'
    },
    // {
    //   url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    //   caption: 'Slide 3'
    // },
  ];




function ImageSlider(): JSX.Element {
  return (
      <div className="slide-container">
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default ImageSlider