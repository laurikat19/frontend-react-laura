import { useEffect, useState } from "react";
import { api } from "../../common/services/backend";

const createClase = (clase) => {
  return api.post('/clase/', clase)
    .then(response => response.data);
}

const readClases = () => {
  return api.get('/clase/')
    .then(response => response.data);
}

const updateClase = (id, clase) => {
  return api.put(`/clase/${id}/`, clase)
    .then(response => response.data);
}

const deleteClase = (id) => {
  return api.delete(`/clase/${id}/`)
    .then(response => response.data);
}

export const useClases = () => {
  const [clases, setClases] = useState([]);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    readClases()
      .then(clases => {
        setClases(clases);
      })
      .catch(error => {
        console.error(error);
      });
  }, [trigger]);


  const handleCreateClase = (clase) => {
    createClase(clase)
      .then(() => {
        setTrigger(trigger + 1);
      })
      .catch(error => {
        console.error(error);
      })
  };

  const handleUpdateClase = (clase) => {
    updateClase(clase.id, clase)
      .then(() => {
        setTrigger(trigger + 1);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeleteClase = (id) => {
    deleteClase(id)
      .then(() => {
        setTrigger(trigger + 1);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return {
    clases,
    handleCreateClase,
    handleUpdateClase,
    handleDeleteClase
  }
};
