import { Button, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useProfesores } from "../hooks/profesores";

const initialFormState = {
  nombre: "",
  correo: "",
  telefono: "",
};

const ProfesorForm = ({ isEditing, initialValues }) => {
  const [formState, setFormState] = useState(initialFormState);
  const { handleCreateProfesor, handleUpdateProfesor } = useProfesores();

  useEffect(() => {
    if (isEditing) {
      setFormState(initialValues);
    }
  }, [isEditing, initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    isEditing ? update() : create()
    setFormState(initialFormState);
  };

  const create = () => {
    handleCreateProfesor(formState)
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const update = () => {
    handleUpdateProfesor(formState.id, formState)
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            name="nombre"
            label="Nombre"
            autoComplete="name"
            value={formState.nombre}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="telefono"
            label="Teléfono"
            autoComplete="tel"
            value={formState.telefono}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            name="correo"
            label="Correo"
            autoComplete="email"
            value={formState.correo}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" fullWidth>
            {isEditing ? "Actualizar" : "Crear"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProfesorForm;
