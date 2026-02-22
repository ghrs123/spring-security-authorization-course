/**
 * Rubrica de avaliação do Capstone (100 pontos).
 * Usada na página do nível Capstone para checklist manual e exportação da avaliação.
 */

export interface CapstoneCriterion {
  id: string;
  points: number;
  description: string;
  evidence: string;
}

export interface CapstoneCategory {
  id: string;
  title: string;
  points: number;
  criteria: CapstoneCriterion[];
}

export interface CapstoneRubricData {
  totalPoints: number;
  categories: CapstoneCategory[];
}

export const capstoneRubric: CapstoneRubricData = {
  totalPoints: 100,
  categories: [
    {
      id: "architecture",
      title: "Arquitetura e Modelo de Autorização",
      points: 25,
      criteria: [
        { id: "arch-roles-perms", points: 8, description: "Modelo claro: roles + permissions (não só roles hardcoded).", evidence: "Existe enum/const de permissions + mapeamento role->permissions + explicação no README/curso." },
        { id: "arch-boundaries", points: 7, description: "Separação entre regras HTTP e Method Security com justificativa.", evidence: "Endpoints protegidos + @PreAuthorize/AuthorizationManager em pontos críticos + seção 'trade-offs'." },
        { id: "arch-least-privilege", points: 5, description: "Least privilege e deny-by-default aplicados.", evidence: "Regra default deny + exceções explícitas + ausência de anyRequest().permitAll()." },
        { id: "arch-extensibility", points: 5, description: "Extensível: fácil adicionar permission nova sem quebrar tudo.", evidence: "Permissions centralizadas + AuthorizationManager/adapter reutilizável." }
      ]
    },
    {
      id: "implementation",
      title: "Implementação Spring Security",
      points: 25,
      criteria: [
        { id: "impl-securityfilterchain", points: 7, description: "Configuração moderna (SecurityFilterChain), sem WebSecurityConfigurerAdapter.", evidence: "Classe @Configuration com @Bean SecurityFilterChain + authorizeHttpRequests." },
        { id: "impl-authz-manager", points: 8, description: "Uso correto de AuthorizationManager (ou alternativa sólida) em casos avançados.", evidence: "AuthorizationManager implementado + aplicado em endpoints/policies + testes cobrindo." },
        { id: "impl-method-security", points: 6, description: "Method Security bem aplicada (onde faz sentido) com expressões claras.", evidence: "@EnableMethodSecurity + @PreAuthorize com expressões legíveis ou meta-annotations." },
        { id: "impl-errors", points: 4, description: "Tratamento de erros (401 vs 403) consistente.", evidence: "EntryPoint/AccessDeniedHandler configurados + testes validando." }
      ]
    },
    {
      id: "tenant-ownership",
      title: "Multi-Tenant e Ownership",
      points: 20,
      criteria: [
        { id: "tenant-isolation", points: 8, description: "Isolamento por tenant (não permite cross-tenant).", evidence: "TenantId no principal/JWT + validação em policy + teste de acesso cross-tenant falhando." },
        { id: "ownership-check", points: 8, description: "Validação de ownership (resource owner) para operações sensíveis.", evidence: "Policy do tipo canEdit(resourceId) consultando serviço/repo + testes." },
        { id: "admin-bypass", points: 4, description: "Admin global tem bypass controlado e auditável.", evidence: "Policy permite global admin com regra explícita + logs/audit (opcional)." }
      ]
    },
    {
      id: "tests",
      title: "Testes Automatizados",
      points: 20,
      criteria: [
        { id: "test-http-layer", points: 7, description: "Testes de integração HTTP (MockMvc/WebTestClient) cobrindo 401/403/200.", evidence: "Testes com @SpringBootTest + MockMvc e casos negativos/positivos." },
        { id: "test-method-layer", points: 5, description: "Testes de Method Security (service layer) com roles/perms.", evidence: "Testes chamando métodos protegidos + asserts de AccessDeniedException." },
        { id: "test-ownership", points: 5, description: "Testes de ownership/tenant.", evidence: "Casos: owner ok, não-owner 403, cross-tenant 403." },
        { id: "test-matrix", points: 3, description: "Matriz mínima de cenários (roles x endpoints).", evidence: "Tabela/parametrized tests cobrindo combinações." }
      ]
    },
    {
      id: "quality",
      title: "Qualidade, Segurança e Documentação",
      points: 10,
      criteria: [
        { id: "doc-run", points: 4, description: "Instruções para rodar e validar o capstone.", evidence: "README com comandos + exemplos curl/postman." },
        { id: "no-secrets", points: 3, description: "Sem segredos hardcoded e boas práticas básicas.", evidence: "Sem tokens/senhas no repo + configs via env." },
        { id: "observability", points: 3, description: "Logs/auditoria mínima para decisões críticas (opcional).", evidence: "Log em AccessDeniedHandler/Policy para ações sensíveis." }
      ]
    }
  ]
};
