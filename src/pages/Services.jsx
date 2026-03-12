import './Services.css'

export default function Services() {
  return (
    <section className="services-page">
      <h1>Nuestros Servicios</h1>
      <p className="services-intro">
        Soluciones pensadas para ayudarte a crecer con tecnología confiable.
      </p>

      <div className="services-grid">
        <article className="service-card">
          <h2>Instalación</h2>
          <p>Configuramos tu red y tus equipos para que todo funcione desde el primer día.</p>
        </article>

        <article className="service-card">
          <h2>Mantenimiento</h2>
          <p>Revisiones periódicas y soporte preventivo para mantener un rendimiento estable.</p>
        </article>

        <article className="service-card">
          <h2>Soporte Técnico</h2>
          <p>Atención rápida ante incidencias para reducir tiempos de inactividad.</p>
        </article>
      </div>
    </section>
  )
}
