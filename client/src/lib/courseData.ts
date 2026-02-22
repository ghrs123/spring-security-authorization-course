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

export interface CodeExample {
  title: string;
  language: string;
  code: string;
  explanation: string;
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
        warnings: [
          "Self-invocation bypassa a segurança: Chamadas de método dentro da mesma classe não passam pelo proxy AOP. As anotações de segurança serão ignoradas. Extraia métodos para beans separados.",
          "Métodos privados não são interceptados: As anotações de segurança em métodos privados são ignoradas porque os proxies AOP só podem interceptar métodos públicos.",
          "Ordem dos interceptors: A ordem padrão é @PreFilter → @PreAuthorize → método → @PostAuthorize → @PostFilter. Alterar esta ordem pode ter consequências inesperadas."
        ],
        references: [
          { title: "Spring Security - Method Security Architecture", url: "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html" },
          { title: "Spring Framework - AOP Proxies", url: "https://docs.spring.io/spring-framework/reference/core/aop/proxying.html" },
          { title: "Baeldung - Method Security Internals", url: "https://www.baeldung.com/spring-security-method-security" }
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "design-testes",
    title: "Design, Testes e Produção",
    subtitle: "Arquiteto",
    description: "Aprenda a desenhar um sistema de autorização robusto, escolhendo entre RBAC, ABAC e ACL. Domine os testes de segurança com Spring Security Test e as boas práticas para ambientes de produção, incluindo OAuth2 Resource Server com JWT.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/N5xwokNkCjHpjdv3yPIPRp/sandbox/4nY5BjNO4iG97lnmQVBkw0-img-5_1771581061000_na1fn_bGV2ZWw0LWRlc2lnbi10ZXN0aW5n.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTjV4d29rTmtDakhwamR2M3lQSVBScC9zYW5kYm94LzRuWTVCak5PNGlHOTdsbm1RVkJrdzAtaW1nLTVfMTc3MTU4MTA2MTAwMF9uYTFmbl9iR1YyWld3MExXUmxjMmxuYmkxMFpYTjBhVzVuLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Zvrh-XVZd3Repqas~CFOT7gBRiX~rR~hLsmSu6H4-dXW9kmqrsn~uxH6iFtKOlYF9BXj5DjwfE-nJJrg~y57dgUEu0MtOehntYIEFtaD0lDZHbumQDtiN9QK1l5arx-EnsNNl5vqOHKeUpRa8DKgDg9gkOmZADT7JFOmUCuTG0CCf0r0rbNeIFnbEHyBPOVMQAp~OXqyDwHw3wmiNoU7qQ4HcLNG22cqe5kz9k8m9l5N2qG60hi-9nL4N0MJyKjuA1NkyXvY964nMViE41YhDua01Zf3hqdPz4Pd4gDCYkKVVM1N~S4qNUaewaFHJuFNS9caLWMKMhtvTGBmJwj6gA__",
    accentColor: "amber",
    topics: [
      {
        id: "4-1",
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
        ]
      },
      {
        id: "4-2",
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
        ]
      },
      {
        id: "4-3",
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
        ]
      },
      {
        id: "4-4",
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
          }
        ]
      }
    ]
  }
];
