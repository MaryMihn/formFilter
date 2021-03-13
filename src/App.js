import React, {useState, useEffect} from 'react'
import Card from './card/Card'
// import Context from './context'

function App() {
  const [people, setPeople] = React.useState([])
  const[searchResult, setSearchResalt]= useState([])

  const[searchName, setSearchName] = useState('')

  const searchHandlerName =(searchName) =>{
    setSearchName(searchName)
    if(searchName !==""){
      const resName = people.filter(person=>{
        return person.name.toLowerCase().includes(searchName.toLowerCase())
      })
      setSearchResalt(resName)
    } else{
      setSearchResalt(people)
    }
  }

  const[searchLastname, setSearchLastname] = useState('')

  const searchHandlerLastname =(searchLastname) =>{
    setSearchLastname(searchLastname)
    if(searchLastname !==""){
      const resLastname = people.filter(person=>{
        return person.lastname.toLowerCase().includes(searchLastname.toLowerCase())
      })
      setSearchResalt(resLastname)
    } 
  }

  const[searchAge, setSearchAge] = useState('')

  const searchHandlerAge =(searchAge) =>{
    setSearchAge(searchAge)
    if(searchAge !==""){
      const resAge = people.filter(person=>{
        return person.age === +searchAge
      })
      setSearchResalt(resAge)
    } 
  }

  const[searchSex, setSearchSex] = useState('')

  const searchHandlerSex =(searchSex) =>{
    setSearchSex(searchSex)
    if(searchSex !==""){
      const resSex = people.filter(person=>{
        return person.sex === searchSex
      })
      setSearchResalt(resSex)
    } else{
      setSearchResalt(people)
    }
  }

  useEffect(()=>{
    fetch('https://venbest-test.herokuapp.com/.')
    .then(response => response.json())
    .then(people =>{setPeople(people)})
  }, [])

  return (
    // <Context.Provider value={{}}>
      <div >
        <Card 
        people={searchName.length <1 && 
          searchLastname.length<1 && 
          searchAge.length<1 &&
          searchSex.length<1 ? people : searchResult} 
        name={searchName} 
        searchName ={searchHandlerName}
        lastname={searchLastname} 
        searchLastname ={searchHandlerLastname}
        age={searchAge} 
        searchAge ={searchHandlerAge}
        sex={searchSex} 
        searchSex ={searchHandlerSex}
        />
      </div>
    // </Context.Provider>
  );
}

export default App;
