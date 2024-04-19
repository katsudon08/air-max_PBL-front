"use client"

import { Paper } from "@/components/Paper"
import { SIZE } from "@/types/size"
import { AddButton } from "@/components/button/AddButton"
import { useState } from "react"
import { RoomDetail } from "@/components/modal-window/RoomDetail"

export default function Home() {
    interface Room {
        room: number;
        room_name: string;
        room_description: string;
    }

    const room: Room = {
        room: 1,
        room_name: "hoge",
        room_description: "example data",
    }

    const [rooms, setRooms] = useState<Room[]>([])
    const [isRoomDetailDisplay, setIsRoomDetailDisplay] = useState<boolean>(false)
    const closeIsRoomDetailDisplay = () => {
        setIsRoomDetailDisplay(false)
    }

    const handlePaperClick = () => {
        setIsRoomDetailDisplay(true)
    }

    const handleAddButtonClick = () => {
        setRooms(prevRooms => {
            return [...prevRooms, room]
        })
    }

    return (
        <main className="background-paper center">
            <div className="content-lg vertical-startline space-y-3 overflow-y-scroll scrollbar-hidden">
                {rooms.map((v: Room, i) => (
                    <Paper size={SIZE.FIT} handleClick={handlePaperClick} key={i}>
                        <div className="text-lg md:text-2xl">
                            {"Room Number: " + v.room} <br />
                            {"Room Name: " + v.room_name} <br />
                            {"Room Description: " + v.room_description} <br />
                        </div>
                    </Paper>
                ))}
            </div>
            <AddButton handleClick={handleAddButtonClick}/>
            {isRoomDetailDisplay &&
                <RoomDetail  handleClick={closeIsRoomDetailDisplay}>
                    example data
                </RoomDetail>
            }
        </main>
    );
}