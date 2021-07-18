import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer px-0 px-lg-3'>
      <Container fluid>
        <nav>
          <ul className='footer-menu'>
            <li>
              <a href='#pablo' onClick={(e) => e.preventDefault()}>
                Inicio
              </a>
            </li>
          </ul>
          <p className='copyright text-center'>
            © {new Date().getFullYear()}{' '}
            <a target='_blank' href='https://rodrigowebmaster.netlify.app/'>
              Rodrigo P. A
            </a>{' '}
            Desafio winter job
          </p>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
