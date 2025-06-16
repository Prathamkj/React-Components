import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
// importing the Navbar component
// COMPONENTS IN REACT
const App = () => {
  // for Card component of json data
  const users = [
  {
    "name": "Yuji Itadori",
    "anime": "Jujutsu Kaisen",
    "age": 15,
    "role": "Jujutsu Sorcerer",
    "image": "https://static.wikia.nocookie.net/deathbattle/images/7/7f/Portrait.yujiitadori.png/revision/latest?cb=20240317034925"
  },
  {
    "name": "Satoru Gojo",
    "anime": "Jujutsu Kaisen",
    "age": 28,
    "role": "Special Grade Sorcerer",
    "image": "https://howtoanime.com//admin/images/Content-4/93774.jpg"
  },
  {
    "name": "Megumi Fushiguro",
    "anime": "Jujutsu Kaisen",
    "age": 15,
    "role": "Jujutsu Sorcerer",
    "image": "https://s.yimg.com/ny/api/res/1.2/aI14HcCnEfn_zatu53Fv7A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://media.zenfs.com/en/comingsoon_net_477/e8ccfd3e2684e76a7d329dbdadb8627e"
  },
  {
    "name": "Tanjiro Kamado",
    "anime": "Demon Slayer",
    "age": 16,
    "role": "Demon Slayer",
    "image": "https://a.storyblok.com/f/178900/960x540/6e6bcda041/demon-slayer.jpg/m/filters:quality(95)format(webp)"
  },
  {
    "name": "Nezuko Kamado",
    "anime": "Demon Slayer",
    "age": 14,
    "role": "Demon",
    "image": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/09/nezuko-swordsmith.jpg"
  }
  
 
]
// ALL THE JSON DATA OF THE CARD COMPONENTS OF 10 USERS
// FOR EACH IN USER DATA
// user.forEach(function(e){
//   console.log();
  //  we can also user map here
// })


  return (
   <>
    {/* HERE WE JUST IMPORTED THE COMPONENT OF Navbar
    <Navbar />  AND WRITE ALL THE CODE OF NAVBAR IN THE Navbar.jsx FILE
    THIS IS HOW WE CAN USE COMPONENTS IN REACT
    */}
    <Navbar />
    <div className='p-8'>
      {users.map(function(e,idx){
        // return <h1>{e.name}</h1>
        // if we do thie then we get all the names
        // like this we return the card
        return <Card key={idx} username={e.name} age={e.age} role={e.role} photo={e.profile_photo} />
      })}
    </div>
    <Footer />
   </>
  )
}

export default App
