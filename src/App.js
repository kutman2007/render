
import './App.css';
import { Render } from './comp/Card';
import pic from './1png.jpg'
import pic2 from './2png.jpg'
import pic3 from './3png.jpg'
import pic4 from './4png.jpg'
import pic5 from './5png.jpg'
import pic6 from './6png.jpg'
import pic7 from './7png.jpg'
import pic8 from './8png.jpg'
import pic9 from './9png.jpg'

export const App=()=> {
  const data = [
    {
      title: "7:25 AM",
      img: pic,
      des: "Boston",
    },
    {
      title: "8:25 AM",
      img: pic2,
      des: "Madrid",
    },
    {
      title: "7:55 AM",
      img: pic3,
      des: "Boston",
    },
    {
      title: "7:25 AM",
      img: pic4,
      des: "Boston",
    },
    {
      title: "7:25 AM",
      img: pic5,
      des: "Boston",
    },
    {
      title: "7:25 AM",
      img: pic6,
      des: "Boston",
    },
    {
      title: "7:25 AM",
      img: pic7,
      des: "Boston",
    },
    {
      title: "7:25 AM",
      img: pic8,
      des: "Boston",
    },
    {
      title: "7:25 AM",
      img: pic9,
      des: "Boston",
    },
  ]
  return (
  <div className='App'>
  {
    data.map((el,id)=>{
    return<Render data = {el} />
    })
  }
    </div>
  );
}


