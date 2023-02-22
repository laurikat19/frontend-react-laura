import { useEffect, useState } from "react";
import { api } from "../../common/services/backend";

export const createProfesor = (profesor) => {
  return api.post('/profesor/', profesor)
    .then(response => response.data);
}

export const readProfesores = () => {
  return api.get('/profesor/')
    .then(response => response.data);
}

export const updateProfesor = (id, profesor) => {
  return api.put(`/profesor/${id}/`, profesor)
    .then(response => response.data);
}

export const deleteProfesor = (id) => {
  return api.delete(`/profesor/${id}/`)
    .then(response => response.data);
}

export const useProfesores = () => {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    readProfesores()
      .then(profesores => {
        setProfesores(profesores);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return { profesores, setProfesores };
};
