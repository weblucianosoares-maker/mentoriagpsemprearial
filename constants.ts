import { FaqItem, PillarItem, DeliverableItem, TestimonialItem } from './types';

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Para quem é o GPS?",
    answer: "Para empresários que trabalham demais e veem pouco a cor do dinheiro. Se você se sente escravo do seu próprio negócio, é para você."
  },
  {
    question: "As aulas ficam gravadas?",
    answer: "Sim! Se você não puder estar ao vivo, assiste depois. Mas o ouro está em estar lá comigo para tirar sua dúvida."
  },
  {
    question: "Eu vou conseguir falar com o Luciano?",
    answer: "Sim. Esse é o objetivo. Eu vou segurar na sua mão. Teremos momentos para você abrir o microfone e me contar seu problema."
  },
  {
    question: "Estou sem dinheiro, devo entrar?",
    answer: "É exatamente por estar sem dinheiro que você precisa entrar. Se continuar fazendo o que faz hoje, mês que vem estará pior. O GPS é para estancar o sangramento."
  }
];

export const PILLARS: PillarItem[] = [
  {
    title: "VOU TE OUVIR",
    description: "Encontros ao vivo onde você fala: 'Luciano, meu funcionário fez isso. Como resolvo?' e eu te dou a solução.",
    iconName: 'Users'
  },
  {
    title: "SEM TEORIA CHATA",
    description: "Nada de aulas longas que dão sono. É direto ao ponto: 'Faz assim, assim e assado'.",
    iconName: 'Map'
  },
  {
    title: "SEGURANÇA TOTAL",
    description: "Acabou o desespero de tomar decisão difícil sozinho. Agora você tem um conselheiro experiente.",
    iconName: 'Shield'
  },
  {
    title: "PLANO DE AÇÃO",
    description: "Vou te ensinar a fazer dinheiro entrar no caixa ainda esse mês para pagar as contas.",
    iconName: 'Banknote'
  }
];

export const DELIVERABLES: DeliverableItem[] = [
  {
    title: "Vamos organizar a bagunça",
    description: "Você vai parar de misturar o dinheiro da empresa com o de casa. Simples e rápido.",
    iconName: 'Briefcase'
  },
  {
    title: "Vamos vender dinheiro rápido",
    description: "Vou te ensinar estratégias para trazer caixa rápido e pagar os incêndios.",
    iconName: 'Banknote'
  },
  {
    title: "Vamos criar sua rotina",
    description: "Você vai ter hora para trabalhar e hora para descansar. Chega de ser escravo da empresa.",
    iconName: 'Calendar'
  }
];

export const PAIN_POINTS = [
  "Você vende o almoço para comprar a janta?",
  "Fica desesperado quando chega o dia do pagamento dos funcionários ou fornecedores?",
  "Sente que se você ficar doente um dia, a empresa para e você quebra?",
  "Já comprou cursinho de internet, achou complicado demais e desistiu?"
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Ricardo Mendes",
    role: "Dono de Construtora",
    content: "Eu estava quase fechando as portas. O Luciano me mostrou onde estava vazando dinheiro. Em 2 meses, paguei as dívidas.",
    avatarInitials: "RM"
  },
  {
    name: "Fernanda Lopes",
    role: "Loja de Roupas",
    content: "Eu me sentia muito sozinha. Ter o Luciano para perguntar 'o que eu faço agora?' me deu a paz que eu não tinha há anos.",
    avatarInitials: "FL"
  },
  {
    name: "Carlos Eduardo",
    role: "Prestador de Serviços",
    content: "Não é curso, é salvação. A planilha dele é simples, qualquer um consegue usar. Mudou minha vida.",
    avatarInitials: "CE"
  }
];