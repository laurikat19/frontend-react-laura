import { Button, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const initialFormState = {
  nombre: "",
  codigo: "",
};

const AsignaturaForm = ({ onSubmit, isEditing, initialValues }) => {
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (isEditing) {
      setFormState(initialValues);
    }
  }, [isEditing, initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    setFormState(initialFormState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TextField
            name="nombre"
            label="Nombre Asignatura"
            autoComplete="on"
            value={formState.nombre}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            name="codigo"
            label="Codigo"
            autoComplete="on"
            value={formState.codigo}
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

export default AsignaturaForm;
