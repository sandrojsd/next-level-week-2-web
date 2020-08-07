import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'

import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

export default function TeacherForm() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    {week_day: 0, from: '', to: ''},
  ])
  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {week_day: 0, from: '', to: ''}
    ]);
  }

  function setSchaduleItemValue(position: number, field: string, value: string){
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        if(field === 'week_day') Number(value)
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });
    setScheduleItems(updateScheduleItems)
  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault();
    
    api.post('classes', {
      name, 
      avatar, 
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(() => {
      alert('Cadastro realizado com sucesso')
    }).catch(() => {
      alert('Erro no cadastro')
    })

    
  }


  return (
    <div id="page-teacher-form">
    <PageHeader 
      title="Que bom você dar aulas."
      description="O primeiro passo é preencher este formulário de inscrição"
     />

     <main>
       <form onSubmit={handleCreateClass}>        
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome Completo" value={name} onChange={(e) => {setName(e.target.value)}} />
          <Input name="avatar" label="Avatar(url)" value={avatar} onChange={(e) => {setAvatar(e.target.value)}} />
          <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => {setWhatsapp(e.target.value)}} />
          <TextArea name="bio" label="Biografia" value={bio} onChange={(e) => {setBio(e.target.value)}} />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select 
          name="subject"
          label="Matéria" 
          value={subject}
          onChange={(e) => { setSubject(e.target.value)}}
          options={[
            { value: 'Artes', label: 'Artes'},
            { value: 'Biologia', label: 'Biologia'},
            { value: 'Ciências', label: 'Ciências'},
            { value: 'Educação Física', label: 'Educação Física'},
            { value: 'Geografia', label: 'Geografia'},
            { value: 'História', label: 'História'},
            { value: 'Matemática', label: 'Matemática'},
            { value: 'Portugês', label: 'Portugês'},
            { value: 'Química', label: 'Química'},
          ]} />
          <Input 
          name="cost" 
          label="Custo da sua hora por aula"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Horários Disponíveis <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button></legend>

          {scheduleItems.map((scheduleItem, index) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
              <Select 
              name="week_day"
              label="Dia da semana" 
              value={scheduleItem.week_day}
              onChange={e => setSchaduleItemValue(index, 'week_day', e.target.value)}
              options={[
                { value: '0', label: 'Domingo'},
                { value: '1', label: 'Segunda-feira'},
                { value: '2', label: 'Terça-feira'},
                { value: '3', label: 'Quarta-feira'},
                { value: '4', label: 'Quinta-feira'},
                { value: '5', label: 'Sexta-feira'},
                { value: '6', label: 'Sábado'},
              ]} />
              <Input 
              name="from" 
              label="Das" 
              type="time"
              value={scheduleItem.from}
              onChange={e => setSchaduleItemValue(index, 'from', e.target.value)}
              />
              <Input 
              name="to" 
              label="Até" 
              type="time"
              value={scheduleItem.to} 
              onChange={e => setSchaduleItemValue(index, 'to', e.target.value)} />
              </div>
            )
          })}
          
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante!<br />
            Prencha todos os dado
          </p>
          <button type="submit">
            Salvar cadastro
          </button>
        </footer>
       </form>
     </main>
  </div>
  )
}
