export interface Help {
  arr: HelpData[];
}

export interface HelpData {
  helpId: number;
  helpHeader: string;
  optionsHeader: string[];
  optionsText: HelpText[];
}

export interface HelpOptions {
  optionsHeader: string[];
}

export interface HelpText {
  textId: number;
  textHeader: string;
  textDis: string[];
}

export const questionArr: any = [
  {
    id: 1,
    question: "Coronavirus: Noticias sobre el CoVID19",
  },
  {
    id: 2,
    question: "Preguntas frecuentes",
  },
];

export const resArr: any = [
  {
    questionId: 1,
    res: "Últimas noticias sobre los espectaculos",
    resOptions: [
      "Última actualización 25/08 Algunos envíos se están viendo afectados como consecuencia del coronavirus. Debajo detallamos la lista de regiones afectadas. Si la situación de tu país no se encuentra detallada debajo creemos que las entregas no se están viendo afectadas, sin embargo, te aconsejamos que compruebes con tu servicio postal local y que preveas un ligero retraso sobre los tiempos habituales de entrega. Nuestro servicio de atención al cliente está recibiendo un volumen muy alto de contactos por lo que te pedimos disculpas su no hemos podido contestar tu petición, lo haremos lo más rápido que nos sea posible. ",
    ],
  },
];

export const helpArr: any = [
  {
    helpId: 1,
    helpHeader: "Coronavirus: Noticias sobre el CoVID19",
    optionsHeader: ["Últimas noticias sobre los espectaculos"],
    optionsText: [
      {
        textId: 1,
        textHeader:
          "Última actualización 25/08 Algunos envíos se están viendo afectados como consecuencia del coronavirus. Debajo detallamos la lista de regiones afectadas. Si la situación de tu país no se encuentra detallada debajo creemos que las entregas no se están viendo afectadas, sin embargo, te aconsejamos que compruebes con tu servicio postal local y que preveas un ligero retraso sobre los tiempos habituales de entrega. Nuestro servicio de atención al cliente está recibiendo un volumen muy alto de contactos por lo que te pedimos disculpas su no hemos podido contestar tu petición, lo haremos lo más rápido que nos sea posible. ",
        textDis: [
          "Argentina",
          "Solo aceptamos espectaculos que esten conformes a la ley 24.055 y en caso particular, que esten conformes con las leyes y reglamentaciones vigentes de cada jurisdicción",
        ],
      },
    ],
  },
  {
    helpId: 2,
    helpHeader: "Preguntas frecuentes",
    optionsHeader: [
      "Espectaculos en Argentina: ¿En que me afecta la ley aprobada en Septiembre de 2020?",
      "Más preguntas frecuentes",
      "¿Cómo los contacto",
      "Qué formas de pago aceptan",
      "Impuesto sobre Bienes y Servicios (GST) en Uruguay",
      "¿En qué paises operamos?",
    ],
    optionsText: [
      {
        textId: 1,
        textHeader: "",
        textDis: [
          "En estos momentos, los espectaculos en Argentina no están siendo afectados por esta nueva restricción aprobada por el gobierno. Estamos continuamente monitorizando la situación por si se diera algún cambio.",
        ],
      },
      {
        textId: 2,
        textHeader: ["¿Cuánto es el costo de comisión"],
        textDis: [
          "Con gusto ofrecemos a nuestros clientes el servicio gratutio en todos los espectaculos, independientemente de su valor.",
        ],
      },
      {
        textId: 3,
        textHeader: "¿Puedo cancelar y devolver mi pedido?",
        textDis: [
          "Claro, puedes cancelar tu pedido dentro de los 30 días después de haberlo recibido completando el formulario de cancelación en línea.",
        ],
      },
      {
        textId: 4,
        textHeader: "¿Qué opciones de pago tengo?",
        textDis: [
          "Aceptamos los siguientes métodos de pago: VISA, MasterCard, AMEX, VISA Débito, VISA Delta, Maestro, Electron y SOLO. También aceptamos PayPal.",
        ],
      },
    ],
  },
  {
    helpId: 3,
    helpHeader: "Datos esenciales",
    optionsHeader: [
      "Contáctanos",
      "Seguridad del sitio web",
      "Guía de accesibilidad",
      "Opciones de pago",
      "Términos y Condiciones",
    ],
    optionsText: [
      {
        textId: 1,
        textHeader: [""],
        textDis: [""],
      },
    ],
  },
];
