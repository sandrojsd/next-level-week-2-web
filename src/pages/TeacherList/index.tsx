import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

export default function TeacherList() {
  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
      <form id="searh-teachers">
        <div className="input-block">
          <label htmlFor="subject">Matéria</label>
          <input type="text" id="subject"/>
        </div>
        <div className="input-block">
          <label htmlFor="week_day">Dia da Semana</label>
          <input type="text" id="week_day"/>
        </div>
        <div className="input-block">
          <label htmlFor="time">Hora</label>
          <input type="text" id="time"/>
        </div>
      </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}
