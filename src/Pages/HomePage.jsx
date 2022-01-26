import React from 'react';
import ProjectBar from '../Components/ProjectBar';
import { ProjectList, ProjectRow } from './HomePage.styles';
import { Backdrop } from '@mui/material';

export class HomePage extends React.Component {
  state = {
    projects: [],
  };

  addProject = (data) => {
    const modifiedprojects = [...this.state.projects];
    console.log(this.state, 'STATE add proj', modifiedprojects);
    modifiedprojects.push({
      name: data.name,
      clocked: '00:11:00',
    });

    this.setState({
      projects: modifiedprojects,
    });
  };

  render() {
    const projects = this.state.projects;
    console.log(this.state, 'STATE');
    return (
      <div>
        <ProjectBar addProject={(data) => this.addProject(data)}></ProjectBar>
        <ProjectList>
          {projects.map((row, index) => {
            return (
              <ProjectRow>
                <div style={{ width: '30px' }}>{index + 1}.</div>
                <div style={{ width: '30px' }}>{row.name}</div>
                <div style={{ width: '30px' }}>{row.clocked}</div>
              </ProjectRow>
            );
          })}
        </ProjectList>
        {/* <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
          //   onClick={handleClose}
        >
          <div
            style={{ height: '100px', width: '100px', background: 'grey' }}
          ></div>
        </Backdrop> */}
      </div>
    );
  }
}

export default HomePage;
