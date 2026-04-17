/* ============================================================
   DACHSHUND ARLEQUÍN CAFÉ CON SOMBRERO — SVG pixel art
   Cada paso tiene su propia pose del perrito
   ============================================================ */

// El perrito base se construye con funciones para distintas poses
// Colores: café oscuro #5c3010, café claro #a05828, crema/blanco #f5e8d0
// manchas arlequín: #1a1a1a (negro), naranja/caramelo #d4701a
// sombrero: negro con detalles dorados

function dachshundSitting(x, y, flip) {
  // Perrito sentado mirando hacia el lado
  // flip=true => mirror
  const f = flip ? -1 : 1;
  const cx = flip ? x + 56 : x;
  return `<g transform="translate(${cx},${y}) scale(${f},1)">
    <!-- sombrero -->
    <rect x="16" y="0" width="24" height="4" fill="#1a1a1a"/>
    <rect x="12" y="4" width="32" height="4" fill="#1a1a1a"/>
    <rect x="18" y="8" width="20" height="10" fill="#1a1a1a"/>
    <rect x="20" y="6" width="4" height="2" fill="#f0c060"/>
    <rect x="26" y="6" width="4" height="2" fill="#f0c060"/>
    <!-- cabeza -->
    <rect x="14" y="18" width="28" height="22" fill="#5c3010"/>
    <rect x="10" y="22" width="4" height="10" fill="#5c3010"/>
    <!-- mancha arlequín cabeza -->
    <rect x="24" y="18" width="14" height="10" fill="#1a1a1a"/>
    <rect x="28" y="22" width="10" height="8" fill="#d4701a"/>
    <!-- hocico -->
    <rect x="8" y="28" width="14" height="10" fill="#a05828"/>
    <rect x="8" y="32" width="14" height="4" fill="#c07030"/>
    <!-- nariz -->
    <rect x="8" y="28" width="6" height="4" fill="#1a1a1a"/>
    <!-- ojo -->
    <rect x="22" y="22" width="4" height="4" fill="#1a1a1a"/>
    <rect x="23" y="23" width="2" height="2" fill="#fff"/>
    <!-- oreja larga -->
    <rect x="36" y="22" width="8" height="22" fill="#3d1e08"/>
    <rect x="40" y="22" width="4" height="20" fill="#5c3010"/>
    <!-- cuerpo -->
    <rect x="10" y="40" width="36" height="18" fill="#5c3010"/>
    <rect x="6"  y="40" width="10" height="16" fill="#5c3010"/>
    <!-- mancha arlequín cuerpo -->
    <rect x="14" y="40" width="16" height="10" fill="#1a1a1a"/>
    <rect x="16" y="42" width="12" height="8"  fill="#d4701a"/>
    <!-- patitas delanteras -->
    <rect x="6" y="54" width="8" height="8" fill="#5c3010"/>
    <rect x="6" y="60" width="10" height="4" fill="#3d1e08"/>
    <!-- patitas traseras -->
    <rect x="36" y="54" width="8" height="8" fill="#5c3010"/>
    <rect x="34" y="60" width="10" height="4" fill="#3d1e08"/>
    <!-- colita -->
    <rect x="44" y="38" width="6" height="4" fill="#5c3010"/>
    <rect x="48" y="34" width="4" height="6" fill="#5c3010"/>
    <!-- sombra suelo -->
    <rect x="4" y="64" width="48" height="4" fill="#052020" opacity="0.4" rx="2"/>
  </g>`;
}

function dachshundSniffing(x, y) {
  // Perrito oliendo el suelo, nariz hacia abajo
  return `<g transform="translate(${x},${y})">
    <!-- sombrero inclinado -->
    <rect x="18" y="2" width="22" height="4" fill="#1a1a1a"/>
    <rect x="14" y="6" width="30" height="4" fill="#1a1a1a"/>
    <rect x="20" y="10" width="18" height="9" fill="#1a1a1a"/>
    <rect x="22" y="8" width="4" height="2" fill="#f0c060"/>
    <rect x="28" y="8" width="4" height="2" fill="#f0c060"/>
    <!-- cabeza girada -->
    <rect x="6"  y="19" width="26" height="20" fill="#5c3010"/>
    <rect x="4"  y="23" width="4"  height="8" fill="#5c3010"/>
    <!-- mancha arlequín -->
    <rect x="16" y="19" width="14" height="10" fill="#1a1a1a"/>
    <rect x="18" y="21" width="10" height="8"  fill="#d4701a"/>
    <!-- hocico hacia abajo -->
    <rect x="2" y="30" width="12" height="8"  fill="#a05828"/>
    <rect x="2" y="34" width="6"  height="4"  fill="#1a1a1a"/>
    <!-- ojo -->
    <rect x="16" y="23" width="4" height="4" fill="#1a1a1a"/>
    <rect x="17" y="24" width="2" height="2" fill="#fff"/>
    <!-- oreja larga colgando -->
    <rect x="28" y="21" width="8" height="20" fill="#3d1e08"/>
    <rect x="30" y="21" width="6" height="18" fill="#5c3010"/>
    <!-- cuerpo largo -->
    <rect x="6"  y="38" width="44" height="16" fill="#5c3010"/>
    <!-- mancha arlequín cuerpo -->
    <rect x="18" y="38" width="16" height="10" fill="#1a1a1a"/>
    <rect x="20" y="40" width="12" height="8"  fill="#d4701a"/>
    <!-- patitas -->
    <rect x="6"  y="52" width="8" height="10" fill="#5c3010"/>
    <rect x="4"  y="58" width="10" height="4" fill="#3d1e08"/>
    <rect x="42" y="52" width="8" height="10" fill="#5c3010"/>
    <rect x="40" y="58" width="10" height="4" fill="#3d1e08"/>
    <!-- colita arriba emocionado -->
    <rect x="48" y="32" width="4" height="8"  fill="#5c3010"/>
    <rect x="50" y="26" width="4" height="8"  fill="#5c3010"/>
    <rect x="52" y="22" width="4" height="6"  fill="#5c3010"/>
    <!-- burbuja de emoción -->
    <rect x="54" y="10" width="16" height="14" fill="#0d5a4e" stroke="#4de8d0" stroke-width="2"/>
    <text x="62" y="21" text-anchor="middle" font-family="'Press Start 2P'" font-size="6" fill="#4de8d0">!</text>
    <!-- sombra -->
    <rect x="2" y="62" width="54" height="4" fill="#052020" opacity="0.4" rx="2"/>
  </g>`;
}

function dachshundWaiting(x, y) {
  // Perrito sentado esperando con la lengua afuera
  return `<g transform="translate(${x},${y})">
    <!-- sombrero -->
    <rect x="20" y="0" width="24" height="4" fill="#1a1a1a"/>
    <rect x="16" y="4" width="32" height="4" fill="#1a1a1a"/>
    <rect x="22" y="8" width="20" height="10" fill="#1a1a1a"/>
    <rect x="24" y="6" width="4" height="2" fill="#f0c060"/>
    <rect x="30" y="6" width="4" height="2" fill="#f0c060"/>
    <!-- cabeza -->
    <rect x="18" y="18" width="28" height="22" fill="#5c3010"/>
    <rect x="14" y="22" width="4" height="10" fill="#5c3010"/>
    <!-- mancha arlequín -->
    <rect x="18" y="18" width="14" height="12" fill="#1a1a1a"/>
    <rect x="20" y="20" width="10" height="8"  fill="#d4701a"/>
    <!-- hocico -->
    <rect x="10" y="28" width="14" height="10" fill="#a05828"/>
    <!-- nariz -->
    <rect x="10" y="28" width="6"  height="4"  fill="#1a1a1a"/>
    <!-- lengua afuera -->
    <rect x="12" y="36" width="8"  height="6"  fill="#f07090"/>
    <rect x="14" y="40" width="4"  height="4"  fill="#f07090"/>
    <!-- ojos felices (guiño) -->
    <rect x="26" y="22" width="4" height="2" fill="#1a1a1a"/>
    <rect x="34" y="22" width="4" height="4" fill="#1a1a1a"/>
    <rect x="35" y="23" width="2" height="2" fill="#fff"/>
    <!-- oreja -->
    <rect x="40" y="22" width="8" height="22" fill="#3d1e08"/>
    <rect x="42" y="22" width="4" height="20" fill="#5c3010"/>
    <!-- cuerpo sentado -->
    <rect x="14" y="40" width="36" height="16" fill="#5c3010"/>
    <rect x="10" y="40" width="10" height="14" fill="#5c3010"/>
    <!-- mancha cuerpo -->
    <rect x="20" y="42" width="14" height="10" fill="#1a1a1a"/>
    <rect x="22" y="44" width="10" height="8"  fill="#d4701a"/>
    <!-- panza sentado -->
    <rect x="14" y="54" width="36" height="12" fill="#a05828"/>
    <!-- patitas delanteras levantadas pidiendo -->
    <rect x="8"  y="42" width="8" height="4"  fill="#5c3010"/>
    <rect x="4"  y="38" width="8" height="6"  fill="#5c3010"/>
    <rect x="2"  y="34" width="6" height="6"  fill="#5c3010"/>
    <!-- patitas traseras -->
    <rect x="14" y="64" width="10" height="6" fill="#5c3010"/>
    <rect x="12" y="68" width="12" height="4" fill="#3d1e08"/>
    <rect x="36" y="64" width="10" height="6" fill="#5c3010"/>
    <rect x="34" y="68" width="12" height="4" fill="#3d1e08"/>
    <!-- sombra -->
    <rect x="8" y="72" width="48" height="4" fill="#052020" opacity="0.4" rx="2"/>
  </g>`;
}

function dachshundExcited(x, y) {
  // Perrito saltando / emocionado
  return `<g transform="translate(${x},${y})">
    <!-- sombrero vuelo -->
    <rect x="22" y="0" width="20" height="4" fill="#1a1a1a"/>
    <rect x="18" y="4" width="28" height="4" fill="#1a1a1a"/>
    <rect x="24" y="8" width="16" height="8"  fill="#1a1a1a"/>
    <rect x="26" y="6" width="4" height="2" fill="#f0c060"/>
    <rect x="32" y="6" width="3" height="2" fill="#f0c060"/>
    <!-- cabeza -->
    <rect x="16" y="16" width="28" height="22" fill="#5c3010"/>
    <rect x="12" y="20" width="4" height="10" fill="#5c3010"/>
    <!-- mancha arlequín cabeza -->
    <rect x="28" y="16" width="14" height="12" fill="#1a1a1a"/>
    <rect x="30" y="18" width="10" height="8"  fill="#d4701a"/>
    <!-- hocico abierto -->
    <rect x="8"  y="26" width="14" height="10" fill="#a05828"/>
    <rect x="8"  y="30" width="14" height="6"  fill="#3d1e08"/>
    <rect x="10" y="30" width="10" height="4"  fill="#f07090"/>
    <!-- nariz -->
    <rect x="8"  y="26" width="6"  height="4"  fill="#1a1a1a"/>
    <!-- ojos abiertos emocionados -->
    <rect x="20" y="20" width="4" height="4" fill="#1a1a1a"/>
    <rect x="21" y="21" width="2" height="2" fill="#fff"/>
    <rect x="30" y="20" width="4" height="4" fill="#1a1a1a"/>
    <rect x="31" y="21" width="2" height="2" fill="#fff"/>
    <!-- oreja volando -->
    <rect x="40" y="18" width="8" height="18" fill="#3d1e08"/>
    <rect x="42" y="16" width="4" height="16" fill="#5c3010"/>
    <!-- cuerpo saltando -->
    <rect x="8"  y="38" width="44" height="14" fill="#5c3010"/>
    <!-- mancha cuerpo -->
    <rect x="14" y="38" width="16" height="10" fill="#1a1a1a"/>
    <rect x="16" y="40" width="12" height="8"  fill="#d4701a"/>
    <!-- patitas extendidas salto -->
    <rect x="2"  y="34" width="10" height="6" fill="#5c3010"/>
    <rect x="0"  y="38" width="6"  height="6" fill="#3d1e08"/>
    <rect x="48" y="34" width="10" height="6" fill="#5c3010"/>
    <rect x="50" y="38" width="6"  height="6" fill="#3d1e08"/>
    <rect x="6"  y="50" width="8"  height="10" fill="#5c3010"/>
    <rect x="4"  y="56" width="10" height="4"  fill="#3d1e08"/>
    <rect x="44" y="50" width="8"  height="10" fill="#5c3010"/>
    <rect x="42" y="56" width="10" height="4"  fill="#3d1e08"/>
    <!-- colita arriba -->
    <rect x="50" y="32" width="4" height="8"  fill="#5c3010"/>
    <rect x="52" y="26" width="4" height="8"  fill="#5c3010"/>
    <!-- estrellitas de emoción -->
    <rect x="56" y="14" width="4" height="4" fill="#f0c060"/>
    <rect x="52" y="10" width="4" height="4" fill="#f0c060"/>
    <rect x="60" y="8"  width="4" height="4" fill="#f0c060"/>
    <rect x="0"  y="16" width="4" height="4" fill="#4de8d0"/>
    <rect x="4"  y="10" width="4" height="4" fill="#4de8d0"/>
    <!-- sombra -->
    <rect x="2" y="62" width="54" height="4" fill="#052020" opacity="0.4" rx="2"/>
  </g>`;
}

function dachshundCelebrating(x, y) {
  // Perrito dando vuelta / celebrando al final
  return `<g transform="translate(${x},${y})">
    <!-- sombrero con confeti -->
    <rect x="18" y="2" width="24" height="4" fill="#1a1a1a"/>
    <rect x="14" y="6" width="32" height="4" fill="#1a1a1a"/>
    <rect x="20" y="10" width="20" height="10" fill="#1a1a1a"/>
    <rect x="22" y="8" width="4"  height="2" fill="#f0c060"/>
    <rect x="28" y="8" width="4"  height="2" fill="#f0c060"/>
    <rect x="34" y="8" width="4"  height="2" fill="#f07090"/>
    <!-- confeti cayendo sombrero -->
    <rect x="12" y="0" width="4" height="4" fill="#f0c060"/>
    <rect x="40" y="2" width="4" height="4" fill="#f07090"/>
    <rect x="8"  y="4" width="4" height="4" fill="#4de8d0"/>
    <rect x="46" y="0" width="4" height="4" fill="#4de8d0"/>
    <!-- cabeza -->
    <rect x="16" y="20" width="28" height="22" fill="#5c3010"/>
    <rect x="12" y="24" width="4"  height="10" fill="#5c3010"/>
    <!-- mancha arlequín cabeza -->
    <rect x="16" y="20" width="14" height="12" fill="#1a1a1a"/>
    <rect x="18" y="22" width="10" height="8"  fill="#d4701a"/>
    <!-- hocico -->
    <rect x="8"  y="30" width="14" height="10" fill="#a05828"/>
    <rect x="8"  y="34" width="6"  height="4"  fill="#1a1a1a"/>
    <!-- lengua contenta -->
    <rect x="12" y="38" width="8"  height="6"  fill="#f07090"/>
    <rect x="14" y="42" width="4"  height="4"  fill="#ee5070"/>
    <!-- ojos felices cerrados -->
    <rect x="24" y="24" width="6" height="2"  fill="#1a1a1a"/>
    <rect x="36" y="24" width="6" height="2"  fill="#1a1a1a"/>
    <!-- cachetes rosados -->
    <rect x="10" y="30" width="4" height="4" fill="#f0a0b0" opacity="0.6"/>
    <rect x="30" y="30" width="4" height="4" fill="#f0a0b0" opacity="0.6"/>
    <!-- oreja -->
    <rect x="38" y="24" width="8" height="22" fill="#3d1e08"/>
    <rect x="40" y="24" width="4" height="20" fill="#5c3010"/>
    <!-- cuerpo -->
    <rect x="8"  y="42" width="44" height="16" fill="#5c3010"/>
    <rect x="4"  y="42" width="12" height="14" fill="#5c3010"/>
    <!-- mancha cuerpo -->
    <rect x="16" y="44" width="18" height="10" fill="#1a1a1a"/>
    <rect x="18" y="46" width="14" height="8"  fill="#d4701a"/>
    <!-- patitas bailando -->
    <rect x="4"  y="50" width="8" height="10" fill="#5c3010"/>
    <rect x="2"  y="58" width="10" height="4"  fill="#3d1e08"/>
    <rect x="46" y="50" width="8" height="10" fill="#5c3010"/>
    <rect x="44" y="58" width="10" height="4"  fill="#3d1e08"/>
    <rect x="10" y="56" width="8" height="8"  fill="#5c3010"/>
    <rect x="8"  y="62" width="10" height="4"  fill="#3d1e08"/>
    <rect x="40" y="56" width="8" height="8"  fill="#5c3010"/>
    <rect x="38" y="62" width="10" height="4"  fill="#3d1e08"/>
    <!-- colita meneando -->
    <rect x="50" y="40" width="4" height="6" fill="#5c3010"/>
    <rect x="52" y="34" width="4" height="8" fill="#5c3010"/>
    <rect x="54" y="30" width="4" height="6" fill="#5c3010"/>
    <!-- notitas musicales -->
    <text x="58" y="24" font-family="'VT323'" font-size="16" fill="#f0c060">♪</text>
    <text x="4"  y="20" font-family="'VT323'" font-size="16" fill="#4de8d0">♫</text>
    <!-- sombra -->
    <rect x="2" y="66" width="56" height="4" fill="#052020" opacity="0.4" rx="2"/>
  </g>`;
}

// Los 5 pasos con el perrito integrado en el SVG
const steps = [
  {
    title: "PASO 1 — CALENTAR EL CHAWAN (Recomendable)",
    tip: "TIP: si precalientas el bowl el matcha se queda calientito mas tiempo.",
    text: "echale awita caliente al chawan. déjala reposar 30 seg y luego tiradla.",
    svg: `<svg viewBox="0 0 280 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="200" fill="#0a3030"/>
      <rect x="0" y="0" width="280" height="200" fill="none" stroke="#1a8a7e" stroke-width="6"/>
      <rect x="0" y="152" width="280" height="48" fill="#073030"/>
      <rect x="0" y="150" width="280" height="6" fill="#125652"/>
      <!-- tetera -->
      <rect x="160" y="60" width="70" height="56" fill="#0d5a52" rx="2"/>
      <rect x="164" y="64" width="62" height="48" fill="#1a8a7e"/>
      <rect x="156" y="55" width="78" height="12" fill="#0f6e62"/>
      <rect x="160" y="57" width="70" height="8" fill="#2dc4b0"/>
      <rect x="224" y="74" width="22" height="8" fill="#0d5a52"/>
      <rect x="238" y="66" width="8" height="10" fill="#0f6e62"/>
      <rect x="152" y="74" width="10" height="6" fill="#0d5a52"/>
      <rect x="148" y="80" width="8" height="18" fill="#0a4040"/>
      <rect x="152" y="98" width="10" height="6" fill="#0d5a52"/>
      <rect x="174" y="36" width="4" height="4" fill="#4de8d0" opacity="0.8"/>
      <rect x="170" y="26" width="4" height="4" fill="#4de8d0" opacity="0.5"/>
      <rect x="186" y="32" width="4" height="4" fill="#4de8d0" opacity="0.8"/>
      <rect x="190" y="22" width="4" height="4" fill="#4de8d0" opacity="0.5"/>
      <!-- cuenco chawan -->
      <rect x="36" y="110" width="100" height="50" fill="#0f6e5a" rx="2"/>
      <rect x="40" y="114" width="92" height="42" fill="#1a9e7a"/>
      <rect x="32" y="104" width="108" height="12" fill="#0d5a4e"/>
      <rect x="36" y="106" width="100" height="8" fill="#2dc4b0"/>
      <rect x="40" y="116" width="92" height="34" fill="#1a6a8a"/>
      <rect x="40" y="116" width="92" height="8" fill="#2a8aaa"/>
      <rect x="56" y="124" width="6" height="6" fill="#4de8d0" opacity="0.7" rx="1"/>
      <rect x="76" y="128" width="4" height="4" fill="#4de8d0" opacity="0.6" rx="1"/>
      <rect x="96" y="122" width="6" height="6" fill="#4de8d0" opacity="0.7" rx="1"/>
      <!-- vapor cuenco -->
      <rect x="68" y="80" width="4" height="4" fill="#4de8d0" opacity="0.6"/>
      <rect x="64" y="70" width="4" height="4" fill="#4de8d0" opacity="0.4"/>
      <rect x="84" y="76" width="4" height="4" fill="#4de8d0" opacity="0.6"/>
      <!-- flecha acción -->
      <rect x="132" y="112" width="18" height="6" fill="#f0c060"/>
      <rect x="146" y="106" width="6" height="18" fill="#f0c060"/>
      <!-- PERRITO — esperando sentado mirando la tetera -->
      ${dachshundSitting(198, 120, true)}
      <text x="140" y="175" text-anchor="middle" fill="#4de8d0" font-family="'Press Start 2P'" font-size="7">~75°C</text>
    </svg>`
  },
  {
    title: "PASO 2 — hacerle wuwuwu al MATCHA",
    tip: "TIP: se evitan grumitos y hay textura suavecita y sedosa",
    text: "Usa el chashaku para echarle y hacerle wuwuwu en el tamiz. hazlo encima del chawan seco.",
    svg: `<svg viewBox="0 0 280 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="200" fill="#0a3030"/>
      <rect x="0" y="0" width="280" height="200" fill="none" stroke="#1a8a7e" stroke-width="6"/>
      <rect x="0" y="152" width="280" height="48" fill="#073030"/>
      <rect x="0" y="150" width="280" height="6" fill="#125652"/>
      <!-- cuenco vacío -->
      <rect x="80" y="108" width="120" height="54" fill="#0f6e5a" rx="2"/>
      <rect x="84" y="112" width="112" height="46" fill="#1a9e7a"/>
      <rect x="76" y="100" width="128" height="14" fill="#0d5a4e"/>
      <rect x="80" y="102" width="120" height="10" fill="#2dc4b0"/>
      <rect x="84" y="114" width="112" height="38" fill="#1d6040"/>
      <!-- tamiz -->
      <rect x="100" y="50" width="80" height="30" fill="#0d5a4e"/>
      <rect x="104" y="54" width="72" height="22" fill="#1a8a7e"/>
      <rect x="96" y="46" width="88" height="10" fill="#0f6e62"/>
      <line x1="108" y1="54" x2="108" y2="76" stroke="#0a3030" stroke-width="2"/>
      <line x1="116" y1="54" x2="116" y2="76" stroke="#0a3030" stroke-width="2"/>
      <line x1="124" y1="54" x2="124" y2="76" stroke="#0a3030" stroke-width="2"/>
      <line x1="132" y1="54" x2="132" y2="76" stroke="#0a3030" stroke-width="2"/>
      <line x1="140" y1="54" x2="140" y2="76" stroke="#0a3030" stroke-width="2"/>
      <line x1="148" y1="54" x2="148" y2="76" stroke="#0a3030" stroke-width="2"/>
      <line x1="156" y1="54" x2="156" y2="76" stroke="#0a3030" stroke-width="2"/>
      <line x1="164" y1="54" x2="164" y2="76" stroke="#0a3030" stroke-width="2"/>
      <line x1="172" y1="54" x2="172" y2="76" stroke="#0a3030" stroke-width="2"/>
      <!-- polvo cayendo -->
      <rect x="118" y="78" width="3" height="3" fill="#2dc47a" opacity="0.9"/>
      <rect x="128" y="82" width="3" height="3" fill="#1d9e64" opacity="0.8"/>
      <rect x="138" y="80" width="4" height="4" fill="#2dc47a" opacity="0.9"/>
      <rect x="148" y="84" width="3" height="3" fill="#3dd890" opacity="0.7"/>
      <rect x="122" y="88" width="3" height="3" fill="#2dc47a" opacity="0.8"/>
      <rect x="144" y="90" width="4" height="4" fill="#1d9e64" opacity="0.9"/>
      <rect x="132" y="86" width="4" height="4" fill="#3dd890" opacity="0.8"/>
      <!-- matcha en cuenco -->
      <rect x="116" y="118" width="48" height="12" fill="#1d9e64" rx="1"/>
      <rect x="120" y="120" width="40" height="8" fill="#2dc47a" rx="1"/>
      <!-- cuchara chashaku -->
      <rect x="180" y="28" width="8" height="54" fill="#8B6914" rx="2"/>
      <rect x="176" y="24" width="16" height="8" fill="#a07820" rx="2"/>
      <rect x="178" y="28" width="12" height="6" fill="#2dc47a"/>
      <!-- PERRITO — oliendo el matcha que cae -->
      ${dachshundSniffing(6, 110)}
      <text x="140" y="180" text-anchor="middle" fill="#2dc47a" font-family="'Press Start 2P'" font-size="7">2 CUCHARAS</text>
    </svg>`
  },
  {
    title: "PASO 3 — ECHARLE AWA",
    tip: "TIP: el agua debe estar a unos 70-80°C. si ta hirviendo, perate un ratito antes de echarle",
    text: "echadle poco a poco unos 70ml de agua caliente (no hirviendo) al chawan.",
    svg: `<svg viewBox="0 0 280 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="200" fill="#0a3030"/>
      <rect x="0" y="0" width="280" height="200" fill="none" stroke="#1a8a7e" stroke-width="6"/>
      <rect x="0" y="152" width="280" height="48" fill="#073030"/>
      <rect x="0" y="150" width="280" height="6" fill="#125652"/>
      <!-- cuenco -->
      <rect x="80" y="100" width="120" height="60" fill="#0f6e5a" rx="2"/>
      <rect x="84" y="104" width="112" height="52" fill="#1a9e7a"/>
      <rect x="76" y="92" width="128" height="14" fill="#0d5a4e"/>
      <rect x="80" y="94" width="120" height="10" fill="#2dc4b0"/>
      <rect x="84" y="106" width="112" height="42" fill="#1d6040"/>
      <rect x="96" y="118" width="88" height="16" fill="#1d9e64"/>
      <!-- tetera vertiendo -->
      <rect x="160" y="20" width="60" height="48" fill="#0d5a52" rx="2"/>
      <rect x="164" y="24" width="52" height="40" fill="#1a8a7e"/>
      <rect x="156" y="16" width="68" height="10" fill="#0f6e62"/>
      <rect x="160" y="18" width="60" height="6" fill="#2dc4b0"/>
      <rect x="154" y="52" width="10" height="6" fill="#0d5a52"/>
      <rect x="148" y="58" width="10" height="6" fill="#0f6e62"/>
      <rect x="142" y="64" width="10" height="6" fill="#0d5a52"/>
      <!-- chorro -->
      <rect x="138" y="68" width="6" height="6" fill="#4de8d0" opacity="0.9"/>
      <rect x="136" y="76" width="6" height="6" fill="#4de8d0" opacity="0.8"/>
      <rect x="134" y="84" width="6" height="6" fill="#4de8d0" opacity="0.8"/>
      <rect x="132" y="92" width="6" height="6" fill="#4de8d0" opacity="0.7"/>
      <rect x="130" y="100" width="6" height="6" fill="#4de8d0" opacity="0.6"/>
      <rect x="128" y="108" width="6" height="6" fill="#4de8d0" opacity="0.5"/>
      <rect x="122" y="114" width="4" height="4" fill="#4de8d0" opacity="0.5"/>
      <rect x="140" y="116" width="4" height="4" fill="#4de8d0" opacity="0.4"/>
      <!-- asa tetera -->
      <rect x="218" y="28" width="10" height="6" fill="#0d5a52"/>
      <rect x="224" y="34" width="8" height="18" fill="#0a4040"/>
      <rect x="218" y="52" width="10" height="6" fill="#0d5a52"/>
      <!-- termómetro -->
      <rect x="54" y="90" width="8" height="40" fill="#0d5a52"/>
      <rect x="56" y="92" width="4" height="32" fill="#1a6a8a"/>
      <rect x="56" y="106" width="4" height="18" fill="#4de8d0"/>
      <rect x="50" y="128" width="16" height="16" fill="#4de8d0" rx="8"/>
      <text x="58" y="82" text-anchor="middle" fill="#4de8d0" font-family="'Press Start 2P'" font-size="5">75°</text>
      <!-- PERRITO — sentado esperando -->
      ${dachshundWaiting(202, 110)}
      <text x="140" y="180" text-anchor="middle" fill="#4de8d0" font-family="'Press Start 2P'" font-size="7">~70ml</text>
    </svg>`
  },
  {
    title: "PASO 4 — BATIR CON EL CHASEN",
    tip: "TIP: mueve el chasen en zigzag en fa (como una W o M), no en círculos. y levanta la muñeca al final.",
    text: "batele machin con el chasen en movimiento de zig-zag hasta formar espuma.",
    svg: `<svg viewBox="0 0 280 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="200" fill="#0a3030"/>
      <rect x="0" y="0" width="280" height="200" fill="none" stroke="#1a8a7e" stroke-width="6"/>
      <rect x="0" y="152" width="280" height="48" fill="#073030"/>
      <rect x="0" y="150" width="280" height="6" fill="#125652"/>
      <!-- cuenco con espuma -->
      <rect x="70" y="102" width="130" height="58" fill="#0f6e5a" rx="2"/>
      <rect x="74" y="106" width="122" height="50" fill="#1a9e7a"/>
      <rect x="66" y="94" width="138" height="14" fill="#0d5a4e"/>
      <rect x="70" y="96" width="130" height="10" fill="#2dc4b0"/>
      <rect x="74" y="108" width="122" height="42" fill="#1d9e64"/>
      <rect x="74" y="108" width="122" height="16" fill="#2dc47a"/>
      <rect x="82" y="110" width="8" height="8" fill="#4de8a0" rx="1"/>
      <rect x="96" y="112" width="6" height="6" fill="#3dd890" rx="1"/>
      <rect x="110" y="109" width="10" height="10" fill="#4de8a0" rx="1"/>
      <rect x="126" y="112" width="6" height="6" fill="#3dd890" rx="1"/>
      <rect x="140" y="110" width="8" height="8" fill="#4de8a0" rx="1"/>
      <rect x="154" y="112" width="6" height="6" fill="#3dd890" rx="1"/>
      <rect x="168" y="109" width="8" height="8" fill="#4de8a0" rx="1"/>
      <!-- chasen batidor -->
      <rect x="126" y="20" width="12" height="44" fill="#8B6914"/>
      <rect x="122" y="62" width="20" height="8" fill="#a07820"/>
      <rect x="118" y="66" width="3" height="32" fill="#a07820"/>
      <rect x="122" y="66" width="3" height="36" fill="#c09020"/>
      <rect x="126" y="66" width="3" height="32" fill="#a07820"/>
      <rect x="130" y="66" width="3" height="36" fill="#c09020"/>
      <rect x="134" y="66" width="3" height="32" fill="#a07820"/>
      <rect x="138" y="66" width="3" height="36" fill="#c09020"/>
      <rect x="142" y="66" width="3" height="32" fill="#a07820"/>
      <rect x="146" y="66" width="3" height="36" fill="#c09020"/>
      <!-- líneas zigzag -->
      <polyline points="50,86 66,74 82,86 98,74 114,86" fill="none" stroke="#f0c060" stroke-width="3" stroke-dasharray="4,2"/>
      <polyline points="166,86 182,74 198,86 214,74 230,86" fill="none" stroke="#f0c060" stroke-width="3" stroke-dasharray="4,2"/>
      <polygon points="236,78 244,86 228,86" fill="#f0c060"/>
      <!-- PERRITO — emocionado saltando -->
      ${dachshundExcited(208, 108)}
      <text x="135" y="182" text-anchor="middle" fill="#f0c060" font-family="'Press Start 2P'" font-size="6">ZIGZAG!</text>
    </svg>`
  },
  {
    title: "PASO 5 — listote FUCK YEAH",
    tip: "TIP: tomadtelo mientras la espuma está fresca. ¡Itadakimasu!",
    text: "tu matchota está listo. agarradlo con las do manos, inclina el bowl y disfruta o echadselo a tu vaso.",
    svg: `<svg viewBox="0 0 280 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="200" fill="#0a3030"/>
      <rect x="0" y="0" width="280" height="200" fill="none" stroke="#1a8a7e" stroke-width="6"/>
      <rect x="0" y="152" width="280" height="48" fill="#073030"/>
      <rect x="0" y="150" width="280" height="6" fill="#125652"/>
      <!-- cuenco final -->
      <rect x="70" y="96" width="140" height="64" fill="#0f6e5a" rx="2"/>
      <rect x="74" y="100" width="132" height="56" fill="#1a9e7a"/>
      <rect x="66" y="88" width="148" height="14" fill="#0d5a4e"/>
      <rect x="70" y="90" width="140" height="10" fill="#2dc4b0"/>
      <rect x="74" y="102" width="132" height="48" fill="#1d9e64"/>
      <rect x="74" y="102" width="132" height="18" fill="#2dc47a"/>
      <rect x="84" y="104" width="10" height="10" fill="#4de8a0" rx="2"/>
      <rect x="100" y="106" width="8"  height="8" fill="#3dd890" rx="2"/>
      <rect x="114" y="103" width="12" height="12" fill="#4de8a0" rx="2"/>
      <rect x="132" y="106" width="8"  height="8" fill="#3dd890" rx="2"/>
      <rect x="146" y="104" width="10" height="10" fill="#4de8a0" rx="2"/>
      <rect x="162" y="106" width="8"  height="8" fill="#3dd890" rx="2"/>
      <rect x="90"  y="116" width="8"  height="8" fill="#2dc47a"/>
      <rect x="120" y="114" width="10" height="10" fill="#3dd890"/>
      <rect x="154" y="116" width="8"  height="8" fill="#2dc47a"/>
      <!-- latte art -->
      <rect x="120" y="124" width="20" height="4" fill="#4de8a0" opacity="0.6"/>
      <rect x="116" y="128" width="28" height="4" fill="#4de8a0" opacity="0.5"/>
      <rect x="120" y="132" width="20" height="4" fill="#4de8a0" opacity="0.4"/>
      <rect x="124" y="136" width="12" height="4" fill="#4de8a0" opacity="0.3"/>
      <!-- platito -->
      <rect x="54"  y="158" width="172" height="14" fill="#0d5a52" rx="2"/>
      <rect x="62"  y="162" width="156" height="6" fill="#1a8a7e" rx="1"/>
      <!-- estrellas deco -->
      <rect x="20" y="30" width="8" height="8" fill="#f0c060"/>
      <rect x="16" y="34" width="4" height="4" fill="#f0c060"/>
      <rect x="28" y="34" width="4" height="4" fill="#f0c060"/>
      <rect x="18" y="38" width="12" height="6" fill="#f0c060"/>
      <rect x="20" y="44" width="8" height="4" fill="#f0c060"/>
      <rect x="248" y="28" width="8" height="8" fill="#f07090"/>
      <rect x="244" y="32" width="4" height="4" fill="#f07090"/>
      <rect x="256" y="32" width="4" height="4" fill="#f07090"/>
      <rect x="246" y="36" width="12" height="6" fill="#f07090"/>
      <rect x="248" y="42" width="8" height="4" fill="#f07090"/>
      <!-- PERRITO — celebrando -->
      ${dachshundCelebrating(200, 106)}
      <text x="110" y="182" text-anchor="middle" fill="#f0c060" font-family="'Press Start 2P'" font-size="7">ITADAKIMASU!</text>
    </svg>`
  }
];

let currentStep = 0;

function initSteps() {
  currentStep = 0;
  renderStep();
}

function renderStep() {
  const s = steps[currentStep];
  document.getElementById('step-title').textContent = s.title;
  document.getElementById('step-text').textContent = s.text;
  document.getElementById('step-tip').textContent = s.tip;
  document.getElementById('step-illustration').innerHTML = s.svg;

  const dots = document.getElementById('step-dots');
  dots.innerHTML = '';
  steps.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'step-dot' + (i < currentStep ? ' done' : '') + (i === currentStep ? ' active' : '');
    dots.appendChild(d);
  });

  document.getElementById('btn-prev').style.opacity = currentStep === 0 ? '0.3' : '1';
  document.getElementById('btn-prev').disabled = currentStep === 0;

  const btnNext = document.getElementById('btn-next');
  if (currentStep === steps.length - 1) {
    btnNext.textContent = '¡Listo! ★';
    btnNext.className = 'btn btn-gold';
  } else {
    btnNext.textContent = 'Next ▶';
    btnNext.className = 'btn btn-teal';
  }
}

function changeStep(dir) {
  if (dir === 1 && currentStep === steps.length - 1) {
    showScreen('screen-end');
    return;
  }
  currentStep = Math.max(0, Math.min(steps.length - 1, currentStep + dir));
  renderStep();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}
