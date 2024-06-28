'use client'
import { useFormState } from 'react-dom';
import pageStyles from '@/app/page.module.css'
import styles from './add.module.css'
import Button from '@/components/Button';

import { postAlumno } from '@/app/actions';
import Link from 'next/link';

const initialState = {
  error: null,
  message: null
}

const AlumnoAddPage = () => {
  const [state, formData] = useFormState(postAlumno, initialState);
  console.log(state)
  return (
    <main className={pageStyles.main}>
      <h1 className={styles.title}>
        <Link href='/alumnos' className={styles.back_button}>
          {`<`}-
        </Link>
        Agregar Alumno
      </h1>
      <form action={formData} className={styles.form}>
        <h3>Nuevo Alumno</h3>
        <section className={styles.input_container}>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className={styles.input}
          />
          <label htmlFor="nombre" className={styles.label}>Nombre:</label>
        </section>
        <section className={styles.input_container}>
          <input
            type="number"
            id='matricula'
            name='matricula'
            required
            className={styles.input}
          />
          <label htmlFor="matricula" className={styles.label}>Matrícula:</label>
        </section>
        <section className={styles.input_container}>
          <input
            type="time"
            id='hora_entrada'
            name='hora_entrada'
            min='07:00'
            max='21:00'
            required
            className={styles.input}
          />
          <label htmlFor="hora_entrada" className={styles.label}>Hora de Entrada:</label>
        </section>
        <section className={styles.input_container}>
          <input
            type="time"
            id='hora_salida'
            name='hora_salida'
            min='07:00'
            max='21:00'
            required
            className={styles.input}
          />
          <label htmlFor="matricula" className={styles.label}>Hora de Salida:</label>
        </section>
        <Button>
          Agregar
        </Button>
      </form>
    </main>
  );
}

export default AlumnoAddPage;