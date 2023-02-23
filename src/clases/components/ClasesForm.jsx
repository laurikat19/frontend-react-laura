import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const initialFormState = {
  salon: "",
  horario: "",
  profesor: "",
  asignatura: "",
};

const ClaseForm = ({ onSubmit, asignaturas, profesores, isEditing, initialValues }) => {
  let [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (isEditing) {
      setFormState({
        id: initialValues.id,
        salon: initialValues.salon,
        horario: initialValues.horario,
        profesor: profesores.find((profesor) => profesor.id === initialValues.profesor),
        asignatura: asignaturas.find((asignatura) => asignatura.id === initialValues.asignatura),
      });
    }
  }, [isEditing, initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    formState.profesor = formState.profesor.id
    formState.asignatura = formState.asignatura.id
    onSubmit(formState);
    setFormState(initialFormState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSelect = (e) => {
    setFormState({
      ...formState,
      [e.name]: e.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            name="salon"
            label="Salon"
            autoComplete="on"
            value={formState.salon}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="horario"
            label="Horario"
            autoComplete="on"
            value={formState.horario}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disablePortal
            id="profesor"
            name="profesor"
            options={profesores}
            value={formState.profesor || null}
            getOptionLabel={(profesor) => profesor.nombre}
            onChange={(event, value) => handleChangeSelect({ name: 'profesor', value })}
            renderInput={(params) => <TextField {...params} label="Profesores" />}
            isOptionEqualToValue={(option, value) => option.value === value.value}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disablePortal
            id="asignatura"
            name="asignatura"
            options={asignaturas}
            value={formState.asignatura || null}
            getOptionLabel={(asignatura) => asignatura.nombre}
            onChange={(event, value) => handleChangeSelect({ name: 'asignatura', value })}
            renderInput={(params) => <TextField {...params} label="Asignaturas" />}
            isOptionEqualToValue={(option, value) => option.value === value.value}
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

export default ClaseForm;
