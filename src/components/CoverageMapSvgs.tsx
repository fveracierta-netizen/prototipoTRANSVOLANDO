import { motion } from 'motion/react';

export function SpainMapSvg() {
  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      <svg
        viewBox="5 20 475 385"
        className="w-full h-full object-contain drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Mapa de cobertura de transporte nacional en España"
      >
        <defs>
          <linearGradient id="spainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3923a" />
            <stop offset="100%" stopColor="#dd7a2a" />
          </linearGradient>
          <linearGradient id="portugalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5f0e8" />
            <stop offset="100%" stopColor="#ebe4d8" />
          </linearGradient>
          <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#dd7a2a" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Portugal (contexto geográfico en neutro muy claro para que la silueta peninsular sea perfecta) */}
        <path
          d="M 128 118
             L 102 120
             L 92 135
             L 86 168
             L 84 212
             L 76 250
             L 80 274
             L 95 288
             L 115 288
             L 118 266
             L 126 244
             L 124 212
             L 136 182
             L 128 148
             Z"
          fill="url(#portugalGrad)"
          stroke="#d8cfc0"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Etiqueta sutil o frontera Portugal */}
        <path
          d="M 102 120 L 128 118 L 128 148 L 136 182 L 124 212 L 126 244 L 118 266 L 115 288"
          stroke="#c9bea9"
          strokeWidth="1.2"
          strokeDasharray="2 2"
          fill="none"
        />

        {/* España Peninsular */}
        <path
          d="M 102 120
             L 84 104
             L 70 88
             L 66 68
             L 82 48
             L 104 42
             L 126 44
             L 164 38
             L 216 36
             L 254 42
             L 292 46
             L 326 58
             L 348 70
             L 384 76
             L 416 84
             L 426 102
             L 408 126
             L 392 148
             L 366 178
             L 358 206
             L 366 226
             L 350 248
             L 336 272
             L 314 294
             L 282 304
             L 242 316
             L 204 322
             L 172 328
             L 154 316
             L 136 304
             L 115 288
             L 118 266
             L 126 244
             L 124 212
             L 136 182
             L 128 148
             Z"
          fill="url(#spainGrad)"
          stroke="#b75f16"
          strokeWidth="1.5"
          strokeLinejoin="round"
          filter="url(#subtleGlow)"
        />

        {/* Islas Baleares (Mallorca, Menorca, Ibiza, Formentera) */}
        <g id="baleares">
          {/* Menorca */}
          <path
            d="M 452 168 C 458 164, 466 166, 464 172 C 462 178, 454 178, 450 174 Z"
            fill="url(#spainGrad)"
            stroke="#b75f16"
            strokeWidth="1.2"
          />
          {/* Mallorca */}
          <path
            d="M 420 182 C 430 176, 442 180, 444 190 C 446 200, 434 208, 424 204 C 416 200, 414 188, 420 182 Z"
            fill="url(#spainGrad)"
            stroke="#b75f16"
            strokeWidth="1.2"
          />
          {/* Ibiza */}
          <path
            d="M 392 208 C 398 205, 404 208, 404 214 C 404 220, 396 222, 392 218 C 388 214, 388 210, 392 208 Z"
            fill="url(#spainGrad)"
            stroke="#b75f16"
            strokeWidth="1.2"
          />
          {/* Formentera */}
          <circle cx="396" cy="227" r="3" fill="url(#spainGrad)" stroke="#b75f16" strokeWidth="0.8" />
        </g>

        {/* Ceuta y Melilla */}
        <g id="norte-africa">
          <circle cx="170" cy="346" r="3.5" fill="#dd7a2a" stroke="#b75f16" strokeWidth="1" />
          <text x="178" y="349" fontSize="8" fill="#8c5828" fontFamily="sans-serif" fontWeight="600">Ceuta</text>

          <circle cx="238" cy="354" r="3.5" fill="#dd7a2a" stroke="#b75f16" strokeWidth="1" />
          <text x="246" y="357" fontSize="8" fill="#8c5828" fontFamily="sans-serif" fontWeight="600">Melilla</text>
        </g>

        {/* Recuadro proporcional Islas Canarias */}
        <g id="canarias" transform="translate(18, 305)">
          <rect
            x="0"
            y="0"
            width="144"
            height="85"
            rx="8"
            fill="#ffffff"
            stroke="#e5ded2"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <text x="8" y="14" fontSize="8" fill="#9b9182" fontFamily="sans-serif" fontWeight="600" letterSpacing="0.5">
            ISLAS CANARIAS
          </text>
          {/* La Palma */}
          <path d="M 22 28 C 26 25, 30 30, 28 36 C 26 40, 22 38, 20 34 Z" fill="url(#spainGrad)" stroke="#b75f16" strokeWidth="1" />
          {/* El Hierro */}
          <path d="M 15 54 C 18 52, 22 55, 19 60 C 16 62, 13 58, 15 54 Z" fill="url(#spainGrad)" stroke="#b75f16" strokeWidth="0.9" />
          {/* La Gomera */}
          <circle cx="34" cy="48" r="4" fill="url(#spainGrad)" stroke="#b75f16" strokeWidth="1" />
          {/* Tenerife */}
          <path d="M 48 36 L 62 30 L 68 40 L 56 48 L 46 44 Z" fill="url(#spainGrad)" stroke="#b75f16" strokeWidth="1" />
          {/* Gran Canaria */}
          <circle cx="82" cy="48" r="7" fill="url(#spainGrad)" stroke="#b75f16" strokeWidth="1" />
          {/* Fuerteventura */}
          <path d="M 106 32 L 112 30 L 114 46 L 104 56 L 102 46 Z" fill="url(#spainGrad)" stroke="#b75f16" strokeWidth="1" />
          {/* Lanzarote */}
          <path d="M 122 18 L 130 16 L 128 26 L 120 28 Z" fill="url(#spainGrad)" stroke="#b75f16" strokeWidth="1" />
          {/* La Graciosa */}
          <circle cx="131" cy="13" r="1.5" fill="url(#spainGrad)" />
        </g>

        {/* Rutas principales y nodos logísticos estratégicos (Madrid, BCN, Valencia, Sevilla, Bilbao, Zaragoza) */}
        <g id="nodos-rutas" opacity="0.85">
          {/* Líneas de conexión radial / corredores peninsulares */}
          <line x1="240" y1="180" x2="380" y2="120" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.75" />
          <line x1="240" y1="180" x2="330" y2="225" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.75" />
          <line x1="240" y1="180" x2="185" y2="295" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.75" />
          <line x1="240" y1="180" x2="275" y2="65" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.75" />
          <line x1="240" y1="180" x2="305" y2="125" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.75" />
          <line x1="240" y1="180" x2="105" y2="85" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.75" />

          {/* Hub Central Transvolando (Sede Getafe / Madrid) */}
          <circle cx="240" cy="180" r="7" fill="#ffffff" stroke="#b75f16" strokeWidth="2" />
          <circle cx="240" cy="180" r="3.5" fill="#dd7a2a" />
          <circle cx="240" cy="180" r="13" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5">
            <animate attributeName="r" values="7;16;7" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}

export function EuropeMapSvg() {
  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      <svg
        viewBox="100 12 370 380"
        className="w-full h-full object-contain drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Mapa de cobertura de transporte internacional en Europa"
      >
        <defs>
          <linearGradient id="euTerritoryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3923a" />
            <stop offset="100%" stopColor="#dd7a2a" />
          </linearGradient>
          <linearGradient id="neighborGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7f3ec" />
            <stop offset="100%" stopColor="#ede6db" />
          </linearGradient>
          <filter id="euGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#dd7a2a" floodOpacity="0.16" />
          </filter>
        </defs>

        {/* Países vecinos / Reino Unido / Países nórdicos (contexto geográfico fiel) */}
        {/* Reino Unido & Irlanda */}
        <path
          d="M 188 126
             L 204 112
             L 218 84
             L 210 66
             L 194 74
             L 182 96
             L 174 132
             L 190 148
             L 216 138
             Z"
          fill="#f6efe4"
          stroke="#d3c7b5"
          strokeWidth="1.2"
        />
        {/* Irlanda */}
        <path
          d="M 158 108 L 168 96 L 164 118 L 152 124 Z"
          fill="#f6efe4"
          stroke="#d3c7b5"
          strokeWidth="1.2"
        />

        {/* Escandinavia (Noruega, Suecia, Finlandia) */}
        <path
          d="M 282 34
             L 302 24
             L 326 30
             L 348 54
             L 336 96
             L 316 132
             L 300 114
             L 288 84
             Z"
          fill="#f6efe4"
          stroke="#d3c7b5"
          strokeWidth="1.2"
        />

        {/* Bloque Continental Europeo Principal (Unión Europea / España y Europa con corredores de transporte activo) */}
        <path
          d="M 120 340
             L 145 285
             L 130 250
             L 170 232
             L 205 240
             L 215 205
             L 195 190
             L 202 170
             L 225 158
             L 242 168
             L 258 140
             L 272 135
             L 285 152
             L 310 146
             L 335 156
             L 375 142
             L 420 152
             L 445 174
             L 455 204
             L 435 235
             L 415 246
             L 395 285
             L 380 320
             L 355 310
             L 340 275
             L 320 262
             L 305 280
             L 315 318
             L 310 348
             L 290 342
             L 282 305
             L 270 280
             L 245 272
             L 215 292
             L 185 345
             L 140 375
             Z"
          fill="url(#euTerritoryGrad)"
          stroke="#b75f16"
          strokeWidth="1.5"
          strokeLinejoin="round"
          filter="url(#euGlow)"
        />

        {/* Italia (Península itálica, Sicilia, Cerdeña) */}
        <g id="italia-islas">
          <path
            d="M 270 280
               L 290 285
               L 315 318
               L 335 342
               L 325 352
               L 305 330
               L 288 300
               Z"
            fill="url(#euTerritoryGrad)"
            stroke="#b75f16"
            strokeWidth="1.2"
          />
          {/* Sicilia */}
          <path d="M 302 365 L 322 360 L 315 374 Z" fill="url(#euTerritoryGrad)" stroke="#b75f16" strokeWidth="1" />
          {/* Cerdeña */}
          <path d="M 252 288 L 260 285 L 258 305 L 250 302 Z" fill="url(#euTerritoryGrad)" stroke="#b75f16" strokeWidth="1" />
          {/* Córcega */}
          <path d="M 254 266 L 260 264 L 258 278 L 252 276 Z" fill="url(#euTerritoryGrad)" stroke="#b75f16" strokeWidth="1" />
        </g>

        {/* Corredores de transporte prioritarios de Transvolando hacia Alemania, Francia, Benelux, etc. */}
        <g id="corredores-logisticos" opacity="0.8">
          {/* Eje Madrid -> París -> Bruselas -> Frankfurt / Hamburgo */}
          <path
            d="M 145 335
               L 215 240
               L 230 195
               L 255 175
               L 285 185
               L 315 170"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="4 3"
            strokeLinecap="round"
          />
          {/* Conexión con Reino Unido (post-Brexit) */}
          <path
            d="M 230 195 L 205 145"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeDasharray="3 3"
            strokeLinecap="round"
          />
          {/* Conexión con Italia y Europa Central */}
          <path
            d="M 215 240 L 275 255 L 310 240 L 375 220"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeDasharray="3 3"
            strokeLinecap="round"
          />

          {/* Nodos clave señalizados */}
          {/* Madrid */}
          <circle cx="145" cy="335" r="5" fill="#ffffff" stroke="#b75f16" strokeWidth="2" />
          <circle cx="145" cy="335" r="2.5" fill="#dd7a2a" />

          {/* París */}
          <circle cx="230" cy="195" r="4" fill="#ffffff" stroke="#b75f16" strokeWidth="1.5" />
          <circle cx="230" cy="195" r="2" fill="#dd7a2a" />

          {/* Benelux */}
          <circle cx="255" cy="175" r="4" fill="#ffffff" stroke="#b75f16" strokeWidth="1.5" />

          {/* Alemania (Frankfurt/Rhur) */}
          <circle cx="285" cy="185" r="4" fill="#ffffff" stroke="#b75f16" strokeWidth="1.5" />

          {/* Londres / UK */}
          <circle cx="205" cy="145" r="3.5" fill="#ffffff" stroke="#615a4e" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}
