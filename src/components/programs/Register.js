import React, { useEffect } from 'react'
import M from 'materialize-css';
import programs from './ProgramsData'
import WinterPrograms from './ProgramsBySeason/WinterPrograms';
import SpringPrograms from './ProgramsBySeason/SpringPrograms';
import SummerPrograms from './ProgramsBySeason/SummerPrograms';
import FallPrograms from './ProgramsBySeason/FallPrograms';

const Register = () => {


    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {});
        const tabs = document.querySelectorAll('.tabs');
        M.Tabs.init(tabs, {});
    }, [])

    const fullYearPrograms = [];
    const summerPrograms = [];
    const fallPrograms = [];
    const winterPrograms = [];
    const springPrograms = [];
    
    programs.forEach(program => {
        if(program.season === 'Full Year'){
            fullYearPrograms.push(program);
        }else if(program.season === 'Summer'){
            summerPrograms.push(program);
        }else if(program.season === 'Fall'){
            fallPrograms.push(program);
        }else if(program.season === 'Winter'){
            winterPrograms.push(program);
        }else if(program.season === 'Spring'){
            springPrograms.push(program);
        }
    })

  return (
    <div id="register">
        <div className="container">
            <h3 className='center'>REGISTER FOR A PROGRAM</h3>
            <ul className="tabs">
                {/* <li className="tab col l6 m6 s6">
                    <a href="#register-winter-programs" id='register-winter-programs-tab'>WINTER PROGRAMS</a>
                </li> */}
                {/* <li className="tab col l6 m6 s6">
                    <a href="#register-spring-programs" id='register-spring-programs-tab'>SPRING PROGRAMS</a>
                </li> */}
                <li className="tab col l6 m6 s6">
                    <a href="#register-summer-programs" id='register-summer-programs-tab'>SUMMER PROGRAMS</a>
                </li>
                <li className="tab col l6 m6 s6">
                    <a href="#register-fall-programs" id='register-fall-programs-tab'>FALL PROGRAMS</a>
                </li>
                {/* <li className="tab col l6 m6 s6">
                    <a href="#register-full-year-programs" id='register-full-year-programs-tab'>FULL YEAR PROGRAMS</a>
                </li>  */}
            </ul>

            {/* <div className="col s12" id="register-winter-programs">
                <WinterPrograms winterPrograms={winterPrograms}/>
            </div> */}
            {/* <div className="col s12" id="register-spring-programs">
                <SpringPrograms springPrograms={springPrograms}/>
            </div> */}
            <div className="col s12" id="register-summer-programs">
                <SummerPrograms summerPrograms={summerPrograms}/>
            </div>
            <div className="col s12" id="register-fall-programs">
                <FallPrograms fallPrograms={fallPrograms}/>
            </div>
            {/* <div className="col s12" id="register-full-year-programs">

            </div> */}
        </div>
    </div>
  )
}

export default Register