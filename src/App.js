
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

function App() {
  const dction = {
    name: "이효준",
    number: 1,
    favorList: ["치킨", "피자", "탕수육"]
  }
  return (
    <div>
      <Header />
      <Body {...dction} />
      <Footer />
    </div>
  );
}

export default App;
