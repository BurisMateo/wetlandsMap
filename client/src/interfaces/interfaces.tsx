
interface infoboxAction {
    label: string,
    eventHandler: () => void
}
export interface marker {
    metadata?: {
        title: string,
        description?: string,
        visible?: boolean,
        actions?:infoboxAction[],
    },
    center:  bingMapPosition,
}

export interface infobox {
    center: bingMapPosition,
    title: string,
    description: string
}

export type bingMapPosition = { latitude: number, longitude: number, altitude?: number, altitudeReference?: number };

export type axiosResp = {
    // `data` is the response that was provided by the server
    data: any,
    // `status` is the HTTP status code from the server response
    status: number,
    // `statusText` is the HTTP status message from the server response - EX: 'OK'
    statusText: string,
    // `headers` the HTTP headers that the server responded with
    // All header names are lower cased and can be accessed using the bracket notation.
    // Example: `response.headers['content-type']`
    headers: any,
    // `config` is the config that was provided to `axios` for the request
    config: any,
    // `request` is the request that generated this response
    // It is the last ClientRequest instance in node.js (in redirects)
    // and an XMLHttpRequest instance in the browser
    request: any
}

export type postCategory = 'humedal' | 'amenazas' | 'iniciativas' | 'arte' | 'investigacion';

export interface post {
    id: string,
    status: 'pending' | 'refused' | 'approved',
    category: postCategory,
    subcategory: {
        wetland?: optionalWetland,
        threath?: optionalThreat,
        initiative?: optionalInitiative,
        art?: optionalsArt,
        investigation?: optionalInvestigation
    },
    content: {
        title: string,
        description: string,
        files: any[]
    },
    ubication: { latitude: string, longitude: string },
    keyword: string[]
}

type typeWetland = "Rio" | "Laguna natural" | "Laguna artifical" | "Cañada" | "Arroyo" | "Desconocido";
type typeOutskirt = "Industrial" | "Residencial" | " Agropecuaria" | "Reserva natural";
type typePollutant = "Actividad industrial" | "Actividad agrícola" | "Actividad ganadera" | "Alteración de márgenes del humedal" | "Emprendimiento inmobiliario" | "Asentamientos urbanos";
type typeArt = "Producciones artísticas" | "Fotos" | "Audiovisuales" | "Redacciones" | "Documentos";
type typeInstitute = "Escolar" | "Universitario" | "Laboratorio" | "Instituciones de Investigación" | "Privado" | "ONG" | "Otro";
interface optionalWetland {
    type: typeWetland,
    color?: string,
    smell?: string,
    outskirts?: typeOutskirt,
    flora?: "Acuática" | "Terrestre" | "Otra",
    margins?: "Alterado " | "Inalterado"
}


interface optionalThreat {
    analysis?: {
        type: "Físico-químico" | "Microbiológico" | "Biológico",
        results: 'Buena' | "Regular" | "Mala"
    },
    pollutants?: typePollutant[]
    aspect?: {
        type: "Olor" | "Color" | "Materia organiza en la superficie" | "Espuma" | "Algas",
        description: string
    }
}

interface optionalInitiative {
    type:  "Proyecto" | "Actividad/es" | "Desconocido",
    organizator?: "Vecinos" | "Organización" | "Municipio" | "Otro" | "Desconocido",
    objetive?: "Mejorar" | "Preservar" | "Puesta en valor" | "Desconocido"
}

interface optionalsArt {
    type: typeArt
}

interface optionalInvestigation {
    institute: typeInstitute,
    state: "Pendiente" | "Activo" | "Finalizado",
    result: {
        type: "Final" | "Parcial",
        publish: "No publicados" | "Revista cientifica" | "Congreso" | "Otro"
    }
}