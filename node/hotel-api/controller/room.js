const roomService = require('../services/roomService')

//Create a Class to query the database
class RoomController {
    //create a Room
    async createRoom(req, res){
        const reqBody = req.body
        console.log(reqBody)

         //check for existing room
        const checkRoom = await roomService.fetchOne({ 
            name: reqBody.name
        })

        if(checkRoom) res.status(403).json({
            success: false,
            message: 'Room Already Exists'
        })

        //else create a room
        const newRoom = await roomService.create(reqBody)

        res.status(201).json({
            success: true,
            message: 'Room created Successfully',
            data: newRoom
        })
    }

    //update a Room
    async updateRoom (req, res){
        const roomId = req.params
        const updateData = req.body
        //check if room exits before updating
        const checkRoom = await roomService.fetchOne({
            _id : roomId
        })

        if(!checkRoom) res.status(403).json({
            success: false,
            message: 'Room to update not found'
        })

        //make the unique key consistent
        if(updateData.name){
            const checkRoomUpdate = await roomService.fetchOne({
                roomName: updateData.name.toLowerCase()
            })

            if(checkRoomUpdate._id.toString() !== checkRoomUpdate._id.toString()){
                res.status(403).json({
                    success: false,
                    message: 'Room name already exists'
                })

            }
        }

        //update room
        const updatedData = await roomService.update(roomId, updateData)
        res.status(200).json({
            success: true,
            message: 'Room updated successfully',
            data: updatedData 
        })
    }

    //delete a Room
    async deleteRoom (req, res){
        const roomId = req.params
        //check if room exits before updating
        const checkRoom = await roomService.fetchOne({
            _id: roomId
        })

        if(!checkRoom) res.status(403).json({
            success: false,
            message: 'Room to update not found'
        })

        //delete room
        const deletedRoom = await roomService.delete(roomId)

        res.status(200).json({
            success: true,
            message: 'Room deleted successfully',
            data: deletedRoom 
        })
    }


    //fetch a single Room
    async fetchOneRoom(req, res){
        const roomId = req.params.id
        //check if room exits before updating
        const checkRoom = await roomService.fetchOne({
            _id: roomId
        })

        if(!checkRoom) res.status(403).json({
            success: false,
            message: 'Room to fetch not found'
        })

        res.status(200).json({
            success: true,
            message: 'Room fetched successfully',
            data: checkRoom 
        })
    }

    //Fetch all Rooms
    async fetchAllRoom(req, res){
        const fetchedBooks = await roomService.fetch({ })

        res.status(200).json({
            success: true,
            message: 'Rooms fetched successfully',
            data: fetchedBooks 
        })
    }
}

//export the module
module.exports = new RoomController()