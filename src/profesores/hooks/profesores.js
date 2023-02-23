import { useEffect, useState } from "react";
import { api } from "../../common/services/backend";

const createProfesor = (profesor) => {
  return api.post('/profesor/', profesor)
    .then(response => response.data);
}

const readProfesores = () => {
  return api.get('/profesor/')
    .then(response => response.data);
}

const updateProfesor = (profesor) => {
  return api.put(`/profesor/${profesor.id}/`, profesor)
    .then(response => response.data);
}

const deleteProfesor = (id) => {
  return api.delete(`/profesor/${id}/`)
    .then(response => response.data);
}

export const useProfesores = () => {
  const [profesores, setProfesores] = useState([]);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    readProfesores()
      .then(profesores => {
        setProfesores(profesores);
      })
      .catch(error => {
        console.error(error);
      });
  }, [trigger]);


  const handleCreateProfesor = (profesor) => {
    createProfesor(profesor)
      .then(() => {
        setTrigger(trigger + 1);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleUpdateProfesor = (profesor) => {
    updateProfesor(profesor)
      .then(() => {
        setTrigger(trigger + 1);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeleteProfesor = (id) => {
    deleteProfesor(id)
      .then(() => {
        setTrigger(trigger + 1);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return {
    profesores,
    handleCreateProfesor,
    handleUpdateProfesor,
    handleDeleteProfesor
  }
};
