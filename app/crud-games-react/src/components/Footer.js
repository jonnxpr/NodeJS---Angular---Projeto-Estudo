import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3" style={{ position: "fixed", left: 0, bottom: 0, width: "100%" }}>
      <p>&copy; {new Date().getFullYear()} Meu Projeto. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;