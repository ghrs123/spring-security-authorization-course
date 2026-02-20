# Brainstorm de Design — Spring Security Authorization Course

<response>
<text>
## Ideia 1: "Shield Blueprint" — Estética de Planta Técnica de Segurança

**Design Movement**: Blueprint Engineering (continuidade do system-design-roadmap) com toques de interface de segurança militar/cibernética.

**Core Principles**:
- Continuidade visual com o system-design-roadmap existente (dark navy, cyan, amber)
- Metáfora visual de "escudo" e "camadas de proteção" para representar autorização
- Hierarquia clara entre módulos com indicadores de progresso
- Código como elemento visual central (snippets estilizados)

**Color Philosophy**: 
- Navy escuro (#0a1628) como base — transmite confiança e profissionalismo
- Verde esmeralda (oklch 0.75 0.17 160) como cor primária — evoca segurança, proteção, "acesso concedido"
- Amber/dourado para destaques e alertas — "acesso negado", atenção
- Mantém coerência com o projeto irmão mas diferencia-se pela cor primária verde

**Layout Paradigm**: Mesmo padrão do system-design-roadmap — Hero + Grid de Níveis + Páginas de Detalhe com Progress Tracker lateral

**Signature Elements**:
- Ícone de cadeado/escudo no branding
- Grid de fundo estilo blueprint (linhas finas)
- Cards com borda tracejada que se torna sólida no hover

**Interaction Philosophy**: Scroll spy com progress tracker, expansão de conceitos, navegação entre níveis

**Animation**: Float-up nos cards, pulse glow nos indicadores ativos, transições suaves

**Typography System**: JetBrains Mono (display/código) + IBM Plex Sans (corpo) — mesma do roadmap
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Ideia 2: "Terminal Security" — Estética de Terminal de Segurança

**Design Movement**: Retro-futurismo hacker com interface de terminal verde-sobre-preto.

**Core Principles**:
- Interface inspirada em terminais de segurança (estilo Matrix/hacker)
- Texto verde fosforescente sobre fundo negro profundo
- Efeito de "digitação" em títulos e descrições
- Cada módulo como um "nível de acesso" desbloqueável

**Color Philosophy**:
- Preto profundo como base — sensação de terminal
- Verde fosforescente (#00ff41) — estilo hacker clássico
- Vermelho para "access denied" e alertas
- Branco para texto secundário

**Layout Paradigm**: Layout vertical estilo terminal com seções que parecem outputs de comandos

**Signature Elements**:
- Cursor piscante nos títulos
- Prefixos de terminal ($ >) antes de seções
- Efeito scanline sutil no fundo

**Interaction Philosophy**: Cada clique simula um comando de terminal, transições de "loading"

**Animation**: Efeito de digitação (typewriter), scanlines, cursor blink

**Typography System**: Fira Code (monospace puro) para tudo, variando apenas peso e tamanho
</text>
<probability>0.04</probability>
</response>

<response>
<text>
## Ideia 3: "Fortress Architecture" — Estética de Fortaleza Medieval Moderna

**Design Movement**: Neo-medieval digital — mistura de elementos de fortaleza com design moderno.

**Core Principles**:
- Metáfora de fortaleza: cada módulo é uma "muralha" ou "torre" de defesa
- Cores terrosas com acentos metálicos dourados
- Texturas sutis de pedra e metal
- Progressão visual de "exterior" (público) para "interior" (protegido)

**Color Philosophy**:
- Cinza escuro pedra como base
- Dourado metálico para destaques e títulos
- Azul aço para elementos interativos
- Vermelho rubi para alertas e negações

**Layout Paradigm**: Progressão vertical como camadas de uma fortaleza, do portão exterior ao cofre central

**Signature Elements**:
- Ícones de torres, portões e chaves
- Bordas com textura metálica
- Divisores estilizados como ameias de castelo

**Interaction Philosophy**: "Abrir portões" ao expandir seções, "desbloquear" níveis

**Animation**: Transições de portão abrindo, brilho metálico em hover

**Typography System**: Cinzel (display serif medieval) + Source Sans Pro (corpo moderno)
</text>
<probability>0.03</probability>
</response>

---

## Decisão: Ideia 1 — "Shield Blueprint"

Escolho a Ideia 1 porque mantém a **coerência visual perfeita** com o system-design-roadmap existente, que é o requisito explícito do utilizador. A diferenciação será feita através da cor primária (verde esmeralda em vez de cyan) e da temática de segurança (escudos, cadeados, camadas de proteção), mantendo toda a estrutura, tipografia e padrões de layout idênticos.
