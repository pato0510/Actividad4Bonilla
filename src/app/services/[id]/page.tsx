"use client";  

import { useParams, useRouter } from 'next/navigation';  
import styles from './serviceDetail.module.css';

const serviceDetails = {
  '1': {
    name: 'Arriendo de Super Heroe para tareas varias!!',
    description: 'Puedes arrendar un Super heroe para tareas básicas diarias, esto tiene un costo de 90 USD por día',
  },
  '2': {
    name: 'Arriendo para misión específica (o venganza)',
    description: 'Puedes arrendar un Super heroe para poder realizar una misión difícil o vengarte de alguien, esto tiene un costo de 450 USD independiente lo que dure la misión',
  },
  '3': {
    name: 'Arriendo cumpleaños',
    description: 'Arrienda un super heroe para entretenimiento!! Tiene un costo de 85 USD por hora (Incluye Show)',
  },
};

export default function ServiceDetail(): JSX.Element {
  const { id } = useParams();  // Usamos useParams para obtener el ID de la ruta
  const router = useRouter();   // Usamos useRouter de next/navigation para la navegación

  // Si el id no está disponible, muestra un mensaje de carga
  if (!id) {
    return <p>Cargando...</p>;
  }

  const service = serviceDetails[id as keyof typeof serviceDetails];

  if (!service) {
    return <p>Servicio {id} no encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{service.name}</h1>
      <p>{service.description}</p>
      <button className={styles.button} onClick={() => router.back()}>
        Volver a Servicios
      </button>
    </div>
  );
}
