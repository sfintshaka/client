
const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Replace the URL with your WhatsApp number or link
    window.location.href = 'https://api.whatsapp.com/send?phone=27784928817';
  };

  return (
    <div
      className="whatsapp-button"
      onClick={handleWhatsAppClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
    >
      <img className="whatsaap-button bg-inherit"
      src="/public/whatsapp.svg" // Replace with the correct path to your WhatsApp SVG file
      alt="whatsappIcon"
      height={35}
      width={40}
    />
   
    </div>
  );
};

export default WhatsApp;
