import { Room } from '@/types/room'
import { ModalWindow } from '../ModalWindow'
import { SIZE } from '@/types/size'
import { Slider } from '../slider/Slider'

export const RoomDetail = ({ data, handleClick }: { data: Room[], handleClick: () => void }) => {
    return (
        <ModalWindow size={SIZE.MEDIUM_SLIDER} handleClick={handleClick}>
            <Slider>
                {data.map((_, i) => (
                    <div className="content-full blue p-6 center" key={i}>
                        {(i + 1)}
                    </div>
                ))}
            </Slider>
        </ModalWindow>
    )
}
