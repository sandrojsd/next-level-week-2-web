import React from 'react'

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <div>
      <article className="teacher-item">
          <header>
            <img src="https://lh3.googleusercontent.com/a-/AOh14GjlLv18OemayorExPaQnqm1842JxnpjfFgmukajVA=s88-c-k-c0x00ffffff-no-rj-mo" alt="Alexsandro Trindade" />
            <div>
              <strong>Alexsandro Trindade</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus quis, vehicula ac nisi. 
            Quem num gosta di mim que vai caçá sua turmis! Si u mundo tá muito paradis? Toma um mé que o 
            mundo vai girarzis! Sapien in monti palavris qui num significa nadis i pareci latim.
          </p>

          <footer>
            <p>Preco/hora
              <strong>R$ 82,00</strong>
            </p>
            <button type="button">
              <img src={WhatsappIcon} alt="Whatsapp" />
              Entrar em contado
            </button>
          </footer>
        </article>
    </div>
  )
}

export default TeacherItem;
