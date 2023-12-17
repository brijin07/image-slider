
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel ';



function App() {
  const images = [
    'https://www.newzealand.com/assets/Tourism-NZ/Auckland/98618569ff/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg',
    'https://www.newzealand.com/assets/Tourism-NZ/Auckland/98618569ff/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg',
    'https://a.storyblok.com/f/95452/4256x2832/83fe0c7da6/new-zealand-fiordland-national-park-lake-marian.jpg/m/1600x900',
  ];
  return (
    <div className="App">
     <Header/>
     
     <ImageCarousel images={images} />

     <Footer/>
    </div>
  );
}

export default App;
