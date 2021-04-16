import React, { useContext, useEffect, useState } from 'react'
import { API } from '../../API/APIHost'
import { AuthContext } from './AuthContext'
import { ProjectsContext } from './ProjectsContext'
export const ProjectsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState()

  const { user } = useContext(AuthContext);

  const createProject = (projectTitle, projectDescription) => {
    if (user) {
      API.post('/projects',
        {
          projectTitle,
          projectDescription
        },
        {
          headers: {
            Authorization: user
          }
        })
        .then(({ data }) => {
          setProjects([data, ...projects])
        })
        .catch(error => {
          console.log(error.response)
        })
    }

  }

  const editProject = (id, projectTitle, projectDescription) => {
    if (user) {
//optimistic Update
      const newProjects = projects.map((project) => {
        if (project._id === id) {
          return {
            ...project,
            projectTitle,
            projectDescription
          }
        } else {
          return project
        }
      });
      setProjects(newProjects)

      API.put(`/projects/${id}`,
        {
          projectTitle,
          projectDescription
        },
        {
          headers: {
            Authorization: user
          }
        })
        .then(({ status }) => {
          if (status === 200) {

            const newProjects = projects.map((project) => {

              if (project._id === id) {
                console.log('enter here')
                console.log(project)
                return {
                  ...project,
                  projectTitle,
                  projectDescription
                }
              } else {
                console.log('no es el projecto')
                return project
              }


            });
            setProjects(newProjects)
          }

        })
        .catch(error => {
          console.log(error.response)
          if(error){
            getProjects()
          }
        })
    }
  }

  const deleteProject = (id) => {
    if (user) {

      API.delete(`/projects/${id}`,
        {
          headers: {
            Authorization: user
          }
        })
        .then(({ status }) => {
          if (status === 200) {
            const newProjects = projects.filter((project) => project._id !== id)
            setProjects(newProjects)
          }
        })
        .catch(error => {
          if(error){
            getProjects()
          }
        })
    }
  }

  const getProjects = () => {
    API.get('/projects', {
      headers: {
        Authorization: user
      }
    })
      .then((response) => {
        setProjects(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  useEffect(() => {
    if (user) {
      getProjects()
    }
  }, [user]);

  return (
    <ProjectsContext.Provider value={{ projects, editProject, createProject, deleteProject }}>
      {children}
    </ProjectsContext.Provider>
  )
}
