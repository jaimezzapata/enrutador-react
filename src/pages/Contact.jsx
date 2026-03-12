import './Contact.css'

export default function Contact() {
  return (
    <section className="contact-page">
      <h1>Contacto</h1>
      <p className="contact-intro">Estamos listos para ayudarte con cualquier consulta.</p>

      <div className="contact-layout">
        <article className="contact-card">
          <h2>Dirección</h2>
          <p>Av. Principal 123, Ciudad</p>
        </article>

        <article className="contact-card">
          <h2>Teléfono</h2>
          <p>+57 300 000 0000</p>
        </article>

        <article className="contact-card">
          <h2>Correo</h2>
          <p>hola@enrutador.com</p>
        </article>
      </div>
    </section>
  )
}
