import { useEffect, useState } from "react";
import { api } from "../../common/services/backend";

const createAsignatura = (asignatura) => {
  return api.post('/asignatura/', asignatura)
    .then(response => response.data);
}

const readAsignaturas = () => {
  return api.get('/asignatura/')
    .then(response => response.data);
}

const updateAsignatura = (asignatura) => {
  return api.put(`/asignatura/${asignatura.id}/`, asignatura)
    .then(response => response.data);
}

const deleteAsignatura = (id) => {
  return api.delete(`/asignatura/${id}/`)
    .then(response => response.data);
}

export const useAsignaturas = () => {
  const [asignaturas, setAsignaturas] = useState([]);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    readAsignaturas()
      .then(asignaturas => {
        setAsignaturas(asignaturas);
      })
      .catch(error => {
        console.error(error);
      });
  }, [trigger]);


  const handleCreateAsignatura = (asignatura) => {
    createAsignatura(asignatura)
      .then(() => {
        setTrigger(trigger + 1);
      })
      .catch(error => {
        console.error(error);
      })
  };

  const handleUpdateAsignatura = (asignatura) => {
    updateAsignatura(asignatura)
      .then(() => {
        setTrigger(trigger + 1);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeleteAsignatura = (id) => {
    deleteAsignatura(id)
      .then(() => {
        setTrigger(trigger + 1);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return {
    asignaturas,
    handleCreateAsignatura,
    handleUpdateAsignatura,
    handleDeleteAsignatura
  }
};
