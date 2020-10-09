export const newsArr = [
  {
    event_id: 1,
    event_name: "Hackaton Plus",
    event_dates: ["12 de Septiembre", "13 de Septiembre", "14 de Septiembre"],
    event_location: "Argentina",
    event_img: "http://www.rurc.uni.edu.ni/imagenes/clasificado1.PNG",
    event_type: "Competencia",
    event_theme: "Programación",
    event_category: "Tecnologia",
  },
  {
    event_id: 2,
    event_name: "El Juego",
    event_dates: ["16 de Septiembre"],
    event_location: "Argentina",
    event_img:
      "https://www.comunidad.madrid/sites/default/files/styles/aspect_ratio_16_9_desktop/public/doc/cultura/banner_1266_x_710_leer_teatro_actualidad_0.jpg?itok=NZzgp9w1&timestamp=1565950627",
    event_type: "Obra de Teatro",
    event_theme: "Comedia",
    event_category: "Arte",
  },
  {
    event_id: 3,
    event_name: "La Herencia del Abuelo",
    event_dates: ["19 de Septiembre"],
    event_location: "Uruguay",
    event_img:
      "https://http2.mlstatic.com/libro-la-herencia-del-abuelo-comedia-en-un-acto-y-5112-D_NQ_NP_679972-MLA28724288450_112018-F.webp",
    event_type: "Obra de Teatro",
    event_theme: "Drama",
    event_category: "Arte",
  },
  {
    event_id: 4,
    event_name: "Nueva Propuesta para el futuro",
    event_dates: ["16 de Septiembre"],
    event_location: "Chile",
    event_img:
      "https://www.pucv.cl/uuaa/site/artic/20170316/imag/foto_0000000120170316191728.jpg",
    event_type: "Debate",
    event_theme: "Politica",
    event_category: "Sociales",
  },
  {
    event_id: 5,
    event_name: "Entendiedo los derechos de las victimas",
    event_dates: ["21 de Septiembre", "22 de Septiembre"],
    event_location: "Uruguay",
    event_img:
      "https://carbonellabogados.com/wp-content/uploads/2018/09/carbonell-abogados-victima-violencia-genero.jpg",
    event_type: "Conferencia",
    event_theme: "Derecho",
    event_category: "Sociales",
  },
  {
    event_id: 6,
    event_name: "El derecho animal en Latinoamerica",
    event_dates: ["23 de Septiembre"],
    event_location: "Chile",
    event_img:
      "https://1.bp.blogspot.com/-PHZXJ1y61HU/XTcGnzGwZWI/AAAAAAAABU4/JgXzFXdxzuUuESjcZEwBQglQp3ildc2jgCEwYBhgL/s1600/unnamed.jpg",
    event_type: "Conferencia",
    event_theme: "Derecho",
    event_category: "Sociales",
  },
];

export interface NewImg {
  event_id: number;
  event_name: string;
  event_dates: string[];
  event_location: string;
  event_img: string;
  event_type: string;
  event_category: string;
}
