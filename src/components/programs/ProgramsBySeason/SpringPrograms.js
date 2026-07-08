import React from 'react'

const SpringPrograms = ({springPrograms}) => {

  return (
    <div id='spring-programs-list'>
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td><a href='https://system.gotsport.com/programs/680V59692?reg_role=player' className='register-program-name' target='_blank' rel='noreferrer'>Intramural</a></td>
                </tr>
                <tr>
                    <td><a href='https://system.gotsport.com/programs/9330048Y2?reg_role=player' className='register-program-name' target='_blank' rel='noreferrer'>Atlantic United Spring Pre Academy</a></td>
                </tr>
                {/* <tr>
                    <td><a href='https://system.gotsport.com/programs/89L933745?reg_role=player' className='register-program-name' target='_blank' rel='noreferrer'>Big Kickers Academy</a></td>
                </tr>
                <tr>
                    <td><a href='https://system.gotsport.com/programs/28C084525?reg_role=player' className='register-program-name' target='_blank' rel='noreferrer'>Little Kickers</a></td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}

export default SpringPrograms