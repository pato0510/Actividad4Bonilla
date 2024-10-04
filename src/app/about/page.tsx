import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sobre Nosotros</h1>
      <p>
        Somos una empresa especializada en ofrecer los servicios de superhéroes de clase mundial. 
        Nuestro objetivo es proporcionar héroes altamente capacitados para cualquier misión o emergencia, 
        ya sea para proteger ciudades por temporadas completas o para realizar trabajos específicos según las necesidades de nuestros clientes. 
        Arrienda a tu héroe favorito y garantiza seguridad y resultados excepcionales en todo momento.
      </p>
      <p>Arrienda superhéroes para:</p>
      <ul className={styles.serviceList}>
        <li>- Poder vengarte de esas personas que tanto deseas y te han hecho daño.</li>
        <li>- Poder protegerte, a ti o a tu familia durante eventos o temporadas específicas.</li>
        <li>- Poder ayudarte con tus tareas y otras cosas que necesites.</li>
        <li>  ¡Lo que se te ocurra!</li>
      </ul>

      {/* Agregar imagen */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/heroesAbout.jpg" // La ruta de la imagen en la carpeta public/images
          alt="Imagen de la página principal"
          width={900} // Ajusta el ancho deseado
          height={300} // Ajusta la altura deseada
          className={styles.image} // Aplica estilos si lo necesitas
        />
      </div>
    </div>
  );
}
