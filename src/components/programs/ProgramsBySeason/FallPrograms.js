import React from 'react'
import { v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';

const FallPrograms = ({fallPrograms}) => {

  return (
    <div id='fall-programs-list'>
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td><a href='https://system.gotsport.com/programs/6Z5613634?reg_role=player' className='register-program-name' target='_blank' rel='noreferrer'>Intramural</a></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default FallPrograms