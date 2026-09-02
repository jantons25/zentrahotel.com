// Cuerpo extendido de cada post del diario (bajada, etiquetas y bloques del artículo).
// Se resuelve por slug desde la página de detalle: /blog/[slug].
import { blogArticlesDiario } from "@/features/blog/data/blog-articles-diario";
import type { BlogArticle } from "@/features/blog/types";

const PAPA = "/images/blog/ruta-del-papa";

export const blogArticles: Record<string, BlogArticle> = {
  ...blogArticlesDiario,

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
