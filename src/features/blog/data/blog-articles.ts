// Cuerpo extendido de cada post del diario (bajada, etiquetas y bloques del artículo).
// Se resuelve por slug desde la página de detalle: /blog/[slug].
import { blogArticlesDiario } from "@/features/blog/data/blog-articles-diario";
import type { BlogArticle } from "@/features/blog/types";

const PAPA = "/images/blog/ruta-del-papa";
const AGENDA = "/images/blog/agenda-papa";
const MISA = "/images/blog/como-llegar-misa";

export const blogArticles: Record<string, BlogArticle> = {
  ...blogArticlesDiario,

  // ---------------------------------------------------------------------------
  "como-llegar-misa-papa-pimentel": {
    lead: {
      es: "El Papa León XIV celebrará una misa multitudinaria en las Pampas de Pimentel el 13 de noviembre de 2026. Con cerca de un millón de asistentes previstos, el traslado ese día no se parecerá en nada a un día normal: así conviene organizarlo desde tu hotel en Chiclayo.",
      en: "Pope Leo XIV will celebrate a large open-air Mass at the Pampas de Pimentel on 13 November 2026. With close to a million people expected, getting there that day will be nothing like a normal commute: here is how to plan it from your hotel in Chiclayo.",
    },
    tags: [
      { es: "Papa León XIV", en: "Pope Leo XIV" },
      { es: "Pimentel", en: "Pimentel" },
      { es: "Visita papal 2026", en: "Papal visit 2026" },
      { es: "Cómo llegar", en: "Getting there" },
    ],
    body: [
      {
        type: "paragraph",
        text: {
          es: "El Papa León XIV llegará a Chiclayo el 13 de noviembre de 2026 para celebrar una misa multitudinaria en las Pampas de Pimentel. Si estás pensando viajar a Lambayeque para vivir este momento, una de las primeras cosas que debes organizar es cómo llegar al lugar de la celebración.",
          en: "Pope Leo XIV arrives in Chiclayo on 13 November 2026 to celebrate a large open-air Mass at the Pampas de Pimentel. If you are thinking of traveling to Lambayeque for this moment, one of the first things to sort out is how to reach the site.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Las Pampas de Pimentel, en el sector Las Rocas y frente a la playa Las Rocas, serán el escenario de esta celebración, que podría reunir aproximadamente a un millón de fieles.",
          en: "The Pampas de Pimentel, in the Las Rocas sector facing Las Rocas beach, will host the celebration, which could bring together roughly a million people.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Por eso, elegir bien dónde hospedarte y planificar tu traslado con anticipación será clave.",
          en: "That is why choosing where to stay and planning your transport in advance will be key.",
        },
      },
      {
        type: "heading",
        id: "donde-sera",
        text: {
          es: "¿Dónde será la misa del Papa León XIV?",
          en: "Where will Pope Leo XIV's Mass take place?",
        },
      },
      {
        type: "image",
        src: `${AGENDA}/misa-pampas-pimentel.webp`,
        alt: {
          es: "Vista aérea de una explanada frente al mar con miles de asistentes durante una misa papal",
          en: "Aerial view of a seaside esplanade filled with thousands of people during a papal Mass",
        },
        caption: {
          es: "El terreno tiene unas 300 hectáreas; solo una parte se usará para recibir a los asistentes.",
          en: "The site covers some 300 hectares; only part of it will be used to host attendees.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La misa multitudinaria se realizará en las Pampas de Pimentel, en el sector Las Rocas, al este del distrito de Pimentel.",
          en: "The Mass will be held at the Pampas de Pimentel, in the Las Rocas sector, east of the Pimentel district.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La ubicación fue confirmada por la Diócesis de Chiclayo luego de las evaluaciones realizadas por representantes de la Iglesia y autoridades. El terreno cuenta con aproximadamente 300 hectáreas, de las cuales se utilizaría una parte para recibir a los asistentes.",
          en: "The location was confirmed by the Diocese of Chiclayo after assessments carried out by Church representatives and local authorities. The site covers roughly 300 hectares, part of which would be used to host those attending.",
        },
      },
      {
        type: "list",
        items: [
          {
            title: { es: "Destino", en: "Destination" },
            text: {
              es: "Pampas de Pimentel — sector Las Rocas.",
              en: "Pampas de Pimentel — Las Rocas sector.",
            },
          },
          {
            title: { es: "Fecha", en: "Date" },
            text: {
              es: "Viernes 13 de noviembre de 2026.",
              en: "Friday 13 November 2026.",
            },
          },
          {
            title: { es: "Actividad", en: "Activity" },
            text: {
              es: "Misa multitudinaria presidida por el Papa León XIV.",
              en: "Large open-air Mass presided over by Pope Leo XIV.",
            },
          },
        ],
      },
      {
        type: "tip",
        label: { es: "Importante", en: "Important" },
        text: {
          es: "La organización continúa definiendo los detalles operativos, accesos y distribución de los asistentes. Antes de viajar, revisa la información oficial de la Diócesis de Chiclayo, la Nunciatura Apostólica y las autoridades correspondientes.",
          en: "Organizers are still finalizing operational details, access points and how attendees will be distributed. Before traveling, check official information from the Diocese of Chiclayo, the Apostolic Nunciature and the relevant authorities.",
        },
      },
      {
        type: "heading",
        id: "como-llegar",
        text: {
          es: "¿Cómo llegar desde Chiclayo?",
          en: "How to get there from Chiclayo",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si te hospedas en Chiclayo, Pimentel es uno de los puntos más cercanos para acceder al lugar de la celebración.",
          en: "If you are staying in Chiclayo, Pimentel is one of the closest places from which to reach the site.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Sin embargo, debido a la cantidad de personas que se espera que lleguen a la región, el traslado durante ese día será muy diferente al de un día normal.",
          en: "That said, given the number of people expected in the region, getting around that day will be very different from a normal day.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "1. Elige un hotel con buena ubicación",
          en: "1. Pick a hotel with a good location",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Hospedarte en Chiclayo te permite tener una base desde la cual organizar tu traslado hacia Pimentel y, además, conocer otros lugares de la ciudad durante tu estadía.",
          en: "Staying in Chiclayo gives you a base from which to organize your trip to Pimentel and to see other parts of the city during your stay.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Una ubicación estratégica puede ayudarte a reducir tiempos de desplazamiento y facilitar tu movilidad durante uno de los días con mayor afluencia de visitantes que tendrá Lambayeque.",
          en: "A well-placed hotel can cut your travel times and make moving around easier on one of the busiest visitor days Lambayeque will ever see.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "2. Coordina tu transporte con anticipación",
          en: "2. Arrange your transport ahead of time",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "No esperes hasta el mismo 13 de noviembre para buscar movilidad. Con una cantidad estimada de alrededor de un millón de asistentes, es razonable prever una demanda extraordinaria de transporte y posibles restricciones o modificaciones en las vías de acceso.",
          en: "Do not wait until 13 November itself to look for a ride. With an estimated million attendees, it is reasonable to expect extraordinary demand for transport and possible restrictions or changes to access roads.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Lo ideal será confirmar previamente:",
          en: "Ideally, confirm in advance:",
        },
      },
      {
        type: "list",
        items: [
          { text: { es: "Punto de partida.", en: "Your departure point." } },
          {
            text: {
              es: "Punto autorizado de llegada.",
              en: "The authorized drop-off point.",
            },
          },
          {
            text: {
              es: "Horarios de circulación.",
              en: "Traffic and circulation hours.",
            },
          },
          {
            text: {
              es: "Zonas de acceso peatonal.",
              en: "Pedestrian access areas.",
            },
          },
          {
            text: {
              es: "Restricciones vehiculares.",
              en: "Vehicle restrictions.",
            },
          },
          {
            text: {
              es: "Puntos oficiales de recojo y retorno.",
              en: "Official pick-up and return points.",
            },
          },
        ],
      },
      {
        type: "subheading",
        text: {
          es: "3. Considera que probablemente tendrás que caminar",
          en: "3. Assume you will have to walk part of the way",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Aunque llegues en movilidad hasta una zona cercana, no necesariamente podrás ingresar directamente hasta el área donde se realizará la misa.",
          en: "Even if a vehicle takes you close by, you will not necessarily be able to drive straight into the area where the Mass is held.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "En eventos multitudinarios de esta magnitud, los vehículos pueden tener zonas de acceso restringido y los asistentes pueden tener que caminar parte del recorrido.",
          en: "At gatherings of this scale, vehicles often face restricted zones and attendees may have to cover part of the route on foot.",
        },
      },
      {
        type: "tip",
        label: { es: "Tip para el día", en: "Tip for the day" },
        text: {
          es: "Usa calzado cómodo, lleva agua y prepárate para permanecer varias horas fuera del hotel.",
          en: "Wear comfortable shoes, bring water and be ready to spend several hours away from the hotel.",
        },
      },
      {
        type: "heading",
        id: "chiclayo-o-pimentel",
        text: {
          es: "¿Conviene hospedarse en Chiclayo o en Pimentel?",
          en: "Is it better to stay in Chiclayo or in Pimentel?",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si tu viaje tiene como objetivo principal asistir a la misa, Chiclayo puede ser una alternativa práctica para hospedarte, especialmente si también quieres conocer la ciudad y otros lugares de Lambayeque.",
          en: "If the main purpose of your trip is the Mass, Chiclayo can be a practical place to stay, especially if you also want to see the city and other parts of Lambayeque.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Además, el 13 de noviembre la agenda del Papa contempla otras actividades en Chiclayo después de la misa, entre ellas un encuentro en el Santuario Nuestra Señora de la Paz y posteriormente una actividad en la Universidad Católica Santo Toribio de Mogrovejo.",
          en: "On top of that, the Pope's 13 November schedule includes other activities in Chiclayo after the Mass, among them a gathering at the Sanctuary of Our Lady of Peace and later an event at the Santo Toribio de Mogrovejo Catholic University.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Esto hace que alojarte en la ciudad pueda ser conveniente para quienes quieran aprovechar su viaje más allá de la misa.",
          en: "That makes staying in the city convenient for anyone who wants to get more out of the trip than the Mass alone.",
        },
      },
      {
        type: "heading",
        id: "que-llevar",
        text: {
          es: "¿Qué llevar para la misa?",
          en: "What to bring to the Mass",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Prepárate para pasar varias horas fuera de tu hotel. Te recomendamos llevar:",
          en: "Be ready to spend several hours away from your hotel. We suggest bringing:",
        },
      },
      {
        type: "list",
        items: [
          { text: { es: "Agua.", en: "Water." } },
          { text: { es: "Gorra o sombrero.", en: "A cap or hat." } },
          { text: { es: "Protector solar.", en: "Sunscreen." } },
          { text: { es: "Calzado cómodo.", en: "Comfortable shoes." } },
          {
            text: {
              es: "Celular con batería suficiente.",
              en: "A phone with enough battery.",
            },
          },
          { text: { es: "Power bank.", en: "A power bank." } },
          { text: { es: "Documento de identidad.", en: "Your ID." } },
          { text: { es: "Una mochila pequeña.", en: "A small backpack." } },
        ],
      },
      {
        type: "paragraph",
        text: {
          es: "Y, sobre todo, lleva únicamente lo necesario para facilitar tus desplazamientos.",
          en: "And above all, bring only what you need so you can move around easily.",
        },
      },
      {
        type: "heading",
        id: "donde-hospedarse",
        text: {
          es: "¿Dónde hospedarte en Chiclayo para asistir a la misa?",
          en: "Where to stay in Chiclayo for the Mass",
        },
      },
      {
        type: "image",
        src: `${MISA}/sedes-zentra.webp`,
        alt: {
          es: "Fachadas de las tres sedes de Zentra Hotel & Cowork en Chiclayo",
          en: "Façades of the three Zentra Hotel & Cowork locations in Chiclayo",
        },
        caption: {
          es: "Nuestras sedes en el centro de Chiclayo, a pocos minutos de la salida hacia Pimentel.",
          en: "Our locations in downtown Chiclayo, minutes from the road out to Pimentel.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si vienes desde otra ciudad para vivir este momento, en Zentra Hotel & Cowork puedes encontrar una opción de alojamiento en Chiclayo para organizar tu estadía.",
          en: "If you are coming from another city for this moment, Zentra Hotel & Cowork offers a place to stay in Chiclayo from which to organize your trip.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La idea es que puedas descansar, trabajar si tu viaje también es por negocios y tener una base desde la cual descubrir la ciudad y desplazarte hacia Pimentel.",
          en: "The idea is that you can rest, work if your trip is partly for business, and have a base from which to explore the city and head out to Pimentel.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Además, si tu visita se extiende por varios días, puedes aprovechar para conocer otros puntos de la Ruta del Papa, así como la gastronomía y los principales atractivos turísticos de Lambayeque.",
          en: "And if your visit runs several days, you can use the time to see other stops on the Pope's Route, along with the food and main attractions of Lambayeque.",
        },
      },
      {
        type: "heading",
        id: "planifica",
        text: {
          es: "Planifica tu viaje con anticipación",
          en: "Plan your trip in advance",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La visita del Papa León XIV será un acontecimiento excepcional para Chiclayo y Lambayeque. La Diócesis ha pedido a los fieles informarse únicamente mediante los canales oficiales de la Iglesia, la Nunciatura Apostólica y la Conferencia Episcopal Peruana, ya que los detalles de la organización continúan actualizándose.",
          en: "Pope Leo XIV's visit will be an exceptional event for Chiclayo and Lambayeque. The Diocese has asked the faithful to rely only on official channels — the Church, the Apostolic Nunciature and the Peruvian Episcopal Conference — since organizational details are still being updated.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si vas a viajar, reserva tu hospedaje con anticipación, organiza tu transporte y mantente atento a las indicaciones oficiales.",
          en: "If you are traveling, book your accommodation early, arrange your transport and keep an eye on official guidance.",
        },
      },
      {
        type: "cta",
        title: {
          es: "Chiclayo te espera para vivir un momento histórico",
          en: "Chiclayo is waiting for a historic moment",
        },
        text: {
          es: "Hospédate en Zentra y haz de tu estadía el punto de partida para descubrir la Ruta del Papa.",
          en: "Stay at Zentra and make your trip the starting point for discovering the Pope's Route.",
        },
        label: {
          es: "Reserva tu estadía en Zentra",
          en: "Book your stay at Zentra",
        },
        href: "/habitaciones",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  "agenda-papa-leon-xiv-chiclayo": {
    lead: {
      es: "El Vaticano ya publicó el programa oficial del Viaje Apostólico del Papa León XIV a Uruguay, Argentina y Perú. Chiclayo tendrá al Papa del viernes 13 al domingo 15 de noviembre de 2026: estos son los horarios y los lugares confirmados, actividad por actividad.",
      en: "The Vatican has published the official program of Pope Leo XIV's Apostolic Journey to Uruguay, Argentina and Peru. Chiclayo will host the Pope from Friday 13 to Sunday 15 November 2026: these are the confirmed times and places, activity by activity.",
    },
    tags: [
      { es: "Papa León XIV", en: "Pope Leo XIV" },
      { es: "Chiclayo", en: "Chiclayo" },
      { es: "Visita papal 2026", en: "Papal visit 2026" },
      { es: "Lambayeque", en: "Lambayeque" },
    ],
    body: [
      {
        type: "paragraph",
        text: {
          es: "La espera terminó. El Vaticano ya publicó oficialmente el programa del Viaje Apostólico del Papa León XIV a Uruguay, Argentina y Perú, que se realizará del 6 al 17 de noviembre de 2026.",
          en: "The wait is over. The Vatican has officially published the program of Pope Leo XIV's Apostolic Journey to Uruguay, Argentina and Peru, taking place from 6 to 17 November 2026.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "En el caso del Perú, uno de los momentos más esperados será su regreso a Chiclayo, ciudad con la que mantiene un vínculo especial por sus años de servicio pastoral en la región.",
          en: "In Peru, one of the most anticipated moments will be his return to Chiclayo, a city he is especially tied to after years of pastoral service in the region.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "El Papa llegará a Chiclayo el viernes 13 de noviembre y permanecerá en la región hasta el domingo 15, cuando partirá hacia Cusco. Durante estos días participará en misas, encuentros con comunidades religiosas, universitarios y fieles, además de visitar lugares vinculados con la historia de la Iglesia en Lambayeque.",
          en: "The Pope will arrive in Chiclayo on Friday 13 November and stay in the region until Sunday 15, when he leaves for Cusco. Over those days he will take part in Masses and meetings with religious communities, university students and the faithful, and will visit places tied to the history of the Church in Lambayeque.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si estás pensando viajar a Chiclayo para vivir alguno de estos momentos, aquí te contamos qué hará el Papa León XIV, dónde estará y cuáles son los horarios anunciados oficialmente.",
          en: "If you are thinking of traveling to Chiclayo to be part of any of these moments, here is what Pope Leo XIV will do, where he will be and the times that have been officially announced.",
        },
      },
      {
        type: "heading",
        id: "cuando-llega",
        text: {
          es: "¿Cuándo llegará el Papa León XIV a Chiclayo?",
          en: "When will Pope Leo XIV arrive in Chiclayo?",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "El Papa llegará a Chiclayo el viernes 13 de noviembre de 2026.",
          en: "The Pope will arrive in Chiclayo on Friday 13 November 2026.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Según el programa oficial del Vaticano, partirá desde la Base Aeronaval del Callao a las 7:40 a. m. y llegará a la Base Aérea de Chiclayo “Teniente Coronel Pedro Ruiz Gallo” a las 9:10 a. m.",
          en: "According to the Vatican's official program, he will depart from the Callao Naval Air Base at 7:40 a.m. and land at the “Teniente Coronel Pedro Ruiz Gallo” Air Base in Chiclayo at 9:10 a.m.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "A partir de ese momento comenzará su agenda en Chiclayo y Pimentel.",
          en: "From that moment his schedule in Chiclayo and Pimentel begins.",
        },
      },
      {
        type: "heading",
        id: "viernes-13",
        text: {
          es: "Viernes 13 de noviembre: el regreso del Papa a Chiclayo",
          en: "Friday 13 November: the Pope returns to Chiclayo",
        },
      },
      {
        type: "image",
        src: `${AGENDA}/misa-pampas-pimentel.webp`,
        alt: {
          es: "Miles de fieles reunidos en una explanada frente al mar durante una misa papal",
          en: "Thousands of faithful gathered on a seaside esplanade during a papal Mass",
        },
        caption: {
          es: "Las Pampas de Pimentel serán el escenario de la misa multitudinaria del viernes 13.",
          en: "The Pampas de Pimentel will host the large open-air Mass on Friday 13.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La primera jornada estará marcada por la misa multitudinaria en Pimentel y varios encuentros con comunidades religiosas, universitarias y sacerdotales.",
          en: "The first day is built around the large Mass in Pimentel and several meetings with religious, university and priestly communities.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "9:10 a. m. — Llegada a Chiclayo",
          en: "9:10 a.m. — Arrival in Chiclayo",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "El Papa León XIV llegará a la Base Aérea de Chiclayo “Teniente Coronel Pedro Ruiz Gallo” procedente de Lima. Este será el punto de inicio de su agenda en Lambayeque.",
          en: "Pope Leo XIV will land at the “Teniente Coronel Pedro Ruiz Gallo” Air Base in Chiclayo coming from Lima. This is where his Lambayeque schedule starts.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "10:30 a. m. — Misa en las Pampas de Pimentel",
          en: "10:30 a.m. — Mass at the Pampas de Pimentel",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Uno de los momentos centrales de su visita será la Santa Misa en la explanada de las Pampas de Pimentel. La celebración está programada para las 10:30 a. m. y contará con la homilía del Santo Padre.",
          en: "One of the central moments of the visit will be the Holy Mass on the esplanade of the Pampas de Pimentel. It is scheduled for 10:30 a.m. and will include the Holy Father's homily.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Las Pampas de Pimentel se convertirán así en uno de los principales puntos de encuentro de los fieles que viajarán hasta Lambayeque para participar en la visita.",
          en: "The Pampas de Pimentel will therefore become one of the main gathering points for the faithful traveling to Lambayeque for the visit.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "12:40 p. m. — Visita privada a la Capilla San Óscar A. Romero",
          en: "12:40 p.m. — Private visit to the San Óscar A. Romero Chapel",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Después de la misa, el Papa realizará una visita privada a la Capilla San Óscar A. Romero, donde está previsto un saludo del Santo Padre. A diferencia de la misa y otros encuentros públicos, esta actividad está catalogada oficialmente como visita privada.",
          en: "After the Mass, the Pope will make a private visit to the San Óscar A. Romero Chapel, where a greeting from the Holy Father is planned. Unlike the Mass and other public gatherings, this activity is officially listed as a private visit.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "4:30 p. m. — Encuentro en el Santuario de Nuestra Señora de la Paz",
          en: "4:30 p.m. — Meeting at the Sanctuary of Our Lady of Peace",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Por la tarde, León XIV se trasladará al Santuario de Nuestra Señora de la Paz. El encuentro comenzará a las 4:30 p. m. y contará con un discurso del Santo Padre. Allí se reunirá con:",
          en: "In the afternoon, Leo XIV will travel to the Sanctuary of Our Lady of Peace. The gathering begins at 4:30 p.m. and will include an address by the Holy Father. There he will meet with:",
        },
      },
      {
        type: "list",
        items: [
          { text: { es: "Obispos.", en: "Bishops." } },
          { text: { es: "Sacerdotes.", en: "Priests." } },
          {
            text: {
              es: "Religiosos y religiosas.",
              en: "Men and women religious.",
            },
          },
          { text: { es: "Seminaristas.", en: "Seminarians." } },
          { text: { es: "Equipos sinodales.", en: "Synodal teams." } },
          { text: { es: "Consejos pastorales.", en: "Pastoral councils." } },
        ],
      },
      {
        type: "subheading",
        text: {
          es: "5:45 p. m. — Encuentro con el mundo universitario",
          en: "5:45 p.m. — Meeting with the university world",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "A las 5:45 p. m., el Papa participará en un encuentro con el mundo universitario en la Universidad Católica Santo Toribio de Mogrovejo. Esta actividad también contempla un discurso del Santo Padre.",
          en: "At 5:45 p.m. the Pope will take part in a meeting with the university world at the Santo Toribio de Mogrovejo Catholic University. This activity also includes an address by the Holy Father.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "7:00 p. m. — Cena con sacerdotes de la Diócesis de Chiclayo",
          en: "7:00 p.m. — Dinner with priests of the Diocese of Chiclayo",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La jornada terminará con una cena con los sacerdotes de la Diócesis de Chiclayo, programada para las 7:00 p. m. en el Colegio Santo Toribio de Mogrovejo.",
          en: "The day closes with a dinner with the priests of the Diocese of Chiclayo, scheduled for 7:00 p.m. at the Santo Toribio de Mogrovejo school.",
        },
      },
      {
        type: "heading",
        id: "sabado-14",
        text: {
          es: "Sábado 14 de noviembre: Chiclayo, Santa Cruz y Zaña",
          en: "Saturday 14 November: Chiclayo, Santa Cruz and Zaña",
        },
      },
      {
        type: "image",
        src: `${AGENDA}/chiclayo-santa-cruz-zana.webp`,
        alt: {
          es: "Composición con la Catedral de Chiclayo, la plaza de Santa Cruz de Succhabamba y el convento de Zaña",
          en: "Composite of Chiclayo Cathedral, the main square of Santa Cruz de Succhabamba and the convent in Zaña",
        },
        caption: {
          es: "El sábado 14 el recorrido oficial será Chiclayo – Santa Cruz de Succhabamba – Zaña – Chiclayo.",
          en: "On Saturday 14 the official route runs Chiclayo – Santa Cruz de Succhabamba – Zaña – Chiclayo.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "El segundo día tendrá una agenda especialmente vinculada con la tradición religiosa de la región.",
          en: "The second day has a schedule closely tied to the region's religious tradition.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La jornada comenzará en Chiclayo y continuará con un viaje a Santa Cruz de Succhabamba, en Cajamarca. Después, el Papa regresará a Chiclayo para participar en un encuentro de oración en Zaña.",
          en: "It starts in Chiclayo and continues with a trip to Santa Cruz de Succhabamba, in Cajamarca. The Pope then returns to Chiclayo to take part in a prayer gathering in Zaña.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "8:00 a. m. — Coronación de la Virgen Inmaculada",
          en: "8:00 a.m. — Crowning of the Immaculate Virgin",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "El día comenzará en la Catedral de Santa María de Chiclayo, donde el Papa presidirá el Rito de Coronación de la Virgen Inmaculada. La ceremonia está programada para las 8:00 a. m. y contará con la homilía del Santo Padre.",
          en: "The day begins at the Santa María Cathedral in Chiclayo, where the Pope will preside over the Rite of Crowning of the Immaculate Virgin. The ceremony is set for 8:00 a.m. and will include the Holy Father's homily.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "9:10 a. m. — Viaje a Santa Cruz de Succhabamba",
          en: "9:10 a.m. — Trip to Santa Cruz de Succhabamba",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "A las 9:10 a. m., el Papa partirá en helicóptero desde la Base Aérea de Chiclayo hacia Santa Cruz de Succhabamba. Está previsto que llegue al helipuerto de esta localidad a las 9:50 a. m.",
          en: "At 9:10 a.m. the Pope will leave by helicopter from the Chiclayo Air Base toward Santa Cruz de Succhabamba, with arrival at the town's helipad expected at 9:50 a.m.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "11:00 a. m. — Misa en Santa Cruz de Succhabamba",
          en: "11:00 a.m. — Mass in Santa Cruz de Succhabamba",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "A las 11:00 a. m., León XIV celebrará una Santa Misa en la explanada de Santa Cruz de Succhabamba. La actividad contará con la homilía del Santo Padre.",
          en: "At 11:00 a.m. Leo XIV will celebrate Holy Mass on the esplanade of Santa Cruz de Succhabamba, including the Holy Father's homily.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "1:15 p. m. — Regreso a Chiclayo",
          en: "1:15 p.m. — Return to Chiclayo",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Después de la celebración, el Papa partirá nuevamente en helicóptero hacia Chiclayo a la 1:15 p. m. Su llegada a la Base Aérea de Chiclayo está programada para las 2:00 p. m.",
          en: "After the celebration the Pope will fly back to Chiclayo by helicopter at 1:15 p.m., with arrival at the Chiclayo Air Base scheduled for 2:00 p.m.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "5:30 p. m. — Encuentro de oración en Zaña",
          en: "5:30 p.m. — Prayer gathering in Zaña",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Uno de los momentos más importantes para Lambayeque será el encuentro de oración con la comunidad católica en ocasión de la clausura del Año Jubilar de Santo Toribio de Mogrovejo. Se realizará a las 5:30 p. m. en el Santuario de Santo Toribio de Mogrovejo.",
          en: "One of the most significant moments for Lambayeque will be the prayer gathering with the Catholic community marking the close of the Jubilee Year of Saint Toribio de Mogrovejo. It takes place at 5:30 p.m. at the Sanctuary of Saint Toribio de Mogrovejo.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "El santuario se encuentra en Zaña, localidad de Lambayeque vinculada a la historia de Santo Toribio de Mogrovejo. El Gobierno Regional viene impulsando además un proyecto de mejoramiento del recurso turístico asociado a este lugar.",
          en: "The sanctuary is in Zaña, a Lambayeque town tied to the history of Saint Toribio de Mogrovejo. The Regional Government is also advancing a project to improve the tourist site associated with it.",
        },
      },
      {
        type: "heading",
        id: "domingo-15",
        text: {
          es: "¿Qué pasará el domingo 15 de noviembre?",
          en: "What happens on Sunday 15 November?",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "El domingo será el último día del Papa en Chiclayo. A las 7:50 a. m., León XIV partirá desde la Base Aérea de Chiclayo rumbo a Cusco, donde continuará su agenda pastoral. Está previsto que llegue a Cusco a las 10:00 a. m.",
          en: "Sunday is the Pope's last day in Chiclayo. At 7:50 a.m. Leo XIV will leave the Chiclayo Air Base for Cusco, where his pastoral schedule continues. He is expected to arrive in Cusco at 10:00 a.m.",
        },
      },
      {
        type: "tip",
        label: { es: "Dato clave", en: "Key detail" },
        text: {
          es: "El sábado 14 será la última jornada completa del Papa en Chiclayo y Lambayeque: si solo puedes venir un día, ese es el día.",
          en: "Saturday 14 is the Pope's last full day in Chiclayo and Lambayeque: if you can only come for one day, that is the day.",
        },
      },
      {
        type: "heading",
        id: "mapa",
        text: {
          es: "Mapa de la visita del Papa León XIV en Chiclayo",
          en: "Map of Pope Leo XIV's visit to Chiclayo",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si estás viajando a Chiclayo para seguir parte de la agenda, estos son los principales lugares que aparecen en el programa oficial:",
          en: "If you are traveling to Chiclayo to follow part of the schedule, these are the main places listed in the official program:",
        },
      },
      {
        type: "table",
        head: [
          { es: "Ciudad", en: "City" },
          {
            es: "Lugares del programa oficial",
            en: "Places on the official program",
          },
        ],
        rows: [
          [
            { es: "Chiclayo", en: "Chiclayo" },
            {
              es: "Base Aérea Teniente Coronel Pedro Ruiz Gallo · Catedral de Santa María · Santuario de Nuestra Señora de la Paz · Universidad Católica Santo Toribio de Mogrovejo · Colegio Santo Toribio de Mogrovejo",
              en: "Teniente Coronel Pedro Ruiz Gallo Air Base · Santa María Cathedral · Sanctuary of Our Lady of Peace · Santo Toribio de Mogrovejo Catholic University · Santo Toribio de Mogrovejo school",
            },
          ],
          [
            { es: "Pimentel", en: "Pimentel" },
            { es: "Pampas de Pimentel", en: "Pampas de Pimentel" },
          ],
          [
            { es: "Zaña", en: "Zaña" },
            {
              es: "Santuario de Santo Toribio de Mogrovejo",
              en: "Sanctuary of Saint Toribio de Mogrovejo",
            },
          ],
          [
            {
              es: "Santa Cruz de Succhabamba",
              en: "Santa Cruz de Succhabamba",
            },
            {
              es: "Explanada de Santa Cruz de Succhabamba",
              en: "Esplanade of Santa Cruz de Succhabamba",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        text: {
          es: "La propia agenda del Vaticano identifica el recorrido del sábado como Chiclayo – Santa Cruz de Succhabamba – Zaña – Chiclayo.",
          en: "The Vatican's own schedule identifies Saturday's route as Chiclayo – Santa Cruz de Succhabamba – Zaña – Chiclayo.",
        },
      },
      {
        type: "heading",
        id: "donde-hospedarse",
        text: {
          es: "¿Dónde hospedarse si vienes a Chiclayo por la visita del Papa?",
          en: "Where to stay if you come to Chiclayo for the papal visit?",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si estás viajando desde otra ciudad para participar de las actividades, hospedarte en Chiclayo puede ayudarte a tener una base desde la cual organizar tu recorrido por la región.",
          en: "If you are traveling from another city to take part in the activities, staying in Chiclayo gives you a base from which to organize your trips around the region.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Además de asistir a las actividades oficiales, puedes aprovechar tu estadía para conocer la gastronomía, historia y atractivos turísticos de Lambayeque.",
          en: "Beyond the official activities, you can use your stay to get to know the food, history and attractions of Lambayeque.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "En Zentra Hotel encontrarás diferentes alternativas de alojamiento en Chiclayo para organizar tu visita y descansar durante estos días. Si vienes por la misa en Pimentel, la agenda en la Catedral, el encuentro en Zaña o simplemente quieres conocer la ciudad durante la visita papal, puedes planificar tu estadía con anticipación.",
          en: "At Zentra Hotel you will find several places to stay in Chiclayo to organize your visit and rest during those days. Whether you are coming for the Mass in Pimentel, the Cathedral schedule, the gathering in Zaña, or simply to see the city during the papal visit, you can plan your stay in advance.",
        },
      },
      {
        type: "cta",
        title: {
          es: "Chiclayo será uno de los protagonistas de la visita del Papa León XIV",
          en: "Chiclayo will be one of the highlights of Pope Leo XIV's visit",
        },
        text: {
          es: "Noviembre de 2026 va a llenar la ciudad. Asegura tu habitación con tiempo y vive la visita papal desde el centro de Chiclayo.",
          en: "November 2026 will fill the city. Secure your room early and experience the papal visit from the heart of Chiclayo.",
        },
        label: {
          es: "Reserva tu estadía en Zentra",
          en: "Book your stay at Zentra",
        },
        href: "/habitaciones",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  "ruta-del-papa-chiclayo": {
    lead: {
      es: "Chiclayo es mucho más que la puerta de entrada a Lambayeque: es la ciudad donde el Papa León XIV ejerció su ministerio como Robert Francis Prevost. Esta es la guía para recorrer los templos, santuarios y pueblos que forman la Ruta del Papa, con distancias reales y tiempos que sí se cumplen.",
      en: "Chiclayo is far more than the gateway to Lambayeque: it is the city where Pope Leo XIV served as Robert Francis Prevost. This is the guide to the churches, sanctuaries and towns that make up the Pope's Route, with real distances and timings that actually hold up.",
    },
    tags: [
      { es: "Ruta del Papa", en: "Pope's Route" },
      { es: "Chiclayo", en: "Chiclayo" },
      { es: "Turismo religioso", en: "Religious tourism" },
      { es: "Lambayeque", en: "Lambayeque" },
    ],
    body: [
      {
        type: "paragraph",
        text: {
          es: "Chiclayo es mucho más que una puerta de entrada a la historia y la cultura de Lambayeque. También es una ciudad profundamente vinculada a la historia pastoral del actual Papa León XIV, quien durante sus años como Robert Francis Prevost desarrolló una importante labor religiosa en esta región.",
          en: "Chiclayo is much more than a gateway to the history and culture of Lambayeque. It is also a city deeply tied to the pastoral history of the current Pope Leo XIV, who during his years as Robert Francis Prevost carried out significant religious work in this region.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Hoy, recorrer la Ruta del Papa en Chiclayo permite conocer templos, santuarios y otros lugares que forman parte de esa historia, mientras se descubre el patrimonio, las tradiciones y la identidad de la región.",
          en: "Today, walking the Pope's Route in Chiclayo means visiting churches, sanctuaries and other places that are part of that history, while discovering the heritage, traditions and identity of the region.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si estás planeando viajar a Chiclayo y quieres hacer este recorrido, aquí tienes todo lo necesario para organizar tu visita.",
          en: "If you are planning a trip to Chiclayo and want to follow this route, here is everything you need to organize your visit.",
        },
      },
      {
        type: "heading",
        id: "que-es-la-ruta",
        text: {
          es: "¿Qué es la Ruta del Papa León XIV?",
          en: "What is the Pope Leo XIV Route?",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La Ruta del Papa León XIV es un circuito turístico, religioso y cultural que reúne lugares relacionados con la trayectoria pastoral de Robert Francis Prevost en Lambayeque.",
          en: "The Pope Leo XIV Route is a tourism, religious and cultural circuit bringing together places linked to Robert Francis Prevost's pastoral work in Lambayeque.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La iniciativa oficial del Gobierno Regional de Lambayeque busca integrar fe, historia y patrimonio cultural, conectando iglesias, santuarios, museos y otros atractivos de la región. Actualmente la ruta contempla cuatro circuitos y más de 25 destinos religiosos y culturales.",
          en: "The official initiative of the Regional Government of Lambayeque aims to bring together faith, history and cultural heritage, connecting churches, sanctuaries, museums and other regional attractions. The route currently covers four circuits and more than 25 religious and cultural destinations.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Para quien visita Chiclayo, este recorrido es una forma distinta de conocer la ciudad: no solo por sus atractivos turísticos, sino a través de las comunidades, templos y espacios que forman parte de su historia reciente.",
          en: "For anyone visiting Chiclayo, this route is a different way to get to know the city: not only through its tourist attractions, but through the communities, churches and spaces that are part of its recent history.",
        },
      },
      {
        type: "heading",
        id: "por-que-importa",
        text: {
          es: "¿Por qué la Ruta del Papa es importante para Chiclayo?",
          en: "Why the Pope's Route matters to Chiclayo",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La relación entre el Papa León XIV y Chiclayo es especialmente significativa. Antes de llegar al Vaticano, Robert Prevost ejerció su ministerio episcopal en esta diócesis y desarrolló una labor cercana a las comunidades de Lambayeque.",
          en: "The relationship between Pope Leo XIV and Chiclayo is especially meaningful. Before arriving at the Vatican, Robert Prevost served as bishop of this diocese and worked closely with the communities of Lambayeque.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Por eso, muchos de los lugares incluidos en la ruta no son únicamente atractivos turísticos: son espacios que permiten entender parte de su trayectoria pastoral y la relación que construyó con la población local.",
          en: "That is why many of the places on the route are not merely tourist attractions: they are spaces that help explain part of his pastoral journey and the bond he built with local people.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La propia Diócesis de Chiclayo ha señalado que durante su visita al Perú en noviembre de 2026 el Papa regresará a lugares de especial significado para la Iglesia local: la Catedral de Chiclayo, el Santuario de Nuestra Señora de la Paz, la USAT, Santa Cruz, Zaña y las pampas del Parque Industrial de Reque.",
          en: "The Diocese of Chiclayo itself has said that during his November 2026 visit to Peru the Pope will return to places of particular significance for the local Church: Chiclayo Cathedral, the Sanctuary of Our Lady of Peace, USAT, Santa Cruz, Zaña and the flats of the Reque Industrial Park.",
        },
      },
      {
        type: "heading",
        id: "lugares",
        text: {
          es: "Lugares que puedes conocer en la Ruta del Papa",
          en: "Places you can visit on the Pope's Route",
        },
      },
      {
        type: "subheading",
        text: {
          es: "1. Iglesia Santa María Catedral de Chiclayo",
          en: "1. Santa María Cathedral of Chiclayo",
        },
      },
      {
        type: "image",
        src: `${PAPA}/catedral-chiclayo.webp`,
        alt: {
          es: "Fachada neoclásica de la Catedral Santa María de Chiclayo",
          en: "Neoclassical façade of the Santa María Cathedral in Chiclayo",
        },
        caption: {
          es: "La Catedral, frente a la Plaza de Armas, es el punto de partida natural del recorrido urbano.",
          en: "The Cathedral, facing the Plaza de Armas, is the natural starting point of the city circuit.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Ubicada frente a la Plaza de Armas, la Catedral de Santa María es uno de los principales símbolos arquitectónicos y religiosos de Chiclayo. El templo, de estilo neoclásico, es uno de los puntos centrales de la ruta: la Municipalidad Provincial lo identifica como el hito principal del recorrido urbano, prácticamente frente al Parque Principal.",
          en: "Facing the Plaza de Armas, the Santa María Cathedral is one of Chiclayo's main architectural and religious landmarks. The neoclassical church is one of the route's central points: the Provincial Municipality identifies it as the main stop on the city circuit, practically opposite the main park.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Además de su valor arquitectónico, la Catedral tiene un significado especial por su vínculo con la trayectoria pastoral de Robert Prevost en Chiclayo.",
          en: "Beyond its architectural value, the Cathedral carries special meaning because of its link to Robert Prevost's pastoral work in Chiclayo.",
        },
      },
      {
        type: "tip",
        label: { es: "Tip para viajeros", en: "Traveler tip" },
        text: {
          es: "Aprovecha la visita para recorrer la Plaza de Armas y el resto del centro histórico: está todo a pie y en menos de una hora ves lo esencial.",
          en: "Use the visit to walk the Plaza de Armas and the rest of the historic center: it is all walkable, and you can see the essentials in under an hour.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "2. Santuario de Nuestra Señora de la Paz",
          en: "2. Sanctuary of Our Lady of Peace",
        },
      },
      {
        type: "image",
        src: `${PAPA}/santuario-virgen-de-la-paz.webp`,
        alt: {
          es: "Santuario de Nuestra Señora de la Paz en Chiclayo",
          en: "Sanctuary of Our Lady of Peace in Chiclayo",
        },
        caption: {
          es: "A 4.7 km del centro: uno de los espacios religiosos más queridos de la ciudad.",
          en: "4.7 km from downtown: one of the city's most beloved religious spaces.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "A pocos kilómetros del centro de Chiclayo se encuentra el Santuario de Nuestra Señora de la Paz, uno de los lugares religiosos más importantes de la ciudad.",
          en: "A few kilometers from downtown Chiclayo stands the Sanctuary of Our Lady of Peace, one of the city's most important religious sites.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "El santuario está vinculado a la vida pastoral de la Diócesis de Chiclayo y forma parte tanto de los circuitos turísticos oficiales como de los lugares que el Papa León XIV visitará durante su regreso al Perú. Es un espacio ideal para complementar la visita turística con una experiencia de carácter espiritual.",
          en: "The sanctuary is tied to the pastoral life of the Diocese of Chiclayo and appears both on the official tourist circuits and among the places Pope Leo XIV will visit on his return to Peru. It is an ideal spot to pair sightseeing with a more spiritual experience.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "3. Iglesia San Pedro de Monsefú",
          en: "3. San Pedro Church in Monsefú",
        },
      },
      {
        type: "image",
        src: `${PAPA}/iglesia-san-pedro-monsefu.webp`,
        alt: {
          es: "Iglesia San Pedro en la Plaza de Armas de Monsefú",
          en: "San Pedro Church on the main square of Monsefú",
        },
        caption: {
          es: "Monsefú, a 13.2 km: artesanía, gastronomía y fiestas patronales.",
          en: "Monsefú, 13.2 km away: crafts, food and patron-saint festivals.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La Ruta del Papa también se extiende fuera de Chiclayo. En Monsefú, la Iglesia San Pedro es uno de los templos incluidos en el circuito: está en la Plaza de Armas del distrito y es un centro importante de la vida religiosa y cultural de la localidad.",
          en: "The Pope's Route also reaches beyond Chiclayo. In Monsefú, San Pedro Church is one of the churches on the circuit: it sits on the district's main square and is a key center of local religious and cultural life.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La visita a Monsefú permite además conocer una de las localidades más tradicionales de Lambayeque, reconocida por su artesanía, su gastronomía y sus celebraciones religiosas.",
          en: "Visiting Monsefú also means seeing one of the most traditional towns in Lambayeque, known for its crafts, cuisine and religious celebrations.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "4. Iglesia Santa María Magdalena de Ciudad Eten",
          en: "4. Santa María Magdalena Church in Ciudad Eten",
        },
      },
      {
        type: "image",
        src: `${PAPA}/iglesia-ciudad-eten.webp`,
        alt: {
          es: "Iglesia Santa María Magdalena en Ciudad Eten",
          en: "Santa María Magdalena Church in Ciudad Eten",
        },
        caption: {
          es: "Ciudad Eten, a 16.5 km del Parque Principal de Chiclayo.",
          en: "Ciudad Eten, 16.5 km from Chiclayo's main park.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Otro punto destacado es la Iglesia Santa María Magdalena de Ciudad Eten. Este templo histórico forma parte de la ruta y está vinculado a la tradición religiosa de una localidad reconocida por su importancia cultural y espiritual.",
          en: "Another highlight is the Santa María Magdalena Church in Ciudad Eten. This historic church is part of the route and is tied to the religious tradition of a town known for its cultural and spiritual significance.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si tienes tiempo para ampliar el recorrido, visitar Ciudad Eten es una buena manera de conocer una faceta más tradicional de Lambayeque.",
          en: "If you have time to extend the route, Ciudad Eten is a good way to see a more traditional side of Lambayeque.",
        },
      },
      {
        type: "subheading",
        text: {
          es: "5. Convento San Agustín de Zaña",
          en: "5. San Agustín Convent in Zaña",
        },
      },
      {
        type: "image",
        src: `${PAPA}/convento-san-agustin-zana.webp`,
        alt: {
          es: "Ruinas del Convento San Agustín en Zaña",
          en: "Ruins of the San Agustín Convent in Zaña",
        },
        caption: {
          es: "Zaña, a 46.6 km: el tramo más largo de la ruta y el más histórico.",
          en: "Zaña, 46.6 km away: the longest leg of the route, and the most historic.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "A unos kilómetros de Chiclayo se encuentra Zaña, localidad conocida por su patrimonio histórico. El Convento San Agustín forma parte de la Ruta del Papa promovida por la Municipalidad de Chiclayo y permite combinar turismo religioso con historia y patrimonio.",
          en: "A few kilometers from Chiclayo lies Zaña, a town known for its historic heritage. The San Agustín Convent is part of the Pope's Route promoted by the Municipality of Chiclayo, and it lets you combine religious tourism with history and heritage.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si quieres armar una ruta más completa, dedica parte del día a recorrer Zaña y sus construcciones históricas.",
          en: "If you want a fuller route, set aside part of a day for Zaña and its historic buildings.",
        },
      },
      {
        type: "heading",
        id: "cuanto-tiempo",
        text: {
          es: "¿Cuánto tiempo necesitas para hacer la ruta?",
          en: "How much time do you need for the route?",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Depende de cuánto quieras recorrer. Para conocer los principales puntos dentro de Chiclayo basta con medio día o un día completo. Si quieres ampliar hacia Monsefú, Ciudad Eten y Zaña, lo recomendable es dedicar uno o dos días, según el ritmo del viaje.",
          en: "It depends on how much you want to cover. Half a day or a full day is enough for the main stops inside Chiclayo. If you want to extend toward Monsefú, Ciudad Eten and Zaña, plan on one or two days, depending on your pace.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Como referencia, estas son las distancias que señala la Municipalidad de Chiclayo desde el Parque Principal:",
          en: "For reference, these are the distances the Municipality of Chiclayo gives from the main park:",
        },
      },
      {
        type: "table",
        head: [
          { es: "Lugar", en: "Place" },
          { es: "Distancia aproximada", en: "Approx. distance" },
        ],
        rows: [
          [
            { es: "Catedral de Chiclayo", en: "Chiclayo Cathedral" },
            { es: "0.02 km", en: "0.02 km" },
          ],
          [
            {
              es: "Santuario Virgen de la Paz",
              en: "Sanctuary of Our Lady of Peace",
            },
            { es: "4.7 km", en: "4.7 km" },
          ],
          [
            {
              es: "Iglesia San Pedro de Monsefú",
              en: "San Pedro Church, Monsefú",
            },
            { es: "13.2 km", en: "13.2 km" },
          ],
          [
            {
              es: "Iglesia Santa María Magdalena de Ciudad Eten",
              en: "Santa María Magdalena Church, Ciudad Eten",
            },
            { es: "16.5 km", en: "16.5 km" },
          ],
          [
            {
              es: "Convento San Agustín de Zaña",
              en: "San Agustín Convent, Zaña",
            },
            { es: "46.6 km", en: "46.6 km" },
          ],
        ],
      },
      {
        type: "heading",
        id: "que-mas-conocer",
        text: {
          es: "¿Qué más puedes conocer durante tu visita?",
          en: "What else can you see while you are here?",
        },
      },
      {
        type: "image",
        src: `${PAPA}/atractivos-lambayeque.webp`,
        alt: {
          es: "Museos, playas, gastronomía y artesanía de Lambayeque",
          en: "Museums, beaches, food and crafts of Lambayeque",
        },
        caption: {
          es: "La ruta religiosa se combina bien con museos, playa y cocina lambayecana.",
          en: "The religious route pairs well with museums, the coast and Lambayeque cooking.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Una de las ventajas de hacer la Ruta del Papa es que puedes combinarla con otros atractivos de Lambayeque. Por ejemplo:",
          en: "One advantage of the Pope's Route is that you can combine it with other Lambayeque attractions. For example:",
        },
      },
      {
        type: "list",
        items: [
          {
            text: {
              es: "Museos arqueológicos: Tumbas Reales de Sipán y Museo Nacional Sicán.",
              en: "Archaeological museums: Royal Tombs of Sipán and the Sicán National Museum.",
            },
          },
          {
            text: {
              es: "Playa Pimentel, con su muelle y su malecón.",
              en: "Pimentel beach, with its pier and boardwalk.",
            },
          },
          {
            text: {
              es: "Playa Santa Rosa y su caleta de pescadores.",
              en: "Santa Rosa beach and its fishing cove.",
            },
          },
          {
            text: {
              es: "Centro histórico de Chiclayo y mercado Modelo.",
              en: "Chiclayo's historic center and the Mercado Modelo.",
            },
          },
          {
            text: {
              es: "Gastronomía tradicional lambayecana: arroz con pato, causa ferreñafana, king kong.",
              en: "Traditional Lambayeque food: arroz con pato, causa ferreñafana, king kong.",
            },
          },
          {
            text: {
              es: "Artesanía de Monsefú: tejidos en paja y algodón nativo.",
              en: "Monsefú crafts: straw weaving and native cotton textiles.",
            },
          },
        ],
      },
      {
        type: "paragraph",
        text: {
          es: "De hecho, la propuesta oficial de la Ruta del Papa busca justamente conectar la dimensión religiosa con el patrimonio cultural y la identidad regional.",
          en: "In fact, the official proposal for the Pope's Route is designed precisely to connect the religious dimension with cultural heritage and regional identity.",
        },
      },
      {
        type: "heading",
        id: "consejos",
        text: {
          es: "Consejos para recorrer la Ruta del Papa",
          en: "Tips for following the Pope's Route",
        },
      },
      {
        type: "list",
        ordered: true,
        items: [
          {
            title: {
              es: "Planifica la ruta con anticipación",
              en: "Plan the route ahead",
            },
            text: {
              es: "Algunos puntos están dentro de Chiclayo y otros requieren desplazarse a distritos cercanos. Agrupa por zona.",
              en: "Some stops are inside Chiclayo and others require traveling to nearby districts. Group them by area.",
            },
          },
          {
            title: { es: "Usa ropa cómoda", en: "Wear comfortable clothes" },
            text: {
              es: "Si visitas varios templos en el día vas a caminar bastante y a moverte entre puntos con sol de norte.",
              en: "If you visit several churches in one day you will walk a lot and move between stops under northern sun.",
            },
          },
          {
            title: {
              es: "Respeta los espacios religiosos",
              en: "Respect the religious spaces",
            },
            text: {
              es: "Muchos de estos lugares siguen funcionando como templos y espacios de culto activo.",
              en: "Many of these places are still working churches and active places of worship.",
            },
          },
          {
            title: {
              es: "Aprovecha la cocina local",
              en: "Make time for the local food",
            },
            text: {
              es: "Una ruta por Lambayeque no está completa sin sentarse a probar los platos tradicionales de la región.",
              en: "A route through Lambayeque is not complete without sitting down to the region's traditional dishes.",
            },
          },
          {
            title: {
              es: "Consulta información actualizada",
              en: "Check current information",
            },
            text: {
              es: "Horarios de ingreso, celebraciones y actividades especiales pueden variar, sobre todo en fechas cercanas a la visita papal.",
              en: "Opening hours, services and special events can change, especially around the dates of the papal visit.",
            },
          },
        ],
      },
      {
        type: "heading",
        id: "donde-hospedarse",
        text: {
          es: "¿Dónde hospedarse para conocer la Ruta del Papa?",
          en: "Where to stay for the Pope's Route",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si estás pensando en recorrer la Ruta del Papa, Chiclayo es el mejor punto de partida. Hospedarte en la ciudad te permite llegar fácil a los principales puntos del circuito y, de paso, disfrutar de la gastronomía, la cultura y el resto de atractivos de Lambayeque.",
          en: "If you are planning to follow the Pope's Route, Chiclayo is the best base. Staying in the city puts you within easy reach of the main stops, with the region's food, culture and other attractions on the side.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "En Zentra Hotel & Cowork encontrarás distintas alternativas de alojamiento en Chiclayo, pensadas para viajeros que buscan comodidad y una ubicación práctica. Desde nuestras sedes puedes organizar tus recorridos y volver a descansar después de un día completo descubriendo Lambayeque.",
          en: "At Zentra Hotel & Cowork you will find several places to stay in Chiclayo, designed for travelers who want comfort and a practical location. From any of our locations you can plan your trips and come back to rest after a full day exploring Lambayeque.",
        },
      },
      {
        type: "cta",
        title: {
          es: "¿Listo para descubrir la Ruta del Papa León XIV?",
          en: "Ready to discover the Pope Leo XIV Route?",
        },
        text: {
          es: "Haz de Chiclayo tu punto de partida y vive una experiencia que combina fe, historia, cultura y tradición en uno de los destinos más interesantes del norte del Perú.",
          en: "Make Chiclayo your starting point and take on an experience that blends faith, history, culture and tradition in one of northern Peru's most interesting destinations.",
        },
        label: {
          es: "Reserva tu estadía en Zentra",
          en: "Book your stay at Zentra",
        },
        href: "/habitaciones",
      },
    ],
  },
};
