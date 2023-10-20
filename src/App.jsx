import { useState, useEffect } from 'react';
import styles from  './App.module.scss';
import ContentContainer from './components/ContentContainer/ContentContainer';
import Sidebar from './components/Sidebar/Sidebar';
import ThemeDark from './components/UI/Theme/ThemeDark';
import Theme from './components/UI/Theme/Theme';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Header from './components/UI/Header/Header';

function App() {

  const themes = {
    dark: {
      textColor: '#fff',
      accentColor: '#141519',
      btnColorSidebar: '#2C2D35',
      logoSrc: './assets/images/mCharacterLight.svg',
      borderColor: '#23242A'
    },

    light: {
      textColor: '#334657',
      accentColor: '#E6EBF3',
      btnColorSidebar: 'rgb(130, 155, 176)',
      logoSrc: './assets/images/mainCharacter.svg',
      borderColor: '#DFE3EC'
    }
  }


  const [popularMovies, setPopularMovies] = useState([]);
    
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(
                  'https://api.themoviedb.org/3/movie/popular?language=uk&page=1&region=ua',
                  {
                      method: 'GET',
                      headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzUwMGUxMjRjMWQ2ZTNiNmZiNzYxNzE3YjI0ZTgzYyIsInN1YiI6IjY1MjUwNGVkZmQ2MzAwMDBjNTY5ZjVjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mfFykW8_7LCAlj_I8xvgLmIqLKTMsSSYmBsHFMmHt1E'
                          
                      },
                  }
              );

              if (response.ok) {
                  const data = await response.json();
                  setPopularMovies(data.results);
              } else {
                  console.error('Error fetching data');
              }
          } catch (err) {
              console.error(err);
          }
      };

      fetchData();
  }, []);


  const [isDark, setIsDark] = useState(() => localStorage.getItem('isDarkMode') == "true" ? true : false);


  function isDarkSetter(item){
    setIsDark(item);
    localStorage.setItem('isDarkMode', item);
  }


  return (
    <div className={styles.appWrapper}>

      
      <Theme isActive={isDark} bgColor='#1A1B20' />
      <Theme isActive={!isDark} bgColor='#F6F8FF' />
      <ThemeDark isActive={isDark}/> 

      <div className={styles.app}>
        <Sidebar isDark={isDark} colors={ isDark ? themes.dark : themes.light } isDarkSet={isDarkSetter}/>

        <ContentContainer>
          <Header colors={ isDark ? themes.dark : themes.light }/>
          <HeroSlider data={popularMovies}/>
        </ContentContainer> 
      </div>
      
    </div>
  );
}

export default App;
