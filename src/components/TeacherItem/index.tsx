import React from 'react'

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

export interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  function handleCreateConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  return (
      <article className="teacher-item">
          <header>
            <img src={teacher.avatar} alt={teacher.name} />
            <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.subject}</span>
            </div>
          </header>

          <p>
            {teacher.bio}
          </p>

          <footer>
            <p>Preco/hora
              <strong>R$ {teacher.cost}</strong>
            </p>
            <a onClick={handleCreateConnection} 
            href={`https://wa.me/${teacher.whatsapp}`} 
            type="button"
            target="_blank"
            >
              <img src={WhatsappIcon} alt="Whatsapp" />
              Entrar em contado
            </a>
          </footer>
        </article>
  )
}

export default TeacherItem;
