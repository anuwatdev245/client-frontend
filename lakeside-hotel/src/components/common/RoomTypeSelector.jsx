import React, { useEffect, useState } from 'react'
import { getRoomType } from '../utils/ApiFunctions'



const RoomTypeSelector = ({handleRoomInputChange, newRoom}) => {
    const[roomTypes, setRoomTypes] = useState([""])
    const[ShowNewroomTypeInput, setShowNewroomTypeInput] = useState(false)
    const[newRoomType, setNewRoomType] = useState("")

    useEffect(() => {
      getRoomType().then((data) => {
        setRoomTypes(data)
      })
    }, [])


    const handleNewRoomTypeInputChange = (e) => {
      setNewRoomType(e.target.value)
    }

    const handleAddNewRoomType = () => {
      if (newRoomType !== "") {
        setRoomTypes([...roomTypes, newRoomType])
        setNewRoomType("")
        setShowNewroomTypeInput(false)

      }
    }


  return (
    <>

    {roomTypes.length > 0 && (
      <div>
        <select 
        name="roomType" 
        id="roomType" 
        value={newRoom.roomType}
        onChange={(e) => {
          if (e.target.value === "Add new") {
            setShowNewroomTypeInput(true)
          } else {
            handleRoomInputChange(e)
          }
        }}>

          <option value={""}> select a room type </option>
          <option value="Add New"> Add New </option>
          {roomTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}

        </select>
        {ShowNewroomTypeInput && (
          <div className='input-group'>
            <input
            className='form-control'
            type='text'
            placeholder='Enter a new room type'
            onChange={handleNewRoomTypeInputChange} /> 
            <button 
            className='btn btn-hotel' 
            type='button'
            onClick={handleAddNewRoomType}>
              Add
            </button>

          </div>
        )}
      </div>
    )}

    </>
  )
}

export default RoomTypeSelector