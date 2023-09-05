import React, {FC} from 'react'
import "./common.scss";
import { ITag } from '../../interface/todos';


const Tag: FC<ITag> = ({text, type}) => {
    return (
        <div className='tag'>
            <div className={`rect ${type}`}>{text}</div>
            {type == 'second' && <div className={`triangel ${type}`}></div>}
        </div>
    )
}

export default Tag