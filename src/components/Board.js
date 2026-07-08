import React from 'react'

const Board = () => {
  return (
    <div id='board'>
        <div className="container">
            <h4 className='center'>BOARD OF DIRECTORS</h4>
            <table id='board-table'>
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>President</td>
                        <td>Kim Onek</td>
                    </tr>
                    <tr>
                        <td>Treasurer</td>
                        <td>Colette Galvez</td>
                    </tr>
                    <tr>
                        <td>Registrar</td>
                        <td>Duties being assumed by Kim Onek</td>
                    </tr>
                    <tr>
                        <td>Secretary</td>
                        <td>Jen O'Connor</td>
                    </tr>
                    <tr>
                        <td>Risk Management</td>
                        <td>Duties being assumed by Kyle Famiglietti/Dan Giovingo interim</td>
                    </tr>
                    <tr>
                        <td>DOC</td>
                        <td>Tim Graham</td>
                    </tr>
                    <tr>
                        <td>Advisory Board</td>
                        <td>Dave Beierle, Dan Giovingo, Mile Alestra, Kyle Famiglietti</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Board