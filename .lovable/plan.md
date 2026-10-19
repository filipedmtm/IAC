## Alterações solicitadas

### 1. Remover botão "Doe Agora" de todas as páginas
- **Header** (`src/components/site/Header.tsx`): remover o botão desktop e o botão no menu mobile (Sheet) que apontam para `/support` com o texto `t.actions.donate`.
- **PageHero / rotas**: verificar se há outros CTAs "Doe agora" nas páginas internas e removê-los (mantendo o banner de parceiros, que já é o único CTA principal desde a última atualização).
- Manter a rota `/support` acessível apenas via link do menu de navegação (item "Apoie"/"Support"), sem o botão destacado.

### 2. Trocar o texto do herói da página inicial (ao lado da imagem do menino)
Substituir `home.heroIntro` nos três idiomas (`src/i18n/content/pt.ts`, `en.ts`, `es.ts`) pelo novo texto:

> PT: "Somos uma organização não governamental que atua no apoio a pessoas com doenças raras, agudas e crônicas e seus familiares. Por meio de uma rede de apoio, contribuímos para o acesso a cuidados e tratamentos adequados, oferecendo suporte ao longo de toda a jornada de cuidado do paciente."
> EN/ES: tradução equivalente mantendo o tom institucional.

### 3. Trocar o texto do rodapé abaixo do logo
Substituir `footer.about` nos três idiomas por:

> PT: "Organização não governamental para cuidados de pacientes portadores de doenças raras, agudas e crônicas e seus familiares, com sede em Campinas/SP e atuação em todo o Brasil."
> EN/ES: tradução equivalente.

### Arquivos alterados
- `src/components/site/Header.tsx`
- `src/i18n/content/pt.ts`
- `src/i18n/content/en.ts`
- `src/i18n/content/es.ts`
- (verificar) outras rotas caso ainda exibam CTA de doação

Somente conteúdo/UI — sem mudanças de layout, cores ou design.