import './Productos.css'

export default function Productos() {
  return (
    <section className="productos-page">
      <h1>Productos Destacados</h1>
      <p className="productos-intro">
        Equipos y accesorios seleccionados para una conexión rápida y estable.
      </p>

      <div className="productos-grid">
        <article className="producto-card">
          <h2>Router Pro X</h2>
          <p>Alto rendimiento para hogares y pequeñas oficinas.</p>
        </article>

        <article className="producto-card">
          <h2>Switch Smart 8P</h2>
          <p>Conecta múltiples dispositivos con gestión eficiente de red.</p>
        </article>

        <article className="producto-card">
          <h2>Extensor WiFi Plus</h2>
          <p>Amplía la cobertura de señal en zonas con baja intensidad.</p>
        </article>
      </div>
    </section>
  )
}
