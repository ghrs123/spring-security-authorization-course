/*
 * ─── Shield Blueprint Theme ───
 * Design: Dark navy blueprint with emerald wireframe lines and amber accents
 * Typography: JetBrains Mono (display) + IBM Plex Sans (body)
 * Colors: Navy #0a1628, Emerald oklch(0.75 0.17 160), Amber #f59e0b
 * Based on: "Authorization in Spring Security" by Daniel Garnier-Moiroux (Devoxx 2024)
 */

export interface Topic {
  id: string;
  title: string;
  description: string;
  concepts: string[];
  resources: string[];
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
        id: "1-1",
        title: "Introdução ao Spring Security",
        description: "O Spring Security é a escolha padrão para segurança em aplicações Spring Boot. Ao adicionar a dependência spring-boot-starter-security, toda a aplicação fica automaticamente protegida: qualquer endpoint redireciona para uma página de login, e um utilizador padrão (user) com password gerada é criado. Esta proteção por defeito garante que nenhuma aplicação fique acidentalmente exposta.",
        concepts: ["spring-boot-starter-security", "Proteção Automática por Defeito", "Utilizador Gerado (user)", "Password na Consola", "HTTP 401 Unauthorized", "Redirecionamento para Login"],
        resources: ["Documentação oficial Spring Security", "start.spring.io para iniciar projetos", "Vídeo: Spring Security Demystified (Devoxx 2022)"]
      },
      {
        id: "1-2",
        title: "Configuração da SecurityFilterChain",
        description: "Para personalizar o comportamento de segurança, cria-se uma classe de configuração com @Configuration e @EnableWebSecurity. O bean principal é do tipo SecurityFilterChain, construído com o builder HttpSecurity. Nesta configuração, definem-se quais endpoints são públicos (permitAll), quais requerem autenticação (authenticated), e ativa-se o formLogin para a página de login padrão.",
        concepts: ["@Configuration", "@EnableWebSecurity", "SecurityFilterChain Bean", "HttpSecurity Builder", "authorizeHttpRequests()", "requestMatchers()", "permitAll()", "authenticated()", "formLogin()", "HTTP 403 Forbidden"],
        resources: ["Documentação Spring Security Configuration", "Baeldung: Spring Security Configuration", "Exemplos no GitHub do Spring Security"]
      },
      {
        id: "1-3",
        title: "Gestão de Utilizadores e UserDetailsService",
        description: "O Spring Security utiliza a interface UserDetailsService para carregar informações dos utilizadores. Pode-se usar implementações em memória (InMemoryUserDetailsManager), baseadas em JDBC (JdbcUserDetailsManager), ou criar implementações personalizadas. Cada utilizador tem username, password, roles e authorities. É possível estender o modelo de utilizador com campos personalizados como email, mantendo a compatibilidade com o framework.",
        concepts: ["UserDetailsService", "UserDetails Interface", "InMemoryUserDetailsManager", "JdbcUserDetailsManager", "Username / Password / Roles", "Authorities", "Extensão do Modelo de Utilizador", "Password Encoding"],
        resources: ["Documentação UserDetailsService", "Baeldung: Custom UserDetailsService", "Spring Security Reference: Authentication"]
      },
      {
        id: "1-4",
        title: "Autorização a Nível de Requisição (Request-Level)",
        description: "A autorização a nível de requisição permite definir regras de acesso baseadas no URL e no método HTTP. Utiliza-se authorizeHttpRequests() com requestMatchers() para mapear padrões de URL a regras como hasRole(), hasAuthority(), permitAll() ou authenticated(). A ordem das regras é importante: as mais específicas devem vir primeiro. Esta abordagem mantém a lógica de segurança separada da lógica de negócio.",
        concepts: ["authorizeHttpRequests()", "requestMatchers()", "hasRole()", "hasAuthority()", "permitAll()", "authenticated()", "Ordem das Regras", "Separação de Concerns", "Padrões de URL", "Métodos HTTP"],
        resources: ["Spring Security: Authorize HTTP Requests", "Baeldung: URL-based Authorization", "Spring Security Samples no GitHub"]
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
        description: "Com @EnableMethodSecurity na configuração, pode-se anotar métodos individuais com @PreAuthorize para verificar permissões antes da execução. A anotação aceita expressões SpEL como hasRole('ADMIN') ou hasAuthority('SCOPE_read'). Quando o acesso é negado, é lançada uma AccessDeniedException (HTTP 403). É importante tratar esta exceção adequadamente no controller para não quebrar a experiência do utilizador.",
        concepts: ["@EnableMethodSecurity", "@PreAuthorize", "hasRole() em SpEL", "hasAuthority()", "AccessDeniedException", "Tratamento de Exceções", "Try-Catch no Controller", "Separação de Concerns"],
        resources: ["Documentação @PreAuthorize", "Baeldung: Method Security", "Spring Security Method Security Reference"]
      },
      {
        id: "2-2",
        title: "Spring Expression Language (SpEL) para Autorização",
        description: "O SpEL é o motor de expressões usado nas anotações de autorização. Permite expressões complexas como verificar o username do utilizador autenticado (authentication.name), comparar atributos do utilizador com parâmetros do método, e combinar múltiplas condições com operadores lógicos. É possível aceder ao objeto Authentication completo, incluindo authorities, principal e detalhes personalizados.",
        concepts: ["SpEL (Spring Expression Language)", "authentication.name", "authentication.principal", "Operadores Lógicos (and, or, not)", "Acesso a Parâmetros do Método", "Comparação de Atributos", "#username == authentication.name", "Expressões Complexas"],
        resources: ["Documentação SpEL", "Spring Security SpEL Expressions", "Baeldung: SpEL in Spring Security"]
      },
      {
        id: "2-3",
        title: "@PostAuthorize e Filtragem de Dados",
        description: "Além de @PreAuthorize, o Spring Security oferece @PostAuthorize para verificar permissões após a execução do método, com acesso ao valor de retorno (returnObject). Para filtragem de coleções, @PreFilter filtra os parâmetros de entrada e @PostFilter filtra o resultado. Estas anotações são particularmente úteis em repositórios onde se quer filtrar dados baseados no utilizador autenticado sem alterar a lógica de negócio.",
        concepts: ["@PostAuthorize", "@PreFilter", "@PostFilter", "returnObject", "filterObject", "Filtragem de Coleções", "Filtragem em Repositórios", "Autorização Pós-Execução"],
        resources: ["Documentação @PostAuthorize", "Baeldung: @PreFilter and @PostFilter", "Spring Data Security Integration"]
      },
      {
        id: "2-4",
        title: "Meta-Anotações Personalizadas",
        description: "Para evitar repetição de expressões SpEL complexas e melhorar a legibilidade, o Spring Security permite criar meta-anotações personalizadas. Uma meta-anotação é uma anotação que encapsula @PreAuthorize ou @PostAuthorize com uma expressão específica. Por exemplo, @IsAdmin pode encapsular @PreAuthorize(\"hasRole('ADMIN')\"). Isto promove reutilização, consistência e facilita a manutenção do código de autorização.",
        concepts: ["Meta-Anotações", "@Target e @Retention", "Encapsulamento de @PreAuthorize", "@IsAdmin Personalizada", "Reutilização de Regras", "Consistência de Autorização", "Manutenibilidade"],
        resources: ["Documentação Meta-Annotations", "Spring Security Custom Annotations", "Baeldung: Custom Security Annotations"]
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
        description: "Após a autenticação, o Spring Security cria um objeto Authentication que contém o principal (identidade do utilizador), as credentials e as granted authorities. Este objeto é armazenado no SecurityContext, que por sua vez é mantido no SecurityContextHolder (tipicamente thread-local). Qualquer código pode aceder ao utilizador autenticado através de SecurityContextHolder.getContext().getAuthentication(). O principal pode ser o username (String) ou um objeto UserDetails completo.",
        concepts: ["Authentication Object", "Principal", "Credentials", "GrantedAuthority", "SecurityContext", "SecurityContextHolder", "Thread-Local Storage", "UserDetails como Principal"],
        resources: ["Documentação SecurityContext", "Spring Security Architecture", "Baeldung: SecurityContext"]
      },
      {
        id: "3-2",
        title: "Authorization Managers",
        description: "O AuthorizationManager é a interface central para decisões de autorização no Spring Security 6. Recebe um objeto Authentication e um contexto (como HttpServletRequest ou MethodInvocation) e retorna uma AuthorizationDecision (granted/denied). Para requisições HTTP, o RequestMatcherDelegatingAuthorizationManager delega para diferentes managers baseado no URL. Para métodos, o PreAuthorizeAuthorizationManager avalia expressões SpEL.",
        concepts: ["AuthorizationManager<T>", "AuthorizationDecision", "RequestMatcherDelegatingAuthorizationManager", "PreAuthorizeAuthorizationManager", "PostAuthorizeAuthorizationManager", "AuthorizationFilter", "Delegação de Decisões", "Custom AuthorizationManager"],
        resources: ["Documentação AuthorizationManager", "Spring Security 6 Migration Guide", "Baeldung: Custom Authorization"]
      },
      {
        id: "3-3",
        title: "Fluxo de Autorização a Nível de Requisição",
        description: "Quando uma requisição HTTP chega, passa pela SecurityFilterChain. O AuthorizationFilter (último filtro) obtém o Authentication do SecurityContext e delega ao AuthorizationManager configurado. O RequestMatcherDelegatingAuthorizationManager percorre as regras definidas em authorizeHttpRequests(), encontra o matcher correspondente e aplica a regra. Se o acesso for negado, é lançada uma AccessDeniedException que é tratada pelo ExceptionTranslationFilter.",
        concepts: ["SecurityFilterChain", "AuthorizationFilter", "ExceptionTranslationFilter", "RequestMatcher", "Fluxo da Requisição", "Cadeia de Filtros", "AccessDeniedException", "Tratamento de Exceções"],
        resources: ["Spring Security Filter Chain Architecture", "Documentação AuthorizationFilter", "Spring Security Internals Deep Dive"]
      },
      {
        id: "3-4",
        title: "Fluxo de Autorização a Nível de Método",
        description: "A autorização a nível de método funciona através de proxies AOP (Aspect-Oriented Programming). Quando @EnableMethodSecurity está ativo, o Spring cria proxies em torno dos beans anotados. Antes da execução do método, o AuthorizationManagerBeforeMethodInterceptor avalia a expressão @PreAuthorize. Após a execução, o AuthorizationManagerAfterMethodInterceptor avalia @PostAuthorize. Os interceptors @PreFilter e @PostFilter funcionam de forma semelhante para filtragem de coleções.",
        concepts: ["AOP Proxies", "MethodInterceptor", "AuthorizationManagerBeforeMethodInterceptor", "AuthorizationManagerAfterMethodInterceptor", "PreFilterAuthorizationMethodInterceptor", "PostFilterAuthorizationMethodInterceptor", "Proxy-Based Security", "Invocação de Método"],
        resources: ["Documentação Method Security Architecture", "Spring AOP Reference", "Baeldung: Method Security Internals"]
      }
    ]
  },
  {
    id: 4,
    slug: "design-testes",
    title: "Design e Testes de Autorização",
    subtitle: "Arquiteto",
    description: "Aprenda a desenhar um sistema de autorização robusto, escolhendo entre RBAC, ABAC e ACL. Domine os testes de segurança com Spring Security Test, garantindo que as regras de autorização funcionam corretamente em todos os cenários.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/N5xwokNkCjHpjdv3yPIPRp/sandbox/4nY5BjNO4iG97lnmQVBkw0-img-5_1771581061000_na1fn_bGV2ZWw0LWRlc2lnbi10ZXN0aW5n.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTjV4d29rTmtDakhwamR2M3lQSVBScC9zYW5kYm94LzRuWTVCak5PNGlHOTdsbm1RVkJrdzAtaW1nLTVfMTc3MTU4MTA2MTAwMF9uYTFmbl9iR1YyWld3MExXUmxjMmxuYmkxMFpYTjBhVzVuLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Zvrh-XVZd3Repqas~CFOT7gBRiX~rR~hLsmSu6H4-dXW9kmqrsn~uxH6iFtKOlYF9BXj5DjwfE-nJJrg~y57dgUEu0MtOehntYIEFtaD0lDZHbumQDtiN9QK1l5arx-EnsNNl5vqOHKeUpRa8DKgDg9gkOmZADT7JFOmUCuTG0CCf0r0rbNeIFnbEHyBPOVMQAp~OXqyDwHw3wmiNoU7qQ4HcLNG22cqe5kz9k8m9l5N2qG60hi-9nL4N0MJyKjuA1NkyXvY964nMViE41YhDua01Zf3hqdPz4Pd4gDCYkKVVM1N~S4qNUaewaFHJuFNS9caLWMKMhtvTGBmJwj6gA__",
    accentColor: "amber",
    topics: [
      {
        id: "4-1",
        title: "Design de Roles e Permissions",
        description: "O design de um sistema de autorização começa pela definição clara de roles (papéis) e permissions (permissões). Roles representam funções organizacionais (ADMIN, USER, SPEAKER), enquanto permissions representam ações específicas (READ_SHIPMENTS, MANAGE_USERS). A abordagem RBAC (Role-Based Access Control) é a mais comum, mas pode ser combinada com atributos do utilizador (email domain, departamento) para decisões mais granulares. A chave é manter a separação entre a lógica de autorização e a lógica de negócio.",
        concepts: ["RBAC (Role-Based Access Control)", "ABAC (Attribute-Based Access Control)", "ACL (Access Control List)", "Roles vs Permissions", "Granularidade de Acesso", "Separação de Concerns", "Domain-Based Authorization", "Hierarquia de Roles"],
        resources: ["\"Authorization in Spring Security\" - Daniel Garnier-Moiroux", "NIST RBAC Model", "Spring Security Authorization Architecture"]
      },
      {
        id: "4-2",
        title: "Padrões de Autorização Avançados",
        description: "Para cenários complexos, o Spring Security permite criar AuthorizationManagers personalizados que encapsulam lógica de negócio específica. Pode-se combinar autorização baseada em roles com verificações de domínio (ex: utilizadores do domínio corp.example.com têm acesso a recursos internos). A utilização de beans do Spring dentro de expressões SpEL (@beanName.method()) permite delegar decisões complexas para serviços dedicados, mantendo as anotações limpas e a lógica testável.",
        concepts: ["Custom AuthorizationManager", "Bean References em SpEL", "@beanName.method()", "Domain-Based Rules", "Composição de Regras", "Authorization Service Pattern", "Delegação para Serviços", "Lógica de Negócio em Autorização"],
        resources: ["Spring Security Custom Authorization", "Baeldung: Custom AuthorizationManager", "Spring Security Samples"]
      },
      {
        id: "4-3",
        title: "Testes de Autorização com Spring Security Test",
        description: "O Spring Security fornece ferramentas de teste robustas através da dependência spring-security-test. A anotação @WithMockUser permite simular utilizadores com roles específicos. @WithUserDetails carrega um utilizador real do UserDetailsService. O MockMvc pode ser configurado com SecurityMockMvcRequestPostProcessors para testar endpoints protegidos. É essencial testar tanto os cenários de acesso permitido quanto os de acesso negado para garantir que as regras funcionam corretamente.",
        concepts: ["spring-security-test", "@WithMockUser", "@WithUserDetails", "MockMvc + Security", "SecurityMockMvcRequestPostProcessors", "Teste de Acesso Permitido", "Teste de Acesso Negado", "@SpringBootTest"],
        resources: ["Documentação Spring Security Testing", "Baeldung: Testing Spring Security", "Spring Security Test Reference"]
      },
      {
        id: "4-4",
        title: "Boas Práticas e Armadilhas Comuns",
        description: "Algumas boas práticas fundamentais incluem: nunca misturar lógica de segurança com lógica de negócio, preferir @PreAuthorize sobre verificações manuais no código, usar meta-anotações para expressões repetidas, e sempre testar as regras de autorização. Armadilhas comuns incluem: esquecer @EnableMethodSecurity, confundir hasRole() com hasAuthority() (o primeiro adiciona o prefixo ROLE_), não tratar AccessDeniedException adequadamente, e não considerar a ordem das regras em authorizeHttpRequests().",
        concepts: ["Separação Security/Business Logic", "hasRole() vs hasAuthority()", "Prefixo ROLE_", "@EnableMethodSecurity Obrigatório", "Ordem das Regras", "Tratamento de AccessDeniedException", "Princípio do Menor Privilégio", "Defense in Depth"],
        resources: ["Spring Security Best Practices", "OWASP Authorization Cheat Sheet", "Spring Security FAQ"]
      }
    ]
  }
];
