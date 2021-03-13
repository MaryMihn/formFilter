import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import Element from './Element'

function Card(props) {
  const nameRef = useRef('')
  const lastnameRef = useRef('')
  const ageRef = useRef('')
  const sexRef =useRef('')

  const getSearchName =() =>{
    props.searchName(nameRef.current.value)
  }

  const getSearchLastname =() =>{
    props.searchLastname(lastnameRef.current.value)
  }

  const getSearchAge =() =>{
    props.searchAge(ageRef.current.value)
  }

  const getSearchSex =() =>{
    props.searchSex(sexRef.current.value)
  }
  
  return (
    <div>
        <div>
            Имя 
            <input type="text" 
            placeholder ="Имя" 
            ref = {nameRef} 
            value ={props.name} 
            onChange={getSearchName} />
        </div>
        <div>
            Фамилия <input type="text" ref ={lastnameRef} onChange={getSearchLastname} placeholder ="Фамилия"></input>
        </div>
        <div>
            Возраст <input type="text" ref ={ageRef} onChange={getSearchAge} placeholder ="Возраст"></input>
        </div>
        <div>Пол
            <input type="checkbox" ref ={sexRef} onChange={getSearchSex} value="m" name="Sex" id ='male' />
            <label htmlFor="male">M</label>
            <input type="checkbox" ref ={sexRef} onChange={getSearchSex} value="f" name="Sex" id="female"/>
            <label htmlFor="female">Ж</label><br />
         </div>

        {(props.people.length>0)? props.people.map((el, index)=>{
            return <Element el={el} key={index} />
        }): "нет пользователя с данным фильтром"}
    </div>
  );
}

Card.propTypes={
    people: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Card;