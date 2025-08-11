import React from "react";
import styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal } from "react-icons/fa";
import { SiMercadopago, SiPagseguro } from "react-icons/si";
import { PiBarcodeThin } from "react-icons/pi";
import { BsShieldLockFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <h3>Loja Principal</h3>
          <p>Loja online 1 | Campo Limpo - SP</p>
          <p>Contato: (11) 91049-0319</p>
          <p>Loja online 2 | Araçatuba - SP</p>
        </div>

        <div className={styles.column}>
          <h3>Detalhes</h3>
          <p>Nossa História</p>
          <p>Contato</p>
          <p>Envios e Devoluções</p>
          <p>Política da Loja</p>
          <p>FAQ</p>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.social}>
          <h4>Junte-se a nós!</h4>
          <div className={styles.icons}>
            <FaFacebook />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        <div className={styles.companyInfo}>
          <p><strong>ATA BRONZE DISTRIBUIDORA -</strong></p>
          <p>CNPJ: 52.425.495/0001-02</p>
          <p>atabronzesp@gmail.com</p>
          <p>Telefone: (11) 91049-0319</p>
        </div>

        <div className={styles.security}>
          <BsShieldLockFill size={20} />
          <h4>Segurança</h4>
          <p>Ambiente 100% Seguro.</p>
          <p>Sua Informação é Protegida</p>
          <p>Pela Criptografia SSL 256-Bit.</p>
        </div>

        <div className={styles.payments}>
          <h4>Métodos de Pagamentos Aceitos</h4>
          <div className={styles.paymentIcons}>
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <PiBarcodeThin />
            <SiMercadopago />
            <FaPaypal />
            <SiPagseguro />
          </div>
        </div>
      </div>
    </footer>
  );
}

