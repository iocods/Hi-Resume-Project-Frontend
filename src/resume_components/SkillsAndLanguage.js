import {React, useEffect, useContext} from "react";
import { TextField, Button } from "@mui/material";
import DataContext from "../context/DataContext";

const SkillsAndLanguage = ({setCurrentCategory, setCurrentIndex}) => {
  const {newSkill, setNewSkill, skills, setSkills, newLanguage, setNewLanguage, languages, setLanguages, addLanguage, addSkill, Navigate} = useContext(DataContext);
  useEffect(() => {
    setCurrentCategory("Skills and Language");
    setCurrentIndex(index => index = 4);
  }, [])
  return <form onSubmit={(e) => e.preventDefault()}>
  <div>
    <div>
      <h2>Skills</h2>
      <TextField
          required={true}
          style={{width: "90%", margin: 10}}
          type="text"
          label='Skills'
          inputProps={{style: {
            height: '8px'
          }}}
          name='skill'
          value={newSkill}
          color="primary"
          onChange={(e) => {
              setNewSkill(e.target.value);
          }}
      ></TextField>
      {skills && skills.map((skill, index) => <p key={index}>{skill}</p>)}
      <Button
          onClick={addSkill}
      >
          Add Skill.
      </Button>
    </div>
    <div>
      <h2>Languages</h2>
      <TextField
          required={true}
          style={{width: "90%", margin: 10}}
          label='Enter Language'
          inputProps={{style: {
            height: '8px'
          }}}
          name='language'
          value={newLanguage}
          color="primary"
          onChange={(e) => {
            setNewLanguage(e.target.value);
          }}
      ></TextField>
      {languages && languages.map((lang, index) => <p key={index}>{lang}</p>)}
      <Button
          onClick={addLanguage}
      >
          Add Language.
      </Button>
    </div>
    <div>
        <Button
          onClick={() => Navigate('/resume/workhistory', {replace: true})}>
          Prev
        </Button>
        <Button
          onClick={() => Navigate('/resume/reference', {replace: true})}
        > 
          Next
        </Button>
      </div>
 </div>
</form>;
};

export default SkillsAndLanguage;