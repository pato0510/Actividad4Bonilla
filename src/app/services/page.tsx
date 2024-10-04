import Link from 'next/link';
import styles from './Service.module.css';

const services = [
  { id: '1', name: 'Arriendo de Super Heroe para tareas varias' },
  { id: '2', name: 'Arriendo para misión específica (o venganza)' },
  { id: '3', name: 'Arriendo cumpleaños' },
];

export default function Services():JSX.Element {
  return (
    <div className={styles.container}>
      <h1>Nuestros Servicios</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <Link href={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
