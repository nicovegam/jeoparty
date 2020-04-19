const categories = [
  {
    name: "Series y TV",
    questions: [
      {
        value: "500",
        question:
          "¿De qué temporada de Game of Thrones es esta foto de Tyrion Lannister?",
        answer: "TERCERA TEMPORADA",
        localImage: "tyrion.jpg",
      },
      {
        value: "400",
        question:
          "¿En qué año se transmitió el primer episodio de Los Simpsons?",
        answer: "La familia Simpson apareció el 18 de diciembre de 1989.",
        image:
          "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit/v1539044280/quqrcybwta7w0cuekbz4.jpg",
      },
      {
        value: "300",
        question:
          "¿Dónde tenía Michael Scofield escondido el mapa de la cárcel para sacar a su hermano de 'Prison Break'?",
        answer: "Tatuado en el cuerpo",
        image:
          "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/PrisionBreak_6647600-0AKJ00._V392937825_SX1080_.jpg",
      },
      {
        value: "200",
        question: "¿Cuantos años tiene Mirtha Legrand?",
        answer: "93 años",
        image:
          "data:image/jpeg;base64,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",
      },
      {
        value: "100",
        question:
          "¿Cómo se llaman los personajes principales de esta serie? (Nombre y Apellido)",
        answer: "Walter White y Jesse Pinkman",
        image:
          "https://i.pinimg.com/originals/8e/ea/9a/8eea9ab8458625e76266d52763b46822.jpg",
      },
    ],
  },
  {
    name: "Musica",
    questions: [
      {
        value: "500",
        question: "¿Cómo se llama esta conocida banda de K-POP?",
        answer: "BTS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0f/BTS_on_the_Billboard_Music_Awards_red_carpet%2C_1_May_2019.jpg",
      },
      {
        value: "400",
        question: "¿Cuántas veces han colaborado Rihanna y Drake?",
        answer: "Cuatro, en What's My Name, Take Care, Too Good y Work",
        image:
          "https://akns-images.eonline.com/eol_images/Entire_Site/2016216/rs_300x300-160316073316-600.rihanna-drake.cm.31615.jpg?fit=around|1200:1200&crop=1200:1200;center,top&output-quality=90",
      },
      {
        value: "300",
        question: "¿Con qué canción alcanzó Adele la fama mundial en 2011?",
        answer: "¿Con qué canción alcanzó Adele la fama mundial en 2011?",
        image: "https://www.concierto.cl/wp-content/uploads/2019/12/adele.jpg",
      },
      {
        value: "200",
        question: "¿Cuál fue el primer hit global de Justin Bieber?",
        answer: "Baby",
        image:
          "https://images.vice.com/noisey/content-images/article/question-of-the-day/2432d3a0148c72efacf9d0d1cab76ffa.jpg?crop=1xw%3A0.8571428571428571xh%3Bcenter%2Ccenter&resize=2000%3A*",
      },
      {
        value: "100",
        question: "¿Quiénes es conocida como la reina del POP?",
        answer: "MADONNA",
        localImage: "artistaspop.jpg",
      },
    ],
  },
  {
    name: "Cine y Literatura",
    questions: [
      {
        value: "500",
        question: "¿Por qué El Principito decide abandonar su planeta?",
        answer: "Porque sentía que una rosa se aprovechaba de él.",
        image:
          "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/74280aec-104d-4748-999d-01a787396dad/d735df71-1756-4e6e-8efe-359ae4cf179b.jpg",
      },
      {
        value: "400",
        question: "¿Cómo se llama esta película de Charles Chaplin?",
        answer: "EL GRAN DICTADOR (THE GREAT DICTATOR)",
        image:
          "https://culturizando.com/wp-content/uploads/2017/03/El-gran-dictador-Charles-Chaplin.png",
      },
      {
        value: "300",
        question: "¿Quién escribió 'La Ilíada'?",
        answer: "HOMERO",
        image:
          "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/74280aec-104d-4748-999d-01a787396dad/a0739ad9-693a-4b5a-878b-9d7c3ef03f5e.jpg",
      },
      {
        value: "200",
        question: "¿En qué siglo nació Miguel de Cervantes?",
        answer: "Nació en el siglo XVI, el 29 de septiembre de 1547",
        image:
          "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/74280aec-104d-4748-999d-01a787396dad/90869abb-ed1d-46a7-9769-73ec368b0eb1.jpg",
      },
      {
        value: "100",
        question: "¿Cuál es la película mas recaudadora de la historia?",
        answer: "AVENGERS: ENDGAME, Recaudacion: USD 2.797.800.564",
        image:
          "https://comofuncionaque.com/wp-content/uploads/2015/01/El-dinero-se-ha-convertido-desde-hace-mucho-tiempo-en-el-cambio-principal-1024x683.jpg",
      },
    ],
  },
  {
    name: "Historia",
    questions: [
      {
        value: "500",
        question: "¿En qué año se hundió el Titanic",
        answer: "10 de abril de 1912",
        image:
          "https://culturizando.com/wp-content/uploads/2016/04/Titanic2.png",
      },
      {
        value: "400",
        question:
          "¿Qué hito puso fin a la Edad Media y dio comienzo a la Edad Moderna en el año 1453?",
        answer: "La Toma de Constantinopla por los Turcos",
        image:
          "https://sobrehistoria.com/wp-content/uploads/2011/09/edad-media.jpg",
      },
      {
        value: "300",
        question:
          "¿Quién fue el iniciador de la Reforma protestaste al movimiento religioso cristiano?",
        answer: "Martín Lutero",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29.jpg/330px-Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29.jpg",
      },
      {
        value: "200",
        question: "¿A qué momento histórico hace alusión esta imagen?",
        answer: "La caida del muro de Berlin",
        image:
          "https://www.eulixe.com/media/eulixe/images/2018/11/09/9-noviembre-caida-muro-berlin.jpg",
      },
      {
        value: "100",
        question:
          "Nombre las ciudades japonesas que fueron atacadas con bombas atomicas en la Segunda Guerra Mundial",
        answer: "Hiroshima y Nagasaki",
        image:
          "https://www.duna.cl/media/2019/08/Sadae-Kasoaka-Testigo-del-bombardeo-de-Hiroshima-Informes.jpg",
      },
    ],
  },
  {
    name: "Ciencia",
    questions: [
      {
        value: "500",
        question: "¿Qué representa el numero π (Pi)?",
        answer:
          "Es la relación entre la longitud de una circunferencia y su diámetro, en geometría euclidiana",
        image: "https://culturizando.com/wp-content/uploads/2016/03/Pi.jpg",
      },
      {
        value: "400",
        question:
          "Bario, berilio, bismuto, cadmio, calcio, cerio, cromo, cobalto, iridio, magnesio, manganeso, mercurio, molibdeno, osmio, paladio, potasio, sodio, torio, volframio, vanadio, son ejemplos de…",
        answer: "METALES",
        image:
          "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit/v1557062977/ywlylzpgnuxukj6eqzny.jpg",
      },
      {
        value: "300",
        question:
          "¿A quién se atribuye la famosa interjección ¡Eureka! luego de realizar un descubrimiento?",
        answer: "Arquímedes de Siracusa",
        image:
          "https://i.pinimg.com/originals/1e/fd/a5/1efda587a58ee53eda285de79b5186f8.jpg",
      },
      {
        value: "200",
        question: "¿A qué famosa teoría pertenece esta formula?",
        answer: "Teoría de la relatividad de Einstein",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,fl_progressive,q_80,w_470/fypnm4nvrpeqr5osdq2d.jpg",
      },
      {
        value: "100",
        question: "¿A qué se denomina 'movimiento de Traslacion' de la Tierra?",
        answer:
          "Es el movimiento por el cual el planeta Tierra gira en una órbita elíptica alrededor del Sol en 365 días",
        image:
          "https://culturizando.com/wp-content/uploads/2018/10/planeta-tierra.png",
      },
    ],
  },
  {
    name: "Geografia",
    questions: [
      {
        value: "500",
        question:
          "¿Además del alemán, el italiano y el francés, ¿qué otro idioma es hablado en ciertas regiones de Suiza?",
        answer:
          "En el este de Suiza se habla también el romache, una lengua románica.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGO4Am5LIGfal2QXjGxT3dO5WHmbhZyyGBqlY5ZvguEgqUmCUR&usqp=CAU",
      },
      {
        value: "400",
        question: "¿Entre qué países podemos encontrar el Estrecho de Bering?",
        answer:
          "El estrecho de Bering separa al continente americano del asiático, concretamente a los territorios de Estados Unidos y Rusia.",
        image:
          "https://concepto.de/wp-content/uploads/2018/08/estrecho-de-bering-e1535737230461.jpg",
      },
      {
        value: "300",
        question: "¿Cuál es la capital de Nueva Zelanda?",
        answer: "Auckland, o Ākarana en maorí.",
        image:
          "https://www.newzealand.com/assets/Tourism-NZ/Auckland/cfeb375aac/img-1545344662-6574-9912-C9EDA874-9F47-C996-B68CBE301D86DB16__FocalPointCropWzQyNyw2NDAsNTAsNTAsODUsImpwZyIsNjUsMi41XQ.jpg",
      },
      {
        value: "200",
        question: "¿Cuál es la ciudad más poblada de África?",
        answer:
          "El Cairo, con casi 10 millones de habitantes dentro de sus limites y casi 17 millones en el area metropolitana.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Africa_on_the_globe_%28red%29.svg/1200px-Africa_on_the_globe_%28red%29.svg.png",
      },
      {
        value: "100",
        question: "¿Cuál es el río más caudaloso del mundo?",
        answer: "Amazonas",
        image:
          "https://cdn.civitatis.com/brasil/manaos/galeria/rio-amazonas.jpg",
      },
    ],
  },
];

export default categories;
