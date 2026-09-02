// Cuerpo de los artículos del diario Zentra (guías locales, viajero, corporativo y casa).
// Se une a `blogArticles` en blog-articles.ts.
import type { BlogArticle } from "@/features/blog/types";

export const blogArticlesDiario: Record<string, BlogArticle> = {
  // ---------------------------------------------------------------------------
  "chiclayo-en-48-horas": {
    lead: {
      es: "Este es, literalmente, el itinerario que imprimimos en recepción y le damos a los huéspedes que llegan un viernes por la noche. Dos días, tiempos reales de trayecto y ni una sola parada de relleno.",
      en: "This is, literally, the itinerary we print at the front desk and hand to guests who arrive on a Friday night. Two days, real travel times, and not a single filler stop.",
    },
    tags: [
      { es: "Chiclayo", en: "Chiclayo" },
      { es: "Itinerarios", en: "Itineraries" },
      { es: "48 horas", en: "48 hours" },
    ],
    body: [
      {
        type: "paragraph",
        text: {
          es: "Chiclayo se recorre bien en dos días si sabes en qué orden hacerlo. El error más común es empezar por los museos a mediodía: llegas con el calor encima y con las salas llenas. Este itinerario está armado al revés — lo pesado temprano, lo tranquilo en la tarde.",
          en: "Chiclayo works well in two days if you know the order to do it in. The most common mistake is starting at the museums around noon: you arrive in the heat, with the galleries full. This itinerary is built the other way round — the demanding parts early, the calm ones in the afternoon.",
        },
      },
      {
        type: "heading",
        id: "dia-1",
        text: {
          es: "Día 1: historia por la mañana, ciudad por la tarde",
          en: "Day 1: history in the morning, the city in the afternoon",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Sal del hotel a las 8:30. El Museo Tumbas Reales de Sipán, en Lambayeque, está a 20 minutos en auto y abre a las 9:00. Si llegas en la primera hora tienes las salas de oro casi para ti; a partir de las 11:00 entran las delegaciones escolares y el ritmo cambia por completo.",
          en: "Leave the hotel at 8:30. The Royal Tombs of Sipán Museum, in Lambayeque, is a 20-minute drive away and opens at 9:00. Arrive in the first hour and the gold rooms are practically yours; from 11:00 the school groups come in and the pace changes completely.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "De regreso, almuerza en el centro y baja al mercado Modelo por la tarde: la zona de hierbas y la de artesanía son las que valen el recorrido. Cierra el día caminando la Plaza de Armas y la Catedral cuando baja el sol.",
          en: "On the way back, have lunch downtown and head to the Mercado Modelo in the afternoon: the herb section and the crafts section are the ones worth the walk. Close the day walking the Plaza de Armas and the Cathedral as the sun drops.",
        },
      },
      {
        type: "tip",
        label: { es: "Tip de recepción", en: "Front-desk tip" },
        text: {
          es: "Pide en recepción que te llamemos un taxi de confianza para el trayecto a Lambayeque. Cuesta lo mismo que uno de la calle y te espera afuera del museo.",
          en: "Ask the front desk to call one of our trusted taxis for the Lambayeque leg. It costs the same as flagging one down, and the driver waits for you outside the museum.",
        },
      },
      {
        type: "heading",
        id: "dia-2",
        text: {
          es: "Día 2: mar, muelle y arroz con pato",
          en: "Day 2: sea, pier and arroz con pato",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Pimentel está a 15 minutos. Ve temprano, camina el muelle antes de las 11:00 y quédate a almorzar frente al mar. Si prefieres algo más de pueblo, Santa Rosa está a 10 minutos más y su caleta de pescadores es la mejor postal del viaje.",
          en: "Pimentel is 15 minutes away. Go early, walk the pier before 11:00, and stay for lunch facing the sea. If you want something more village-like, Santa Rosa is another 10 minutes on, and its fishing cove is the best postcard of the trip.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "La tarde déjala libre. Es cuando la mayoría de huéspedes vuelve al hotel, se ducha y sale recién a las 7:00 a cenar. El arroz con pato de la noche del segundo día es casi un ritual — tenemos una lista aparte de dónde comerlo.",
          en: "Leave the afternoon open. That is when most guests come back to the hotel, shower, and head out again at 7:00 for dinner. Arroz con pato on the second night is almost a ritual — we keep a separate list of where to eat it.",
        },
      },
      {
        type: "heading",
        id: "tiempos",
        text: {
          es: "Tiempos reales desde el hotel",
          en: "Real travel times from the hotel",
        },
      },
      {
        type: "table",
        head: [
          { es: "Destino", en: "Destination" },
          { es: "Tiempo en auto", en: "By car" },
        ],
        rows: [
          [
            { es: "Museo Tumbas Reales (Lambayeque)", en: "Royal Tombs Museum (Lambayeque)" },
            { es: "20 min", en: "20 min" },
          ],
          [
            { es: "Museo Nacional Sicán (Ferreñafe)", en: "Sicán National Museum (Ferreñafe)" },
            { es: "25 min", en: "25 min" },
          ],
          [
            { es: "Playa Pimentel", en: "Pimentel beach" },
            { es: "15 min", en: "15 min" },
          ],
          [
            { es: "Playa Santa Rosa", en: "Santa Rosa beach" },
            { es: "25 min", en: "25 min" },
          ],
          [
            { es: "Mercado Modelo", en: "Mercado Modelo" },
            { es: "8 min", en: "8 min" },
          ],
        ],
      },
      {
        type: "quote",
        text: {
          es: "Si solo tienes un día, quédate con Tumbas Reales por la mañana y Pimentel al atardecer. Es el resumen honesto de Lambayeque.",
          en: "If you only have one day, take the Royal Tombs in the morning and Pimentel at sunset. That is the honest summary of Lambayeque.",
        },
        cite: { es: "Lucía Reyna, concierge Zentra", en: "Lucía Reyna, Zentra concierge" },
      },
      {
        type: "cta",
        title: {
          es: "¿Vienes este fin de semana?",
          en: "Coming this weekend?",
        },
        text: {
          es: "Reserva directo en la web y te armamos el itinerario según tu hora de llegada.",
          en: "Book directly on the site and we will adapt the itinerary to your arrival time.",
        },
        label: { es: "Ver habitaciones", en: "See rooms" },
        href: "/habitaciones",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  "arroz-con-pato-conserje": {
    lead: {
      es: "Cuatro huariques que llevamos años recomendando. Ninguno es cadena, ninguno pasa de 40 soles el plato y en ninguno hace falta reservar. Lo único que piden es ir temprano.",
      en: "Four hole-in-the-wall spots we have been recommending for years. None are chains, none go over 40 soles a plate, and none need a reservation. The only thing they ask is that you go early.",
    },
    tags: [
      { es: "Gastronomía", en: "Food" },
      { es: "Chiclayo", en: "Chiclayo" },
      { es: "Huariques", en: "Local spots" },
    ],
    body: [
      {
        type: "paragraph",
        text: {
          es: "El arroz con pato es el plato con el que Lambayeque se presenta. La versión buena lleva culantro molido en piedra, chicha de jora en la cocción y el pato entero, no en trozos sueltos. La diferencia entre uno correcto y uno memorable está casi siempre en la chicha.",
          en: "Arroz con pato is the dish Lambayeque introduces itself with. The good version uses cilantro ground on stone, chicha de jora in the cooking, and a whole duck rather than loose pieces. The difference between a decent one and a memorable one is almost always the chicha.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Estos son los cuatro que mandamos sin dudar, en el orden en que los recomendamos según qué tan lejos quieras ir.",
          en: "These are the four we send people to without hesitating, ordered by how far you are willing to go.",
        },
      },
      {
        type: "subheading",
        text: { es: "1. El del centro, a diez minutos a pie", en: "1. The downtown one, ten minutes on foot" },
      },
      {
        type: "paragraph",
        text: {
          es: "Es el más práctico si llegas tarde o no quieres tomar taxi. Sirven desde el mediodía y para las 2:00 ya se les acabó. Pide media porción si vas a seguir el día: la entera es generosa de verdad.",
          en: "The most practical option if you arrive late or would rather not take a taxi. They serve from noon and by 2:00 it is gone. Ask for a half portion if you have plans afterwards: the full one is genuinely generous.",
        },
      },
      {
        type: "subheading",
        text: { es: "2. El de Monsefú, para ir el fin de semana", en: "2. The one in Monsefú, for the weekend" },
      },
      {
        type: "paragraph",
        text: {
          es: "A 20 minutos en auto. Vale el viaje sobre todo el domingo, cuando el pueblo está en movimiento y puedes combinar el almuerzo con la feria de artesanía.",
          en: "A 20-minute drive. Worth the trip especially on Sunday, when the town is busy and you can pair lunch with the crafts market.",
        },
      },
      {
        type: "subheading",
        text: { es: "3. El de la carretera a Pimentel", en: "3. The one on the road to Pimentel" },
      },
      {
        type: "paragraph",
        text: {
          es: "Comedor grande, mesas de plástico, ventilador y una carta corta. Es el que recomendamos a quienes vuelven de la playa: queda de paso y a esa hora todavía tienen pato.",
          en: "A big dining room, plastic tables, a fan and a short menu. This is the one we recommend to people coming back from the beach: it is on the way, and at that hour they still have duck.",
        },
      },
      {
        type: "subheading",
        text: { es: "4. El de la casa, sin cartel", en: "4. The house one, no sign outside" },
      },
      {
        type: "paragraph",
        text: {
          es: "Es una casa con dos mesas y hay que preguntar en recepción cómo llegar porque no tiene cartel ni aparece en Google Maps. Cocinan por encargo, así que hay que avisar la mañana anterior. Es el mejor de los cuatro.",
          en: "A house with two tables. You have to ask at the front desk for directions because there is no sign and it does not show up on Google Maps. They cook to order, so you have to call the morning before. It is the best of the four.",
        },
      },
      {
        type: "tip",
        label: { es: "Regla del conserje", en: "Concierge rule" },
        text: {
          es: "Arroz con pato se come al mediodía. Si un sitio te lo ofrece a las nueve de la noche, sospecha: casi seguro es recalentado.",
          en: "Arroz con pato is a midday dish. If a place offers it at nine at night, be suspicious: it is almost certainly reheated.",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  "trabajar-remoto-chiclayo": {
    lead: {
      es: "Cafés silenciosos, coworkings con Wi-Fi que aguanta videollamada y una biblioteca pública que no sale en Google Maps. Cinco opciones probadas por huéspedes que trabajan desde aquí todo el mes.",
      en: "Quiet cafés, coworkings with Wi-Fi that survives a video call, and a public library that does not appear on Google Maps. Five options tested by guests who work from here all month.",
    },
    tags: [
      { es: "Workation", en: "Workation" },
      { es: "Coworking", en: "Coworking" },
      { es: "Trabajo remoto", en: "Remote work" },
    ],
    body: [
      {
        type: "paragraph",
        text: {
          es: "Trabajar desde la habitación funciona los primeros días. Después uno necesita cambiar de aire, aunque sea para una mañana. Estas son las cinco alternativas que más nos piden — todas a menos de 15 minutos del hotel.",
          en: "Working from your room is fine for the first few days. After that you need a change of scene, even for a morning. These are the five options guests ask for most — all under 15 minutes from the hotel.",
        },
      },
      {
        type: "image",
        src: "/images/plaza/cowork-plaza-tres.webp",
        alt: {
          es: "Espacio de coworking Nexus con escritorios y luz natural",
          en: "Nexus coworking space with desks and natural light",
        },
        caption: {
          es: "Nexus Cowork, en la sede Plaza: el plan que más usan los huéspedes de estadía larga.",
          en: "Nexus Cowork, at the Plaza location: the option long-stay guests use most.",
        },
      },
      {
        type: "heading",
        id: "opciones",
        text: { es: "Las cinco, en orden de silencio", en: "The five, ranked by quiet" },
      },
      {
        type: "list",
        ordered: true,
        items: [
          {
            title: { es: "Nexus Cowork (sede Plaza)", en: "Nexus Cowork (Plaza location)" },
            text: {
              es: "Salas cerradas para llamadas, escritorios flex y café incluido. El primer día tiene descuento si te hospedas con nosotros.",
              en: "Closed rooms for calls, flex desks and coffee included. The first day is discounted if you are staying with us.",
            },
          },
          {
            title: { es: "La biblioteca municipal", en: "The municipal library" },
            text: {
              es: "Gratis, silenciosa y con mesas grandes. No tiene Wi-Fi confiable: sirve para trabajo de concentración, no para videollamadas.",
              en: "Free, quiet, with big tables. The Wi-Fi is not reliable: good for focused work, not for video calls.",
            },
          },
          {
            title: { es: "Cafés del centro", en: "Downtown cafés" },
            text: {
              es: "Dos cuadras alrededor de la Plaza de Armas hay tres con enchufes cerca de la ventana. Antes de las 10:00 están vacíos.",
              en: "Within two blocks of the Plaza de Armas there are three with outlets near the window. Before 10:00 they are empty.",
            },
          },
          {
            title: { es: "El comedor del hotel, fuera de horario", en: "The hotel dining room, off-hours" },
            text: {
              es: "Entre las 10:30 y las 12:30 queda libre y es el lugar más tranquilo de la casa. Mesa grande, buena luz y Wi-Fi 5G.",
              en: "Between 10:30 and 12:30 it is free, and it is the calmest spot in the house. Big table, good light and 5G Wi-Fi.",
            },
          },
          {
            title: { es: "Malecón de Pimentel", en: "Pimentel boardwalk" },
            text: {
              es: "Para un viernes de agenda ligera. Hay cafés con vista al muelle; la señal móvil funciona mejor que el Wi-Fi del local.",
              en: "For a light-agenda Friday. There are cafés looking onto the pier; mobile data works better than the venue Wi-Fi.",
            },
          },
        ],
      },
      {
        type: "tip",
        label: { es: "Antes de la videollamada", en: "Before the video call" },
        text: {
          es: "Si tienes una reunión importante, resérvala en la sala cerrada de Nexus. En la ciudad casi ningún café aguanta más de 40 minutos de cámara encendida.",
          en: "If you have an important meeting, book the closed room at Nexus. In the city almost no café holds up beyond 40 minutes with the camera on.",
        },
      },
      {
        type: "cta",
        title: { es: "Estadía larga con cowork incluido", en: "Long stays with coworking included" },
        text: {
          es: "Tenemos tarifas de larga estadía que incluyen acceso a Nexus Cowork de lunes a viernes.",
          en: "We have long-stay rates that include access to Nexus Cowork Monday through Friday.",
        },
        label: { es: "Ver promociones", en: "See offers" },
        href: "/promociones",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  "empacar-viaje-norte-peru": {
    lead: {
      es: "Julio amanece nublado y a las dos de la tarde marca 28°. Esta es la lista corta de qué llevar y qué dejar en casa, hecha con lo que nos piden prestado los clientes corporativos frecuentes.",
      en: "July mornings are overcast and by two in the afternoon it hits 28°. This is the short list of what to bring and what to leave behind, built from what frequent corporate guests end up asking to borrow.",
    },
    tags: [
      { es: "Viaje corporativo", en: "Business travel" },
      { es: "Equipaje", en: "Packing" },
      { es: "Norte del Perú", en: "Northern Peru" },
    ],
    body: [
      {
        type: "paragraph",
        text: {
          es: "El clima de Chiclayo engaña. La mañana pide manga larga y la tarde no perdona el saco. Si vienes por dos o tres días de reuniones, con un carry-on alcanza — siempre que empaques pensando en capas y no en conjuntos.",
          en: "Chiclayo's weather is deceptive. The morning calls for long sleeves and the afternoon does not forgive a blazer. If you are coming for two or three days of meetings, a carry-on is enough — as long as you pack in layers rather than outfits.",
        },
      },
      {
        type: "heading",
        id: "llevar",
        text: { es: "Lo que sí llevar", en: "What to bring" },
      },
      {
        type: "list",
        items: [
          {
            text: {
              es: "Dos camisas livianas de algodón; el poliéster no funciona a esta temperatura.",
              en: "Two lightweight cotton shirts; polyester does not work at this temperature.",
            },
          },
          {
            text: {
              es: "Un saco desestructurado, solo si tienes reunión formal. El resto del tiempo sobra.",
              en: "One unstructured blazer, only if you have a formal meeting. The rest of the time it is dead weight.",
            },
          },
          {
            text: {
              es: "Zapatos cómodos: el centro se camina y las veredas no siempre están parejas.",
              en: "Comfortable shoes: downtown is walkable and the sidewalks are not always even.",
            },
          },
          {
            text: {
              es: "Bloqueador. Aunque esté nublado, el sol del norte quema igual.",
              en: "Sunscreen. Even when it is overcast, the northern sun still burns.",
            },
          },
          {
            text: {
              es: "Un adaptador y cargador de repuesto — es lo que más nos piden prestado en recepción.",
              en: "An adapter and a spare charger — the single most borrowed item at our front desk.",
            },
          },
        ],
      },
      {
        type: "heading",
        id: "dejar",
        text: { es: "Lo que puedes dejar en casa", en: "What you can leave at home" },
      },
      {
        type: "list",
        items: [
          {
            text: {
              es: "Casaca gruesa o abrigo. En todo el año no la vas a usar.",
              en: "A heavy jacket or coat. You will not use it at any point in the year.",
            },
          },
          {
            text: {
              es: "Plancha y secadora: las habitaciones ya las tienen.",
              en: "Iron and hair dryer: the rooms already have them.",
            },
          },
          {
            text: {
              es: "Paraguas. Llueve muy poco y cuando llueve, dura minutos.",
              en: "An umbrella. It rains very little, and when it does it lasts minutes.",
            },
          },
        ],
      },
      {
        type: "tip",
        label: { es: "Dato de agenda", en: "Scheduling note" },
        text: {
          es: "Si tu reunión es en el parque industrial o en Reque, considera 30 minutos de trayecto en hora punta. Desde el hotel a la mayoría de oficinas del centro son menos de 10.",
          en: "If your meeting is in the industrial park or in Reque, allow 30 minutes at rush hour. From the hotel to most downtown offices it is under 10.",
        },
      },
      {
        type: "cta",
        title: { es: "¿Viajas por trabajo seguido?", en: "Traveling for work often?" },
        text: {
          es: "Tenemos tarifas corporativas con facturación mensual y check-in prioritario.",
          en: "We offer corporate rates with monthly invoicing and priority check-in.",
        },
        label: { es: "Ver plan corporativo", en: "See corporate plan" },
        href: "/empresa",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  "tumbas-reales-sin-turistas": {
    lead: {
      es: "Un dato práctico y probado: si entras antes de las 10:30 tienes las salas de oro casi para ti. Aquí va cómo coordinar el trayecto de 20 minutos desde el hotel y qué ver primero.",
      en: "One practical, tested tip: get in before 10:30 and the gold rooms are practically yours. Here is how to plan the 20-minute trip from the hotel, and what to see first.",
    },
    tags: [
      { es: "Museos", en: "Museums" },
      { es: "Sipán", en: "Sipán" },
      { es: "Chiclayo", en: "Chiclayo" },
    ],
    body: [
      {
        type: "paragraph",
        text: {
          es: "El Museo Tumbas Reales de Sipán está en Lambayeque, a 20 minutos del hotel, y es el mejor museo arqueológico del norte del país. También es el más visitado, y ahí está el problema: a partir de las 11:00 la sala del Señor de Sipán se llena de grupos guiados y ver la tumba con calma se vuelve imposible.",
          en: "The Royal Tombs of Sipán Museum is in Lambayeque, 20 minutes from the hotel, and it is the best archaeological museum in the north of the country. It is also the busiest, and that is the catch: from 11:00 the Lord of Sipán room fills with guided groups and seeing the tomb calmly becomes impossible.",
        },
      },
      {
        type: "heading",
        id: "la-hora",
        text: { es: "La hora exacta", en: "The exact hour" },
      },
      {
        type: "paragraph",
        text: {
          es: "Abre a las 9:00 de martes a domingo. Sal del hotel 8:30, compra la entrada al llegar y sube directo al tercer piso: el recorrido está diseñado de arriba hacia abajo. Entre 9:00 y 10:30 el museo está prácticamente vacío. Los lunes cierra.",
          en: "It opens at 9:00, Tuesday to Sunday. Leave the hotel at 8:30, buy your ticket on arrival, and go straight to the third floor: the route is designed top to bottom. Between 9:00 and 10:30 the museum is practically empty. It closes on Mondays.",
        },
      },
      {
        type: "heading",
        id: "que-ver",
        text: { es: "Qué ver si tienes una hora", en: "What to see if you only have an hour" },
      },
      {
        type: "list",
        ordered: true,
        items: [
          {
            title: { es: "La sala del ajuar", en: "The burial goods room" },
            text: {
              es: "Las orejeras de turquesa y el pectoral de conchas. Es lo que después no vas a ver en ninguna foto igual.",
              en: "The turquoise ear ornaments and the shell pectoral. No photograph you see later does them justice.",
            },
          },
          {
            title: { es: "La reconstrucción de la tumba", en: "The tomb reconstruction" },
            text: {
              es: "Ocupa una sala entera y explica el hallazgo mejor que cualquier cartel.",
              en: "It takes up an entire room and explains the discovery better than any wall text.",
            },
          },
          {
            title: { es: "La cripta final", en: "The final crypt" },
            text: {
              es: "Está al final del recorrido, con poca luz. Ve sin prisa: es la parte que la gente se salta por cansancio.",
              en: "It is at the end of the route, dimly lit. Take your time: it is the part people skip out of fatigue.",
            },
          },
        ],
      },
      {
        type: "tip",
        label: { es: "Importante", en: "Important" },
        text: {
          es: "No se permite tomar fotos dentro. Deja la cámara en el hotel o en el guardarropa del museo y evita la discusión en la entrada.",
          en: "Photography is not allowed inside. Leave your camera at the hotel or in the museum cloakroom and skip the argument at the door.",
        },
      },
      {
        type: "paragraph",
        text: {
          es: "Si te queda tiempo, el Museo Nacional Sicán en Ferreñafe está a 25 minutos y casi nunca tiene cola. Los dos en una mañana es posible, aunque llegarás al almuerzo pasadas las 2:00.",
          en: "If you have time left, the Sicán National Museum in Ferreñafe is 25 minutes away and almost never has a queue. Both in one morning is possible, though you will get to lunch after 2:00.",
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  "rituales-casa-zentra": {
    lead: {
      es: "Café de altura del norte, infusión fría de maracuyá y una toalla caliente si vienes en avión. Detalles pequeños que hacen que la primera hora en el hotel se sienta distinta.",
      en: "Northern high-altitude coffee, cold passion-fruit infusion, and a warm towel if you are arriving by plane. Small details that make the first hour in the hotel feel different.",
    },
    tags: [
      { es: "Casa Zentra", en: "House Zentra" },
      { es: "Bienvenida", en: "Welcome" },
      { es: "Servicio", en: "Service" },
    ],
    body: [
      {
        type: "paragraph",
        text: {
          es: "Un check-in puede resolverse en tres minutos o puede ser la primera cosa buena del viaje. Nos quedamos con la segunda. Estos son los rituales de la casa — ninguno cuesta extra y ninguno hay que pedirlo.",
          en: "A check-in can be settled in three minutes, or it can be the first good thing about the trip. We prefer the second. These are the house rituals — none cost extra, and none need to be requested.",
        },
      },
      {
        type: "image",
        src: "/images/zen-room3.webp",
        alt: {
          es: "Detalle de bienvenida en una suite de Zentra Hotel",
          en: "Welcome detail in a Zentra Hotel suite",
        },
        caption: {
          es: "La bandeja de llegada cambia según la hora: caliente antes del mediodía, fría después.",
          en: "The arrival tray changes with the hour: warm before noon, cold after.",
        },
      },
      {
        type: "heading",
        id: "rituales",
        text: { es: "Los tres de siempre", en: "The three constants" },
      },
      {
        type: "list",
        items: [
          {
            title: { es: "Café de altura del norte", en: "Northern high-altitude coffee" },
            text: {
              es: "De productores de la sierra de Lambayeque y Cajamarca. Se sirve en recepción de 6:00 a 11:00.",
              en: "From growers in the highlands of Lambayeque and Cajamarca. Served at reception from 6:00 to 11:00.",
            },
          },
          {
            title: { es: "Infusión fría de maracuyá", en: "Cold passion-fruit infusion" },
            text: {
              es: "Para las llegadas de la tarde, que en Chiclayo son las que llegan con más calor encima.",
              en: "For afternoon arrivals, which in Chiclayo are the ones that arrive with the most heat on them.",
            },
          },
          {
            title: { es: "Toalla caliente al llegar en avión", en: "Warm towel for arrivals by plane" },
            text: {
              es: "Si tu reserva viene con vuelo, la tenemos lista en el mostrador antes de que firmes.",
              en: "If your booking includes a flight, it is waiting on the counter before you sign.",
            },
          },
        ],
      },
      {
        type: "quote",
        text: {
          es: "La primera hora define cómo recuerdas un hotel. El resto es consecuencia.",
          en: "The first hour defines how you remember a hotel. Everything else follows from it.",
        },
        cite: { es: "Equipo Zentra", en: "Zentra team" },
      },
      {
        type: "cta",
        title: { es: "Reserva directo y avísanos tu hora de llegada", en: "Book direct and tell us your arrival time" },
        text: {
          es: "Con el dato del vuelo dejamos todo listo antes de que cruces la puerta.",
          en: "With your flight details we have everything ready before you walk through the door.",
        },
        label: { es: "Ver habitaciones", en: "See rooms" },
        href: "/habitaciones",
      },
    ],
  },
};
