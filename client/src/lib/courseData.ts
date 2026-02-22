/**
 * ─── Shield Blueprint Theme ───
 * Design: Dark navy blueprint with emerald wireframe lines and amber accents
 * Typography: JetBrains Mono (display) + IBM Plex Sans (body)
 * Colors: Navy #0a1628, Emerald oklch(0.75 0.17 160), Amber #f59e0b
 * Based on: "Authorization in Spring Security" by Daniel Garnier-Moiroux (Devoxx 2024)
 */

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Exercise {
  title: string;
  difficulty: "iniciante" | "intermediário" | "avançado";
  description: string;
  hint?: string;
  solution: string;
  solutionLanguage: string;
}

export interface AntiPattern {
  title: string;
  problem: string;
  danger: string;
  fix: string;
}

export interface CodeExample {
  title: string;
  language: string;
  code: string;
  explanation: string;
}

export interface TopicDiagram {
  title: string;
  type: "mermaid";
  code: string;
  explanation?: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  content: string;
  concepts: string[];
  codeExamples: CodeExample[];
  warnings: string[];
  references: { title: string; url: string }[];
  quiz?: QuizQuestion[];
  exercises?: Exercise[];
  outcomes?: string[];
  whenToUse?: string[];
  antiPatterns?: AntiPattern[];
  diagrams?: TopicDiagram[];
}

export interface Level {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor: string;
  topics: Topic[];
}

export const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/N5xwokNkCjHpjdv3yPIPRp/sandbox/4nY5BjNO4iG97lnmQVBkw0-img-1_1771581057000_na1fn_aGVyby1zcHJpbmctc2VjdXJpdHk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTjV4d29rTmtDakhwamR2M3lQSVBScC9zYW5kYm94LzRuWTVCak5PNGlHOTdsbm1RVkJrdzAtaW1nLTFfMTc3MTU4MTA1NzAwMF9uYTFmbl9hR1Z5YnkxemNISnBibWN0YzJWamRYSnBkSGsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oQF9PuhAN2aRZAYIpxc8Yr3Cb5u5awmhZE7O0GvkJSh5tQUbDIYGKBCe1fZbnHgPgsdU~reK17jeS8zfeUgRClFDZa6nzTeFIuM3ccBwSNqw-WHXe8ss7FH3J13kYNg0~0Eb8vZChOPKYgAW~UHkEPaPsvshc33zx6DnEHHmMsXj7zhOAxsDn3hOsVJ6hco39~eJgvCNzNNZmmkc3f61peoeud0~d67oA5mzzI6hbqeRlW8nsMl0ex5nZosbb9ERSi0EbX02KQ7J3Q71RaZMIWeTW6f8dttQevy0UtO2jtUD1fqIpMpfIn68hZZ7jwFyoCQ5ZoHI8yHin6TcRgBQSA__";

export const levels: Level[] = [
  {
    id: 1,
    slug: "fundamentos",
    title: "Fundamentos e Configuração",
    subtitle: "Iniciante",
    description: "Compreenda os fundamentos do Spring Security, desde a configuração inicial até às regras básicas de autorização. Aprenda a configurar a SecurityFilterChain, definir utilizadores e proteger endpoints com regras simples de acesso.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/N5xwokNkCjHpjdv3yPIPRp/sandbox/4nY5BjNO4iG97lnmQVBkw0-img-2_1771581045000_na1fn_bGV2ZWwxLWZ1bmRhbWVudGFscw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTjV4d29rTmtDakhwamR2M3lQSVBScC9zYW5kYm94LzRuWTVCak5PNGlHOTdsbm1RVkJrdzAtaW1nLTJfMTc3MTU4MTA0NTAwMF9uYTFmbl9iR1YyWld3eExXWjFibVJoYldWdWRHRnNjdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UQeU8XUmZARZmr~DeXL5zLBPvmNI8yLfpmXLj85tPMXVDmd2ji~1ynUZVGK3naKfiYkoBexMk5t7KVbyqB6t1ph3CQks8m508p7eeTZsVKl8Dp87Pf~7IgkNUfEAKk09SRHpyaQXS11Fm72SHKLXo4z05YjCXh6M637MFsta1vQjPIPg5gvgsQREzjgfE7nGDgdwTHKV3ZBQ1M~oZbmbqps7zaWseE81kkiIp70S84nnDLgF~qyEO8ExK7k1~egI3WtF23O1bXdEfss7heSQmuildKV7hOTbvLE8rZ68TnYEHCoD5jMO8GJ~Shs3E-jSoq3SsF0zelK~cHRItIQnkg__",
    accentColor: "emerald",
    topics: [
      {
        id: "learning-outcomes",
        title: "Objetivos de Aprendizagem",
        description: "O que você será capaz de projetar, implementar, depurar e analisar ao concluir este curso.",
        content: "Este curso aborda a autorização no Spring Security de forma progressiva — desde a configuração da SecurityFilterChain até autorização a nível de método com SpEL, OAuth2 Resource Servers e auditoria de acesso em microsserviços. Os objetivos abaixo definem competências mensuráveis aplicáveis diretamente em sistemas de backend em produção.",
        concepts: ["DESIGN", "IMPLEMENT", "DEBUG", "ANALYZE", "AuthorizationManager", "Spring Security 6"],
        codeExamples: [],
        warnings: [],
        references: [
          {
            title: "Authorization in Spring Security — Daniel Garnier-Moiroux, Devoxx 2024",
            url: "https://www.youtube.com/watch?v=LGlyLmxjutI"
          }
        ],
        outcomes: [
          "DESIGN a multi-layered authorization architecture combining SecurityFilterChain HTTP rules and method-level @PreAuthorize annotations — choosing the correct enforcement layer for each access control rule.",
          "IMPLEMENT role-based and permission-based access control using GrantedAuthority, UserDetailsService, and custom AuthorizationManager beans that evaluate domain-object ownership at runtime.",
          "DEBUG authorization failures end-to-end by reading AccessDeniedException stack traces, enabling Spring Security DEBUG logs, and tracing how FilterSecurityInterceptor and AuthorizationFilter delegate decisions.",
          "IMPLEMENT OAuth2 Resource Server JWT validation including custom claims extraction, authority mapping via JwtGrantedAuthoritiesConverter, and stateless SessionCreationPolicy for REST APIs.",
          "APPLY SpEL expressions in @PreAuthorize and @PostFilter annotations to enforce fine-grained access rules that reference the authenticated principal and properties of domain objects.",
          "ANALYZE authorization event flows in production by implementing AuthorizationEventPublisher listeners, auditing AuthorizationDeniedEvent entries, and designing an observability strategy for security incidents."
        ]
      },
      {
        id: "1-1",
        title: "Introdução ao Spring Security",
        description: "Compreenda o que é o Spring Security, por que é importante e como funciona a proteção automática ao adicionar a dependência ao projeto.",
        content: `O **Spring Security** é um framework poderoso e altamente personalizável para autenticação e controle de acesso em aplicações Java, sendo o padrão de facto para a proteção de aplicações baseadas em Spring. A sua principal responsabilidade é garantir que apenas utilizadores autenticados e autorizados possam aceder a determinados recursos da aplicação.

No mundo do desenvolvimento de software, a segurança é uma preocupação fundamental. As aplicações web estão constantemente expostas a ameaças, como acesso não autorizado, roubo de dados e ataques maliciosos. O Spring Security fornece uma solução robusta e abrangente para proteger as aplicações contra essas ameaças, oferecendo funcionalidades de autenticação, autorização e proteção contra ataques comuns.

**Proteção Automática com Spring Boot**

Uma das características mais notáveis do Spring Security, especialmente quando utilizado com o Spring Boot, é a sua capacidade de autoconfiguração. Ao adicionar a dependência \`spring-boot-starter-security\` ao projeto, a aplicação fica imediatamente protegida por padrão. O Spring Boot deteta a presença do Spring Security no classpath e ativa a sua configuração automática, aplicando uma política de segurança "deny-by-default" (negar por defeito), o que significa que todos os endpoints da aplicação exigem autenticação.

Para facilitar o desenvolvimento e os testes iniciais, o Spring Security cria um utilizador padrão com o nome de utilizador \`user\`. A senha para este utilizador é gerada aleatoriamente no momento do arranque da aplicação e é impressa na consola.

**A Arquitetura de Filtros: FilterChain e DelegatingFilterProxy**

Para entender como o Spring Security funciona internamente, é crucial compreender a sua arquitetura baseada em filtros de servlet. Quando uma requisição HTTP chega a uma aplicação protegida pelo Spring Security, ela passa por uma cadeia de filtros (FilterChain) antes de atingir o servlet de destino.

O ponto de entrada para o Spring Security no contexto de uma aplicação web é o \`DelegatingFilterProxy\`. Este é um filtro de servlet padrão que delega o seu trabalho a um bean do Spring que implementa a interface \`Filter\`. Este bean é o \`FilterChainProxy\`, que por sua vez contém uma lista de \`SecurityFilterChain\`. Cada \`SecurityFilterChain\` pode ser configurado para ser aplicado a um padrão de URL específico e contém uma cadeia de filtros de segurança que processam a requisição.`,
        concepts: ["spring-boot-starter-security", "Proteção Automática (deny-by-default)", "Utilizador Gerado (user)", "Password na Consola", "DelegatingFilterProxy", "FilterChainProxy", "SecurityFilterChain", "Arquitetura de Filtros"],
        codeExamples: [
          {
            title: "Dependência Maven para Spring Security",
            language: "xml",
            code: `<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>`,
            explanation: "Com apenas esta dependência, a sua aplicação estará protegida. Ao iniciá-la, verá a senha gerada na consola. Pode então aceder a qualquer endpoint e será presenteado com uma página de login."
          },
          {
            title: "Configuração de Segurança Personalizada Básica",
            language: "java",
            code: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authz) -> authz
                .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(withDefaults());
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
            .username("user")
            .password("password")
            .roles("USER")
            .build();
        return new InMemoryUserDetailsManager(user);
    }
}`,
            explanation: "Neste exemplo, estamos a configurar o Spring Security para permitir o acesso a todos os URLs que comecem com /public/, exigir autenticação para todos os outros URLs e a usar um UserDetailsService em memória com um utilizador personalizado."
          }
        ],
        warnings: [
          "A magia da autoconfiguração: Embora a autoconfiguração seja conveniente, é crucial entender o que ela faz por baixo dos panos. Antes de começar a personalizar a segurança, familiarize-se com a configuração padrão para evitar surpresas.",
          "@EnableWebSecurity: Esta anotação é fundamental para ativar a configuração de segurança web do Spring. Sem ela, a sua configuração de segurança não será aplicada.",
          "A ordem dos filtros importa: A ordem em que os filtros de segurança são aplicados é importante. O Spring Security define uma ordem padrão para os seus filtros, mas ao adicionar filtros personalizados, é preciso ter cuidado para os inserir no local correto da cadeia."
        ],
        references: [
          { title: "Documentação Oficial do Spring Security", url: "https://docs.spring.io/spring-security/reference/" },
          { title: "Baeldung: Introduction to Java Config for Spring Security", url: "https://www.baeldung.com/java-config-spring-security" }
        ],
        diagrams: [
          {
            title: "Fluxo da cadeia de filtros de segurança (Servlet)",
            type: "mermaid",
            code: `flowchart LR
  Request[HTTP Request] --> DelegatingFilterProxy
  DelegatingFilterProxy --> FilterChainProxy
  FilterChainProxy --> SecurityFilterChain[SecurityFilterChain]
  SecurityFilterChain --> Filters[Filtros de Segurança]
  Filters --> Servlet[Servlet / Controller]`,
            explanation: "O container de servlet delega ao DelegatingFilterProxy; o FilterChainProxy escolhe a SecurityFilterChain pelo URL; a requisição percorre os filtros de segurança até ao controller."
          }
        ],
        exercises: [
          {
            title: "Endpoint sem proteção",
            difficulty: "iniciante",
            description: `Sua aplicação Spring Boot tem um endpoint GET /api/health. Após adicionar spring-boot-starter-security, todas as requisições retornam 401. Um colega sugere desabilitar o Spring Security por completo.

Qual é a abordagem CORRETA para tornar /api/health publicamente acessível sem desabilitar a segurança? Implemente a SecurityFilterChain correta.`,
            hint: "Use .requestMatchers(\"/api/health\").permitAll() antes de .anyRequest().authenticated().",
            solution: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                // Permitir acesso público ao health endpoint
                .requestMatchers("/api/health").permitAll()
                // Todos os outros endpoints requerem autenticação
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults());
        return http.build();
    }
}

// NUNCA desabilite o Spring Security por completo em produção.
// Exponha apenas o mínimo necessário via .permitAll().`,
            solutionLanguage: "java"
          },
          {
            title: "Diagnóstico de startup — senha gerada automaticamente",
            difficulty: "intermediário",
            description: `Ao iniciar a aplicação você vê no console:
"Using generated security password: 8b3f2a..."

1. Por que isso acontece?
2. Como substituir por um utilizador fixo para desenvolvimento?
3. Que risco de segurança isso representa em produção?

Implemente a solução correta.`,
            hint: "A senha automática é gerada quando NÃO existe nenhum bean UserDetailsService definido. Defina um para suprimi-la.",
            solution: `// A mensagem aparece quando NENHUM bean UserDetailsService está definido.
// Spring Boot auto-configura um utilizador 'user' com senha aleatória.

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // Ao definir este bean, a geração automática é suprimida
    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder encoder) {
        UserDetails devUser = User.builder()
            .username("dev")
            .password(encoder.encode("devpassword"))
            .roles("USER")
            .build();
        return new InMemoryUserDetailsManager(devUser);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

// RISCO em produção:
// Se a senha automática for exposta em logs, qualquer pessoa com
// acesso aos logs obtém credenciais válidas.
// NUNCA use InMemoryUserDetailsManager em produção —
// implemente UserDetailsService com base de dados real.`,
            solutionLanguage: "java"
          }
        ]
      },
      {
        id: "1-2",
        title: "Configuração da SecurityFilterChain",
        description: "Aprenda a configurar a SecurityFilterChain, o pilar da configuração de segurança no Spring Security moderno.",
        content: `A \`SecurityFilterChain\` é um dos pilares da configuração de segurança no Spring Security moderno (pós-Spring Security 5.0). Trata-se de uma interface que representa uma cadeia de filtros de segurança a ser aplicada a um conjunto específico de requisições HTTP. Em essência, é uma lista ordenada de filtros que o Spring Security utiliza para decidir se uma requisição deve ser autenticada, autorizada, redirecionada, ou bloqueada.

O poder da \`SecurityFilterChain\` reside na sua capacidade de criar **múltiplas cadeias de filtros independentes** dentro da mesma aplicação. Cada cadeia pode ser configurada para um padrão de URL diferente, permitindo um controle de segurança extremamente granular. Por exemplo, é possível ter uma cadeia de filtros para proteger endpoints de uma API REST (usando \`httpBasic\` ou autenticação via token JWT) e outra cadeia completamente diferente para a parte web da aplicação, que utiliza um formulário de login (\`formLogin\`).

Internamente, o \`FilterChainProxy\` é o componente responsável por gerenciar essas cadeias. Ele é um filtro genérico que, em vez de conter a lógica de segurança, delega a requisição para a primeira \`SecurityFilterChain\` que corresponda ao padrão da URL da requisição.

A configuração é realizada em uma classe anotada com \`@Configuration\` e \`@EnableWebSecurity\`. Dentro dessa classe, declara-se um bean do tipo \`SecurityFilterChain\`. O método que cria este bean recebe um \`HttpSecurity\` como argumento, que é um builder utilizado para construir a cadeia de filtros de forma fluente e legível. Com o \`HttpSecurity\`, é possível encadear chamadas de método para definir regras de autorização (\`authorizeHttpRequests\`), mecanismos de autenticação (\`formLogin\`, \`httpBasic\`), proteção contra ataques (CSRF, CORS), gerenciamento de sessão, e muito mais.

Esta abordagem programática substitui as antigas configurações baseadas em XML e a classe \`WebSecurityConfigurerAdapter\` (agora depreciada), oferecendo maior flexibilidade e clareza.`,
        concepts: ["@Configuration", "@EnableWebSecurity", "SecurityFilterChain Bean", "HttpSecurity Builder", "authorizeHttpRequests()", "requestMatchers()", "formLogin()", "httpBasic()", "Múltiplas SecurityFilterChains", "@Order para precedência", "securityMatcher()"],
        codeExamples: [
          {
            title: "Configuração Básica com formLogin e httpBasic",
            language: "java",
            code: `@Configuration
@EnableWebSecurity
public class BasicSecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorizeRequests ->
                authorizeRequests
                    .requestMatchers("/", "/home", "/css/**", "/js/**").permitAll()
                    .anyRequest().authenticated()
            )
            .formLogin(formLogin ->
                formLogin
                    .loginPage("/login")
                    .permitAll()
            )
            .httpBasic();
        return http.build();
    }
}`,
            explanation: "Este exemplo define que a página inicial e os recursos estáticos são públicos. Todas as outras requisições exigem autenticação. A autenticação pode ser feita tanto via um formulário de login quanto via HTTP Basic."
          },
          {
            title: "Múltiplas SecurityFilterChain para API e Web",
            language: "java",
            code: `@Configuration
@EnableWebSecurity
public class MultiChainSecurityConfig {

    @Bean
    @Order(1) // A primeira cadeia a ser verificada
    public SecurityFilterChain apiSecurityFilterChain(HttpSecurity http) throws Exception {
        http
            .securityMatcher("/api/**")
            .authorizeHttpRequests(authz -> authz
                .anyRequest().hasRole("API_USER")
            )
            .httpBasic();
        return http.build();
    }

    @Bean
    @Order(2) // A segunda cadeia a ser verificada
    public SecurityFilterChain webSecurityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin();
        return http.build();
    }
}`,
            explanation: "Este exemplo mostra como configurar duas cadeias de filtros distintas na mesma aplicação: uma para a API REST (/api/**) com HTTP Basic e outra para a aplicação web com formLogin. Note o uso de @Order para definir a precedência."
          }
        ],
        warnings: [
          "Depreciação do WebSecurityConfigurerAdapter: A partir do Spring Boot 2.7.0 e Spring Security 5.7.0, o uso de WebSecurityConfigurerAdapter foi desencorajado. A abordagem moderna é declarar diretamente um bean SecurityFilterChain.",
          "A ordem dos requestMatchers importa: As regras de autorização são avaliadas na ordem em que são declaradas. A primeira regra que corresponder será aplicada. Regras mais específicas devem vir antes das mais genéricas.",
          "CSRF habilitado por padrão: O Spring Security habilita a proteção contra CSRF por padrão. Para APIs REST sem estado, pode ser necessário desabilitar com http.csrf(csrf -> csrf.disable())."
        ],
        references: [
          { title: "Spring Security Documentation - Architecture", url: "https://docs.spring.io/spring-security/reference/servlet/architecture.html" },
          { title: "Marco Behler's Guide to Spring Security", url: "https://www.marcobehler.com/guides/spring-security" },
          { title: "Baeldung - Spring Security", url: "https://www.baeldung.com/spring-security-tutorial" }
        ],
        exercises: [
          {
            title: "Múltiplas cadeias de filtros independentes",
            difficulty: "intermediário",
            description: `Sua aplicação tem dois conjuntos de endpoints:
- /api/** — REST stateless, sem necessidade de CSRF
- /admin/** — MVC stateful com formulário de login, CSRF necessário

Configure duas SecurityFilterChain independentes que se apliquem a cada conjunto sem interferência.`,
            hint: "Use .securityMatcher() para limitar o escopo de cada cadeia e @Order para definir prioridade. A cadeia mais específica deve ter @Order menor.",
            solution: `@Configuration
@EnableWebSecurity
public class MultiChainSecurityConfig {

    // Cadeia 1: API REST — stateless, sem CSRF
    @Bean
    @Order(1)
    public SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {
        http
            .securityMatcher("/api/**")
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(authz -> authz
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults());
        return http.build();
    }

    // Cadeia 2: Admin MVC — stateful, CSRF habilitado por padrão
    @Bean
    @Order(2)
    public SecurityFilterChain adminFilterChain(HttpSecurity http) throws Exception {
        http
            .securityMatcher("/admin/**")
            .authorizeHttpRequests(authz -> authz
                .anyRequest().hasRole("ADMIN")
            )
            .formLogin(Customizer.withDefaults());
            // CSRF habilitado por padrão — não desabilitar!
        return http.build();
    }
}`,
            solutionLanguage: "java"
          },
          {
            title: "CSRF e API REST — diagnóstico do 403",
            difficulty: "intermediário",
            description: `Um POST para sua API REST retorna 403 mesmo com credenciais corretas e sem token CSRF no pedido.

1. Explique por que isso acontece por padrão no Spring Security.
2. Por que é seguro desabilitar o CSRF para APIs REST com JWT?
3. Implemente a correção correta.`,
            hint: "Spring Security habilita CSRF por padrão. Desabilite apenas para endpoints stateless que usam JWT no header Authorization.",
            solution: `// PROBLEMA: Spring Security habilita CSRF por padrão.
// APIs REST stateless não enviam tokens CSRF → 403 Forbidden.

@Bean
public SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {
    http
        // SOLUÇÃO: Desabilitar CSRF para APIs stateless
        .csrf(csrf -> csrf.disable())
        .sessionManagement(session ->
            session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(authz -> authz
            .anyRequest().authenticated()
        )
        .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));
    return http.build();
}

// POR QUÊ é seguro desabilitar CSRF em APIs com JWT?
// CSRF explora cookies de sessão enviados automaticamente pelo browser.
// APIs com JWT no header Authorization não sofrem deste ataque:
// um site malicioso não tem acesso ao JWT armazenado em memória.

// ATENÇÃO: Se sua API usar cookies de sessão (não JWT),
// mantenha o CSRF habilitado!`,
            solutionLanguage: "java"
          }
        ],
        whenToUse: [
          "✅ USE when different URL namespaces need genuinely different authentication mechanisms — e.g., JWT for /api/** and form login for /admin/**.",
          "✅ USE when session management policies differ between entry points — stateless for the REST API, stateful for the MVC admin panel.",
          "✅ USE when an actuator or metrics endpoint needs a separate security model from the main application.",
          "❌ AVOID when you only need different authorization rules for different URLs — a single SecurityFilterChain with multiple .requestMatchers() handles this without the overhead.",
          "❌ AVOID when the split adds configuration duplication without a real difference in auth mechanism or session strategy.",
          "⚖ TRADE-OFF: Each chain is independent — shared configuration (CORS, headers, exception handling) must be duplicated or extracted to a shared method. @Order mistakes silently apply the wrong chain to requests."
        ]
      },
      {
        id: "1-3",
        title: "Gestão de Utilizadores e UserDetailsService",
        description: "Domine a interface UserDetailsService e aprenda a criar implementações personalizadas com Spring Data JPA.",
        content: `A gestão de utilizadores é um pilar fundamental em qualquer sistema de segurança de aplicações. No ecossistema Spring, o Spring Security oferece um módulo de autenticação robusto e flexível, cujo coração é a interface \`UserDetailsService\`.

**A Tríade da Autenticação: UserDetailsService, UserDetails e GrantedAuthority**

O processo de autenticação no Spring Security gira em torno de três interfaces principais:

- **UserDetails**: Representa o "utilizador" no contexto do Spring Security. Define métodos essenciais como \`getUsername()\`, \`getPassword()\`, \`getAuthorities()\`, \`isAccountNonExpired()\`, \`isAccountNonLocked()\`, \`isCredentialsNonExpired()\` e \`isEnabled()\`.

- **GrantedAuthority**: Representa uma permissão concedida ao utilizador. Na sua forma mais simples, é uma String (por exemplo, 'ROLE_ADMIN', 'READ_PRIVILEGE').

- **UserDetailsService**: Interface de serviço com um único método, \`loadUserByUsername(String username)\`. A sua única responsabilidade é carregar os dados de um utilizador com base no seu nome de utilizador.

**Implementações Prontas a Usar**

O Spring Security fornece duas implementações principais: \`InMemoryUserDetailsManager\` (útil para prototipagem) e \`JdbcUserDetailsManager\` (usa uma base de dados JDBC com esquema específico).

**A Importância da Codificação de Senhas com PasswordEncoder**

Nunca, em circunstância alguma, se devem armazenar senhas em texto simples. O Spring Security impõe esta boa prática, exigindo a configuração de um \`PasswordEncoder\`. A implementação recomendada é a \`BCryptPasswordEncoder\`, que utiliza o algoritmo de hashing BCrypt — um algoritmo forte e adaptativo.`,
        concepts: ["UserDetailsService", "UserDetails Interface", "GrantedAuthority", "InMemoryUserDetailsManager", "JdbcUserDetailsManager", "PasswordEncoder", "BCryptPasswordEncoder", "CustomUserDetailsService", "CustomUserDetails", "Spring Data JPA Integration"],
        codeExamples: [
          {
            title: "Configuração com InMemoryUserDetailsManager",
            language: "java",
            code: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
        UserDetails user = User.builder()
                .username("user")
                .password(passwordEncoder.encode("password"))
                .roles("USER")
                .build();

        UserDetails admin = User.builder()
                .username("admin")
                .password(passwordEncoder.encode("admin"))
                .roles("USER", "ADMIN")
                .build();

        return new InMemoryUserDetailsManager(user, admin);
    }
}`,
            explanation: "Configuração básica com utilizadores em memória. O BCryptPasswordEncoder é usado para codificar as senhas. Ideal para testes rápidos e protótipos."
          },
          {
            title: "UserDetailsService Personalizado com Spring Data JPA",
            language: "java",
            code: `@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() ->
                    new UsernameNotFoundException("Utilizador não encontrado: " + username));

        Set<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toSet());

        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                authorities
        );
    }
}`,
            explanation: "Implementação personalizada que carrega utilizadores de uma base de dados usando Spring Data JPA. O método loadUserByUsername consulta o repositório e converte a entidade num objeto UserDetails."
          }
        ],
        warnings: [
          "PasswordEncoder em falta: A partir do Spring Security 5, é obrigatório definir um PasswordEncoder. Sem ele, receberá: IllegalArgumentException: there is no PasswordEncoder mapped for the id \"null\".",
          "Não prefixar papéis com ROLE_: Por convenção, o Spring Security espera que as strings de papéis comecem com ROLE_ quando se utiliza hasRole(). Se os seus papéis estão armazenados como 'ADMIN', use hasAuthority('ADMIN') em vez de hasRole('ADMIN').",
          "Problemas com Lazy Loading em JPA: Se a relação User-Role está marcada como FetchType.LAZY, poderá obter uma LazyInitializationException. Use FetchType.EAGER ou @Transactional no loadUserByUsername.",
          "Tratamento de UsernameNotFoundException: O método loadUserByUsername deve obrigatoriamente lançar UsernameNotFoundException se o utilizador não for encontrado. Nunca retorne null."
        ],
        references: [
          { title: "Spring Security - UserDetailsService", url: "https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/user-details-service.html" },
          { title: "Baeldung - Spring Security Authentication with a Database", url: "https://www.baeldung.com/spring-security-authentication-with-a-database" },
          { title: "Marco Behler - Spring Security In-Depth", url: "https://www.marcobehler.com/guides/spring-security" }
        ],
        exercises: [
          {
            title: "UserDetailsService com JPA — implementação completa",
            difficulty: "intermediário",
            description: `Você tem uma entidade JPA User com campos username, passwordHash, e List<String> roles (ex: ["ADMIN", "USER"]).

Implemente um UserDetailsService completo que:
1. Carregue o utilizador do repositório JPA
2. Converta os roles para GrantedAuthority com o prefixo "ROLE_"
3. Lance UsernameNotFoundException se o utilizador não existir`,
            hint: "Use SimpleGrantedAuthority(\"ROLE_\" + role) para converter cada string de role. O método deve lançar UsernameNotFoundException, nunca retornar null.",
            solution: `@Service
public class JpaUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public JpaUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        // Buscar utilizador no repositório JPA
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException(
                "Utilizador não encontrado: " + username
            ));

        // Converter List<String> roles → List<GrantedAuthority>
        // IMPORTANTE: Spring Security espera o prefixo "ROLE_"
        List<GrantedAuthority> authorities = user.getRoles().stream()
            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
            .collect(Collectors.toList());

        return new org.springframework.security.core.userdetails.User(
            user.getUsername(),
            user.getPasswordHash(), // deve ser hash BCrypt
            authorities
        );
    }
}

// Entidade JPA:
// @Entity
// public class User {
//     private String username;
//     private String passwordHash;
//     @ElementCollection
//     private List<String> roles; // ["ADMIN", "USER"]
// }`,
            solutionLanguage: "java"
          },
          {
            title: "Codificação de senha — diagnóstico e correção",
            difficulty: "iniciante",
            description: `Você armazena senhas em texto simples na base de dados. Após adicionar Spring Security, o login falha mesmo com a senha correta.

1. Explique por que o login falha.
2. Como configurar o BCryptPasswordEncoder corretamente?
3. O que é o prefixo {noop} e quando usá-lo?`,
            hint: "Spring Security usa PasswordEncoder para comparar senhas. Sem um encoder configurado, espera um formato específico. O {noop} funciona apenas para testes.",
            solution: `// PROBLEMA: Spring Security espera que a senha esteja codificada.
// Senhas em texto simples causam falha de autenticação.

// PASSO 1: Registrar BCryptPasswordEncoder como bean
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

// PASSO 2: Usar BCrypt no UserDetailsService
// O campo passwordHash na base de dados deve conter o hash BCrypt
// Ex: "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy"

// PASSO 3: Migrar senhas existentes (texto simples → BCrypt)
@Autowired
private PasswordEncoder encoder;

public void migratePassword(Long userId, String plainPassword) {
    String bcryptHash = encoder.encode(plainPassword);
    userRepository.updatePassword(userId, bcryptHash);
}

// {noop} — apenas para TESTES locais (nunca produção):
// UserDetails user = User.withUsername("test")
//     .password("{noop}senha123") // Spring Security ignora o encoding
//     .roles("USER")
//     .build();`,
            solutionLanguage: "java"
          }
        ]
      },
      {
        id: "1-4",
        title: "Autorização a Nível de Requisição (Request-Level)",
        description: "Defina regras de acesso baseadas no URL e no método HTTP com authorizeHttpRequests().",
        content: `A autorização a nível de requisição é um dos pilares fundamentais do Spring Security. Ela permite definir, de forma declarativa, quais utilizadores podem aceder a determinados URLs da aplicação.

Internamente, o processo de autorização de requisições HTTP é gerido pelo \`AuthorizationFilter\`. Este filtro intercepta a requisição e, com o auxílio de um \`AuthorizationManager\`, decide se o acesso deve ser concedido ou negado. O \`AuthorizationManager\` utiliza uma lista de \`RequestMatcher\`s para encontrar a regra de segurança que corresponde à requisição atual. A primeira regra que corresponder será aplicada, e as restantes são ignoradas. É por esta razão que **a ordem das regras é crucial**.

Com a evolução do Spring Framework, o método \`authorizeRequests()\` foi marcado como obsoleto e substituído pelo mais flexível \`authorizeHttpRequests()\`. A principal diferença é que \`authorizeHttpRequests()\` utiliza a nova API \`AuthorizationManager\`, que oferece uma configuração mais simplificada e um desempenho otimizado, como a avaliação adiada da autenticação.

Para definir a que requisições uma regra se aplica, utilizamos \`requestMatchers\`. Estes podem ser configurados com padrões Ant (\`*\` corresponde a um segmento, \`**\` corresponde a zero ou mais segmentos). As regras são definidas através de métodos como \`hasRole('ADMIN')\`, \`hasAuthority('WRITE_PRIVILEGE')\`, \`permitAll()\`, \`denyAll()\` e \`authenticated()\`.`,
        concepts: ["authorizeHttpRequests()", "requestMatchers()", "hasRole()", "hasAuthority()", "hasAnyRole()", "permitAll()", "denyAll()", "authenticated()", "Ordem das Regras", "AntPathRequestMatcher", "MvcRequestMatcher", "AuthorizationFilter"],
        codeExamples: [
          {
            title: "Configuração Básica com Ordem de Regras",
            language: "java",
            code: `@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(authorize -> authorize
            // 1. Acesso público: CSS, JS, e página de registo
            .requestMatchers("/css/**", "/js/**", "/register").permitAll()
            // 2. Apenas ADMIN pode aceder a /admin/**
            .requestMatchers("/admin/**").hasRole("ADMIN")
            // 3. Qualquer utilizador autenticado pode aceder ao perfil
            .requestMatchers("/users/profile").authenticated()
            // 4. Requer autoridade específica para gerir utilizadores
            .requestMatchers("/users/manage/**").hasAuthority("MANAGE_USERS")
            // 5. Todas as outras requisições exigem autenticação
            .anyRequest().authenticated()
        )
        .formLogin(form -> form
            .loginPage("/login")
            .permitAll()
        );
    return http.build();
}`,
            explanation: "As regras mais específicas (/admin/**) vêm antes das mais genéricas (anyRequest()). A ordem é crucial: a primeira regra que corresponder será aplicada."
          },
          {
            title: "Autorização por Método HTTP",
            language: "java",
            code: `@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(authorize -> authorize
            // GET é público para leitura
            .requestMatchers(HttpMethod.GET, "/api/articles/**").permitAll()
            // POST requer autenticação
            .requestMatchers(HttpMethod.POST, "/api/articles").hasRole("AUTHOR")
            // DELETE requer papel ADMIN
            .requestMatchers(HttpMethod.DELETE, "/api/articles/**").hasRole("ADMIN")
            .anyRequest().authenticated()
        )
        .httpBasic();
    return http.build();
}`,
            explanation: "Este exemplo demonstra como aplicar regras diferentes baseadas no método HTTP. Leitura é pública, criação requer AUTHOR, e eliminação requer ADMIN."
          }
        ],
        warnings: [
          "A ordem dos requestMatchers é crucial: Se colocar .anyRequest().authenticated() antes de .requestMatchers(\"/api/public/**\").permitAll(), a rota pública nunca será acessível.",
          "hasRole() vs hasAuthority(): hasRole('ADMIN') é equivalente a hasAuthority('ROLE_ADMIN'). O hasRole() adiciona automaticamente o prefixo ROLE_.",
          "Não esqueça de permitir a página de login: Se configurar uma página de login personalizada, é crucial permitir o acesso público a ela para evitar um loop de redirecionamento infinito."
        ],
        references: [
          { title: "Spring Security - Authorize HTTP Requests", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/authorize-http-requests.html" },
          { title: "Baeldung - URL-based Authorization", url: "https://www.baeldung.com/spring-security-expressions" },
          { title: "Spring Security Samples no GitHub", url: "https://github.com/spring-projects/spring-security-samples" }
        ],
        exercises: [
          {
            title: "Hierarquia de regras — ordem importa",
            difficulty: "intermediário",
            description: `Você define as seguintes regras nesta ordem:
1. .anyRequest().authenticated()
2. .requestMatchers("/api/public/**").permitAll()

O endpoint público ainda exige autenticação. Por que isso acontece? Corrija a configuração.`,
            hint: "As regras são avaliadas em sequência — a primeira correspondência vence. anyRequest() corresponde a qualquer URL, incluindo /api/public/**.",
            solution: `// ❌ ERRADO: anyRequest() é avaliado primeiro — bloqueia tudo
@Bean
public SecurityFilterChain wrongChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(authz -> authz
        .anyRequest().authenticated()            // ← corresponde a TUDO
        .requestMatchers("/api/public/**").permitAll() // ← nunca alcançado!
    );
    return http.build();
}

// ✅ CORRETO: regras específicas antes de anyRequest()
@Bean
public SecurityFilterChain correctChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(authz -> authz
        .requestMatchers("/api/public/**").permitAll()    // ← específico
        .requestMatchers("/actuator/health").permitAll()  // ← específico
        .requestMatchers("/api/admin/**").hasRole("ADMIN")
        .anyRequest().authenticated()                     // ← fallback final
    );
    return http.build();
}

// REGRA: Sempre do mais específico para o mais geral.
// anyRequest() deve ser o ÚLTIMO elemento.`,
            solutionLanguage: "java"
          },
          {
            title: "hasRole vs hasAuthority — diferença prática",
            difficulty: "iniciante",
            description: `Um utilizador tem a authority "ROLE_ADMIN" na base de dados. Você configura:
.requestMatchers("/admin/**").hasRole("ADMIN")

O acesso é negado. Ao mudar para .hasAuthority("ROLE_ADMIN") funciona.

1. Explique a diferença entre hasRole() e hasAuthority().
2. Qual é a convenção recomendada?
3. Mostre ambas as formas corretas de configuração.`,
            hint: "hasRole() adiciona automaticamente o prefixo \"ROLE_\" ao string fornecido.",
            solution: `// hasRole("ADMIN")     → procura por "ROLE_ADMIN" (adiciona "ROLE_" automaticamente)
// hasAuthority("ADMIN") → procura por "ADMIN" (string exata, sem prefixo)

// ❌ PROBLEMA: utilizador tem "ROLE_ADMIN", mas hasAuthority procura "ADMIN"
.requestMatchers("/admin/**").hasAuthority("ADMIN") // → acesso negado

// ✅ CORRETO com hasRole (recomendado para papéis)
.requestMatchers("/admin/**").hasRole("ADMIN") // → equivale a hasAuthority("ROLE_ADMIN")

// ✅ CORRETO com hasAuthority (string completa)
.requestMatchers("/admin/**").hasAuthority("ROLE_ADMIN")

// CONVENÇÃO recomendada no Spring Security:
// - hasRole("ADMIN")              → para papéis (ROLE_*)
// - hasAuthority("READ_DOCUMENTS") → para permissões granulares sem prefixo ROLE_

// Na base de dados, armazene SEMPRE com prefixo para papéis:
// "ROLE_ADMIN", "ROLE_USER", "ROLE_EDITOR"

// NUNCA misture as convenções no mesmo projeto!`,
            solutionLanguage: "java"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "ferramentas-autorizacao",
    title: "Ferramentas de Autorização",
    subtitle: "Intermediário",
    description: "Explore as ferramentas avançadas de autorização do Spring Security, incluindo autorização a nível de método com anotações @PreAuthorize e @PostAuthorize, Spring Expression Language (SpEL), e filtragem de dados com @PreFilter e @PostFilter.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/N5xwokNkCjHpjdv3yPIPRp/sandbox/4nY5BjNO4iG97lnmQVBkw0-img-3_1771581048000_na1fn_bGV2ZWwyLWF1dGhvcml6YXRpb24tdG9vbGluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTjV4d29rTmtDakhwamR2M3lQSVBScC9zYW5kYm94LzRuWTVCak5PNGlHOTdsbm1RVkJrdzAtaW1nLTNfMTc3MTU4MTA0ODAwMF9uYTFmbl9iR1YyWld3eUxXRjFkR2h2Y21sNllYUnBiMjR0ZEc5dmJHbHVady5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NI~EhN-d0WbcCy039lq20jU91QPWsZK-a~u7T1DYj6KaZimMgVTxEGn839gJUE76SlNvvtr3U6TqE3BWANp5INVCfSGbFPCBA9DkL7FJG9zatluCSnfrXTANpuw~jC8BTCs8-9WKYomthrLmq7udoYsbpHJ4OaYFYNj9I58JBmi0YthiKA0M7KZVQS4BSMdpT~pjWa9miAFWc~IyTOewVQdyxgbHrHH~hTp~fezznmYmiB0FrX47Gn9j0-bWQcfqbmAWg5zcN6xuZ9oiw6SbnIz5y8tt21LmIq1CZZX3fEGQWvoGMuTUAt8lI2PqqsVmKaaFUBZ6hekAJjKXKT-cYg__",
    accentColor: "emerald",
    topics: [
      {
        id: "2-1",
        title: "Autorização a Nível de Método (@PreAuthorize)",
        description: "Proteja métodos individuais com anotações de segurança que verificam permissões antes da execução.",
        content: `A autorização a nível de método é uma funcionalidade poderosa do Spring Security que permite aplicar regras de segurança diretamente nos métodos dos seus beans Spring (serviços, controladores, repositórios). Em vez de definir todas as regras de segurança na configuração centralizada do \`SecurityFilterChain\`, pode-se anotar métodos individuais com anotações como \`@PreAuthorize\`, que verificam as permissões do utilizador antes da execução do método.

Para ativar esta funcionalidade, é necessário adicionar a anotação \`@EnableMethodSecurity\` a uma classe de configuração. A partir do Spring Security 6, esta anotação substitui a antiga \`@EnableGlobalMethodSecurity\`.

**Como funciona internamente?**

A segurança a nível de método funciona através de **proxies AOP (Aspect-Oriented Programming)**. Quando o Spring encontra um bean com métodos anotados com \`@PreAuthorize\`, ele cria um proxy em torno desse bean. Quando um método anotado é chamado, a chamada é interceptada pelo proxy antes de chegar ao método real. O interceptor (\`AuthorizationManagerBeforeMethodInterceptor\`) avalia a expressão SpEL definida na anotação \`@PreAuthorize\` contra o \`Authentication\` object do utilizador atual. Se a avaliação retornar \`true\`, o método é executado normalmente. Se retornar \`false\`, uma \`AccessDeniedException\` é lançada.

A \`@PreAuthorize\` aceita expressões SpEL (Spring Expression Language) que podem incluir verificações como \`hasRole()\`, \`hasAuthority()\`, \`hasAnyRole()\`, acesso ao objeto \`authentication\`, e até referências a parâmetros do método usando \`#nomeDoParametro\`.`,
        concepts: ["@EnableMethodSecurity", "@PreAuthorize", "AOP Proxies", "SpEL Expressions", "hasRole()", "hasAuthority()", "hasAnyRole()", "AccessDeniedException", "AuthorizationManagerBeforeMethodInterceptor", "Acesso a Parâmetros do Método"],
        codeExamples: [
          {
            title: "Ativação e Uso Básico de @PreAuthorize",
            language: "java",
            code: `// 1. Ativar a segurança a nível de método
@Configuration
@EnableMethodSecurity
public class MethodSecurityConfig {
    // A anotação @EnableMethodSecurity ativa @PreAuthorize, @PostAuthorize,
    // @PreFilter e @PostFilter por padrão.
}

// 2. Usar @PreAuthorize nos serviços
@Service
public class UserService {

    @PreAuthorize("hasRole('ADMIN')")
    public List<User> getAllUsers() {
        // Apenas administradores podem listar todos os utilizadores
        return userRepository.findAll();
    }

    @PreAuthorize("hasAuthority('USER_DELETE')")
    public void deleteUser(Long userId) {
        // Requer a autoridade específica USER_DELETE
        userRepository.deleteById(userId);
    }

    @PreAuthorize("#username == authentication.name or hasRole('ADMIN')")
    public User getUserByUsername(String username) {
        // O utilizador só pode ver o seu próprio perfil, a menos que seja ADMIN
        return userRepository.findByUsername(username)
            .orElseThrow(() -> new UserNotFoundException(username));
    }
}`,
            explanation: "O primeiro passo é ativar @EnableMethodSecurity. Depois, cada método pode ser protegido com @PreAuthorize usando expressões SpEL. Note como o terceiro método usa #username para aceder ao parâmetro do método."
          },
          {
            title: "Tratamento de AccessDeniedException no Controller",
            language: "java",
            code: `@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        try {
            List<User> users = userService.getAllUsers();
            return ResponseEntity.ok(users);
        } catch (AccessDeniedException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(Map.of(
                    "error", "Acesso Negado",
                    "message", "Não tem permissão para aceder a este recurso."
                ));
        }
    }
}`,
            explanation: "Quando @PreAuthorize nega o acesso, é lançada uma AccessDeniedException. É importante tratá-la adequadamente para retornar uma resposta HTTP 403 com uma mensagem clara."
          }
        ],
        warnings: [
          "Não esqueça @EnableMethodSecurity: Sem esta anotação, as anotações @PreAuthorize serão completamente ignoradas pelo Spring Security.",
          "Proxies e chamadas internas: A segurança a nível de método funciona através de proxies. Se um método anotado chamar outro método anotado dentro da mesma classe, a verificação de segurança do segundo método NÃO será executada, pois a chamada não passa pelo proxy.",
          "Performance: Cada chamada a um método anotado com @PreAuthorize envolve a avaliação de uma expressão SpEL. Para métodos chamados com muita frequência, considere o impacto na performance."
        ],
        references: [
          { title: "Spring Security - Method Security", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html" },
          { title: "Baeldung - Spring Method Security", url: "https://www.baeldung.com/spring-security-method-security" },
          { title: "Vídeo Devoxx - Authorization in Spring Security", url: "https://www.youtube.com/watch?v=LGlyLmxjutI" }
        ],
        exercises: [
          {
            title: "Segurança por parâmetro — owner ou admin",
            difficulty: "intermediário",
            description: `Um método updateUser(Long userId, UserDto dto) deve ser executável somente pelo próprio utilizador (quando userId == seu ID) OU por um ADMIN.

1. Ative a segurança de método na configuração.
2. Escreva a expressão @PreAuthorize correta.
3. O que acontece se o parâmetro se chamar userId em vez de id?`,
            hint: "Use o prefixo # para referenciar parâmetros do método em SpEL: #userId. O objeto authentication é injetado automaticamente.",
            solution: `// PASSO 1: Ativar segurança de método (obrigatório no Spring Security 6+)
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig { }

// PASSO 2: Anotação no método de serviço
@Service
public class UserService {

    // Permite acesso se:
    // - o utilizador tem ROLE_ADMIN, OU
    // - o userId do pedido corresponde ao ID do utilizador autenticado
    @PreAuthorize("hasRole('ADMIN') or #userId == authentication.principal.id")
    public UserDto updateUser(Long userId, UserDto dto) {
        // executa somente se a expressão for true
        return userRepository.save(dto);
    }
}

// NOTA: authentication.principal.id requer que o principal implemente getId().
// Se usar UserDetails padrão (que não tem .id), compare por username:
@PreAuthorize("hasRole('ADMIN') or #username == authentication.principal.username")
public UserDto updateUser(String username, UserDto dto) { ... }`,
            solutionLanguage: "java"
          },
          {
            title: "@PreAuthorize não é executado — 3 causas",
            difficulty: "avançado",
            description: `Você anotou um método @Service com @PreAuthorize("hasRole('ADMIN')") mas qualquer utilizador consegue executá-lo — a segurança é ignorada completamente.

Liste e explique 3 causas possíveis para este comportamento e como diagnosticar cada uma.`,
            hint: "Pense em: configuração ausente, chamadas internas ao bean, e visibilidade do método Java.",
            solution: `// CAUSA 1: @EnableMethodSecurity ausente na configuração
// DIAGNÓSTICO: Nenhuma exception, mas qualquer utilizador acessa o método.
// SOLUÇÃO:
@Configuration
@EnableWebSecurity
@EnableMethodSecurity // ← OBRIGATÓRIO no Spring Security 6+
public class SecurityConfig { }

// ─────────────────────────────────────────────────────
// CAUSA 2: Auto-invocação (self-invocation) — bypassa o proxy AOP
@Service
public class OrderService {
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteOrder(Long id) { /* protegido */ }

    public void processAndDelete(Long id) {
        this.deleteOrder(id); // ❌ chamada interna — AOP NÃO interceta!
    }
}
// SOLUÇÃO: Injetar o próprio bean (@Autowired OrderService self)
// ou mover deleteOrder para outro bean.

// ─────────────────────────────────────────────────────
// CAUSA 3: Método não-público — Spring AOP não interceta
@Service
public class DocumentService {
    @PreAuthorize("hasRole('EDITOR')")
    void saveDocument(Document doc) { } // ❌ package-private!

    @PreAuthorize("hasRole('EDITOR')")
    public void saveDocument(Document doc) { } // ✅ público
}

// COMO DIAGNOSTICAR:
// Ative logging DEBUG:
// logging.level.org.springframework.security=DEBUG
// Procure por: "Authorizing MethodInvocation"
// Se não aparecer, o interceptor não está sendo acionado.`,
            solutionLanguage: "java"
          }
        ],
        whenToUse: [
          "✅ USE when authorization rules are tightly coupled to business method semantics — e.g., only the document owner can call updateDocument(), regardless of which HTTP endpoint triggered it.",
          "✅ USE when the same service method is called from multiple controllers or scheduled tasks and must be secured at the service layer.",
          "✅ USE when you need per-parameter security: @PreAuthorize(\"#userId == authentication.principal.id\") is not expressible at the HTTP layer.",
          "❌ AVOID when the same rule applies uniformly to all methods under a URL pattern — use .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\") in SecurityFilterChain instead. It is simpler, centralized, and visible to HTTP monitoring.",
          "❌ AVOID when the annotated method is called from within the same bean (self-invocation) — AOP proxy is bypassed and @PreAuthorize is silently ignored.",
          "❌ AVOID on methods called in tight inner loops — SpEL evaluation adds overhead per invocation.",
          "⚖ TRADE-OFF: Security rules are decentralized across the codebase. Auditing all access rules requires reading every @Service, not just the SecurityFilterChain. HTTP-level tools (API gateways, reverse proxies) cannot see method-level rules."
        ]
      },
      {
        id: "2-2",
        title: "Spring Expression Language (SpEL) para Autorização",
        description: "Domine o SpEL para criar expressões de autorização complexas e dinâmicas.",
        content: `O **Spring Expression Language (SpEL)** é o motor de expressões que alimenta as anotações de autorização do Spring Security. É uma linguagem de expressão poderosa que suporta consultas e manipulação de grafos de objetos em tempo de execução. No contexto da segurança, o SpEL permite criar regras de autorização dinâmicas e complexas que vão muito além de simples verificações de papéis.

Dentro das anotações \`@PreAuthorize\` e \`@PostAuthorize\`, o SpEL tem acesso a um contexto de segurança rico que inclui:

- **authentication**: O objeto \`Authentication\` completo do utilizador atual, com acesso a \`name\`, \`principal\`, \`credentials\` e \`authorities\`.
- **principal**: Atalho para \`authentication.principal\`, que geralmente é o objeto \`UserDetails\`.
- **#nomeDoParametro**: Acesso direto aos parâmetros do método anotado.
- **returnObject**: (Apenas em \`@PostAuthorize\`) O valor de retorno do método.
- **@beanName**: Referência a qualquer bean do Spring, permitindo delegar lógica complexa para serviços dedicados.

O SpEL suporta operadores lógicos (\`and\`, \`or\`, \`not\` ou \`!\`), operadores de comparação (\`==\`, \`!=\`, \`<\`, \`>\`), operador ternário, operador Elvis (\`?:\`), operador safe navigation (\`?.\`), expressões regulares (\`matches\`), e chamadas de métodos.`,
        concepts: ["SpEL (Spring Expression Language)", "authentication object", "authentication.name", "authentication.principal", "#parameterName", "returnObject", "@beanName.method()", "Operadores Lógicos (and, or, not)", "Operador Ternário", "Safe Navigation (?.)"],
        codeExamples: [
          {
            title: "Expressões SpEL Comuns em Autorização",
            language: "java",
            code: `@Service
public class DocumentService {

    // Verificação simples de papel
    @PreAuthorize("hasRole('EDITOR')")
    public void editDocument(Long docId) { /* ... */ }

    // Múltiplas condições com operadores lógicos
    @PreAuthorize("hasRole('ADMIN') or hasRole('MANAGER')")
    public void approveDocument(Long docId) { /* ... */ }

    // Acesso ao parâmetro do método e ao objeto authentication
    @PreAuthorize("#username == authentication.name")
    public UserProfile getProfile(String username) { /* ... */ }

    // Expressão complexa com acesso ao principal
    @PreAuthorize("hasRole('ADMIN') or " +
        "(hasRole('USER') and #document.owner == authentication.name)")
    public void updateDocument(Document document) { /* ... */ }

    // Verificação de email domain usando SpEL
    @PreAuthorize("authentication.name.endsWith('@corp.example.com')")
    public List<Report> getInternalReports() { /* ... */ }
}`,
            explanation: "Estas expressões demonstram a versatilidade do SpEL: desde verificações simples de papéis até condições complexas que combinam papéis, parâmetros do método e atributos do utilizador."
          },
          {
            title: "Delegação para Beans do Spring com @beanName",
            language: "java",
            code: `// Bean de serviço de autorização dedicado
@Component("authzService")
public class AuthorizationService {

    private final DocumentRepository documentRepository;

    public AuthorizationService(DocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
    }

    public boolean isDocumentOwner(Authentication auth, Long documentId) {
        Document doc = documentRepository.findById(documentId).orElse(null);
        return doc != null && doc.getOwner().equals(auth.getName());
    }

    public boolean canAccessDepartment(Authentication auth, String department) {
        // Lógica complexa de verificação de departamento
        UserDetails user = (UserDetails) auth.getPrincipal();
        // ... verificar se o utilizador pertence ao departamento
        return true;
    }
}

// Uso no serviço
@Service
public class DocumentService {

    @PreAuthorize("@authzService.isDocumentOwner(authentication, #documentId)")
    public Document getDocument(Long documentId) { /* ... */ }

    @PreAuthorize("@authzService.canAccessDepartment(authentication, #dept)")
    public List<Report> getDepartmentReports(String dept) { /* ... */ }
}`,
            explanation: "Ao delegar a lógica de autorização para um bean dedicado, mantemos as expressões SpEL limpas e a lógica testável. O prefixo @ referencia o bean pelo seu nome no contexto do Spring."
          }
        ],
        warnings: [
          "Complexidade das expressões: Expressões SpEL muito complexas tornam-se difíceis de ler e manter. Prefira delegar lógica complexa para beans dedicados usando @beanName.method().",
          "Erros silenciosos em SpEL: Se uma expressão SpEL contiver um erro de sintaxe ou referenciar uma propriedade inexistente, o erro pode não ser óbvio. Teste sempre as suas expressões.",
          "NullPointerException: Ao navegar em grafos de objetos (ex: authentication.principal.department), use o operador safe navigation (?.) para evitar NullPointerException: authentication?.principal?.department."
        ],
        references: [
          { title: "Spring Security - Expression-Based Access Control", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/expression-based.html" },
          { title: "Spring Framework - SpEL Reference", url: "https://docs.spring.io/spring-framework/reference/core/expressions.html" },
          { title: "Baeldung - SpEL in Spring Security", url: "https://www.baeldung.com/spring-security-expressions" }
        ],
        exercises: [
          {
            title: "Expressão SpEL com bean Spring — isOwner()",
            difficulty: "avançado",
            description: `O acesso a GET /projects/{id} deve ser permitido somente se o utilizador autenticado é o dono do projeto. A verificação de propriedade é uma lógica de negócio complexa que envolve acesso ao banco de dados.

Como você escreve a expressão @PreAuthorize que delega para um bean Spring chamado projectSecurityService?`,
            hint: "Use a sintaxe @beanName.metodo(args) em SpEL. O parâmetro authentication é injetado automaticamente.",
            solution: `// BEAN DE POLÍTICA — lógica de negócio separada da anotação
@Component("projectSecurityService")
public class ProjectSecurityService {

    private final ProjectRepository projectRepository;

    public ProjectSecurityService(ProjectRepository repo) {
        this.projectRepository = repo;
    }

    // Método chamado diretamente pela expressão SpEL
    public boolean isOwner(Authentication authentication, Long projectId) {
        String username = authentication.getName();
        return projectRepository.existsByIdAndOwnerUsername(projectId, username);
    }
}

// CONTROLLER com @PreAuthorize delegando para o bean
@RestController
@RequestMapping("/projects")
public class ProjectController {

    // Sintaxe: @nomeDoBean.metodo(args)
    // authentication é injetado automaticamente pelo contexto SpEL
    @GetMapping("/{id}")
    @PreAuthorize("@projectSecurityService.isOwner(authentication, #id)")
    public ProjectDto getProject(@PathVariable Long id) {
        return projectService.findById(id);
    }
}

// POR QUÊ usar um bean em vez de SpEL inline?
// SpEL inline não pode acessar repositórios JPA nem ter lógica complexa.
// Beans permitem injeção de dependências, testes unitários e reuso.`,
            solutionLanguage: "java"
          },
          {
            title: "Depurando ELException em expressão SpEL",
            difficulty: "avançado",
            description: `A seguinte anotação lança ELException em runtime:
@PreAuthorize("authentication.principal.username == #dto.ownerId")

Mensagem: "Property or field 'ownerId' cannot be found on object of type String"

1. Explique a causa raiz do erro.
2. Como diagnosticar o tipo exato de authentication.principal?
3. Implemente 2 formas corretas de resolver.`,
            hint: "authentication.principal.username retorna um String. String não tem a propriedade 'ownerId'. O problema pode ser de tipo ou nome de campo.",
            solution: `// DIAGNÓSTICO DO ERRO:
// authentication.principal é o UserDetails (ou implementação customizada)
// .username retorna uma String
// String não tem campo 'ownerId' → ELException

// COMO INSPECIONAR o tipo do principal:
@GetMapping("/debug-principal")
public String debugPrincipal(Authentication auth) {
    return auth.getPrincipal().getClass().getName()
        + ": " + auth.getPrincipal();
}

// ✅ CORREÇÃO 1: Comparar username com username (mesmo tipo)
// Se #dto.ownerUsername é String:
@PreAuthorize("authentication.principal.username == #dto.ownerUsername")

// ✅ CORREÇÃO 2: CustomUserDetails com getId()
// Requer que o principal implemente getId():
@PreAuthorize("authentication.principal.id == #dto.ownerId")

// Para implementar CustomUserDetails:
public class CustomUserDetails implements UserDetails {
    private final Long id;
    private final String username;
    // ... outros campos e métodos UserDetails
    public Long getId() { return id; }
}

// ✅ CORREÇÃO 3 (mais robusta): Delegar para um bean
@PreAuthorize("@documentPolicy.canAccess(authentication, #dto)")`,
            solutionLanguage: "java"
          }
        ],
        whenToUse: [
          "✅ USE for concise runtime checks against method parameters: #resourceId == authentication.principal.ownedResourceId is clear and readable inline.",
          "✅ USE @beanName.method(authentication, #param) to delegate to a Spring bean when the logic is complex but you still want it declared at the annotation site.",
          "✅ USE for boolean combinations of standard checks: hasRole('ADMIN') or #id == authentication.principal.id.",
          "❌ AVOID when the expression exceeds one logical clause — extract to a @Component policy bean. Long SpEL strings are unreadable and untestable.",
          "❌ AVOID when the logic requires service calls to multiple beans, conditional branching, or exception handling — Java is the right tool, not SpEL.",
          "❌ AVOID deep object graph navigation (authentication.principal.department.region.code) — it creates tight coupling to the principal's data model and is fragile to nulls.",
          "⚖ TRADE-OFF: SpEL expressions cannot be unit tested in isolation. Errors surface at runtime (ELException), not at compile time. Complex expressions create implicit contracts between the security rule and the principal object's shape."
        ]
      },
      {
        id: "2-3",
        title: "@PostAuthorize e Filtragem de Dados",
        description: "Verifique permissões após a execução e filtre coleções automaticamente com @PreFilter e @PostFilter.",
        content: `Além da \`@PreAuthorize\`, o Spring Security oferece mais três anotações poderosas para autorização a nível de método: \`@PostAuthorize\`, \`@PreFilter\` e \`@PostFilter\`. Estas anotações complementam a \`@PreAuthorize\` ao permitir verificações pós-execução e filtragem automática de coleções.

**@PostAuthorize: Verificação Após a Execução**

A \`@PostAuthorize\` avalia uma expressão SpEL **depois** de o método ter sido executado. Isto é útil quando a decisão de autorização depende do valor de retorno do método. A expressão tem acesso à variável especial \`returnObject\`, que contém o valor retornado pelo método.

**@PreFilter: Filtragem de Parâmetros de Entrada**

A \`@PreFilter\` filtra uma coleção de entrada antes de o método ser executado. A expressão SpEL é avaliada para cada elemento da coleção (acessível através da variável \`filterObject\`), e apenas os elementos para os quais a expressão retorna \`true\` são passados ao método.

**@PostFilter: Filtragem do Resultado**

A \`@PostFilter\` filtra a coleção retornada pelo método. Semelhante ao \`@PreFilter\`, a expressão é avaliada para cada elemento do resultado, e apenas os elementos que satisfazem a condição são incluídos na resposta final.

Estas anotações são particularmente úteis em cenários onde se pretende que os utilizadores vejam apenas os dados que lhes pertencem, sem necessidade de alterar a lógica de negócio ou as queries da base de dados.`,
        concepts: ["@PostAuthorize", "@PreFilter", "@PostFilter", "returnObject", "filterObject", "Filtragem de Coleções", "Autorização Pós-Execução", "Filtragem em Repositórios"],
        codeExamples: [
          {
            title: "@PostAuthorize com returnObject",
            language: "java",
            code: `@Service
public class OrderService {

    // O método executa primeiro, depois verifica se o utilizador
    // é o dono do pedido retornado
    @PostAuthorize("returnObject.owner == authentication.name " +
        "or hasRole('ADMIN')")
    public Order getOrderById(Long orderId) {
        return orderRepository.findById(orderId)
            .orElseThrow(() -> new OrderNotFoundException(orderId));
    }

    // Verifica se o status do retorno é permitido para o utilizador
    @PostAuthorize("returnObject.status != 'CONFIDENTIAL' " +
        "or hasAuthority('VIEW_CONFIDENTIAL')")
    public Report getReport(Long reportId) {
        return reportRepository.findById(reportId)
            .orElseThrow(() -> new ReportNotFoundException(reportId));
    }
}`,
            explanation: "Com @PostAuthorize, o método é executado primeiro e o resultado é verificado depois. Se a condição falhar, uma AccessDeniedException é lançada e o resultado não é retornado ao chamador."
          },
          {
            title: "@PreFilter e @PostFilter para Filtragem de Coleções",
            language: "java",
            code: `@Service
public class TaskService {

    // Filtra a lista de entrada: só processa tarefas do utilizador
    @PreFilter("filterObject.assignee == authentication.name")
    public void completeTasks(List<Task> tasks) {
        tasks.forEach(task -> {
            task.setStatus("COMPLETED");
            taskRepository.save(task);
        });
    }

    // Filtra o resultado: retorna apenas tarefas do utilizador
    @PostFilter("filterObject.assignee == authentication.name " +
        "or hasRole('MANAGER')")
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Combinação: filtra entrada E saída
    @PreFilter("filterObject.department == authentication.principal.department")
    @PostFilter("filterObject.status != 'DRAFT'")
    public List<Document> processDocuments(List<Document> documents) {
        // Processa apenas documentos do departamento do utilizador
        // Retorna apenas os que não são rascunho
        return documents.stream()
            .map(this::processDocument)
            .collect(Collectors.toList());
    }
}`,
            explanation: "@PreFilter filtra os parâmetros de entrada antes da execução. @PostFilter filtra o resultado após a execução. Ambos usam filterObject para referenciar cada elemento da coleção."
          }
        ],
        warnings: [
          "Performance do @PostFilter: O @PostFilter carrega TODOS os dados da base de dados e depois filtra em memória. Para grandes conjuntos de dados, isto pode ser muito ineficiente. Prefira filtrar na query da base de dados quando possível.",
          "@PostAuthorize e efeitos colaterais: Como o método é executado antes da verificação, quaisquer efeitos colaterais (escrita na BD, envio de emails) já terão ocorrido mesmo que o acesso seja negado.",
          "@PreFilter modifica a coleção original: O @PreFilter modifica a coleção passada como parâmetro, removendo os elementos que não satisfazem a condição. Passe uma coleção mutável (ArrayList, não List.of())."
        ],
        references: [
          { title: "Spring Security - @PostAuthorize", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html#use-postauthorize" },
          { title: "Baeldung - @PreFilter and @PostFilter", url: "https://www.baeldung.com/spring-security-prefilter-postfilter" },
          { title: "Spring Security Reference - Method Security", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html" }
        ],
        exercises: [
          {
            title: "@PostFilter — filtrar documentos por tenant",
            difficulty: "intermediário",
            description: `Um método retorna List<Document> e documentos pertencem a diferentes tenants. Usando @PostFilter, garanta que utilizadores só recebam documentos onde document.tenantId corresponde ao seu tenantId autenticado.

Quais são as implicações de performance desta abordagem?`,
            hint: "Use filterObject para referenciar o elemento atual na iteração. @PostFilter modifica (muta) a coleção retornada.",
            solution: `@Service
public class DocumentService {

    // @PostFilter avalia a expressão para CADA elemento da lista
    // e remove os que retornam false
    @PostFilter("filterObject.tenantId == authentication.principal.tenantId")
    public List<Document> findAllDocuments() {
        // Retorna TODOS os documentos — Spring Security filtra depois
        return documentRepository.findAll();
    }
}

// IMPLICAÇÕES DE PERFORMANCE:
// @PostFilter carrega TODOS os registros do banco e filtra em memória.
// Para 10.000 documentos de 50 tenants:
// - Carrega 10.000 registros da base de dados
// - Filtra em memória → retorna ~200 registros
// - Enorme desperdício de recursos!

// ALTERNATIVA EFICIENTE (recomendada para grandes volumes):
public List<Document> findDocumentsByTenant(Authentication auth) {
    Long tenantId = ((CustomUserDetails) auth.getPrincipal()).getTenantId();
    return documentRepository.findByTenantId(tenantId); // filtra na query SQL
}

// QUANDO usar @PostFilter:
// ✅ Listas pequenas (< 500 itens)
// ✅ Protótipos rápidos
// ❌ EVITAR em tabelas grandes — impacto severo de performance`,
            solutionLanguage: "java"
          },
          {
            title: "@PostAuthorize vs @PreAuthorize — acesso por proprietário",
            difficulty: "avançado",
            description: `O método getOrder(Long id) carrega um pedido do banco de dados. Somente o dono do pedido ou um ADMIN deve receber o resultado.

1. Deve usar @PreAuthorize ou @PostAuthorize? Por quê?
2. Implemente a solução correta.
3. Qual é o risco de usar @PostAuthorize em operações de escrita?`,
            hint: "@PreAuthorize executa ANTES do método — não tem acesso ao objeto retornado. @PostAuthorize executa DEPOIS — tem acesso via returnObject.",
            solution: `@Service
public class OrderService {

    // ✅ CORRETO: @PostAuthorize — verifica o proprietário no objeto retornado
    // O pedido PRECISA ser carregado primeiro para saber quem é o dono.
    @PostAuthorize("returnObject.ownerUsername == authentication.principal.username" +
                   " or hasRole('ADMIN')")
    public Order getOrder(Long id) {
        return orderRepository.findById(id)
            .orElseThrow(() -> new OrderNotFoundException(id));
    }
}

// POR QUÊ @PreAuthorize NÃO funciona aqui:
// @PreAuthorize só tem acesso aos PARÂMETROS (#id).
// O ID sozinho não diz quem é o dono — a entidade precisa ser carregada.
// @PreAuthorize("@orderService.isOwner(#id, auth)") faria 2 queries.

// QUANDO usar cada um:
// @PreAuthorize: decisão baseada em PARÂMETROS (role, ID do utilizador)
// @PostAuthorize: decisão baseada nos DADOS RETORNADOS (ownership, atributos)

// ⚠️ RISCO com @PostAuthorize em operações de ESCRITA:
// O método EXECUTA antes da verificação!
// Se saveOrder() escreve no banco e depois @PostAuthorize nega,
// a escrita já ocorreu — mas a resposta é negada.
// Use @PostAuthorize APENAS em operações de LEITURA.`,
            solutionLanguage: "java"
          }
        ]
      },
      {
        id: "2-4",
        title: "Meta-Anotações Personalizadas",
        description: "Crie anotações de segurança reutilizáveis para eliminar duplicação e melhorar a legibilidade.",
        content: `As **meta-anotações** são uma funcionalidade poderosa do Spring Security que permite criar anotações de segurança personalizadas e reutilizáveis. Em vez de repetir expressões SpEL complexas em múltiplos métodos, pode-se encapsular a lógica numa anotação personalizada, promovendo a reutilização, a consistência e a manutenibilidade do código.

Uma meta-anotação é simplesmente uma anotação Java que é, ela própria, anotada com uma das anotações de segurança do Spring (\`@PreAuthorize\`, \`@PostAuthorize\`, \`@PreFilter\`, \`@PostFilter\`). Quando o Spring Security encontra a meta-anotação num método, ele resolve a anotação de segurança subjacente e aplica a regra correspondente.

**Benefícios das Meta-Anotações:**

1. **Eliminação de Duplicação**: A mesma expressão SpEL não precisa ser repetida em dezenas de métodos.
2. **Legibilidade**: \`@IsAdmin\` é muito mais legível do que \`@PreAuthorize("hasRole('ADMIN')")\`.
3. **Manutenibilidade**: Se a regra de autorização mudar, basta alterar a meta-anotação num único local.
4. **Consistência**: Garante que a mesma regra é aplicada uniformemente em toda a aplicação.
5. **Documentação**: O nome da anotação serve como documentação da intenção de segurança.`,
        concepts: ["Meta-Anotações", "@Target(ElementType.METHOD)", "@Retention(RetentionPolicy.RUNTIME)", "Encapsulamento de @PreAuthorize", "Reutilização de Regras", "Consistência de Autorização", "Composição de Anotações"],
        codeExamples: [
          {
            title: "Criação de Meta-Anotações de Segurança",
            language: "java",
            code: `// Meta-anotação para verificar se é ADMIN
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('ADMIN')")
public @interface IsAdmin {}

// Meta-anotação para verificar se é o próprio utilizador ou ADMIN
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("#username == authentication.name or hasRole('ADMIN')")
public @interface IsOwnerOrAdmin {}

// Meta-anotação para verificar se pode ler documentos
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasAuthority('DOCUMENT_READ') or hasRole('ADMIN')")
public @interface CanReadDocuments {}

// Meta-anotação para verificar domínio de email corporativo
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("authentication.name.endsWith('@corp.example.com')")
public @interface IsInternalUser {}`,
            explanation: "Cada meta-anotação encapsula uma expressão @PreAuthorize específica. @Target(METHOD) indica que só pode ser usada em métodos. @Retention(RUNTIME) garante que está disponível em tempo de execução."
          },
          {
            title: "Uso das Meta-Anotações nos Serviços",
            language: "java",
            code: `@Service
public class UserManagementService {

    @IsAdmin
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @IsOwnerOrAdmin
    public UserProfile getUserProfile(String username) {
        return userRepository.findByUsername(username)
            .map(UserProfile::from)
            .orElseThrow(() -> new UserNotFoundException(username));
    }

    @CanReadDocuments
    public List<Document> getUserDocuments(String username) {
        return documentRepository.findByOwner(username);
    }

    @IsInternalUser
    public List<Report> getInternalReports() {
        return reportRepository.findAllInternal();
    }
}`,
            explanation: "O código fica muito mais limpo e legível. Cada método é protegido com uma anotação cujo nome descreve claramente a intenção de segurança, sem necessidade de ler expressões SpEL complexas."
          }
        ],
        warnings: [
          "Não empilhe meta-anotações: O Spring Security não suporta nativamente a combinação de múltiplas anotações de segurança no mesmo método. Se precisar combinar regras, crie uma nova meta-anotação com a expressão combinada.",
          "Parâmetros em meta-anotações: Se a expressão SpEL referencia parâmetros do método (#username), o método que usa a meta-anotação deve ter um parâmetro com o mesmo nome.",
          "Teste as meta-anotações: Crie testes unitários para cada meta-anotação para garantir que a regra de segurança funciona corretamente."
        ],
        references: [
          { title: "Spring Security - Meta Annotations", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html#meta-annotations" },
          { title: "Baeldung - Custom Security Annotations", url: "https://www.baeldung.com/spring-security-method-security" },
          { title: "Vídeo Devoxx - Authorization in Spring Security", url: "https://www.youtube.com/watch?v=LGlyLmxjutI" }
        ],
        exercises: [
          {
            title: "Criar @IsResourceOwner — meta-anotação reutilizável",
            difficulty: "intermediário",
            description: `Em 12 métodos do seu codebase você repete:
@PreAuthorize("hasRole('ADMIN') or #id == authentication.principal.id")

Crie uma meta-anotação @IsResourceOwner que encapsule esta regra, tornando o código mais legível e manutenível.`,
            hint: "A meta-anotação é uma @interface anotada com @PreAuthorize. O parâmetro do método deve se chamar 'id' para que #id funcione.",
            solution: `// PASSO 1: Definir a meta-anotação
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('ADMIN') or #id == authentication.principal.id")
public @interface IsResourceOwner {
    // A expressão SpEL referencia #id
    // O parâmetro do método anotado DEVE se chamar 'id'
}

// PASSO 2: Usar nos métodos
@Service
public class UserService {

    @IsResourceOwner
    public UserDto getUser(Long id) { return userRepository.findById(id); }

    @IsResourceOwner
    public void updateUser(Long id, UserDto dto) { /* ... */ }

    @IsResourceOwner
    public void deleteUser(Long id) { /* ... */ }
}

// ANTES: 12 métodos com @PreAuthorize longa e repetida
// DEPOIS: 12 métodos com @IsResourceOwner — legível e centralizado

// PASSO 3: Se o parâmetro tiver nome diferente de 'id':
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('ADMIN') or #userId == authentication.principal.id")
public @interface IsUserOwner {
    // Use quando o parâmetro se chama 'userId'
}`,
            solutionLanguage: "java"
          },
          {
            title: "Meta-anotação com role como parâmetro",
            difficulty: "avançado",
            description: `Você quer criar @RequiresRole("EDITOR") onde a role é um parâmetro da anotação.

1. Implemente a meta-anotação.
2. Explique a limitação crítica de roles dinâmicas em anotações.
3. Qual é a alternativa quando a role precisa ser determinada em runtime?`,
            hint: "Use @AliasFor para mapear o atributo da anotação para o valor de @PreAuthorize. A role deve ser uma constante em tempo de compilação.",
            solution: `// IMPLEMENTAÇÃO da meta-anotação com parâmetro
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('{role}')")
public @interface RequiresRole {
    // Spring Security substitui {role} pelo valor do atributo
    @AliasFor(annotation = PreAuthorize.class, attribute = "value")
    String role() default "";
    // ATENÇÃO: Esta sintaxe específica de substituição pode variar
    // entre versões. Teste com sua versão do Spring Security.
}

// USO:
@Service
public class ContentService {
    @RequiresRole("EDITOR")
    public void publishArticle(Article article) { }

    @RequiresRole("MODERATOR")
    public void removeComment(Long id) { }
}

// ⚠️ LIMITAÇÃO CRÍTICA:
// Anotações Java são processadas em tempo de compilação.
// O valor do atributo DEVE ser uma constante:
// ✅ @RequiresRole("EDITOR")         — constante literal
// ❌ @RequiresRole(user.getRole())   — impossível em Java

// Spring Security lê a expressão SpEL ao criar o proxy AOP (startup),
// não quando o método é chamado. Portanto, roles dinâmicas são inviáveis.

// ALTERNATIVA para roles determinadas em runtime:
@PreAuthorize("@rolePolicy.hasRequiredRole(authentication, #requiredRole)")
public void sensitiveOperation(String requiredRole) { }`,
            solutionLanguage: "java"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "internos",
    title: "Arquitetura Interna",
    subtitle: "Avançado",
    description: "Compreenda como o Spring Security funciona internamente: o SecurityContext, os objetos Authentication, os Authorization Managers e o fluxo completo de uma decisão de autorização desde a requisição HTTP até à resposta.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/N5xwokNkCjHpjdv3yPIPRp/sandbox/4nY5BjNO4iG97lnmQVBkw0-img-4_1771581051000_na1fn_bGV2ZWwzLWludGVybmFscw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTjV4d29rTmtDakhwamR2M3lQSVBScC9zYW5kYm94LzRuWTVCak5PNGlHOTdsbm1RVkJrdzAtaW1nLTRfMTc3MTU4MTA1MTAwMF9uYTFmbl9iR1YyWld3ekxXbHVkR1Z5Ym1Gc2N3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SUwLwKXbcVaVK-s2rz4y5iwnzZqnqTI8~GsazU~2rG5czq12bwV2aWQ~eu98lr1QyC0UVh7r6fVG7m-N2wNh9UpGKIGMyrYX10hUE26pCOwpGaANf1O2fSmOLuJijpRSv7wupf5sZli~uEHC0fEwLlU1L4FyzxRtD0XvJt2fSNhXkg2YNWCLTNkrjC8AJdooDoFs5Tbo3a~QSfQ4Xwsrkez4EpmlWk0dyb6nBRuPEFfJ8mv1dOmPEt4Ghh3WXVN3pdJp1Pt~BNQjxKsLejjuZYRSAfkazydYZRF32JldMcXoIqDhzXr-xOOvm7XBYgnTNykwJFMO4vHpvQMtp8TmPw__",
    accentColor: "amber",
    topics: [
      {
        id: "3-1",
        title: "Objetos Authentication e SecurityContext",
        description: "Compreenda o modelo de dados central do Spring Security: Authentication, Principal, GrantedAuthority e SecurityContext.",
        content: `O modelo de dados central do Spring Security gira em torno de três conceitos fundamentais: o objeto \`Authentication\`, o \`SecurityContext\` e o \`SecurityContextHolder\`. Compreender estes componentes é essencial para entender como o Spring Security toma decisões de autorização.

**O Objeto Authentication**

A interface \`Authentication\` é a representação central da identidade do utilizador no Spring Security. Após uma autenticação bem-sucedida, um objeto \`Authentication\` é criado e contém três informações principais:

1. **Principal**: A identidade do utilizador. Pode ser uma simples \`String\` (o username) ou um objeto \`UserDetails\` completo.
2. **Credentials**: As credenciais usadas para autenticação (tipicamente a password). Após a autenticação, as credenciais são geralmente apagadas por razões de segurança.
3. **Authorities**: Uma coleção de \`GrantedAuthority\` que representa as permissões concedidas ao utilizador (papéis, privilégios).

**O SecurityContext e o SecurityContextHolder**

O \`SecurityContext\` é um contentor simples que armazena o objeto \`Authentication\` do utilizador atualmente autenticado. O \`SecurityContextHolder\` é o componente que gere o \`SecurityContext\`, utilizando por padrão uma estratégia \`ThreadLocal\`. Isto significa que o contexto de segurança está associado à thread que processa a requisição, permitindo que qualquer código na mesma thread aceda ao utilizador autenticado sem necessidade de passar o objeto explicitamente.

Para aceder ao utilizador autenticado em qualquer parte da aplicação:
\`SecurityContextHolder.getContext().getAuthentication()\``,
        concepts: ["Authentication Interface", "Principal", "Credentials", "GrantedAuthority", "SimpleGrantedAuthority", "SecurityContext", "SecurityContextHolder", "ThreadLocal Strategy", "SecurityContextHolderStrategy", "UserDetails como Principal"],
        codeExamples: [
          {
            title: "Aceder ao Utilizador Autenticado",
            language: "java",
            code: `@RestController
@RequestMapping("/api")
public class ProfileController {

    // Método 1: Via SecurityContextHolder (funciona em qualquer lugar)
    @GetMapping("/profile/v1")
    public ResponseEntity<Map<String, Object>> getProfileV1() {
        Authentication authentication =
            SecurityContextHolder.getContext().getAuthentication();

        String username = authentication.getName();
        Collection<? extends GrantedAuthority> authorities =
            authentication.getAuthorities();
        Object principal = authentication.getPrincipal();

        Map<String, Object> profile = new HashMap<>();
        profile.put("username", username);
        profile.put("authorities", authorities.stream()
            .map(GrantedAuthority::getAuthority)
            .collect(Collectors.toList()));
        profile.put("isAdmin", authorities.stream()
            .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN")));

        return ResponseEntity.ok(profile);
    }

    // Método 2: Via injeção de parâmetro (mais limpo em controllers)
    @GetMapping("/profile/v2")
    public ResponseEntity<Map<String, Object>> getProfileV2(
            @AuthenticationPrincipal UserDetails userDetails) {
        Map<String, Object> profile = new HashMap<>();
        profile.put("username", userDetails.getUsername());
        profile.put("authorities", userDetails.getAuthorities());
        return ResponseEntity.ok(profile);
    }

    // Método 3: Via Authentication como parâmetro
    @GetMapping("/profile/v3")
    public ResponseEntity<String> getProfileV3(Authentication auth) {
        return ResponseEntity.ok("Olá, " + auth.getName());
    }
}`,
            explanation: "Existem três formas principais de aceder ao utilizador autenticado: via SecurityContextHolder (funciona em qualquer classe), via @AuthenticationPrincipal (injeção direta do UserDetails), ou via parâmetro Authentication no controller."
          },
          {
            title: "Implementação de GrantedAuthority com Hierarquia",
            language: "java",
            code: `// Configurar hierarquia de papéis
@Configuration
public class AuthorizationConfig {

    @Bean
    public RoleHierarchy roleHierarchy() {
        return RoleHierarchyImpl.withDefaultRolePrefix()
            .role("ADMIN").implies("MANAGER")
            .role("MANAGER").implies("USER")
            .role("USER").implies("GUEST")
            .build();
    }

    // Integrar a hierarquia com a segurança de método
    @Bean
    static MethodSecurityExpressionHandler methodSecurityExpressionHandler(
            RoleHierarchy roleHierarchy) {
        DefaultMethodSecurityExpressionHandler handler =
            new DefaultMethodSecurityExpressionHandler();
        handler.setRoleHierarchy(roleHierarchy);
        return handler;
    }
}`,
            explanation: "A hierarquia de papéis permite que ADMIN herde automaticamente as permissões de MANAGER, que herda de USER, que herda de GUEST. Assim, um ADMIN pode aceder a qualquer recurso que requeira GUEST, USER ou MANAGER."
          }
        ],
        warnings: [
          "ThreadLocal e threads assíncronas: O SecurityContext é armazenado em ThreadLocal por padrão. Em operações assíncronas (@Async), o contexto não é propagado automaticamente. Use SecurityContextHolder.setStrategyName(SecurityContextHolder.MODE_INHERITABLETHREADLOCAL) ou DelegatingSecurityContextExecutor.",
          "Credentials são apagadas: Após a autenticação, o Spring Security apaga as credenciais do objeto Authentication por segurança. Se precisar aceder à password após a autenticação, configure eraseCredentials(false) no AuthenticationManager.",
          "Principal pode ser String ou UserDetails: Dependendo da configuração, authentication.getPrincipal() pode retornar uma String (username) ou um objeto UserDetails. Verifique sempre o tipo antes de fazer cast."
        ],
        references: [
          { title: "Spring Security - Authentication Architecture", url: "https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html" },
          { title: "Spring Security - SecurityContext", url: "https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-securitycontext" },
          { title: "Baeldung - SecurityContext and SecurityContextHolder", url: "https://www.baeldung.com/spring-security-context-propagation" }
        ],
        diagrams: [
          {
            title: "Ciclo de vida do SecurityContext",
            type: "mermaid",
            code: `flowchart LR
  A[Requisição chega] --> B[SecurityContextPersistenceFilter]
  B --> C[Carrega SecurityContext da sessão]
  C --> D[SecurityContextHolder.setContext]
  D --> E[Filtros / Controller]
  E --> F[Limpa ou persiste contexto]`,
            explanation: "O SecurityContextPersistenceFilter carrega o contexto da sessão HTTP no início do request e define-o no SecurityContextHolder; no fim, o contexto é limpo ou guardado na sessão."
          }
        ],
        exercises: [
          {
            title: "SecurityContext em threads assíncronas — contexto perdido",
            difficulty: "avançado",
            description: `Você tem um método @Async que lê SecurityContextHolder.getContext().getAuthentication() para obter o utilizador atual. Em produção, o resultado é sempre null dentro do método assíncrono.

1. Explique por que o contexto é null.
2. Mostre 2 formas de resolver, explicando as limitações de cada uma.`,
            hint: "SecurityContextHolder usa ThreadLocal por padrão. ThreadLocal não é propagado para novas threads automaticamente.",
            solution: `// CAUSA: SecurityContextHolder usa ThreadLocal por padrão.
// O contexto NÃO é propagado para novas threads (inclusive thread pools @Async).

// SOLUÇÃO 1: DelegatingSecurityContextExecutor (recomendada para thread pools)
@Configuration
@EnableAsync
public class AsyncConfig implements AsyncConfigurer {

    @Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.initialize();
        // Propaga o SecurityContext para cada task submetida ao pool
        return new DelegatingSecurityContextExecutorService(
            executor.getThreadPoolExecutor()
        );
    }
}

// SOLUÇÃO 2: MODE_INHERITABLETHREADLOCAL (simples mas com limitações)
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        // Propaga o contexto para threads FILHAS criadas diretamente
        SecurityContextHolder.setStrategyName(
            SecurityContextHolder.MODE_INHERITABLETHREADLOCAL
        );
        SpringApplication.run(Application.class, args);
    }
}

// ⚠️ LIMITAÇÃO da Solução 2:
// InheritableThreadLocal propaga do thread CRIADOR para thread FILHA.
// Em thread pools (@Async), a thread foi criada ANTES do pedido.
// O contexto propagado é o do pool, não do utilizador atual.
// Use sempre a Solução 1 para @Async com ThreadPoolTaskExecutor.`,
            solutionLanguage: "java"
          },
          {
            title: "Inspecionar Authentication no controller",
            difficulty: "iniciante",
            description: `Escreva um endpoint REST GET /api/me que retorna:
1. O username do utilizador autenticado
2. A lista de authorities/roles
3. Se é autenticação completa (não remember-me)

Use a injeção de Authentication pelo Spring MVC. Explique a diferença entre isAuthenticated() e isFullyAuthenticated().`,
            hint: "Spring MVC injeta o Authentication automaticamente como parâmetro do método do controller.",
            solution: `@RestController
@RequestMapping("/api/me")
public class AuthInfoController {

    @GetMapping
    public Map<String, Object> getCurrentUser(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return Map.of("authenticated", false);
        }

        // 1. Username
        String username = authentication.getName(); // ou getPrincipal().toString()

        // 2. Lista de authorities
        List<String> authorities = authentication.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .collect(Collectors.toList());

        // 3. isAuthenticated() vs isFullyAuthenticated():
        // - isAuthenticated(): true para autenticação completa E remember-me
        // - isFullyAuthenticated(): true APENAS para autenticação completa
        // RememberMeAuthenticationToken.isAuthenticated() = true,
        // mas não é "fully authenticated" — exige login para operações sensíveis
        boolean fullyAuthenticated =
            !(authentication instanceof RememberMeAuthenticationToken);

        return Map.of(
            "username", username,
            "authorities", authorities,
            "isAuthenticated", authentication.isAuthenticated(),
            "isFullyAuthenticated", fullyAuthenticated,
            "principalType", authentication.getPrincipal().getClass().getSimpleName()
        );
    }
}`,
            solutionLanguage: "java"
          }
        ],
        antiPatterns: [
          {
            title: "Storing mutable business state in the Authentication object",
            problem: "Attaching domain objects (e.g., User entity with lazy-loaded collections) directly as the Authentication principal and mutating them during the request lifecycle.",
            danger: "The SecurityContext is shared across the request thread. Mutations to the principal affect all security decisions in the same request. In reactive or async contexts, the same principal object may be read concurrently.",
            fix: "Store only an immutable snapshot in the principal: username, userId, and pre-loaded GrantedAuthority list. Reload the full domain entity from the repository when business logic needs it."
          },
          {
            title: "Reading SecurityContextHolder directly in domain/business logic",
            problem: "Service or repository classes call SecurityContextHolder.getContext().getAuthentication() directly to retrieve the current user, creating an invisible dependency on the security infrastructure.",
            danger: "Business logic becomes untestable without a full Spring Security context. Unit tests must configure SecurityContextHolder manually. Domain logic is coupled to the web/security layer.",
            fix: "Inject the Authentication as a method parameter or constructor argument. Controllers extract it from the security context; services receive it as an explicit parameter. This makes the dependency visible and testable."
          },
          {
            title: "Not clearing the SecurityContext after async operations",
            problem: "Manually setting a SecurityContext on a worker thread (e.g., via SecurityContextHolder.setContext()) without clearing it after the task completes.",
            danger: "Thread pool threads reuse the thread — the stale SecurityContext from a previous user's request persists to the next task executed by the same thread, causing authorization decisions to use the wrong identity.",
            fix: "Use DelegatingSecurityContextRunnable or DelegatingSecurityContextExecutorService which automatically clear the context after task completion. Never set SecurityContextHolder directly on pooled threads."
          }
        ]
      },
      {
        id: "3-2",
        title: "Authorization Managers",
        description: "Compreenda a interface AuthorizationManager e como o Spring Security toma decisões de autorização.",
        content: `O \`AuthorizationManager\` é a interface central para decisões de autorização no Spring Security 6. Introduzido para substituir os antigos \`AccessDecisionManager\` e \`AccessDecisionVoter\`, oferece uma API mais simples e flexível.

**A Interface AuthorizationManager<T>**

A interface define um único método principal:
\`AuthorizationDecision check(Supplier<Authentication> authentication, T object)\`

O parâmetro \`T\` é genérico e representa o contexto da decisão. Para autorização de requisições HTTP, \`T\` é \`RequestAuthorizationContext\` (que contém o \`HttpServletRequest\`). Para autorização de métodos, \`T\` é \`MethodInvocation\`.

O método retorna um \`AuthorizationDecision\`, que é um simples wrapper em torno de um booleano (\`granted\` ou \`denied\`). Se retornar \`null\`, significa "abstenção" — o manager não tem opinião sobre esta decisão.

**Implementações Principais:**

1. **AuthorityAuthorizationManager**: Verifica se o utilizador tem uma autoridade específica. Usado por \`hasRole()\` e \`hasAuthority()\`.
2. **AuthenticatedAuthorizationManager**: Verifica se o utilizador está autenticado. Usado por \`authenticated()\`.
3. **RequestMatcherDelegatingAuthorizationManager**: Para requisições HTTP, delega para diferentes managers baseado no URL.
4. **PreAuthorizeAuthorizationManager**: Avalia expressões SpEL de \`@PreAuthorize\`.

**Criação de AuthorizationManagers Personalizados:**

É possível criar implementações personalizadas para lógica de autorização complexa que não se encaixa nas expressões SpEL padrão.`,
        concepts: ["AuthorizationManager<T>", "AuthorizationDecision", "RequestAuthorizationContext", "MethodInvocation", "AuthorityAuthorizationManager", "AuthenticatedAuthorizationManager", "RequestMatcherDelegatingAuthorizationManager", "PreAuthorizeAuthorizationManager", "Custom AuthorizationManager"],
        codeExamples: [
          {
            title: "AuthorizationManager Personalizado",
            language: "java",
            code: `// AuthorizationManager personalizado baseado em horário de trabalho
public class BusinessHoursAuthorizationManager
        implements AuthorizationManager<RequestAuthorizationContext> {

    @Override
    public AuthorizationDecision check(
            Supplier<Authentication> authentication,
            RequestAuthorizationContext context) {

        Authentication auth = authentication.get();
        if (auth == null || !auth.isAuthenticated()) {
            return new AuthorizationDecision(false);
        }

        // Verificar se está dentro do horário de trabalho (9h-18h)
        LocalTime now = LocalTime.now();
        boolean isBusinessHours = now.isAfter(LocalTime.of(9, 0))
            && now.isBefore(LocalTime.of(18, 0));

        // Admins podem aceder a qualquer hora
        boolean isAdmin = auth.getAuthorities().stream()
            .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        return new AuthorizationDecision(isBusinessHours || isAdmin);
    }
}

// Registar na configuração de segurança
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(authz -> authz
            .requestMatchers("/api/sensitive/**")
                .access(new BusinessHoursAuthorizationManager())
            .anyRequest().authenticated()
        );
    return http.build();
}`,
            explanation: "Este AuthorizationManager personalizado permite acesso a endpoints sensíveis apenas durante o horário de trabalho (9h-18h), exceto para administradores que podem aceder a qualquer hora."
          },
          {
            title: "Composição de AuthorizationManagers",
            language: "java",
            code: `// Compor múltiplos managers com lógica AND/OR
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    AuthorizationManager<RequestAuthorizationContext> hasAdmin =
        AuthorityAuthorizationManager.hasRole("ADMIN");
    AuthorizationManager<RequestAuthorizationContext> hasManager =
        AuthorityAuthorizationManager.hasRole("MANAGER");

    // Compor com lógica OR: ADMIN ou MANAGER
    AuthorizationManager<RequestAuthorizationContext> adminOrManager =
        (auth, context) -> {
            AuthorizationDecision adminDecision = hasAdmin.check(auth, context);
            if (adminDecision != null && adminDecision.isGranted()) {
                return adminDecision;
            }
            return hasManager.check(auth, context);
        };

    http
        .authorizeHttpRequests(authz -> authz
            .requestMatchers("/management/**").access(adminOrManager)
            .anyRequest().authenticated()
        );
    return http.build();
}`,
            explanation: "Podemos compor múltiplos AuthorizationManagers com lógica personalizada. Neste exemplo, o acesso é concedido se o utilizador for ADMIN ou MANAGER."
          }
        ],
        warnings: [
          "Migração do AccessDecisionManager: Se estiver a migrar de versões anteriores do Spring Security, note que AccessDecisionManager e AccessDecisionVoter foram depreciados em favor do AuthorizationManager.",
          "Supplier<Authentication> é lazy: O parâmetro authentication é um Supplier, o que significa que a autenticação só é resolvida quando .get() é chamado. Isto permite otimizações de performance para endpoints públicos.",
          "Retornar null vs false: Retornar null de um AuthorizationManager significa 'abstenção' (sem opinião). Retornar new AuthorizationDecision(false) significa 'acesso negado'. A diferença é importante em composições."
        ],
        references: [
          { title: "Spring Security - Authorization Architecture", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/architecture.html" },
          { title: "Spring Security 6 Migration Guide", url: "https://docs.spring.io/spring-security/reference/migration-7/index.html" },
          { title: "Baeldung - Custom Authorization with Spring Security", url: "https://www.baeldung.com/spring-security-custom-authorization-manager" }
        ],
        exercises: [
          {
            title: "AuthorizationManager personalizado — IP + role",
            difficulty: "avançado",
            description: `Você precisa de uma lógica de autorização que não pode ser expressa em SpEL: o acesso é concedido somente se o pedido vem de um IP em um range CIDR permitido E o utilizador tem ROLE_API.

Implemente um AuthorizationManager personalizado e integre-o na SecurityFilterChain.`,
            hint: "Implemente AuthorizationManager<RequestAuthorizationContext>. O contexto dá acesso ao HttpServletRequest e ao Authentication.",
            solution: `// PASSO 1: Implementar o AuthorizationManager personalizado
@Component
public class IpAndRoleAuthorizationManager
        implements AuthorizationManager<RequestAuthorizationContext> {

    private static final InetAddressRange ALLOWED_RANGE =
        InetAddressRange.ofCidr("10.0.0.0/8");

    @Override
    public AuthorizationDecision check(
            Supplier<Authentication> authenticationSupplier,
            RequestAuthorizationContext context) {

        HttpServletRequest request = context.getRequest();
        Authentication authentication = authenticationSupplier.get();

        // Verificar se o IP está no range permitido
        String remoteAddr = request.getRemoteAddr();
        boolean ipAllowed = ALLOWED_RANGE.contains(remoteAddr);

        // Verificar se o utilizador tem ROLE_API
        boolean hasRole = authentication.getAuthorities().stream()
            .anyMatch(a -> a.getAuthority().equals("ROLE_API"));

        // AMBAS as condições devem ser verdadeiras
        return new AuthorizationDecision(ipAllowed && hasRole);
    }
}

// PASSO 2: Registrar na SecurityFilterChain
@Bean
public SecurityFilterChain filterChain(HttpSecurity http,
        IpAndRoleAuthorizationManager authManager) throws Exception {
    http.authorizeHttpRequests(authz -> authz
        .requestMatchers("/api/**").access(authManager) // usar o manager customizado
        .anyRequest().denyAll()
    );
    return http.build();
}`,
            solutionLanguage: "java"
          },
          {
            title: "Compor Authorization Managers com allOf()",
            difficulty: "avançado",
            description: `Você tem 3 regras que devem ser satisfeitas SIMULTANEAMENTE:
1. Utilizador está autenticado
2. Utilizador tem ROLE_EDITOR
3. O pedido é feito entre 09h-18h (horário de trabalho)

Como compor estas 3 regras usando os mecanismos built-in do Spring Security sem criar um único AuthorizationManager monolítico?`,
            hint: "Use AuthorizationManagers.allOf() para compor múltiplos managers. Spring Security tem AuthenticatedAuthorizationManager e AuthorityAuthorizationManager prontos.",
            solution: `// PASSO 1: AuthorizationManager para horário de trabalho
@Component
public class BusinessHoursAuthorizationManager
        implements AuthorizationManager<RequestAuthorizationContext> {

    @Override
    public AuthorizationDecision check(
            Supplier<Authentication> auth,
            RequestAuthorizationContext context) {
        int hour = LocalTime.now().getHour();
        return new AuthorizationDecision(hour >= 9 && hour < 18);
    }
}

// PASSO 2: Compor com allOf()
@Bean
public SecurityFilterChain filterChain(HttpSecurity http,
        BusinessHoursAuthorizationManager businessHours) throws Exception {

    // allOf() exige que TODOS os managers retornem true
    AuthorizationManager<RequestAuthorizationContext> composedManager =
        AuthorizationManagers.allOf(
            AuthenticatedAuthorizationManager.authenticated(),    // autenticado
            AuthorityAuthorizationManager.hasRole("EDITOR"),      // ROLE_EDITOR
            businessHours                                         // horário comercial
        );

    http.authorizeHttpRequests(authz -> authz
        .requestMatchers("/api/editorial/**").access(composedManager)
        .anyRequest().denyAll()
    );
    return http.build();
}

// anyOf() também existe — pelo menos UM manager deve retornar true
// Útil para: "ADMIN OU proprietário do recurso"`,
            solutionLanguage: "java"
          }
        ],
        whenToUse: [
          "✅ USE when authorization logic cannot be expressed in SpEL or URL patterns — e.g., IP allowlist/CIDR range checks, time-of-day restrictions, external policy engine (OPA/Cedar) integration.",
          "✅ USE when you need to compose independent authorization rules cleanly: AuthorizationManagers.allOf() and anyOf() are more readable than a single monolithic SpEL expression.",
          "✅ USE when replacing deprecated AccessDecisionManager or AccessDecisionVoter in a Spring Security 5 → 6 migration.",
          "✅ USE when the authorization logic must be independently unit tested as a plain Java class without Spring context.",
          "❌ AVOID when hasRole(), hasAuthority(), or a simple @beanName.method() SpEL expression covers the requirement — a custom AuthorizationManager is unnecessary complexity for standard cases.",
          "❌ AVOID for domain-object (per-instance) security — use PermissionEvaluator with hasPermission() in @PreAuthorize instead, which integrates with Spring Security's method security pipeline.",
          "⚖ TRADE-OFF: More boilerplate than SpEL (a full Java class vs one annotation), but offers full testability, dependency injection, logging, and the ability to call external systems synchronously during the authorization decision."
        ],
        antiPatterns: [
          {
            title: "Returning null instead of AuthorizationDecision(false)",
            problem: "An AuthorizationManager.check() method returns null when it wants to deny access, assuming null means 'denied'.",
            danger: "In Spring Security, null means 'abstain' — the manager has no opinion. When composed with AuthorizationManagers.anyOf(), a null-returning manager allows another manager to grant access. Access may be silently granted.",
            fix: "Return new AuthorizationDecision(false) to explicitly deny. Return null only when the manager intentionally abstains (e.g., it does not handle this type of request and another manager should decide)."
          },
          {
            title: "Blocking I/O or slow calls inside check()",
            problem: "The check() method makes synchronous HTTP calls to an external authorization service (OPA, Casbin) without a timeout, or performs JPA queries without caching.",
            danger: "Every incoming request blocks a server thread for the duration of the external call. Under load, this exhausts the thread pool and makes the application unresponsive — a security check becomes a DoS vector.",
            fix: "Apply a strict timeout (via RestClient/HttpClient timeout config). Cache authorization decisions for short periods (seconds) using Caffeine or Redis. For truly reactive needs, use the reactive variant of AuthorizationManager."
          },
          {
            title: "Stateful AuthorizationManager beans",
            problem: "An AuthorizationManager bean stores request-scoped data in instance fields (e.g., keeping the last authenticated user or decision in a field for 'optimization').",
            danger: "Spring beans are singletons by default. Instance fields are shared across all concurrent requests, causing race conditions where one user's authorization state bleeds into another user's decision.",
            fix: "AuthorizationManager implementations must be stateless. Derive all data from the Supplier<Authentication> and the authorization object passed to check(). Never store request-scoped data in bean fields."
          }
        ]
      },
      {
        id: "3-3",
        title: "Fluxo de Autorização a Nível de Requisição",
        description: "Acompanhe o percurso completo de uma requisição HTTP através da cadeia de filtros de segurança.",
        content: `Compreender o fluxo de autorização a nível de requisição é fundamental para diagnosticar problemas de segurança e para personalizar o comportamento do Spring Security. Quando uma requisição HTTP chega à aplicação, ela percorre uma série de filtros antes de atingir o controller.

**O Percurso da Requisição:**

1. **DelegatingFilterProxy**: O container de servlet delega para o Spring.
2. **FilterChainProxy**: Seleciona a \`SecurityFilterChain\` apropriada.
3. **SecurityFilterChain**: A requisição passa por uma cadeia ordenada de filtros de segurança.

**Filtros Principais na Cadeia (por ordem):**

- **SecurityContextPersistenceFilter**: Carrega o SecurityContext da sessão HTTP (se existir).
- **CsrfFilter**: Verifica o token CSRF para proteção contra ataques CSRF.
- **UsernamePasswordAuthenticationFilter**: Processa formulários de login.
- **BasicAuthenticationFilter**: Processa autenticação HTTP Basic.
- **ExceptionTranslationFilter**: Captura exceções de segurança e traduz em respostas HTTP.
- **AuthorizationFilter**: O último filtro — toma a decisão de autorização.

**O AuthorizationFilter em Detalhe:**

O \`AuthorizationFilter\` é o filtro responsável pela decisão final de autorização. Ele:
1. Obtém o \`Authentication\` do \`SecurityContextHolder\`.
2. Delega ao \`AuthorizationManager\` configurado (tipicamente \`RequestMatcherDelegatingAuthorizationManager\`).
3. O manager percorre as regras definidas em \`authorizeHttpRequests()\`.
4. Se o acesso for negado, lança uma \`AccessDeniedException\`.
5. O \`ExceptionTranslationFilter\` captura a exceção e decide: se o utilizador não está autenticado, redireciona para o login (401); se está autenticado mas sem permissão, retorna 403.`,
        concepts: ["DelegatingFilterProxy", "FilterChainProxy", "SecurityFilterChain", "AuthorizationFilter", "ExceptionTranslationFilter", "SecurityContextPersistenceFilter", "Cadeia de Filtros", "AccessDeniedException", "AuthenticationEntryPoint", "AccessDeniedHandler"],
        codeExamples: [
          {
            title: "Configuração do ExceptionHandling",
            language: "java",
            code: `@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(authz -> authz
            .requestMatchers("/api/**").authenticated()
            .anyRequest().permitAll()
        )
        .exceptionHandling(exceptions -> exceptions
            // Quando o utilizador NÃO está autenticado (401)
            .authenticationEntryPoint((request, response, authException) -> {
                response.setContentType("application/json");
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write(
                    "{\\"error\\": \\"Não autenticado\\", " +
                    "\\"message\\": \\"Faça login para aceder a este recurso.\\"}"
                );
            })
            // Quando o utilizador está autenticado mas SEM permissão (403)
            .accessDeniedHandler((request, response, accessDeniedException) -> {
                response.setContentType("application/json");
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                response.getWriter().write(
                    "{\\"error\\": \\"Acesso negado\\", " +
                    "\\"message\\": \\"Não tem permissão para este recurso.\\"}"
                );
            })
        )
        .httpBasic();
    return http.build();
}`,
            explanation: "O authenticationEntryPoint trata requisições não autenticadas (401). O accessDeniedHandler trata requisições autenticadas mas sem permissão (403). Ambos são configurados no exceptionHandling."
          },
          {
            title: "Filtro Personalizado na Cadeia de Segurança",
            language: "java",
            code: `// Filtro personalizado para logging de autorização
public class AuthorizationLoggingFilter extends OncePerRequestFilter {

    private static final Logger logger =
        LoggerFactory.getLogger(AuthorizationLoggingFilter.class);

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        Authentication auth =
            SecurityContextHolder.getContext().getAuthentication();

        String user = (auth != null) ? auth.getName() : "anonymous";
        String method = request.getMethod();
        String uri = request.getRequestURI();

        logger.info("Requisição: {} {} por utilizador: {}", method, uri, user);

        filterChain.doFilter(request, response);

        logger.info("Resposta: {} para {} {} por {}",
            response.getStatus(), method, uri, user);
    }
}

// Registar o filtro na cadeia
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .addFilterBefore(new AuthorizationLoggingFilter(),
            AuthorizationFilter.class)
        .authorizeHttpRequests(authz -> authz
            .anyRequest().authenticated()
        );
    return http.build();
}`,
            explanation: "Este filtro personalizado regista todas as requisições e respostas, incluindo o utilizador e o status HTTP. É inserido antes do AuthorizationFilter para capturar o resultado da autorização."
          }
        ],
        warnings: [
          "Ordem dos filtros: A ordem em que os filtros são adicionados à cadeia é crucial. Um filtro de autenticação deve vir antes do filtro de autorização. Use addFilterBefore(), addFilterAfter() ou addFilterAt() com cuidado.",
          "ExceptionTranslationFilter só captura filtros posteriores: O ExceptionTranslationFilter só pode capturar exceções lançadas por filtros que vêm DEPOIS dele na cadeia. Exceções de filtros anteriores não são tratadas.",
          "Diferença entre 401 e 403: 401 (Unauthorized) significa 'não autenticado'. 403 (Forbidden) significa 'autenticado mas sem permissão'. Usar o código correto é fundamental para o comportamento esperado dos clientes."
        ],
        references: [
          { title: "Spring Security - Servlet Architecture", url: "https://docs.spring.io/spring-security/reference/servlet/architecture.html" },
          { title: "Spring Security - ExceptionTranslationFilter", url: "https://docs.spring.io/spring-security/reference/servlet/architecture.html#servlet-exceptiontranslationfilter" },
          { title: "Baeldung - Spring Security Filters Chain", url: "https://www.baeldung.com/spring-security-registered-filters" }
        ],
        exercises: [
          {
            title: "Tracing de requisição negada — 403 no filter chain",
            difficulty: "avançado",
            description: `Um pedido GET /api/reports retorna 403. Você precisa determinar qual componente exato na filter chain produziu o 403.

1. Que logs você habilita?
2. Qual classe processa o AccessDeniedException e envia o 403?
3. Onde no filter chain a decisão de autorização é tomada?`,
            hint: "Habilite logging DEBUG do Spring Security. Identifique AuthorizationFilter, ExceptionTranslationFilter e AccessDeniedHandler no trace.",
            solution: `// PASSO 1: Habilitar logging DEBUG
// application.properties:
// logging.level.org.springframework.security=DEBUG
// logging.level.org.springframework.security.web.FilterChainProxy=TRACE

// PASSO 2: Analisar o trace de logs para uma requisição negada
// Os logs relevantes aparecem nesta ordem:

// [FilterChainProxy] Securing GET /api/reports
// [SecurityContextHolderFilter] Set SecurityContextHolder to ...
// [UsernamePasswordAuthenticationFilter] (ou OAuth2/JWT)
// [AuthorizationFilter] Authorizing GET /api/reports  ← DECISÃO aqui
// [AuthorizationFilter] Access denied. Authenticated=true, required=ROLE_ADMIN
// [ExceptionTranslationFilter] Sending to AccessDeniedHandler  ← CAPTURA aqui

// PASSO 3: Identificar os componentes
// AuthorizationFilter (linha ~30 no filter chain):
//   - Chama AuthorizationManager.check(authentication, request)
//   - Lança AccessDeniedException se negado

// ExceptionTranslationFilter (linha ~25, ANTES de AuthorizationFilter):
//   - Captura SecurityException e AuthenticationException
//   - Para AccessDeniedException: delega para AccessDeniedHandler

// AccessDeniedHandler padrão: AccessDeniedHandlerImpl
//   - Envia resposta 403 Forbidden
//   - Pode ser customizado para JSON:
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.exceptionHandling(ex -> ex
        .accessDeniedHandler((request, response, exception) -> {
            response.setContentType("application/json");
            response.setStatus(403);
            response.getWriter().write(
                "{\"error\":\"forbidden\",\"path\":\"" +
                request.getRequestURI() + "\"}"
            );
        })
    );
    return http.build();
}`,
            solutionLanguage: "java"
          },
          {
            title: "Filtro customizado — posição incorreta na chain",
            difficulty: "avançado",
            description: `Você adiciona um OncePerRequestFilter que lê SecurityContextHolder.getContext().getAuthentication(). O Authentication é null intermitentemente.

O filtro foi registrado como um servlet filter padrão (não via Spring Security).

Explique por que Authentication pode ser null e corrija o problema.`,
            hint: "Um filtro registrado fora do Spring Security pode executar antes que o SecurityContextHolder seja populado. Use addFilterAfter() para posicioná-lo corretamente.",
            solution: `// PROBLEMA:
// Filtros registrados como servlet padrão (FilterRegistrationBean ou
// @Component em OncePerRequestFilter) executam FORA do FilterChainProxy.
// Dependendo da ordem do servlet container, podem rodar ANTES de
// SecurityContextHolderFilter — que é quem popula o SecurityContext.

// ❌ ERRADO: Registro como servlet filter padrão
@Bean
public FilterRegistrationBean<MyFilter> myFilter() {
    FilterRegistrationBean<MyFilter> reg = new FilterRegistrationBean<>(new MyFilter());
    reg.setOrder(1); // pode executar antes do Spring Security!
    return reg;
}

// ✅ CORRETO: Registrar DENTRO da SecurityFilterChain
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        // Executar após SecurityContextHolderFilter (que popula o contexto)
        .addFilterAfter(new MyFilter(), SecurityContextHolderFilter.class)
        // OU: executar antes de AuthorizationFilter (mas depois do contexto)
        .addFilterBefore(new MyFilter(), AuthorizationFilter.class)
        .authorizeHttpRequests(authz -> authz.anyRequest().authenticated());
    return http.build();
}

// DIAGNÓSTICO: Para ver a ordem dos filtros ativos:
// logging.level.org.springframework.security.web.FilterChainProxy=DEBUG
// "Security filter chain: [SecurityContextHolderFilter, ...]"
// Seu filtro deve aparecer nesta lista, não fora dela.`,
            solutionLanguage: "java"
          }
        ],
        diagrams: [
          {
            title: "Fluxo de decisão de autorização (AuthorizationFilter / AuthorizationManager)",
            type: "mermaid",
            code: `flowchart LR
  Req[Requisição] --> AuthFilter[AuthorizationFilter]
  AuthFilter --> AuthMgr[AuthorizationManager]
  AuthMgr --> Check{Permitido?}
  Check -->|Sim| Allow[Acesso permitido]
  Check -->|Não| Deny[AccessDeniedException]`,
            explanation: "O AuthorizationFilter obtém o Authentication do SecurityContextHolder, delega ao AuthorizationManager (regras de authorizeHttpRequests); se negado, lança AccessDeniedException e o ExceptionTranslationFilter trata (401/403)."
          }
        ],
        antiPatterns: [
          {
            title: "Using authenticated() instead of denyAll() as fallback",
            problem: "Ending the authorization rules with .anyRequest().authenticated() as the default fallback.",
            danger: "Any new endpoint added to the application is automatically accessible to all authenticated users — including internal admin endpoints, debug endpoints, or Swagger UI — until an explicit rule is added. Security is opt-out instead of opt-in.",
            fix: "End rules with .anyRequest().denyAll(). New endpoints are blocked by default. This forces developers to explicitly declare access rules for every new endpoint, making security posture visible in code review."
          },
          {
            title: "Registering custom filters as @Component (double registration)",
            problem: "A custom security filter extends OncePerRequestFilter and is annotated with @Component. Spring Boot auto-registers @Component filters as servlet filters AND Spring Security registers them via http.addFilterBefore().",
            danger: "The filter executes twice per request — once outside the security filter chain (before SecurityContextHolder is populated) and once inside. The first execution sees a null Authentication. Audit logs, rate limiters, or token validators fire twice.",
            fix: "Either: (a) register the filter only via http.addFilterBefore/After() and suppress auto-registration with a FilterRegistrationBean with setEnabled(false), or (b) use @Component only and do NOT call http.addFilter*() — choose one registration path."
          },
          {
            title: "Exposing actuator endpoints without explicit security rules",
            problem: "Spring Boot Actuator endpoints (/actuator/**) are included in the default security configuration that ends with anyRequest().authenticated() — so any authenticated user can access /actuator/env, /actuator/beans, or /actuator/heapdump.",
            danger: "/actuator/env exposes all configuration properties including database passwords and API keys. /actuator/heapdump can expose in-memory data including tokens and credentials. Authentication alone is not sufficient protection.",
            fix: "Restrict actuator endpoints explicitly: .requestMatchers(\"/actuator/health\").permitAll() for health checks and .requestMatchers(\"/actuator/**\").hasRole(\"ACTUATOR_ADMIN\") for everything else. Consider a separate SecurityFilterChain for actuator endpoints on a different port."
          }
        ]
      },
      {
        id: "3-4",
        title: "Fluxo de Autorização a Nível de Método",
        description: "Entenda como os proxies AOP interceptam chamadas de método para aplicar regras de segurança.",
        content: `A autorização a nível de método no Spring Security funciona através de **proxies AOP (Aspect-Oriented Programming)**. Quando \`@EnableMethodSecurity\` está ativo, o Spring cria proxies em torno dos beans que contêm métodos anotados com anotações de segurança. Estes proxies interceptam as chamadas aos métodos e aplicam as verificações de segurança antes e/ou depois da execução.

**O Mecanismo de Interceptação:**

Quando o Spring Boot inicia e encontra \`@EnableMethodSecurity\`, ele regista vários \`MethodInterceptor\`s que são aplicados como advice AOP:

1. **AuthorizationManagerBeforeMethodInterceptor**: Intercepta chamadas a métodos anotados com \`@PreAuthorize\`. Avalia a expressão SpEL ANTES da execução do método. Se a avaliação retornar \`false\`, lança \`AccessDeniedException\` e o método nunca é executado.

2. **AuthorizationManagerAfterMethodInterceptor**: Intercepta chamadas a métodos anotados com \`@PostAuthorize\`. O método é executado primeiro, e depois a expressão SpEL é avaliada com acesso ao \`returnObject\`. Se falhar, lança \`AccessDeniedException\`.

3. **PreFilterAuthorizationMethodInterceptor**: Filtra coleções de entrada (\`@PreFilter\`) antes da execução.

4. **PostFilterAuthorizationMethodInterceptor**: Filtra coleções de saída (\`@PostFilter\`) após a execução.

**Ordem de Execução dos Interceptors:**

A ordem padrão é: \`@PreFilter\` → \`@PreAuthorize\` → execução do método → \`@PostAuthorize\` → \`@PostFilter\`.

**Limitação dos Proxies:**

Uma limitação importante é que as chamadas internas (self-invocation) — quando um método de uma classe chama outro método da mesma classe — não passam pelo proxy. Isto significa que as anotações de segurança no método chamado internamente não serão avaliadas.`,
        concepts: ["AOP Proxies", "MethodInterceptor", "AuthorizationManagerBeforeMethodInterceptor", "AuthorizationManagerAfterMethodInterceptor", "PreFilterAuthorizationMethodInterceptor", "PostFilterAuthorizationMethodInterceptor", "Self-Invocation Problem", "CGLIB vs JDK Proxies", "Ordem de Interceptação"],
        codeExamples: [
          {
            title: "Demonstração do Fluxo Completo de Interceptação",
            language: "java",
            code: `@Service
public class DocumentService {

    private final DocumentRepository documentRepository;

    // Fluxo: @PreFilter -> @PreAuthorize -> método -> @PostAuthorize -> @PostFilter

    // 1. @PreFilter filtra a lista de IDs (remove IDs negativos)
    // 2. @PreAuthorize verifica se o utilizador tem a autoridade
    @PreFilter("filterObject > 0")
    @PreAuthorize("hasAuthority('DOCUMENT_READ')")
    public List<Document> getDocumentsByIds(List<Long> ids) {
        return documentRepository.findAllById(ids);
    }

    // 1. @PreAuthorize verifica permissão
    // 2. Método executa
    // 3. @PostAuthorize verifica se o resultado pertence ao utilizador
    @PreAuthorize("hasRole('USER')")
    @PostAuthorize("returnObject.owner == authentication.name " +
        "or hasRole('ADMIN')")
    public Document getDocument(Long id) {
        return documentRepository.findById(id)
            .orElseThrow(() -> new DocumentNotFoundException(id));
    }

    // 1. Método executa e retorna todos os documentos
    // 2. @PostFilter remove documentos que não pertencem ao utilizador
    @PostFilter("filterObject.owner == authentication.name")
    public List<Document> getMyDocuments() {
        return documentRepository.findAll();
    }
}`,
            explanation: "Este exemplo mostra como as diferentes anotações de segurança são aplicadas em sequência. @PreFilter e @PreAuthorize atuam antes do método, @PostAuthorize e @PostFilter atuam depois."
          },
          {
            title: "O Problema da Self-Invocation",
            language: "java",
            code: `@Service
public class ReportService {

    @PreAuthorize("hasRole('USER')")
    public Report getPublicReport(Long id) {
        // Esta chamada interna NÃO passa pelo proxy!
        // A verificação @PreAuthorize de getConfidentialData() NÃO será executada!
        String data = getConfidentialData(id);
        return new Report(id, data);
    }

    @PreAuthorize("hasRole('ADMIN')")
    public String getConfidentialData(Long id) {
        return "Dados confidenciais do relatório " + id;
    }
}

// SOLUÇÃO: Extrair para outro bean
@Service
public class ReportService {

    private final ConfidentialDataService confidentialDataService;

    @PreAuthorize("hasRole('USER')")
    public Report getPublicReport(Long id) {
        // Agora a chamada passa pelo proxy do ConfidentialDataService
        String data = confidentialDataService.getConfidentialData(id);
        return new Report(id, data);
    }
}

@Service
public class ConfidentialDataService {

    @PreAuthorize("hasRole('ADMIN')")
    public String getConfidentialData(Long id) {
        return "Dados confidenciais do relatório " + id;
    }
}`,
            explanation: "Chamadas internas (self-invocation) não passam pelo proxy AOP, portanto as anotações de segurança são ignoradas. A solução é extrair o método para outro bean, garantindo que a chamada passe pelo proxy."
          }
        ],
        diagrams: [
          {
            title: "Invocação de segurança a nível de método (proxy AOP → interceptor → decisão)",
            type: "mermaid",
            code: `flowchart LR
  Client[Chamador] --> Proxy[Proxy AOP]
  Proxy --> PreAuth[PreAuthorize Interceptor]
  PreAuth --> Decision{Autorizado?}
  Decision -->|Não| Deny[AccessDeniedException]
  Decision -->|Sim| Method[Método executado]
  Method --> PostAuth[PostAuthorize / PostFilter]
  PostAuth --> Response[Resposta]`,
            explanation: "O proxy AOP intercepta a chamada; o interceptor de @PreAuthorize avalia a SpEL antes do método; se autorizado, o método executa e depois @PostAuthorize/@PostFilter aplicam-se ao resultado."
          }
        ],
        warnings: [
          "Self-invocation bypassa a segurança: Chamadas de método dentro da mesma classe não passam pelo proxy AOP. As anotações de segurança serão ignoradas. Extraia métodos para beans separados.",
          "Métodos privados não são interceptados: As anotações de segurança em métodos privados são ignoradas porque os proxies AOP só podem interceptar métodos públicos.",
          "Ordem dos interceptors: A ordem padrão é @PreFilter → @PreAuthorize → método → @PostAuthorize → @PostFilter. Alterar esta ordem pode ter consequências inesperadas."
        ],
        references: [
          { title: "Spring Security - Method Security Architecture", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html" },
          { title: "Spring Framework - AOP Proxies", url: "https://docs.spring.io/spring-framework/reference/core/aop/proxying.html" },
          { title: "Baeldung - Method Security Internals", url: "https://www.baeldung.com/spring-security-method-security" }
        ],
        exercises: [
          {
            title: "@PreAuthorize e @Transactional — ordem dos interceptors AOP",
            difficulty: "avançado",
            description: `Você tem um método anotado com @PreAuthorize e @Transactional. Observa que a verificação de segurança executa DENTRO da transação (a transação abre primeiro).

1. Por que isso acontece?
2. É um problema? Em que cenário pode causar comportamento indesejado?
3. Como controlar a ordem?`,
            hint: "Spring AOP usa valores de order para determinar qual advice envolve qual. @Transactional tem order=Integer.MAX_VALUE por padrão.",
            solution: `// Por que a transação abre antes da segurança?
// @Transactional default order = Integer.MAX_VALUE (baixa prioridade = externo)
// @EnableMethodSecurity default order = 0 (alta prioridade = interno)
// WAIT — na verdade é o oposto:
// Maior order = mais externo na pilha de proxies = executa PRIMEIRO

// Spring Security @EnableMethodSecurity usa order = 0 por padrão
// @Transactional usa order = Integer.MAX_VALUE — executa por ÚLTIMO (mais interno)
// Portanto: Security ANTES da transaction por padrão ✅ (correto)

// SE você observa transação antes: verifique se @EnableMethodSecurity
// foi configurado com order alto:
// @EnableMethodSecurity → ordena os interceptors de segurança

// CONTROLAR a ordem explicitamente:
@Configuration
@EnableMethodSecurity(order = 500) // segurança com order 500
public class SecurityConfig { }

@Configuration
@EnableTransactionManagement(order = 100) // transação com order 100 = mais externo
public class TransactionConfig { }
// Resultado: Transação abre ANTES, segurança verifica DENTRO da transação

// PROBLEMA de segurança DENTRO da transação:
// Se a verificação consultar dados da própria transação (ex: ownership),
// pode ler dados uncommitted ou ter comportamento inesperado.
// RECOMENDADO: Segurança ANTES da transação (order de segurança < order de transação)
// Ex: @EnableMethodSecurity(order = 50), @EnableTransactionManagement(order = 100)`,
            solutionLanguage: "java"
          },
          {
            title: "PermissionEvaluator e hasPermission() em @PreAuthorize",
            difficulty: "avançado",
            description: `Você quer usar hasPermission(#document, 'WRITE') em @PreAuthorize, onde a lógica de permissão é delegada para um PermissionEvaluator personalizado.

Implemente o setup completo: PermissionEvaluator, configuração do MethodSecurityExpressionHandler, e exemplo de uso.`,
            hint: "Implemente a interface PermissionEvaluator e registre um MethodSecurityExpressionHandler bean que configure o evaluator.",
            solution: `// PASSO 1: Implementar PermissionEvaluator
@Component
public class DocumentPermissionEvaluator implements PermissionEvaluator {

    private final DocumentRepository documentRepository;

    public DocumentPermissionEvaluator(DocumentRepository repo) {
        this.documentRepository = repo;
    }

    // Chamado por hasPermission(targetDomainObject, permission)
    @Override
    public boolean hasPermission(Authentication auth, Object targetDomainObject,
                                  Object permission) {
        if (targetDomainObject instanceof Document document) {
            String username = auth.getName();
            String perm = permission.toString();
            return switch (perm) {
                case "READ" -> document.isPublic() ||
                               document.getOwnerUsername().equals(username);
                case "WRITE" -> document.getOwnerUsername().equals(username) ||
                                hasRole(auth, "EDITOR");
                case "DELETE" -> hasRole(auth, "ADMIN");
                default -> false;
            };
        }
        return false;
    }

    // Chamado por hasPermission(targetId, targetType, permission)
    @Override
    public boolean hasPermission(Authentication auth, Serializable targetId,
                                  String targetType, Object permission) {
        if ("Document".equals(targetType)) {
            Document doc = documentRepository.findById((Long) targetId)
                .orElse(null);
            return doc != null && hasPermission(auth, doc, permission);
        }
        return false;
    }

    private boolean hasRole(Authentication auth, String role) {
        return auth.getAuthorities().stream()
            .anyMatch(a -> a.getAuthority().equals("ROLE_" + role));
    }
}

// PASSO 2: Registrar no MethodSecurityExpressionHandler
@Configuration
@EnableMethodSecurity
public class MethodSecurityConfig {

    @Bean
    public MethodSecurityExpressionHandler methodSecurityExpressionHandler(
            DocumentPermissionEvaluator permissionEvaluator) {
        DefaultMethodSecurityExpressionHandler handler =
            new DefaultMethodSecurityExpressionHandler();
        handler.setPermissionEvaluator(permissionEvaluator);
        return handler;
    }
}

// PASSO 3: Usar em @PreAuthorize
@Service
public class DocumentService {

    @PreAuthorize("hasPermission(#document, 'WRITE')")
    public void updateDocument(Document document) { }

    @PreAuthorize("hasPermission(#id, 'Document', 'DELETE')")
    public void deleteDocument(Long id) { }
}`,
            solutionLanguage: "java"
          }
        ],
        antiPatterns: [
          {
            title: "@PreAuthorize on non-public methods",
            problem: "Annotating package-private, protected, or private methods with @PreAuthorize expecting them to be intercepted by Spring AOP.",
            danger: "Spring AOP (proxy-based) only intercepts public method calls on proxied beans. @PreAuthorize on non-public methods is silently ignored — no exception is thrown, no warning is logged. The method executes for all callers regardless of role.",
            fix: "All @PreAuthorize-annotated methods must be public. If the method must be non-public, use AspectJ compile-time weaving instead of Spring's proxy-based AOP (requires additional build configuration)."
          },
          {
            title: "Triggering database lazy loading inside SpEL expressions",
            problem: "Using @PostAuthorize with a SpEL expression like returnObject.department.manager.username that navigates a JPA entity graph with lazy associations.",
            danger: "Each navigation step fires an additional SQL query outside the original transaction (which closed when the repository method returned). This causes LazyInitializationException or N+1 queries per security check, proportional to the number of requests.",
            fix: "Fetch the required data eagerly in the repository query (JOIN FETCH) or load only the needed scalar values into the security check. Alternatively, check ownership at the query level and return only authorized results."
          },
          {
            title: "@EnableMethodSecurity on multiple @Configuration classes",
            problem: "@EnableMethodSecurity is declared on two or more configuration classes in the same application context.",
            danger: "Spring Security registers its AOP advisors twice. Method interceptors may fire twice per call, causing double evaluation of SpEL expressions and potential double-firing of authorization event listeners. Side effects of the authorization check run twice.",
            fix: "Declare @EnableMethodSecurity exactly once in the application — on the primary security configuration class. Verify with grep that only one class in the codebase carries this annotation."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "capstone",
    title: "Capstone Project",
    subtitle: "Projeto Final",
    description: "Arquitetura de autorização para SaaS multi-tenant: Global Admin, Tenant Admin, Utilizador, propriedade de recursos e permissões. Integre SecurityFilterChain, autorização a nível de método e AuthorizationManager num projeto de síntese.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/N5xwokNkCjHpjdv3yPIPRp/sandbox/4nY5BjNO4iG97lnmQVBkw0-img-4_1771581051000_na1fn_bGV2ZWwzLWludGVybmFscw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTjV4d29rTmtDakhwamR2M3lQSVBScC9zYW5kYm94LzRuWTVCak5PNGlHOTdsbm1RVkJrdzAtaW1nLTRfMTc3MTU4MTA1MTAwMF9uYTFmbl9iR1YyWld3ekxXbHVkR1Z5Ym1Gc2N3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SUwLwKXbcVaVK-s2rz4y5iwnzZqnqTI8~GsazU~2rG5czq12bwV2aWQ~eu98lr1QyC0UVh7r6fVG7m-N2wNh9UpGKIGMyrYX10hUE26pCOwpGaANf1O2fSmOLuJijpRSv7wupf5sZli~uEHC0fEwLlU1L4FyzxRtD0XvJt2fSNhXkg2YNWCLTNkrjC8AJdooDoFs5Tbo3a~QSfQ4Xwsrkez4EpmlWk0dyb6nBRuPEFfJ8mv1dOmPEt4Ghh3WXVN3pdJp1Pt~BNQjxKsLejjuZYRSAfkazydYZRF32JldMcXoIqDhzXr-xOOvm7XBYgnTNykwJFMO4vHpvQMtp8TmPw__",
    accentColor: "emerald",
    topics: [
      {
        id: "4-1",
        title: "Problema e Requisitos",
        description: "Contexto SaaS multi-tenant, atores (Global Admin, Tenant Admin, Utilizador) e requisitos de propriedade e permissões.",
        content: `Num cenário **SaaS multi-tenant**, a mesma aplicação serve vários inquilinos (tenants). Cada inquilino tem os seus próprios utilizadores, dados e configurações. A autorização deve garantir: (1) isolamento entre tenants; (2) papéis distintos — **Global Admin** (administra a plataforma), **Tenant Admin** (administra um tenant), **Utilizador** (usa recursos do seu tenant); (3) **propriedade** — um recurso pertence a um tenant e, opcionalmente, a um utilizador; (4) permissões granulares por recurso e por ação.

**Requisitos funcionais típicos**

- Global Admin: aceder a todos os tenants, criar/desativar tenants, ver métricas globais.
- Tenant Admin: gerir utilizadores e papéis do seu tenant, ver dados agregados do tenant.
- Utilizador: criar/editar/apagar apenas os seus recursos (ownership); listar apenas recursos do seu tenant.
- Endpoints públicos (login, registo) e endpoints por tenant (API sob \`/api/tenant/{tenantId}/**\` ou contexto de tenant no token).

**Requisitos não funcionais**

- Isolamento estrito: um utilizador do tenant A nunca acede a dados do tenant B.
- Fallback deny: qualquer rota ou método não explicitamente permitido deve ser negado.
- Rastreabilidade: decisões de autorização devem ser auditáveis (quem, quando, que recurso).`,
        concepts: ["SaaS multi-tenant", "Global Admin", "Tenant Admin", "Utilizador", "Propriedade", "Isolamento por tenant", "Requisitos de autorização"],
        codeExamples: [
          {
            title: "Esboço de requisitos por ator",
            language: "text",
            code: `Global Admin:
  - GET/POST /api/admin/tenants
  - GET /api/admin/tenants/{id}/metrics
  - hasAuthority("GLOBAL_ADMIN") ou hasRole("GLOBAL_ADMIN")

Tenant Admin (tenant T):
  - GET/POST /api/tenant/T/users
  - GET /api/tenant/T/reports
  - tenantId do token == T e hasAuthority("TENANT_ADMIN")

User (tenant T):
  - GET/POST /api/tenant/T/documents (apenas os seus)
  - #resource.ownerId == authentication.principal.id`,
            explanation: "Resumo de quem pode aceder a quê. A implementação concretiza isto na SecurityFilterChain, em @PreAuthorize e em AuthorizationManager."
          }
        ],
        warnings: [
          "Não confundir Tenant Admin com Global Admin: o primeiro está limitado a um tenant; o segundo à plataforma inteira.",
          "Definir sempre o que acontece quando tenantId está ausente ou inválido no token ou no path (deve resultar em 403)."
        ],
        references: [
          { title: "Documentação Spring Security — Authorization", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/index.html" },
          { title: "Authorization in Spring Security — Devoxx 2024", url: "https://www.youtube.com/watch?v=LGlyLmxjutI" }
        ],
        exercises: [
          {
            title: "Listar requisitos de autorização para um endpoint",
            difficulty: "iniciante",
            description: "Para o endpoint GET /api/tenant/{tenantId}/documents/{id}, escreva em português os requisitos de autorização para Global Admin, Tenant Admin e Utilizador (incluindo ownership).",
            hint: "Considere: quem pode ver qualquer documento do tenant? Quem pode ver apenas os seus?",
            solution: "Global Admin: pode ver qualquer documento de qualquer tenant. Tenant Admin: pode ver qualquer documento do seu tenant (tenantId do token == tenantId do path). Utilizador: pode ver apenas documentos do seu tenant e onde document.ownerId == seu userId.",
            solutionLanguage: "text"
          }
        ],
        whenToUse: [
          "✅ USE este tipo de análise quando desenhar um novo módulo ou API multi-tenant.",
          "❌ EVITE implementar regras na aplicação sem documentar primeiro os requisitos por ator."
        ],
        antiPatterns: [
          {
            title: "Tratar todos os utilizadores autenticados como iguais",
            problem: "Não distinguir Global Admin, Tenant Admin e Utilizador; todos recebem o mesmo conjunto de authorities.",
            danger: "Um utilizador normal pode aceder a endpoints de administração de tenant ou da plataforma.",
            fix: "Definir papéis e permissões por ator e mapeá-los em GrantedAuthority (ou atributos no token); aplicar regras por endpoint e por método."
          }
        ]
      },
      {
        id: "4-2",
        title: "Desenho do Modelo de Autorização",
        description: "RBAC, permissões e propriedade; papéis por tenant; mapeamento para conceitos do Spring Security.",
        content: `O **modelo de autorização** deve combinar **RBAC** (papéis por tenant e globais), **permissões** (ações sobre recursos) e **propriedade** (ownership). No Spring Security, isto traduz-se em: \`GrantedAuthority\` para papéis (ROLE_TENANT_ADMIN, ROLE_GLOBAL_ADMIN) e opcionalmente para permissões (DOCUMENT_READ, DOCUMENT_WRITE); um principal que carrega \`tenantId\` e \`userId\`; e regras que verificam tenant + role + ownership.

**Papéis por tenant**

- Global: \`ROLE_GLOBAL_ADMIN\` (único, não associado a um tenant).
- Por tenant: \`ROLE_TENANT_ADMIN\`, \`ROLE_USER\`. O principal deve incluir o \`tenantId\` (ex.: do JWT ou da sessão) para que as regras comparem \"tenant do pedido\" com \"tenant do utilizador\".

**Propriedade**

- Recursos com \`ownerId\` (e \`tenantId\`): apenas o dono ou um Tenant/Global Admin do mesmo tenant podem aceder. Implementar com \`@PreAuthorize\` (SpEL) ou \`AuthorizationManager\` que consulte o recurso e compare com \`authentication.principal\`.`,
        concepts: ["RBAC multi-tenant", "GrantedAuthority", "ROLE_GLOBAL_ADMIN", "ROLE_TENANT_ADMIN", "Propriedade (ownership)", "tenantId no principal"],
        codeExamples: [
          {
            title: "Principal com tenantId e userId",
            language: "java",
            code: `public class TenantUserPrincipal {
    private final String username;
    private final Long userId;
    private final String tenantId;
    private final Collection<? extends GrantedAuthority> authorities;

    // getters ...
}

// No JwtAuthenticationConverter ou UserDetailsService:
// authorities = [ROLE_TENANT_ADMIN] ou [ROLE_USER], tenantId e userId extraídos do token/sessão.`,
            explanation: "O principal deve expor tenantId e userId para que SecurityFilterChain, @PreAuthorize e AuthorizationManager possam decidir com base em tenant e ownership."
          }
        ],
        warnings: [
          "Garantir que tenantId e userId vêm de fonte confiável (token assinado ou sessão server-side), nunca apenas do path ou do body.",
          "Evitar misturar ROLE_ globais com lógica por tenant sem validar sempre o tenant no mesmo pedido."
        ],
        references: [
          { title: "Spring Security — GrantedAuthority", url: "https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/user-details.html" }
        ],
        exercises: [
          {
            title: "Definir authorities para os três atores",
            difficulty: "intermediário",
            description: "Proponha uma lista de GrantedAuthority (e como as atribui) para Global Admin, Tenant Admin e Utilizador. Inclua como obter tenantId no principal.",
            hint: "Use ROLE_ para papéis; pode usar authorities adicionais para permissões finas (ex.: DOCUMENT_DELETE).",
            solution: "Global Admin: [ROLE_GLOBAL_ADMIN]. Tenant Admin: [ROLE_TENANT_ADMIN] + tenantId no principal. User: [ROLE_USER] + tenantId + userId. Atribuir no JwtGrantedAuthoritiesConverter ou no UserDetailsService a partir do token ou da base de dados.",
            solutionLanguage: "text"
          }
        ],
        whenToUse: [
          "✅ USE RBAC por tenant quando os papéis forem estáveis e bem definidos.",
          "✅ USE ownership quando cada recurso tiver um dono e a regra for \"dono ou admin do tenant\"."
        ],
        antiPatterns: [
          {
            title: "Confiar no tenantId do path sem validar contra o token",
            problem: "A decisão de acesso usa apenas o tenantId da URL, sem verificar se o utilizador pertence a esse tenant.",
            danger: "Um utilizador do tenant A pode alterar o path para tenant B e aceder a dados de outro tenant.",
            fix: "Sempre comparar tenantId do principal (token/sessão) com o tenantId do recurso ou do path; negar se forem diferentes."
          }
        ]
      },
      {
        id: "4-3",
        title: "Plano de Implementação",
        description: "Camada HTTP (SecurityFilterChain), segurança de método (@PreAuthorize) e AuthorizationManager; onde aplicar cada um.",
        content: `**Camada HTTP (SecurityFilterChain)** — Use para rotas que dependem apenas de autenticação e papel, sem inspecionar o corpo ou parâmetros do recurso. Ex.: \`/api/admin/**\` → hasRole("GLOBAL_ADMIN"); \`/api/tenant/**\` → authenticated() e, em seguida, a lógica de tenant é aplicada no controller/serviço ou num filtro que valida o tenant do token contra o path.

**Segurança a nível de método (@PreAuthorize)** — Use para regras que dependem do principal e de parâmetros do método (ex.: \`#tenantId == authentication.principal.tenantId\`, \`#resourceId\` e ownership). Ideal para serviços chamados por controllers; evite SpEL muito longa — extraia para um bean (ex.: \`@tenantAuthz.canAccess(authentication, #tenantId)\`).

**AuthorizationManager** — Use quando a decisão depender de objetos complexos (ex.: \`RequestAuthorizationContext\` com URI e parâmetros) ou de lógica reutilizável que não cabe numa anotação. Ex.: um \`AuthorizationManager<RequestAuthorizationContext>\` que verifica se o tenant do path corresponde ao do token.`,
        concepts: ["SecurityFilterChain", "requestMatchers", "@PreAuthorize", "AuthorizationManager", "RequestAuthorizationContext", "Camadas de autorização"],
        codeExamples: [
          {
            title: "SecurityFilterChain para admin e tenant",
            language: "java",
            code: `http.authorizeHttpRequests(authz -> authz
    .requestMatchers("/api/admin/**").hasRole("GLOBAL_ADMIN")
    .requestMatchers("/api/tenant/**").authenticated()
    .requestMatchers("/api/public/**").permitAll()
    .anyRequest().denyAll()
);`,
            explanation: "Rotas administrativas globais exigem GLOBAL_ADMIN; rotas por tenant exigem apenas autenticação; o resto é negado. A validação de tenant e ownership deve ser feita nos serviços com @PreAuthorize ou AuthorizationManager."
          },
          {
            title: "@PreAuthorize com tenant e ownership",
            language: "java",
            code: `@PreAuthorize("@tenantAuthz.isSameTenant(authentication, #tenantId) and (@tenantAuthz.isTenantAdmin(authentication) or #document.ownerId == authentication.principal.userId)")
public Document getDocument(String tenantId, Long docId, Document document) {
    return document;
}`,
            explanation: "Delegação para um bean tenantAuthz mantém a SpEL legível; verifica tenant e depois admin ou proprietário do recurso."
          }
        ],
        warnings: [
          "Terminar sempre com .anyRequest().denyAll() para que novas rotas não fiquem abertas por omissão.",
          "Não duplicar lógica entre SecurityFilterChain e @PreAuthorize: use a cadeia para coarse-grained e o método para fine-grained."
        ],
        references: [
          { title: "Spring Security — Authorize HTTP Requests", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/authorize-http-requests.html" },
          { title: "Method Security — @PreAuthorize", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html" }
        ],
        exercises: [
          {
            title: "Escolher a camada para uma regra",
            difficulty: "intermediário",
            description: "Para a regra \"apenas o dono do documento ou o Tenant Admin do mesmo tenant podem apagar o documento\", indique se usaria SecurityFilterChain, @PreAuthorize ou AuthorizationManager e porquê.",
            hint: "A regra depende do recurso (documento) e do principal; não é só URL.",
            solution: "Usar @PreAuthorize (ou AuthorizationManager a nível de método): a decisão depende do objeto documento (ownerId, tenantId) e do principal. A SecurityFilterChain não tem acesso ao documento.",
            solutionLanguage: "text"
          }
        ],
        whenToUse: [
          "✅ USE SecurityFilterChain para regras por URL e papel (admin, público, autenticado).",
          "✅ USE @PreAuthorize para regras que usam parâmetros do método e ownership.",
          "✅ USE AuthorizationManager quando a lógica for partilhada ou demasiado complexa para SpEL."
        ],
        antiPatterns: [
          {
            title: "Apenas autorização HTTP sem verificação de ownership",
            problem: "Proteger apenas por URL e role; métodos que devolvem ou alteram recursos não verificam se o recurso pertence ao tenant/utilizador.",
            danger: "Um utilizador pode adivinhar IDs e aceder a recursos de outros (IDOR).",
            fix: "Em todos os métodos que devolvem ou alteram um recurso por ID, verificar tenant e ownership com @PreAuthorize ou AuthorizationManager."
          }
        ]
      },
      {
        id: "4-4",
        title: "Estratégia de Testes e Armadilhas",
        description: "Como testar autorização (unit e integração), Spring Security Test e erros comuns.",
        content: `**Estratégia de testes** — (1) **Unitários**: testar beans de autorização (ex.: \`TenantAuthorizationService\`) com mocks do principal e do recurso; (2) **Integração**: usar \`@WithMockUser\`, \`@WithUserDetails\` ou \`SecurityMockMvcRequestPostProcessors\` para simular utilizadores e chamar controllers ou serviços; (3) testar sempre **cenários negativos**: 401 (não autenticado), 403 (sem permissão, tenant errado, não-owner).

**Spring Security Test** — \`@WithMockUser(roles = "TENANT_ADMIN")\`, \`@WithUserDetails\` para carregar um UserDetails real, e \`mockMvc.perform(get(...).with(SecurityMockMvcRequestPostProcessors.jwt().claim("tenantId", "T1")))\` para JWT. Garantir que o principal usado nos testes tem tenantId e userId quando a aplicação os exige.

**Armadilhas comuns** — (1) Testar só o caminho autorizado e esquecer 403/401; (2) usar mocks que não refletem as authorities reais; (3) não limpar SecurityContext entre testes (contaminação); (4) assumir que um teste que passa com um utilizador garante isolamento de tenant sem um teste explícito com outro tenant.`,
        concepts: ["Spring Security Test", "@WithMockUser", "@WithUserDetails", "SecurityMockMvcRequestPostProcessors", "Testes de 401/403", "Isolamento de tenant em testes"],
        codeExamples: [
          {
            title: "Teste de acesso negado por tenant",
            language: "java",
            code: `@Test
@WithMockUser(username = "user1", authorities = "ROLE_USER")
void getDocument_whenDifferentTenant_returns403() throws Exception {
    // principal tem tenantId = "T1"; documento pertence a "T2"
    mockMvc.perform(get("/api/tenant/T2/documents/1"))
        .andExpect(status().isForbidden());
}`,
            explanation: "Garantir que um utilizador do tenant T1 não acede a recursos do tenant T2; o teste deve esperar 403."
          }
        ],
        warnings: [
          "Cada teste deve configurar explicitamente o principal (roles, tenantId) em vez de depender de estado global.",
          "Incluir pelo menos um teste por regra que verifique o acesso negado (403), não apenas o sucesso (200)."
        ],
        references: [
          { title: "Spring Security Test", url: "https://docs.spring.io/spring-security/reference/servlet/test/index.html" }
        ],
        exercises: [
          {
            title: "Escrever um teste que falhe sem a verificação de tenant",
            difficulty: "intermediário",
            description: "Escreva um teste de integração que chame GET /api/tenant/T2/documents/1 com um utilizador do tenant T1 e espere 403. Por que é que este teste é essencial?",
            hint: "Sem este teste, uma alteração no código pode remover a verificação de tenant e os outros testes (com o mesmo tenant) continuam a passar.",
            solution: "Usar @WithMockUser ou principal com tenantId T1; pedir recurso de T2; andExpect(status().isForbidden()). O teste é essencial para garantir que a verificação de tenant está presente e que um utilizador não acede a outro tenant.",
            solutionLanguage: "java"
          }
        ],
        whenToUse: [
          "✅ USE testes de integração com utilizadores simulados para cada papel e para cenários cross-tenant.",
          "❌ EVITE confiar apenas em testes que usam o mesmo tenant em todos os casos."
        ],
        antiPatterns: [
          {
            title: "Testar apenas o caminho autorizado",
            problem: "Os testes cobrem apenas o caso em que o utilizador tem permissão; não há testes para 401/403.",
            danger: "Regressões que abrem acesso indevido podem passar nos testes.",
            fix: "Para cada endpoint protegido, adicionar testes com utilizador não autenticado (401), com papel errado ou tenant errado (403), e com ownership incorreto (403)."
          },
          {
            title: "Principal de teste sem tenantId ou userId",
            problem: "Os testes usam @WithMockUser com apenas roles, mas a aplicação espera principal com tenantId/userId.",
            danger: "Os testes passam com um principal incompleto enquanto em produção o principal real tem mais campos; a lógica de tenant/ownership pode falhar em produção.",
            fix: "Usar @WithUserDetails ou um custom UserDetailsService de teste que preencha tenantId e userId no principal, ou SecurityMockMvcRequestPostProcessors.jwt() com os claims corretos."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "design-testes",
    title: "Design, Testes e Produção",
    subtitle: "Arquiteto",
    description: "Aprenda a desenhar um sistema de autorização robusto, escolhendo entre RBAC, ABAC e ACL. Domine os testes de segurança com Spring Security Test e as boas práticas para ambientes de produção, incluindo OAuth2 Resource Server com JWT.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/N5xwokNkCjHpjdv3yPIPRp/sandbox/4nY5BjNO4iG97lnmQVBkw0-img-5_1771581061000_na1fn_bGV2ZWw0LWRlc2lnbi10ZXN0aW5n.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTjV4d29rTmtDakhwamR2M3lQSVBScC9zYW5kYm94LzRuWTVCak5PNGlHOTdsbm1RVkJrdzAtaW1nLTVfMTc3MTU4MTA2MTAwMF9uYTFmbl9iR1YyWld3MExXUmxjMmxuYmkxMFpYTjBhVzVuLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Zvrh-XVZd3Repqas~CFOT7gBRiX~rR~hLsmSu6H4-dXW9kmqrsn~uxH6iFtKOlYF9BXj5DjwfE-nJJrg~y57dgUEu0MtOehntYIEFtaD0lDZHbumQDtiN9QK1l5arx-EnsNNl5vqOHKeUpRa8DKgDg9gkOmZADT7JFOmUCuTG0CCf0r0rbNeIFnbEHyBPOVMQAp~OXqyDwHw3wmiNoU7qQ4HcLNG22cqe5kz9k8m9l5N2qG60hi-9nL4N0MJyKjuA1NkyXvY964nMViE41YhDua01Zf3hqdPz4Pd4gDCYkKVVM1N~S4qNUaewaFHJuFNS9caLWMKMhtvTGBmJwj6gA__",
    accentColor: "amber",
    topics: [
      {
        id: "5-1",
        title: "Padrões de Design: RBAC, ABAC e ACL",
        description: "Compare os três principais padrões de controlo de acesso e saiba quando usar cada um.",
        content: `O controlo de acesso é um componente fundamental na segurança de qualquer aplicação. Define quem pode aceder a que recursos e que operações pode realizar. Existem três padrões principais de design de controlo de acesso, cada um com as suas vantagens e desvantagens.

**RBAC — Role-Based Access Control**

O Controlo de Acesso Baseado em Papéis é o modelo mais comum e mais simples. As permissões são associadas a papéis (roles), e os utilizadores são associados a esses papéis. Em vez de atribuir permissões diretamente a cada utilizador, o RBAC simplifica a administração ao agrupar permissões em papéis que refletem as funções de negócio (e.g., ADMIN, USER, EDITOR). No Spring Security, o RBAC é suportado nativamente através das GrantedAuthority com o prefixo ROLE_.

**ABAC — Attribute-Based Access Control**

O Controlo de Acesso Baseado em Atributos é o modelo mais dinâmico e flexível. As decisões de acesso são tomadas com base em atributos do utilizador (idade, departamento), do recurso (tipo, valor), do ambiente (hora, localização) e da ação. As regras são definidas em políticas. Exemplo: "Permitir que médicos acedam a registos de pacientes do seu próprio hospital durante o horário de trabalho." No Spring Security, implementa-se ABAC usando expressões SpEL em @PreAuthorize com beans dedicados.

**ACL — Access Control Lists**

As Listas de Controlo de Acesso oferecem controlo granular ao nível de instância de objeto. Cada objeto no sistema tem uma ACL associada que especifica que utilizadores têm que permissões sobre esse objeto em particular. O Spring Security fornece o módulo spring-security-acl com tabelas de base de dados dedicadas (ACL_SID, ACL_CLASS, ACL_OBJECT_IDENTITY, ACL_ENTRY).

| Característica | RBAC | ABAC | ACL |
|---|---|---|---|
| Granularidade | Grossa (papéis) | Muito Fina (atributos) | Fina (objetos) |
| Flexibilidade | Baixa | Alta | Média |
| Complexidade | Baixa | Alta | Média-Alta |
| Caso de Uso | Funções bem definidas | Regras dinâmicas | Permissões por objeto |`,
        concepts: ["RBAC (Role-Based Access Control)", "ABAC (Attribute-Based Access Control)", "ACL (Access Control Lists)", "Roles vs Permissions", "GrantedAuthority", "spring-security-acl", "Policy Decision Point (PDP)", "Hierarquia de Roles", "Princípio do Menor Privilégio"],
        codeExamples: [
          {
            title: "Implementação RBAC com Hierarquia de Papéis",
            language: "java",
            code: `@Configuration
@EnableMethodSecurity
public class RbacSecurityConfig {

    @Bean
    public RoleHierarchy roleHierarchy() {
        return RoleHierarchyImpl.withDefaultRolePrefix()
            .role("ADMIN").implies("MANAGER")
            .role("MANAGER").implies("EDITOR")
            .role("EDITOR").implies("USER")
            .build();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .requestMatchers("/management/**").hasRole("MANAGER")
                .requestMatchers("/edit/**").hasRole("EDITOR")
                .requestMatchers("/profile/**").hasRole("USER")
                .anyRequest().authenticated()
            );
        return http.build();
    }
}

// Serviço com autorização RBAC
@Service
public class UserManagementService {

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    public List<User> listUsers() {
        return userRepository.findAll();
    }
}`,
            explanation: "RBAC com hierarquia: ADMIN herda MANAGER, que herda EDITOR, que herda USER. Assim, um ADMIN pode aceder a qualquer recurso. A hierarquia simplifica a gestão de permissões."
          },
          {
            title: "Implementação ABAC com Bean de Autorização",
            language: "java",
            code: `// Bean de serviço de autorização para ABAC
@Component("authz")
public class AbacAuthorizationService {

    private final UserRepository userRepository;

    public AbacAuthorizationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Verifica se o utilizador pertence ao mesmo departamento
    public boolean isSameDepartment(Authentication auth, String department) {
        User user = userRepository.findByUsername(auth.getName())
            .orElse(null);
        return user != null && user.getDepartment().equals(department);
    }

    // Verifica se está dentro do horário de trabalho
    public boolean isBusinessHours() {
        LocalTime now = LocalTime.now();
        return now.isAfter(LocalTime.of(8, 0))
            && now.isBefore(LocalTime.of(18, 0));
    }

    // Regra complexa: mesmo departamento + horário de trabalho
    public boolean canAccessDepartmentData(Authentication auth,
            String department) {
        return isSameDepartment(auth, department) && isBusinessHours();
    }
}

// Uso no serviço
@Service
public class DepartmentService {

    @PreAuthorize("@authz.canAccessDepartmentData(authentication, #dept)")
    public List<Report> getDepartmentReports(String dept) {
        return reportRepository.findByDepartment(dept);
    }
}`,
            explanation: "ABAC implementado com um bean dedicado que combina múltiplos atributos: departamento do utilizador e hora do dia. A lógica complexa fica encapsulada e testável."
          }
        ],
        warnings: [
          "RBAC: Explosão de papéis: Em sistemas complexos, pode haver uma proliferação de papéis. Use hierarquias e combine com permissões granulares para evitar este problema.",
          "ACL: Complexidade de configuração: O módulo ACL do Spring Security requer tabelas específicas na base de dados e configuração detalhada. Siga a documentação oficial com atenção.",
          "ABAC: Performance: Expressões complexas avaliadas a cada chamada podem impactar a performance. Use caching para atributos que não mudam frequentemente.",
          "Abordagem híbrida: Na prática, é comum combinar padrões. Use RBAC para controlo geral e ABAC/ACL para regras mais finas."
        ],
        references: [
          { title: "Baeldung - Access Control Models", url: "https://www.baeldung.com/java-access-control-models" },
          { title: "Spring Security - ACLs", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/acls.html" },
          { title: "NIST RBAC Model", url: "https://csrc.nist.gov/projects/role-based-access-control" }
        ],
        exercises: [
          {
            title: "Evoluir de RBAC para ABAC sem reescrever tudo",
            difficulty: "avançado",
            description: `Seu sistema atual usa RBAC: ROLE_MANAGER pode aprovar todos os gastos. Um novo requisito chega: managers só podem aprovar gastos do seu próprio departamento E abaixo de $10.000. O modelo RBAC não consegue expressar esta regra.

Como você evolui para ABAC sem reescrever a autenticação e sem perder as roles existentes?`,
            hint: "Mantenha ROLE_MANAGER como GrantedAuthority. Adicione @PreAuthorize com SpEL delegando para um bean de política que acessa departamento e valor.",
            solution: `// ESTRATÉGIA: Combinar RBAC (roles) com ABAC (atributos)
// Mantém ROLE_MANAGER existente, adiciona regras de atributos

// PASSO 1: Bean de política ABAC
@Component("expensePolicy")
public class ExpenseAuthorizationPolicy {

    public boolean canApprove(Authentication auth, Expense expense) {
        // Verificar role RBAC (pode ser um utilizador com ROLE_ADMIN — aprova tudo)
        boolean isAdmin = auth.getAuthorities().stream()
            .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));
        if (isAdmin) return true;

        // Verificar atributos ABAC para MANAGER
        CustomUserDetails principal = (CustomUserDetails) auth.getPrincipal();

        // Regra 1: mesmo departamento
        boolean sameDepartment = principal.getDepartmentId()
            .equals(expense.getDepartmentId());

        // Regra 2: valor abaixo do limite
        boolean withinLimit = expense.getAmount()
            .compareTo(new BigDecimal("10000")) < 0;

        return sameDepartment && withinLimit;
    }
}

// PASSO 2: Serviço com @PreAuthorize
@Service
public class ExpenseService {

    @PreAuthorize("hasRole('MANAGER') and @expensePolicy.canApprove(authentication, #expense)")
    public void approveExpense(Expense expense) {
        expense.setApproved(true);
        expenseRepository.save(expense);
    }
}

// VANTAGEM desta abordagem híbrida:
// - Sem reescrita da autenticação
// - Sem alterações na base de dados de utilizadores
// - A política ABAC é centralizada, testável e versionável`,
            solutionLanguage: "java"
          },
          {
            title: "ABAC vs ACL — escolher o modelo correto",
            difficulty: "avançado",
            description: `Um sistema de gestão de documentos precisa de:
(a) Regra geral: utilizadores com ROLE_EDITOR podem editar documentos
(b) Documentos "bloqueados" só podem ser editados pelo autor original, mesmo que seja EDITOR

Avalie se deve usar ABAC ou ACL para este caso. Implemente a solução com o modelo escolhido.`,
            hint: "ACL é ideal para permissões por instância de objeto geridas por utilizadores finais. ABAC é melhor para regras de atributos do domínio.",
            solution: `// AVALIAÇÃO:
// ACL: ideal quando utilizadores FINAIS gerenciam permissões por objeto
//      (ex: Google Drive — "compartilhar este arquivo com João")
// ABAC: ideal quando as REGRAS vêm de atributos do domínio
//       (ex: "documentos bloqueados só pelo autor" — regra fixa)

// DECISÃO: ABAC — a regra é estática (atributo 'locked' + 'authorId')
// ACL seria excessivo: criaria entradas de permissão para cada documento

// ✅ IMPLEMENTAÇÃO com ABAC via @PreAuthorize
@Service
public class DocumentService {

    @PreAuthorize(
        "hasRole('EDITOR') and " +
        "(!#doc.locked or #doc.authorUsername == authentication.principal.username)"
    )
    public void updateDocument(Document doc) {
        documentRepository.save(doc);
    }
}

// LEITURA DA EXPRESSÃO:
// hasRole('EDITOR')   → precisa ser EDITOR
// AND
// (!doc.locked        → documento NÃO está bloqueado
//   OR                → OU
//  doc.authorUsername == username)  → é o autor original

// QUANDO ACL seria justificado neste cenário?
// Se os utilizadores pudessem compartilhar documentos com outros utilizadores
// individualmente (não por regra de negócio, mas por escolha do utilizador),
// aí ACL faria sentido — cada documento teria sua própria lista de acessos.`,
            solutionLanguage: "java"
          }
        ],
        antiPatterns: [
          {
            title: "Hardcoded role strings scattered across the codebase",
            problem: "Role names like \"ROLE_ADMIN\", \"ROLE_EDITOR\" appear as string literals in dozens of @PreAuthorize annotations, requestMatchers calls, and if-statements across multiple service classes.",
            danger: "When a role is renamed or split (e.g., ROLE_EDITOR → ROLE_CONTENT_EDITOR + ROLE_MEDIA_EDITOR), every occurrence must be found and updated. Grep misses annotations inside method bodies. One missed update creates a security hole or access regression.",
            fix: "Centralize role constants in a dedicated class or enum: public final class Roles { public static final String ADMIN = \"ROLE_ADMIN\"; }. Reference constants everywhere: @PreAuthorize(\"hasRole('\" + Roles.ADMIN + \"')\") or create meta-annotations per role."
          },
          {
            title: "Assigning ROLE_USER to all authenticated users implicitly",
            problem: "Every registered user receives ROLE_USER, and all feature authorization checks verify only hasRole('USER') — effectively meaning 'any authenticated user'.",
            danger: "The authorization model provides a false sense of security. There is no meaningful access differentiation between users. When a new feature requires restricted access, the existing ROLE_USER pattern must be refactored across the entire codebase.",
            fix: "Design roles around actual access boundaries from day one: ROLE_FREE_TIER, ROLE_PRO, ROLE_STAFF. Even if initially all users have ROLE_PRO, the role name reflects intent. Adding restrictions later requires only new role assignments, not code changes."
          },
          {
            title: "Using Spring Security ACL for performance-critical object-level access",
            problem: "Implementing per-document, per-record, or per-asset authorization using spring-security-acl with a relational database backend for a dataset of millions of records with high read throughput.",
            danger: "ACL lookups require joining ACL_OBJECT_IDENTITY, ACL_ENTRY, and ACL_SID tables. For 1M documents with complex sharing rules, each authorization check is a multi-table join. At high throughput, this becomes a bottleneck even with aggressive caching.",
            fix: "Reserve ACL for datasets where end users manage sharing (< 100K objects, low throughput). For larger datasets, encode ownership as a direct foreign key on the domain entity and filter in the repository query. Policy-based filtering (ABAC via JPA specifications) scales better."
          }
        ]
      },
      {
        id: "5-2",
        title: "Testes de Autorização com Spring Security Test",
        description: "Domine as ferramentas de teste do Spring Security para garantir que as regras de autorização funcionam corretamente.",
        content: `O módulo **Spring Security Test** fornece suporte robusto para a escrita de testes unitários e de integração para aplicações protegidas com Spring Security. A sua principal finalidade é permitir que os desenvolvedores verifiquem as regras de autenticação e autorização de forma isolada e eficiente.

Internamente, o Spring Security Test funciona através da manipulação do \`SecurityContextHolder\`. Durante a execução de um teste, o módulo utiliza anotações especiais ou \`RequestPostProcessors\` para popular o \`SecurityContext\` com um \`Authentication\` object simulado.

**Ferramentas Principais:**

- **@WithMockUser**: Cria um utilizador simulado com username, roles e authorities especificados. Não carrega um utilizador real — cria um \`UsernamePasswordAuthenticationToken\` com os detalhes fornecidos.

- **@WithUserDetails**: Utiliza um \`UserDetailsService\` real para carregar um utilizador da base de dados. Ideal quando a lógica depende de um \`UserDetails\` personalizado.

- **SecurityMockMvcRequestPostProcessors**: Permite modificar a requisição MockMvc programaticamente para adicionar contexto de segurança. Métodos como \`user()\`, \`anonymous()\`, \`csrf()\`.

**Boas Práticas de Teste:**

1. Teste tanto cenários de acesso permitido quanto negado.
2. Teste com diferentes papéis e autoridades.
3. Verifique os códigos HTTP corretos (200, 401, 403).
4. Teste a segurança a nível de método, não apenas de URL.`,
        concepts: ["spring-security-test", "@WithMockUser", "@WithUserDetails", "MockMvc + Security", "SecurityMockMvcRequestPostProcessors", "user()", "anonymous()", "csrf()", "@WebMvcTest", "@SpringBootTest", "Testes de Acesso Permitido", "Testes de Acesso Negado"],
        codeExamples: [
          {
            title: "Testes com @WithMockUser e MockMvc",
            language: "java",
            code: `@WebMvcTest(AdminController.class)
public class AdminControllerSecurityTest {

    @Autowired
    private MockMvc mockMvc;

    // Teste: utilizador sem papel ADMIN recebe 403
    @Test
    @WithMockUser(username = "user", roles = {"USER"})
    void whenUserAccessesAdmin_thenForbidden() throws Exception {
        mockMvc.perform(get("/admin/dashboard"))
               .andExpect(status().isForbidden());
    }

    // Teste: utilizador com papel ADMIN recebe 200
    @Test
    @WithMockUser(username = "admin", roles = {"ADMIN"})
    void whenAdminAccessesAdmin_thenOk() throws Exception {
        mockMvc.perform(get("/admin/dashboard"))
               .andExpect(status().isOk());
    }

    // Teste: utilizador não autenticado recebe 401
    @Test
    void whenAnonymousAccessesAdmin_thenUnauthorized() throws Exception {
        mockMvc.perform(get("/admin/dashboard"))
               .andExpect(status().isUnauthorized());
    }

    // Teste com autoridades específicas (não papéis)
    @Test
    @WithMockUser(authorities = {"USER_DELETE", "USER_READ"})
    void whenUserHasDeleteAuthority_thenCanDelete() throws Exception {
        mockMvc.perform(delete("/admin/users/1"))
               .andExpect(status().isOk());
    }
}`,
            explanation: "@WithMockUser cria um utilizador simulado para cada teste. Testamos cenários de acesso permitido (200), negado (403) e não autenticado (401). Note a diferença entre roles e authorities."
          },
          {
            title: "Testes com SecurityMockMvcRequestPostProcessors",
            language: "java",
            code: `@WebMvcTest(ApiController.class)
public class ApiControllerSecurityTest {

    @Autowired
    private MockMvc mockMvc;

    // Abordagem programática com .with(user(...))
    @Test
    void whenUserWithRoleAccesses_thenOk() throws Exception {
        mockMvc.perform(get("/api/data")
                .with(user("john").roles("USER")))
               .andExpect(status().isOk());
    }

    // Testar acesso anónimo
    @Test
    void whenAnonymousAccesses_thenRedirected() throws Exception {
        mockMvc.perform(get("/api/data")
                .with(anonymous()))
               .andExpect(status().is3xxRedirection());
    }

    // Testar com CSRF token (para POST/PUT/DELETE)
    @Test
    @WithMockUser(roles = {"ADMIN"})
    void whenPostWithCsrf_thenOk() throws Exception {
        mockMvc.perform(post("/api/data")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\\"name\\": \\"test\\"}"))
               .andExpect(status().isCreated());
    }

    // Testar POST sem CSRF (deve falhar)
    @Test
    @WithMockUser(roles = {"ADMIN"})
    void whenPostWithoutCsrf_thenForbidden() throws Exception {
        mockMvc.perform(post("/api/data")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\\"name\\": \\"test\\"}"))
               .andExpect(status().isForbidden());
    }
}`,
            explanation: "Os RequestPostProcessors oferecem uma abordagem mais programática. user() simula um utilizador, anonymous() simula acesso anónimo, e csrf() adiciona um token CSRF válido para operações de escrita."
          }
        ],
        warnings: [
          "@WithMockUser não carrega um utilizador real: Esta anotação cria um principal simulado. Se a lógica depende de dados de um utilizador na base de dados, use @WithUserDetails.",
          "Prefixo ROLE_ automático: Ao usar roles em @WithMockUser, o Spring adiciona automaticamente o prefixo ROLE_. Se as suas autoridades não seguem este padrão, use o atributo authorities.",
          "CSRF em testes: Para operações POST/PUT/DELETE, o Spring Security exige um token CSRF por padrão. Use .with(csrf()) nos testes ou desabilite CSRF na configuração de teste.",
          "@WebMvcTest vs @SpringBootTest: Use @WebMvcTest para testes rápidos da camada web. Use @SpringBootTest para testes de integração completos."
        ],
        references: [
          { title: "Spring Security - Testing", url: "https://docs.spring.io/spring-security/reference/servlet/test/index.html" },
          { title: "Baeldung - Spring Security Integration Tests", url: "https://www.baeldung.com/spring-security-integration-tests" },
          { title: "Spring Security Test - Method Security", url: "https://docs.spring.io/spring-security/reference/servlet/test/method.html" }
        ],
        exercises: [
          {
            title: "Testar @PreAuthorize com MockMvc — 3 cenários",
            difficulty: "intermediário",
            description: `Você tem o endpoint DELETE /api/documents/{id} anotado com:
@PreAuthorize("@documentService.isOwner(#id, authentication)")

Escreva um teste completo @SpringBootTest + MockMvc que verifique:
(a) Não-proprietário recebe 403
(b) Proprietário recebe 200
(c) Utilizador não autenticado recebe 401`,
            hint: "Use @WithMockUser para simular utilizadores e @MockBean para mockar o documentService. Configure retornos diferentes do isOwner() para cada cenário.",
            solution: `@SpringBootTest
@AutoConfigureMockMvc
class DocumentControllerSecurityTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DocumentService documentService;

    // (a) Não-proprietário → 403 Forbidden
    @Test
    @WithMockUser(username = "alice")
    void nonOwner_shouldReturn403() throws Exception {
        when(documentService.isOwner(42L,
            SecurityMockMvcRequestPostProcessors.authentication(
                SecurityContextHolder.getContext().getAuthentication())))
            .thenReturn(false);

        mockMvc.perform(delete("/api/documents/42"))
            .andExpect(status().isForbidden());
    }

    // (b) Proprietário → 200 OK
    @Test
    @WithMockUser(username = "bob")
    void owner_shouldReturn200() throws Exception {
        // Usando argumentMatchers para o mock
        when(documentService.isOwner(eq(42L), any(Authentication.class)))
            .thenReturn(true);
        doNothing().when(documentService).deleteDocument(42L);

        mockMvc.perform(delete("/api/documents/42"))
            .andExpect(status().isOk());
    }

    // (c) Não autenticado → 401 Unauthorized
    @Test
    void unauthenticated_shouldReturn401() throws Exception {
        mockMvc.perform(delete("/api/documents/42"))
            .andExpect(status().isUnauthorized());
    }
}

// DICA: Para principals customizados, use @WithSecurityContext:
@Retention(RetentionPolicy.RUNTIME)
@WithSecurityContext(factory = WithCustomUserSecurityContextFactory.class)
public @interface WithCustomUser {
    long id();
    String username();
}`,
            solutionLanguage: "java"
          },
          {
            title: "Testar segurança de método com @WithMockUser e Mockito",
            difficulty: "intermediário",
            description: `Você tem um @Service com o método:
@PreAuthorize("hasRole('ADMIN')")
public void deleteAllUsers() { ... }

Escreva dois testes unitários:
1. Verificar que ADMIN consegue executar (sem exception)
2. Verificar que USER recebe AccessDeniedException`,
            hint: "Use @ExtendWith(SpringExtension.class) + @WithMockUser(roles=\"ADMIN\") para simular roles. Spring Security intercepta via AOP.",
            solution: `@ExtendWith(SpringExtension.class)
@SpringBootTest
class UserServiceSecurityTest {

    @Autowired
    private UserService userService;

    // Teste 1: ADMIN pode executar
    @Test
    @WithMockUser(roles = "ADMIN")
    void admin_canDeleteAllUsers() {
        // Não deve lançar nenhuma exception
        assertDoesNotThrow(() -> userService.deleteAllUsers());
    }

    // Teste 2: USER recebe AccessDeniedException
    @Test
    @WithMockUser(roles = "USER")
    void regularUser_cannotDeleteAllUsers() {
        // Spring Security lança AccessDeniedException antes do método executar
        assertThrows(AccessDeniedException.class,
            () -> userService.deleteAllUsers());
    }

    // ALTERNATIVA com SecurityMockMvcRequestPostProcessors (para MockMvc):
    // mockMvc.perform(delete("/api/admin/users")
    //     .with(user("admin").roles("ADMIN")))
    //     .andExpect(status().isOk());

    // NOTA: @WithMockUser funciona com @PreAuthorize porque o Spring
    // AOP intercepta a chamada e verifica o SecurityContext.
    // Se @EnableMethodSecurity não estiver ativo, nenhuma exception é lançada
    // mesmo sem role — cuidado com testes que "passam" por razão errada.`,
            solutionLanguage: "java"
          }
        ],
        antiPatterns: [
          {
            title: "Security tests that pass because security is not enabled",
            problem: "@Test methods verify that unauthorized access is rejected, but @EnableMethodSecurity is missing from the test configuration. The test passes because @PreAuthorize is silently ignored — not because security works.",
            danger: "False confidence: the test suite is green but security is unenforced in the test context. If @EnableMethodSecurity is also missing in production (e.g., forgotten in a refactor), the test will still pass and the vulnerability is invisible.",
            fix: "Always assert the positive test first: verify that an authorized user CAN access the endpoint. If this test also passes without @EnableMethodSecurity (which it should), add a test that verifies AccessDeniedException IS thrown for an unauthorized user and confirm it fails without @EnableMethodSecurity."
          },
          {
            title: "Testing only the happy path (authorized access)",
            problem: "Security test suites contain tests for 200 OK responses from authorized users but no tests for 401/403 responses from unauthorized or unauthenticated users.",
            danger: "A misconfigured .permitAll() or a missing @PreAuthorize goes undetected. The happy path passes; the unauthorized path is never executed in CI. Security regressions are found in production or penetration tests.",
            fix: "For every protected endpoint, write three tests: (1) authorized user → expected response, (2) authenticated user with wrong role → 403, (3) unauthenticated request → 401. Use @ParameterizedTest with @MethodSource to cover multiple unauthorized roles concisely."
          },
          {
            title: "Mocking the SecurityContext manually in tests",
            problem: "Tests manually call SecurityContextHolder.setContext(mockContext) and populate mock Authentication objects instead of using Spring Security Test annotations.",
            danger: "Manual SecurityContext setup is verbose, fragile (context must be cleared after each test or it leaks to subsequent tests), and does not test the actual authentication conversion pipeline (e.g., JWT → Authentication mapping).",
            fix: "Use @WithMockUser for simple role-based tests. Use @WithUserDetails for tests that need a real UserDetailsService. Use SecurityMockMvcRequestPostProcessors.jwt() for OAuth2/JWT endpoint tests. These annotations manage context setup and teardown correctly."
          }
        ]
      },
      {
        id: "5-3",
        title: "OAuth2 Resource Server e Autorização com JWT",
        description: "Configure um Resource Server para validar tokens JWT e implementar autorização baseada em claims.",
        content: `No ecossistema OAuth 2.0, um **Resource Server** é a aplicação que protege os recursos (APIs, dados). Ele recebe pedidos com um access token e decide se o acesso deve ser concedido. O Spring Security oferece suporte robusto para Resource Servers através do módulo \`spring-boot-starter-oauth2-resource-server\`.

**Fluxo de Processamento de um JWT:**

1. **BearerTokenAuthenticationFilter**: Intercepta o pedido e extrai o token JWT do cabeçalho \`Authorization: Bearer <token>\`.
2. **JwtAuthenticationProvider**: Delega a descodificação e validação ao \`JwtDecoder\`.
3. **JwtDecoder (NimbusJwtDecoder)**: Valida a assinatura (via chaves públicas do \`jwk-set-uri\`), a validade temporal (\`exp\`, \`nbf\`), o emissor (\`iss\`) e opcionalmente a audiência (\`aud\`).
4. **JwtAuthenticationConverter**: Converte o JWT validado num \`JwtAuthenticationToken\` com as authorities extraídas das claims.
5. **JwtGrantedAuthoritiesConverter**: Por defeito, lê a claim \`scope\` e cria authorities com o prefixo \`SCOPE_\`.

**Personalização da Extração de Authorities:**

Muitas vezes, as permissões não estão na claim \`scope\`, mas sim numa claim como \`roles\` ou \`permissions\`. É necessário criar um \`JwtGrantedAuthoritiesConverter\` personalizado ou um \`Converter<Jwt, Collection<GrantedAuthority>>\` para extrair as authorities da claim correta.`,
        concepts: ["OAuth2 Resource Server", "JWT (JSON Web Token)", "BearerTokenAuthenticationFilter", "JwtAuthenticationProvider", "JwtDecoder", "NimbusJwtDecoder", "JwtAuthenticationConverter", "JwtGrantedAuthoritiesConverter", "Claims", "Scopes", "issuer-uri", "jwk-set-uri"],
        codeExamples: [
          {
            title: "Configuração Básica do Resource Server com JWT",
            language: "java",
            code: `// application.yml
// spring:
//   security:
//     oauth2:
//       resourceserver:
//         jwt:
//           issuer-uri: https://auth.example.com/realms/myapp

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class ResourceServerConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers(HttpMethod.GET, "/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/**").authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt
                    .jwtAuthenticationConverter(jwtAuthenticationConverter())
                )
            );
        return http.build();
    }

    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtGrantedAuthoritiesConverter authoritiesConverter =
            new JwtGrantedAuthoritiesConverter();
        // Ler authorities da claim "roles" em vez de "scope"
        authoritiesConverter.setAuthoritiesClaimName("roles");
        // Usar prefixo ROLE_ para compatibilidade com hasRole()
        authoritiesConverter.setAuthorityPrefix("ROLE_");

        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(authoritiesConverter);
        return converter;
    }
}`,
            explanation: "O Resource Server valida JWTs automaticamente usando o issuer-uri. O JwtAuthenticationConverter personalizado extrai roles da claim 'roles' com prefixo ROLE_ para compatibilidade com hasRole()."
          },
          {
            title: "Converter Personalizado para Keycloak",
            language: "java",
            code: `// Converter para extrair roles do formato Keycloak
// JWT Keycloak: { "realm_access": { "roles": ["admin", "user"] } }
public class KeycloakRoleConverter
        implements Converter<Jwt, Collection<GrantedAuthority>> {

    @Override
    public Collection<GrantedAuthority> convert(Jwt jwt) {
        @SuppressWarnings("unchecked")
        Map<String, Object> realmAccess =
            (Map<String, Object>) jwt.getClaims().get("realm_access");

        if (realmAccess == null || realmAccess.isEmpty()) {
            return List.of();
        }

        @SuppressWarnings("unchecked")
        List<String> roles = (List<String>) realmAccess.get("roles");

        return roles.stream()
            .map(role -> "ROLE_" + role.toUpperCase())
            .map(SimpleGrantedAuthority::new)
            .collect(Collectors.toList());
    }
}

// Registar na configuração
@Bean
public JwtAuthenticationConverter jwtAuthenticationConverter() {
    JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
    converter.setJwtGrantedAuthoritiesConverter(new KeycloakRoleConverter());
    return converter;
}`,
            explanation: "Para Keycloak, as roles estão dentro de realm_access.roles. Este converter personalizado extrai-as e converte-as em GrantedAuthority com o prefixo ROLE_."
          }
        ],
        warnings: [
          "Dependência do issuer-uri no arranque: Ao usar issuer-uri, o Resource Server contacta o Authorization Server no arranque. Se estiver indisponível, a aplicação falha ao iniciar. Use jwk-set-uri para desacoplar.",
          "SCOPE_ vs ROLE_: O Spring Security trata estes prefixos de forma diferente. hasAuthority('SCOPE_read') verifica a permissão exata. hasRole('ADMIN') é atalho para hasAuthority('ROLE_ADMIN').",
          "Formato da claim: O converter padrão espera uma string com valores separados por espaços. Se a claim for um array JSON, é obrigatório fornecer um converter personalizado.",
          "Validação da audience (aud): Por defeito, o Spring Security NÃO valida a claim aud. É altamente recomendado ativá-la para garantir que o JWT foi emitido para a sua API."
        ],
        references: [
          { title: "Spring Security - OAuth2 Resource Server JWT", url: "https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html" },
          { title: "Baeldung - OAuth2 Resource Server", url: "https://www.baeldung.com/spring-security-oauth-resource-server" },
          { title: "Baeldung - Map Authorities from JWT", url: "https://www.baeldung.com/spring-security-map-authorities-jwt" }
        ],
        exercises: [
          {
            title: "Mapear claim 'roles' do JWT para ROLE_* authorities",
            difficulty: "avançado",
            description: `Seu Authorization Server emite JWTs com a claim customizada "roles": ["ADMIN", "EDITOR"]. O comportamento padrão do Spring Security lê a claim "scope" e adiciona prefixo "SCOPE_".

Configure o JwtAuthenticationConverter para ler a claim "roles" e mapear para authorities com prefixo "ROLE_".`,
            hint: "Use JwtGrantedAuthoritiesConverter e configure setAuthoritiesClaimName() e setAuthorityPrefix(). Registre via JwtAuthenticationConverter.",
            solution: `@Configuration
@EnableWebSecurity
public class OAuth2SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/**").authenticated()
                .anyRequest().denyAll()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt.jwtAuthenticationConverter(jwtConverter()))
            );
        return http.build();
    }

    @Bean
    public JwtAuthenticationConverter jwtConverter() {
        // PASSO 1: Configurar o converter de authorities
        JwtGrantedAuthoritiesConverter authoritiesConverter =
            new JwtGrantedAuthoritiesConverter();

        // Ler da claim "roles" em vez de "scope"
        authoritiesConverter.setAuthoritiesClaimName("roles");

        // Adicionar prefixo "ROLE_" em vez de "SCOPE_"
        authoritiesConverter.setAuthorityPrefix("ROLE_");

        // PASSO 2: Criar o converter de autenticação
        JwtAuthenticationConverter jwtConverter = new JwtAuthenticationConverter();
        jwtConverter.setJwtGrantedAuthoritiesConverter(authoritiesConverter);
        return jwtConverter;
    }
}

// JWT de exemplo:
// {
//   "sub": "alice",
//   "roles": ["ADMIN", "EDITOR"],  ← lido aqui
//   "exp": 1234567890
// }
// Resultado: GrantedAuthority("ROLE_ADMIN"), GrantedAuthority("ROLE_EDITOR")`,
            solutionLanguage: "java"
          },
          {
            title: "Validar claim customizado 'tenant_id' no JWT",
            difficulty: "avançado",
            description: `Seu JWT contém a claim "tenant_id". Você deve rejeitar tokens onde:
- tenant_id está ausente
- tenant_id não está na lista de tenants conhecidos: ["tenant-a", "tenant-b", "tenant-c"]

Implemente isso como um OAuth2TokenValidator (não como filtro), para que integre com o sistema de erros do Spring Security OAuth2.`,
            hint: "Implemente OAuth2TokenValidator<Jwt>. Use DelegatingOAuth2TokenValidator para compor com os validators padrão (issuer, expiry).",
            solution: `// PASSO 1: Implementar o validator customizado
public class TenantIdValidator implements OAuth2TokenValidator<Jwt> {

    private static final Set<String> ALLOWED_TENANTS =
        Set.of("tenant-a", "tenant-b", "tenant-c");

    private final OAuth2Error error = new OAuth2Error(
        "invalid_token",
        "Token não pertence a um tenant conhecido",
        "https://docs.example.com/errors/invalid-tenant"
    );

    @Override
    public OAuth2TokenValidatorResult validate(Jwt token) {
        String tenantId = token.getClaimAsString("tenant_id");

        if (tenantId == null || tenantId.isBlank()) {
            return OAuth2TokenValidatorResult.failure(error);
        }

        if (!ALLOWED_TENANTS.contains(tenantId)) {
            return OAuth2TokenValidatorResult.failure(error);
        }

        return OAuth2TokenValidatorResult.success();
    }
}

// PASSO 2: Compor com validators padrão e registrar no JwtDecoder
@Bean
public JwtDecoder jwtDecoder() {
    NimbusJwtDecoder decoder = NimbusJwtDecoder
        .withJwkSetUri("https://auth.example.com/.well-known/jwks.json")
        .build();

    // Compor: validator padrão (issuer + expiry) + validator customizado
    OAuth2TokenValidator<Jwt> defaultValidator =
        JwtValidators.createDefaultWithIssuer("https://auth.example.com");

    OAuth2TokenValidator<Jwt> combinedValidator =
        new DelegatingOAuth2TokenValidator<>(
            defaultValidator,
            new TenantIdValidator()
        );

    decoder.setJwtValidator(combinedValidator);
    return decoder;
}

// Resultado: JWT sem tenant_id ou com tenant desconhecido → 401 Unauthorized
// com mensagem de erro estruturada no header WWW-Authenticate`,
            solutionLanguage: "java"
          }
        ],
        antiPatterns: [
          {
            title: "Not validating the 'aud' (audience) claim",
            problem: "The JWT decoder is configured without audience validation, accepting any JWT signed by the correct issuer regardless of which service it was issued for.",
            danger: "A token issued for service-a (audience: api-a) is accepted by service-b (audience: api-b). If service-a is compromised and leaks valid tokens, an attacker can replay those tokens against service-b. Token scope is not enforced.",
            fix: "Configure audience validation: NimbusJwtDecoder.withJwkSetUri(uri).build() and add JwtValidators.createDefaultWithIssuer() composed with an AudienceValidator that checks token.getAudience().contains(\"your-api-id\"). Reject tokens not explicitly issued for this service."
          },
          {
            title: "Storing sensitive data in the JWT payload",
            problem: "JWTs include PII fields such as email, full name, date of birth, credit card tokens, or internal system IDs that are useful for the frontend but sensitive.",
            danger: "JWT payloads are base64-encoded, not encrypted — any party with the token can decode and read the payload. Tokens stored in browser localStorage are readable by JavaScript. Tokens in logs are exposed to anyone with log access.",
            fix: "Store only non-sensitive identifiers in JWTs: sub (user ID), roles, and the minimum claims needed for authorization. Fetch sensitive profile data from a userinfo endpoint using the access token. If data must be in the token, use JWE (JSON Web Encryption) instead of JWS."
          },
          {
            title: "Using long-lived JWTs without refresh token rotation",
            problem: "Access tokens are issued with 24-hour or longer expiry to avoid user friction. No refresh token rotation is implemented.",
            danger: "A stolen access token remains valid until expiry. There is no mechanism to invalidate a specific token. A compromised mobile device or XSS attack yields a token valid for the remainder of its lifetime — up to 24 hours of unauthorized access.",
            fix: "Issue short-lived access tokens (15-30 minutes) and long-lived refresh tokens with rotation: each refresh invalidates the old refresh token and issues a new one. Detect refresh token reuse (a sign of theft) and invalidate the entire session family."
          }
        ]
      },
      {
        id: "5-4",
        title: "Boas Práticas e Arquitetura em Produção",
        description: "Aprenda as melhores práticas para implementar autorização robusta e escalável em ambientes de produção.",
        content: `A implementação de autorização em ambientes de produção requer uma abordagem cuidadosa que vai além da simples configuração de regras de acesso. É necessário considerar performance, auditoria, escalabilidade e manutenibilidade.

**Princípio do Menor Privilégio (PoLP)**

O Princípio do Menor Privilégio dita que um utilizador deve ter apenas os níveis de acesso estritamente necessários para realizar as suas tarefas. No Spring Security, isso significa evitar papéis genéricos como ROLE_ADMIN para operações que não os exigem. Opte por permissões granulares como USER_READ, USER_UPDATE, ORDER_CREATE.

**Separação de Concerns**

A lógica de segurança deve ser mantida desacoplada da lógica de negócio. Misturar regras de autorização dentro dos serviços torna o código difícil de manter e testar. Use @PreAuthorize e configuração centralizada no SecurityFilterChain.

**Auditoria e Logging**

Em produção, é vital saber quem tentou aceder ao quê, quando e qual foi o resultado. O Spring Boot Actuator oferece um framework de auditoria que publica eventos para sucessos de autenticação, falhas e exceções de acesso negado.

**Centralização vs. Descentralização**

Em microsserviços, uma decisão fundamental é onde as regras residem. A abordagem descentralizada define regras em cada serviço. A centralizada usa um Policy Decision Point (PDP) como o Open Policy Agent (OPA). A escolha depende da complexidade do sistema.

**Escalando em Microsserviços**

Uma estratégia comum é usar um API Gateway como primeiro ponto de controlo, com JWTs propagados para os microsserviços downstream. Cada microsserviço inspeciona o JWT e toma decisões locais sem consultar um serviço de identidade a cada chamada.`,
        concepts: ["Princípio do Menor Privilégio", "Separação de Concerns", "Auditoria e Logging", "Defense in Depth", "API Gateway", "Policy Decision Point (PDP)", "Open Policy Agent (OPA)", "JWT Propagation", "Centralização vs Descentralização", "Performance e Caching"],
        codeExamples: [
          {
            title: "Auditoria de Eventos de Autorização",
            language: "java",
            code: `// Listener para eventos de autorização
@Component
public class SecurityAuditListener {

    private static final Logger auditLogger =
        LoggerFactory.getLogger("SECURITY_AUDIT");

    @EventListener
    public void onAuthenticationSuccess(AuthenticationSuccessEvent event) {
        auditLogger.info("LOGIN_SUCCESS | user={} | authorities={}",
            event.getAuthentication().getName(),
            event.getAuthentication().getAuthorities());
    }

    @EventListener
    public void onAuthenticationFailure(
            AbstractAuthenticationFailureEvent event) {
        auditLogger.warn("LOGIN_FAILURE | user={} | reason={}",
            event.getAuthentication().getName(),
            event.getException().getMessage());
    }

    @EventListener
    public void onAuthorizationDenied(AuthorizationDeniedEvent event) {
        auditLogger.warn("ACCESS_DENIED | user={} | resource={}",
            event.getAuthentication().get().getName(),
            event.getSource());
    }
}

// Configuração do SecurityFilterChain com auditoria
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(authz -> authz
            .anyRequest().authenticated()
        )
        .formLogin(withDefaults());
    return http.build();
}`,
            explanation: "Este listener captura eventos de autenticação e autorização, registando-os num logger dedicado. Em produção, estes logs seriam enviados para um sistema centralizado como ELK Stack ou Splunk."
          },
          {
            title: "Configuração de Segurança para API REST em Produção",
            language: "java",
            code: `@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class ProductionSecurityConfig {

    @Bean
    public SecurityFilterChain apiFilterChain(HttpSecurity http)
            throws Exception {
        http
            // Desabilitar CSRF para APIs REST stateless
            .csrf(csrf -> csrf.disable())
            // Configurar CORS
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            // Sessão stateless para APIs
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            // Regras de autorização
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/health", "/api/info").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.GET, "/api/**").hasAuthority("SCOPE_read")
                .requestMatchers(HttpMethod.POST, "/api/**").hasAuthority("SCOPE_write")
                .anyRequest().denyAll()
            )
            // OAuth2 Resource Server com JWT
            .oauth2ResourceServer(oauth2 -> oauth2.jwt())
            // Tratamento de exceções personalizado
            .exceptionHandling(exceptions -> exceptions
                .authenticationEntryPoint((req, res, ex) -> {
                    res.setStatus(401);
                    res.setContentType("application/json");
                    res.getWriter().write(
                        "{\\"error\\":\\"unauthorized\\",\\"message\\":\\"Token inválido ou ausente\\"}");
                })
                .accessDeniedHandler((req, res, ex) -> {
                    res.setStatus(403);
                    res.setContentType("application/json");
                    res.getWriter().write(
                        "{\\"error\\":\\"forbidden\\",\\"message\\":\\"Sem permissão\\"}");
                })
            )
            // Headers de segurança
            .headers(headers -> headers
                .contentSecurityPolicy(csp ->
                    csp.policyDirectives("default-src 'self'"))
                .frameOptions(frame -> frame.deny())
            );
        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("https://app.example.com"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
        config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        UrlBasedCorsConfigurationSource source =
            new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);
        return source;
    }
}`,
            explanation: "Configuração completa para produção: CSRF desabilitado (API stateless), CORS configurado, sessão stateless, OAuth2 Resource Server com JWT, tratamento de exceções personalizado, headers de segurança e regra denyAll() como fallback."
          }
        ],
        warnings: [
          "denyAll() como fallback: Termine sempre as regras de autorização com .anyRequest().denyAll() em vez de .anyRequest().authenticated(). Isto garante que novos endpoints são bloqueados por defeito até serem explicitamente configurados.",
          "Não exponha detalhes sensíveis: Nas respostas de erro, não inclua informações sobre a infraestrutura ou lógica interna. Mensagens genéricas como 'Acesso negado' são preferíveis.",
          "CORS em produção: Configure CORS com origens específicas. Nunca use allowedOrigins('*') em produção.",
          "Teste em staging: Antes de implementar mudanças de segurança em produção, teste extensivamente num ambiente de staging que replica a configuração de produção.",
          "Monitorização contínua: Implemente alertas para padrões suspeitos como múltiplas tentativas de acesso negado do mesmo IP ou utilizador."
        ],
        references: [
          { title: "Spring Security Best Practices", url: "https://docs.spring.io/spring-security/reference/features/index.html" },
          { title: "OWASP Authorization Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html" },
          { title: "Spring Security FAQ", url: "https://docs.spring.io/spring-security/reference/servlet/appendix/faq.html" },
          { title: "Vídeo Devoxx - Authorization in Spring Security", url: "https://www.youtube.com/watch?v=LGlyLmxjutI" }
        ],
        quiz: [
          {
            question: "Qual regra de autorização é mais segura como fallback: anyRequest().authenticated() ou anyRequest().denyAll()?",
            options: [
              "anyRequest().authenticated() — garante que todos os utilizadores têm sessão",
              "anyRequest().denyAll() — bloqueia tudo que não foi explicitamente permitido",
              "São equivalentes em segurança",
              "anyRequest().permitAll() — é mais flexível para o desenvolvimento"
            ],
            correctIndex: 1,
            explanation: "anyRequest().denyAll() é a postura mais segura: novos endpoints adicionados ao código são bloqueados por defeito até que uma regra explícita seja adicionada. Com authenticated(), um endpoint novo esquecido fica acessível a qualquer utilizador autenticado — potencialmente indesejado."
          },
          {
            question: "O que é o Princípio de Defense in Depth na segurança de aplicações?",
            options: [
              "Usar apenas uma camada de segurança muito forte em vez de múltiplas fracas",
              "Aplicar múltiplas camadas de segurança independentes, de forma que a falha de uma não comprometa o sistema",
              "Defender apenas os endpoints mais críticos e deixar os outros sem proteção",
              "Encriptar todos os dados em profundidade (múltiplos algoritmos)"
            ],
            correctIndex: 1,
            explanation: "Defense in Depth: múltiplas camadas independentes de proteção. No contexto Spring Security: autenticação + autorização a nível de URL + autorização a nível de método + validação de dados + logging/auditoria. Se uma camada falhar, as outras continuam a proteger."
          },
          {
            question: "Qual é a vantagem de usar JWTs para autorização em microsserviços comparado com sessões centralizadas?",
            options: [
              "JWTs são mais seguros porque são assinados criptograficamente",
              "JWTs permitem que cada microsserviço valide autorização localmente sem consultar um serviço central a cada pedido",
              "JWTs suportam mais informação do utilizador do que sessões",
              "JWTs eliminam a necessidade de HTTPS"
            ],
            correctIndex: 1,
            explanation: "Com sessões centralizadas, cada microsserviço teria que consultar um serviço de sessão a cada pedido — gargalo de performance e ponto único de falha. Com JWTs auto-contidos e assinados, cada serviço valida localmente usando a chave pública do Authorization Server — sem chamadas externas."
          }
        ],
        exercises: [
          {
            title: "Configuração completa de produção para API REST",
            difficulty: "avançado",
            description: `Configure uma SecurityFilterChain completa para produção com todos os elementos essenciais:

1. CSRF desabilitado (API stateless)
2. CORS configurado para origens específicas (https://app.example.com)
3. Sessão stateless
4. Headers de segurança (CSP, X-Frame-Options)
5. OAuth2 Resource Server com JWT
6. Regras de autorização: /actuator/health público, /api/admin/** exige ROLE_ADMIN, /api/** exige autenticação, anyRequest denyAll
7. Tratamento de exceções JSON para 401 e 403
8. Auditoria de eventos de segurança com @EventListener`,
            hint: "Combine .headers(), .cors(), .csrf(), .sessionManagement(), .oauth2ResourceServer(), .authorizeHttpRequests() e .exceptionHandling() numa única SecurityFilterChain.",
            solution: `@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class ProductionSecurityConfig {

    @Bean
    public SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .headers(headers -> headers
                .contentSecurityPolicy(csp ->
                    csp.policyDirectives("default-src 'self'; frame-ancestors 'none'"))
                .frameOptions(frame -> frame.deny())
                .xssProtection(xss -> xss.disable()) // CSP é mais eficaz
            )
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/actuator/health").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/**").authenticated()
                .anyRequest().denyAll() // seguro por defeito
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt.jwtAuthenticationConverter(jwtConverter()))
            )
            .exceptionHandling(ex -> ex
                .authenticationEntryPoint((req, res, e) -> {
                    res.setContentType("application/json;charset=UTF-8");
                    res.setStatus(401);
                    res.getWriter().write(
                        "{\"error\":\"unauthorized\",\"message\":\"Token inválido ou ausente\"}"
                    );
                })
                .accessDeniedHandler((req, res, e) -> {
                    res.setContentType("application/json;charset=UTF-8");
                    res.setStatus(403);
                    res.getWriter().write(
                        "{\"error\":\"forbidden\",\"message\":\"Sem permissão para este recurso\"}"
                    );
                })
            );
        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("https://app.example.com"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH"));
        config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        config.setMaxAge(3600L);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);
        return source;
    }

    @Bean
    public JwtAuthenticationConverter jwtConverter() {
        JwtGrantedAuthoritiesConverter authConverter = new JwtGrantedAuthoritiesConverter();
        authConverter.setAuthoritiesClaimName("roles");
        authConverter.setAuthorityPrefix("ROLE_");
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(authConverter);
        return converter;
    }
}

// Auditoria de eventos
@Component
public class SecurityAuditListener {
    private static final Logger auditLog = LoggerFactory.getLogger("SECURITY_AUDIT");

    @EventListener
    public void onSuccess(AuthenticationSuccessEvent e) {
        auditLog.info("LOGIN_SUCCESS | user={}", e.getAuthentication().getName());
    }

    @EventListener
    public void onFailure(AbstractAuthenticationFailureEvent e) {
        auditLog.warn("LOGIN_FAILURE | user={} | reason={}",
            e.getAuthentication().getName(), e.getException().getMessage());
    }

    @EventListener
    public void onDenied(AuthorizationDeniedEvent<?> e) {
        auditLog.warn("ACCESS_DENIED | user={}",
            e.getAuthentication().get().getName());
    }
}`,
            solutionLanguage: "java"
          },
          {
            title: "Detectar misconfigurações comuns de segurança",
            difficulty: "avançado",
            description: `Uma revisão de código revela 4 problemas:

(a) @PreAuthorize("ROLE_ADMIN")
(b) .anyRequest().permitAll() definido APÓS .anyRequest().denyAll()
(c) Filtro customizado adicionado com http.addFilter() sem posição
(d) .csrf(csrf -> csrf.disable()) aplicado globalmente, incluindo endpoints com formulário HTML

Para cada caso: explique o modo de falha exato e mostre a correção correta.`,
            hint: "Cada problema tem um comportamento silencioso mas perigoso: (a) sempre permite, (b) nunca alcançado, (c) contexto pode ser null, (d) exposição a CSRF em formulários.",
            solution: `// ──────────────────────────────────────────────────
// (a) @PreAuthorize("ROLE_ADMIN") — expressão avaliada como literal String

// FALHA: SpEL avalia "ROLE_ADMIN" como uma String não vazia → sempre true!
// Qualquer utilizador autenticado executa o método.
@PreAuthorize("ROLE_ADMIN")  // ❌ ERRADO — sempre true
public void adminOperation() { }

// ✅ CORRETO:
@PreAuthorize("hasRole('ADMIN')")  // ou hasAuthority('ROLE_ADMIN')
public void adminOperation() { }

// ──────────────────────────────────────────────────
// (b) Regras não alcançáveis — primeira correspondência vence

http.authorizeHttpRequests(authz -> authz
    .anyRequest().denyAll()     // ← avaliado primeiro: bloqueia TUDO
    .anyRequest().permitAll()   // ❌ nunca alcançado
);

// ✅ CORRETO: regras específicas primeiro, fallback por último
http.authorizeHttpRequests(authz -> authz
    .requestMatchers("/api/public/**").permitAll()
    .anyRequest().denyAll()  // fallback seguro
);

// ──────────────────────────────────────────────────
// (c) Filtro sem posição — executa em local indefinido

http.addFilter(new MyAuditFilter()); // ❌ sem posição definida

// FALHA: Pode executar antes do SecurityContextHolderFilter.
// Authentication = null quando MyAuditFilter tenta ler o SecurityContext.

// ✅ CORRETO: posicionar explicitamente
http.addFilterAfter(new MyAuditFilter(), SecurityContextHolderFilter.class);

// ──────────────────────────────────────────────────
// (d) CSRF desabilitado globalmente — endpoints HTML expostos

http.csrf(csrf -> csrf.disable()); // ❌ global — formulários HTML desprotegidos

// FALHA: Formulários HTML em /web/** ficam vulneráveis a CSRF attacks.

// ✅ CORRETO: Desabilitar CSRF apenas para APIs, manter para MVC
// Use duas SecurityFilterChain separadas:
// Cadeia 1 (/api/**): CSRF desabilitado, JWT, stateless
// Cadeia 2 (/web/**): CSRF habilitado, formulário, sessão`,
            solutionLanguage: "java"
          }
        ],
        antiPatterns: [
          {
            title: "Logging the Authentication object or request parameters containing credentials",
            problem: "Debug or error handlers log authentication.toString() or incoming request bodies that may contain passwords, tokens, or API keys.",
            danger: "Credentials appear in application logs, which are often forwarded to centralized log aggregation systems (Splunk, ELK, CloudWatch) with broader access than the application itself. Log files may be stored unencrypted or retained indefinitely.",
            fix: "Never log Authentication objects directly. Log only authentication.getName() (username). Implement a custom LoggingFilter that masks sensitive headers (Authorization) and parameters (password, token) before logging. Use CredentialsContainer.eraseCredentials() after authentication."
          },
          {
            title: "Returning stack traces or internal details in 401/403 error responses",
            problem: "The default Spring error handler returns a JSON body containing exception class names, stack traces, SQL query fragments, or internal service URLs in 403/401 responses.",
            danger: "Error details reveal application architecture, dependency versions, database schema, and internal URL structure. This information is directly useful for targeted attacks (SQL injection, path traversal, version-specific exploits).",
            fix: "Configure a custom AccessDeniedHandler and AuthenticationEntryPoint that return generic messages only: {\"error\": \"forbidden\"}. Suppress Spring's default /error endpoint details with server.error.include-stacktrace=never and server.error.include-message=never in production profiles."
          },
          {
            title: "Disabling security in the development Spring profile and deploying that profile to staging",
            problem: "A @Profile(\"dev\") configuration class disables all security (http.authorizeHttpRequests(a -> a.anyRequest().permitAll()). The dev profile is accidentally activated in staging via a misconfigured environment variable.",
            danger: "The staging environment — which often contains production-like data for QA — is completely open. Since staging is typically accessible from the internet (for external QA teams), all data is exposed with no authentication whatsoever.",
            fix: "Never conditionally disable security based on profiles. Use a real security configuration in all environments. For developer convenience, use predefined test users in application-dev.properties via spring.security.user.name/password, not by disabling security. Run automated security smoke tests in the CI pipeline against the staging environment."
          }
        ]
      }
    ]
  }
];
