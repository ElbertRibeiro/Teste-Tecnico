import ChatBot from 'react-simple-chatbot';

export default function Chat() {

  const steps = [
    {
      id: '1',
      message: 'Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso do seu nome.',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      placeholder: 'Nome e Sobrenome',
      trigger: '3',
    },
    {
      id: '3',
      message: 'Que satisfação, {previousValue}, agora que sei seu nome, qual a cidade e estado que você mora?',
      trigger: 'city',
    },
    {
      id: 'city',
      user: true,
      placeholder: 'Cidade',
      trigger: '5'
    },
    {
      id: '5',
      message: 'Me fala teu e-mail, por gentileza',
      trigger: 'email',
    },
    {
      id: 'email',
      user: true,
      placeholder: 'E-mail',
      trigger: '6'
    },
    {
      id: '6',
      message: 'Avalização',
      end: true
    },
  ];
  return (
    <div>
      <ChatBot steps={steps} />
    </div>
  );
}
