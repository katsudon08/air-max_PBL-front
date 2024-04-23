import { Room } from '@/types/room'
import { ModalWindow } from '../ModalWindow'
import { SIZE } from '@/types/size'
import AwesomeSlider from 'react-awesome-slider'
import "react-awesome-slider/dist/styles.css"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'


export const RoomDetail = ({ data, handleClick }: { data: Room[], handleClick: () => void }) => {
    return (
        <ModalWindow size={SIZE.MEDIUM} handleClick={handleClick}>
            <AwesomeSlider className="content-full" animation='cubeAnimation'>
                {data.map((_, i) => (
                    <div className="content-full blue p-6 center">
                        {(i+1)}
                    </div>
                ))}
            </AwesomeSlider>
        </ModalWindow>
    )
}
