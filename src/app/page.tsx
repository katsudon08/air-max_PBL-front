"use client"

import { Paper } from "@/components/Paper"
import { SIZE } from "@/types/size"
import { AddButton as CircleAddButton } from "@/components/button/circle/AddButton"
import { AddButton as RectangleAddButton } from "@/components/button/rectangle/AddButton"
import { useState } from "react"
import { RoomDetail } from "@/components/modal-window/RoomDetail"
import { RoomCreate } from "@/components/modal-window/RoomCreate"
import { TextField } from "@/components/input/TextField"

export default function Home() {
    interface Room {
        room_name: string;
        room_id: string;
        room_description: string;
    }

    const [rooms, setRooms] = useState<Room[]>([])
    const [roomName, setRoomName] = useState<string>("")
    const [roomID, setRoomID] = useState<string>("")
    const [roomDescription, setRoomDescription] = useState<string>("")
    const setTextName = (text: string) => {
        setRoomName(text)
    }
    const setTextID = (text: string) => {
        setRoomID(text)
    }
    const setTextDescription = (text: string) => {
        setRoomDescription(text)
    }

    const resetRoomParams = () => {
        setRoomName("")
        setRoomID("")
        setRoomDescription("")
    }

    const [isRoomDetailDisplay, setIsRoomDetailDisplay] = useState<boolean>(false)
    const [isRoomCreateDisplay, setIsRoomCreateDisplay] = useState<boolean>(false)
    const closeIsRoomDetailDisplay = () => {
        setIsRoomDetailDisplay(false)
    }
    const closeIsRoomCreateDisplay = () => {
        setIsRoomCreateDisplay(false)
    }

    const handlePaperClick = () => {
        setIsRoomDetailDisplay(true)
    }

    const handleRectangleAddButtonClick = () => {
        const room: Room = {
            room_name: roomName,
            room_id: roomID,
            room_description: roomDescription,
        }

        setRooms(prevRooms => {
            return [...prevRooms, room]
        })

        resetRoomParams()
        setIsRoomCreateDisplay(false)
    }

    const handleCircleAddButtonClick = () => {
        setIsRoomCreateDisplay(true)
    }

    return (
        <main className="background-paper center">
            <div className="content-lg vertical-startline space-y-3 overflow-y-scroll scrollbar-hidden">
                {rooms.map((v: Room, i) => (
                    <Paper size={SIZE.FIT} handleClick={handlePaperClick} key={i}>
                        <div className="text-lg md:text-2xl">
                            {"Room Number: " + (i + 1)} <br />
                            {"Room Name: " + v.room_name} <br />
                            {"Room Description: " + v.room_description} <br />
                        </div>
                    </Paper>
                ))}
            </div>
            <CircleAddButton handleClick={handleCircleAddButtonClick} />
            {isRoomDetailDisplay &&
                <RoomDetail handleClick={closeIsRoomDetailDisplay}>
                    example data
                </RoomDetail>
            }
            {isRoomCreateDisplay &&
                <RoomCreate handleClick={closeIsRoomCreateDisplay}>
                    <div className="content-full between-vertical">
                        <TextField value={roomName} placeholder="Room Name" handleClick={setTextName} />
                        <TextField value={roomID} placeholder="Room ID" handleClick={setTextID} />
                        <TextField value={roomDescription} placeholder="Room Description" handleClick={setTextDescription} />
                        <RectangleAddButton handleClick={handleRectangleAddButtonClick} />
                    </div>
                </RoomCreate>
            }
        </main>
    );
}