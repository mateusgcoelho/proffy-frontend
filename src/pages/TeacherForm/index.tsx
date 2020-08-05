import React, { useState, FormEvent } from 'react';

import './styles.css';

import warningIcon from '../../assets/images/icons/warning.svg';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const TeacherForm: React.FC = () => {
  const history = useHistory()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  function addNewScheduleItem() {
      setScheduleItems([
        ...scheduleItems,
        { week_day: 0, from: '', to: '' }
      ])
  }

  function setScheduleItemsValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem;
    })

    setScheduleItems(updatedScheduleItems)
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault()

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      history.push('/')
    }).catch(() => {
      alert('Erro no cadastro!')
      history.push('/')
    })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição" />
    
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input label="Nome completo" reference="name" 
              value={name} 
              onChange={e => setName(e.target.value)} 
            />
            <p>{name}</p>
            <Input label="Avatar" reference="avatar" 
              value={avatar} 
              onChange={e => setAvatar(e.target.value)} 
            />
            <Input label="WhatsApp" reference="whatsapp" 
              value={whatsapp} 
              onChange={e => setWhatsapp(e.target.value)} 
            />
            <Input label="Biografia" reference="bio" 
              value={bio} 
              onChange={e => setBio(e.target.value)} 
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select 
              label="Matéria" 
              reference="subject"
              value={subject}
              onChange={ (e) => setSubject(e.target.value) }
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            <Input 
              label="Custo da sua hora por aula" 
              reference="cost" 
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo hórario
              </button>
            </legend>
          
            {scheduleItems.map((scheduleItem, index) => {
              return(
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    label="Dia da semana" 
                    reference="week_day"
                    onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sabado' },
                    ]}
                  />

                  <Input 
                    label="Das" 
                    reference="from" 
                    type="time" 
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    label="Até" 
                    reference="to" 
                    type="time" 
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}
                  />
                </div>
              )
            })}
            
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>

            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    
    </div>
  );
}

export default TeacherForm;