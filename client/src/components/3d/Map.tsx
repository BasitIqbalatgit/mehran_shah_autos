export default function Map() {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden relative">
      <div className="absolute inset-0 bg-secondary-light/20 z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent text-5xl animate-bounce z-20 pointer-events-none">
        <i className="fas fa-map-marker-alt"></i>
      </div>
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3803876303145!2d67.08950007558702!3d24.882996544698015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1f293f7725%3A0x21283cf3fdc3dd5e!2sBlock%207%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1705938672197!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mehran Shah Autos Location"
        className="z-0"
      ></iframe>
    </div>
  );
}