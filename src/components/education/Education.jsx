import react from 'react';
import './Education.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import calender from '../../assets/calender.jpg'

const Education = () => {
    return (
      <div id="education" className="education">
        <div className="education-title">
          <h1>My Education</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="education-sections">
          <div id="m1" className="education-matric">
            <div className="m3">
              <img src={calender} alt="" width={30} />
              <h3 id="m2">2019-2021</h3>
            </div>
            <p>10th Degree</p>
            <p>
              I have passed the Matriculation(10th) Examination of H.P Board
              from GOVT. SEN. SEC. SCHOOL Kot-Beja(School-Code:2089)
              District-Solan Tehsil-Kasauli and got First Division with{" "}
              <b>80.4%</b>
              marks.
            </p>
          </div>
          <div id="m1" className="education-plus">
            <div className="m3">
              <img src={calender} alt="" width={30} />
              <h3 id="m2">2019-2021</h3>
            </div>
            <p>12th Degree</p>
            <p>
              I have passed the Matriculation(12th) Examination of H.P Board
              from GOVT. SEN. SEC. SCHOOL Kot-Beja(School-Code:2089)
              District-Solan Tehsil-Kasauli and got First Division with{" "}
              <b>80.2%</b>
              marks.
            </p>
          </div>
          <div id="m1" className="education-graduation">
            <div className="m3">
              <img src={calender} alt="" width={30} />
              <h3 id="m2">2019-2021</h3>
            </div>
            <p>Bachelor Of Computer Application</p>
            <p>
              Currently i am pursuing my graduation from Institute of Chartered
              Financial Analysts of India(ICFAI) University H.P ,my current CGPA{" "}
              <b>9.4</b>
            </p>
          </div>
          <div className="education-exce"></div>
        </div>
      </div>
    );
}
export default Education;