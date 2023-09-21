import './App.css'
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import ArticleCard from './components/ArticleCard/ArticleCard';
import CardPhotoWithTitle from './components/CardPhotoWithTitle/CardPhotoWithTitle'
import Card from './components/Card/Card';

function App() {


  return (
    <>
      <Hero />

      <Section id='QuienSoy' title='' contenedor='container-1'>
        <ArticleCard />
      </Section>

      <Section id='Servicios' title='Servicios' contenedor='container-2'>
        <Card />
        <Card />
        <Card />
        <Card />
      </Section>

      <Section id='Portafolio' title='Portafolio' contenedor='container-4'>
        <CardPhotoWithTitle
          title='Rosalavanda'
          backgroundImage='./src/assets/placeholder.webp'
          hyperlink='https://rosalavanda.com.mx'
        />
        <CardPhotoWithTitle
          title='BEC Arquitectos'
          backgroundImage='./src/assets/placeholder.webp'
          hyperlink='https://arqbec.com'
        />
        <CardPhotoWithTitle
          title='Fabiola Beltran - Skin Care'
          backgroundImage='./src/assets/placeholder.webp'
          hyperlink='https://fabiolabeltran.dspwebstudio.com'
        />
        <CardPhotoWithTitle
          title='EquityClaims Lux'
          backgroundImage='./src/assets/placeholder.webp'
          hyperlink='https://equityclaimslux.com'
        />
        <CardPhotoWithTitle
          title='EquityClaims Italia'
          backgroundImage='./src/assets/placeholder.webp'
          hyperlink='https://equityclaimsitalia.com'
        />
        <CardPhotoWithTitle
          title='Siara Eventos'
          backgroundImage='./src/assets/placeholder.webp'
          hyperlink='https://siaraeventos.com'
        />
        <CardPhotoWithTitle
          title='Pasiones del Alma'
          backgroundImage='./src/assets/placeholder.webp'
          hyperlink='https://mezcalpasiones.com'
        />
      </Section>
    </>
  )
}

export default App;