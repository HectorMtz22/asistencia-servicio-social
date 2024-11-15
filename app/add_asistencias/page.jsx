'use client'
import pageStyles from '@/app/page.module.css'
import Form from '@/components/Form/page';
import Input from '@/components/Input';
import ListOfAlumnos from '@/components/ListOfAlumnos';
import { useState } from 'react';
import { useFormState } from 'react-dom'
import { postNewDay } from '@/app/actions';

import styles from './page.module.css'
import Button from '@/components/Button';

const initialState = {
  error: null,
  message: null
}

const AddAlumnosPage = () => {
  const [state, formAction] = useFormState(postNewDay, initialState);
  const [day, setDay] = useState('');
  return (
    <main className={pageStyles.main}>
      <h1>Agregar asistencias</h1>
      <Form action={formAction}>
        <h2>Ingresa una fecha</h2>
        <Input
          type="date"
          min='2024-06-01'
          max='2024-06-30'
          title='Fecha'
          required
          onChange={(e) => setDay(e.target.value)}
        />
        <ListOfAlumnos lateral>
          <article className={styles.inputs}>
            <Input
              type="time"
              title="Inicio"
            />
            <Input
              type="time"
              title="Fin"
            />
          </article>
        </ListOfAlumnos>
        <Button>Guardar</Button>
      </Form>
    </main>
  )

}

export default AddAlumnosPage;