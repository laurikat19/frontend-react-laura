import { Button, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useProfesores } from "../hooks/profesores";

const initialFormState = {
  nombre: "",
  correo: "",
  telefono: "",
};

const ProfesorForm = ({ onSubmit, isEditing, initialValues }) => {
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (isEditing) {
      setFormState(initialValues);
    }
  }, [isEditing, initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState)
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
