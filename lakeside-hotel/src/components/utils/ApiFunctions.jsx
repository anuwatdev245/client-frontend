import axios from "axios"



export const api = axios.create({
    baseURL :"http://localhost:9192"
})

/*This function adds a new room to the database*/
export async function addRoom(photo, roomType, roomPrice) {
    const fromData = new FormData()
    fromData.append("photo", photo)
    fromData.append("roomType", roomType)
    fromData.append("roomPrice", roomPrice)

    const response = await api.post("rooms/add/new-room", fromData)
    if (response.status === 201) {
        return true
    }
    else {
        return false
    }
}

/* This function get all room types from thee database */
export async function getRoomType() {
    try {
        const response = await api.get("rooms/room-types")
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}