# Manual de Operação e Expansão: Ecossistema Premium

## Dra. Lorena Lima — Psicologia Clínica Baseada em Evidências



Este documento serve como o guia definitivo de engenharia, manutenção e expansão para a plataforma web da **Dra. Lorena Lima**. Desenvolvido sob os pilares estéticos da Apple, Linear e Stripe, o projeto utiliza uma arquitetura baseada em uma **Fonte Única da Verdade (Single Source of Truth)**. Isso significa que quase toda a manutenção de conteúdo é feita centralizadamente em arquivos de configuração, sem a necessidade de manipular estruturas complexas de HTML repetidamente.

---

## 1. Como Trocar a Foto da Psicóloga

O layout utiliza máscaras geométricas premium com proporção de tela clássica de retrato corporativo (**aspect-ratio: 4/5**).

### Passos para substituição:

1. Prepare as novas imagens mantendo preferencialmente as proporções de estúdio (ex: **1200px por 1500px**). É recomendável otimizar o peso do arquivo usando ferramentas como *TinyPNG* ou convertendo para o formato `.webp`.
2. Salve as imagens na pasta do projeto exatamente com os seguintes nomes e extensões:
* **Foto Principal (Hero):** `assets/img/lorena-hero.jpg`
* **Foto de Perfil (Sobre Mim):** `assets/img/lorena-about.jpg`


3. Se você usar o mesmo nome e extensão (`.jpg`), o navegador substituirá a imagem automaticamente. Se optar por usar outro formato (como `.png` ou `.webp`), abra o arquivo `index.html` e altere a propriedade `src` das tags correspondentes:
* Linha da foto hero: `<img src="assets/img/seu-novo-nome.webp" ... id="hero-img">`
* Linha da foto sobre: `<img src="assets/img/seu-novo-nome.webp" ... id="about-img">`



---

## 2. Como Alterar os Textos da Landing Page

Toda a camada textual da Landing Page está isolada do código estrutural HTML. Ela reside no arquivo `/js/config.js`.

### Passos para alteração:

1. Abra o arquivo `/js/config.js` em qualquer editor de texto simples (como VS Code ou Bloco de Notas).
2. Localize o bloco que deseja alterar (ex: `hero`, `about`, `specialtiesSection`).
3. Modifique o conteúdo que está entre aspas.

> **Atenção à sintaxe JavaScript:** Se precisar quebrar uma linha no título do Hero, utilize a tag `<br>`. Mantenha sempre as vírgulas ao final de cada propriedade para evitar quebras de script.

```javascript
// Exemplo de edição no bloco Hero dentro de js/config.js
hero: {
    badge: "Nova Frase do Badge Aqui",
    title: "Seu Título Personalizado <br>Em Duas Linhas.",
    subtitle: "Seu novo parágrafo explicativo focado em conversão de pacientes.",
    ctaText: "Texto do Botão Principal"
},

```

---

## 3. Como Substituir o PDF do Ebook

O funil de alta conversão entrega o material de forma limpa na página dedicada `/ebook.html`.

### Passos para substituição:

1. Exporte o seu novo e-book em formato PDF.
2. Salve o arquivo na pasta `/assets/pdf/` do projeto.
3. Abra o arquivo `/js/config.js`.
4. Localize a chave `ebook` e mude o caminho no campo `pdfUrl`:

```javascript
ebook: {
    tag: "Material Gratuito",
    title: "Guia Prático de Regulação Emocional",
    description: "Descrição simplificada...",
    pdfUrl: "assets/pdf/NOME_DO_SEU_NOVO_EBOOK.pdf", // Altere aqui
    ctaText: "Baixar Material Gratuito"
},

```

---

## 4. Como Trocar o Número ou Mensagem do WhatsApp

Os links de conversão do ecossistema utilizam a API nativa do WhatsApp com parâmetros pré-preenchidos para rastrear a origem do clique e diminuir o esforço do usuário.

### Passos para alteração:

1. Abra o arquivo `/js/config.js`.
2. Localize a propriedade `whatsappUrl` dentro do objeto `profile`.
3. Substitua o número (mantendo o código do país `55` e o DDD) e edite o texto da mensagem.

> **Regra de Ouro do CRO (Conversion Rate Optimization):** Espaços em branco na URL devem ser substituídos pelo caractere especial `%2C` (para vírgulas) e `+` ou `%20` (para espaços).

```javascript
// Modelo estruturado de URL para o WhatsApp:
whatsappUrl: "https://wa.me/5599999999999?text=Olá%2C+Dra.+Lorena.+Gostaria+de+verificar+os+horários+disponíveis.",

```

---

## 5. Como Alterar o Link do Instagram

O fluxo estratégico desenhado prevê a entrada de tráfego vindo organicamente do Instagram direto para a Landing Page ou para a página do Ebook. Caso queira adicionar um link de saída explícito para o seu perfil no rodapé ou em redes sociais:

1. Abra o arquivo `/js/config.js`.
2. Adicione a chave do seu perfil dentro de `profile`:

```javascript
profile: {
    name: "Lorena Lima",
    // ... configurações existentes
    instagramUrl: "https://instagram.com/seu_perfil"
}

```

3. No arquivo `index.html`, onde desejar inserir o link, use a marcação semântica padrão associando a variável via script ou diretamente no HTML:

```html
<a href="https://instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer">Siga no Instagram</a>

```

---

## 6. Como Adicionar o Google Analytics

Para monitorar dados de acessos, rejeição e comportamento dos visitantes, você deve injetar o script global da Tag do Google (`gtag.js`).

### Passos para implementação:

1. Acesse o painel do **Google Analytics**, crie uma propriedade de fluxo web para o seu domínio e copie o código de acompanhamento fornecido (ID do tipo `G-XXXXXX`).
2. Abra os arquivos `index.html` e `ebook.html`.
3. Cole o código fornecido imediatamente no início da tag `<head>`, logo acima das outras folhas de estilo:

```html
<!-- Google Tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXX');
</script>

```

---

## 7. Como Adicionar o Meta Pixel (Facebook/Instagram Ads)

Indispensável para fazer campanhas pagas de tráfego direcionado e remarketing para pessoas que visitaram a página mas não clicaram no WhatsApp.

### Passos para implementação:

1. No Gerenciador de Negócios do Meta, vá em **Fontes de Dados** > **Pixels** (ou Conjunto de Dados) e copie o código de instalação manual.
2. Abra os arquivos `index.html` e `ebook.html`.
3. Cole o script principal dentro da tag `<head>` de ambos os arquivos:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_ID_DO_PIXEL_AQUI');
fbq('track', 'PageView');
</script>
<!-- End Meta Pixel Code -->

```

4. Cole o trecho `<noscript>` de segurança imediatamente após a abertura da tag `<body>`:

```html
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=SEU_ID_DO_PIXEL_AQUI&ev=PageView&noscript=1"/></noscript>

```

---

## 8. Como Publicar no GitHub Pages

O GitHub Pages oferece hospedagem estática gratuita, segura e de alta performance ideal para este projeto.

### Passos para publicação:

1. Crie uma conta gratuita em [github.com](https://github.com) se ainda não tiver.
2. Crie um novo repositório chamado `lorenalima-web` (ou o nome de sua preferência) e configure-o como **Público**.
3. Faça o upload de todos os arquivos do seu projeto para a raiz desse repositório (`index.html`, `ebook.html`, pastas `css`, `js`, `assets`).
4. Dentro do repositório, navegue até a aba **Settings** (Configurações) no menu superior.
5. Na barra lateral esquerda, clique na seção **Pages**.
6. Em **Build and deployment**, altere a origem para **Deploy from a branch**.
7. Escolha a branch `main` (ou `master`) e a pasta `/ (root)`. Clique em **Save**.
8. Aguarde de 1 a 2 minutos. O GitHub gerará um link seguro no formato `[https://seu-usuario.github.io/nome-do-repositorio/](https://seu-usuario.github.io/nome-do-repositorio/)`.

---

## 9. Como Publicar no Cloudflare Pages

A Cloudflare oferece uma rede global de distribuição (CDN) extremamente veloz com proteção nativa contra ataques e excelente performance de carregamento para SEO local.

### Passos para publicação:

1. Acesse o painel da [Cloudflare](https://dash.cloudflare.com) e crie uma conta gratuita.
2. No menu lateral, navegue até **Workers & Pages** e clique no botão **Create application**.
3. Selecione a aba **Pages** e clique em **Connect to Git** (ou selecione a opção de fazer upload direto de uma pasta local, se preferir não usar o GitHub).
4. Siga as instruções na tela para autorizar o acesso ao seu repositório do GitHub e selecione o repositório do seu projeto.
5. Na seção de configurações de compilação (*Build settings*), deixe todos os campos padronizados (como o projeto usa HTML/JS puros, **não** há necessidade de comandos de build ou frameworks).
6. Clique em **Save and Deploy**. A Cloudflare gerará um subdomínio seguro e gratuito `.pages.dev`.

---

## 10. Como Conectar um Domínio Próprio (Ex: `lorenalima.com.br`)

Para passar o posicionamento de autoridade premium exigido, é essencial utilizar um domínio próprio registrado (na Registro.br ou similares).

### Configuração de DNS na Cloudflare (Recomendado):

Se publicou via Cloudflare Pages, o processo é nativo:

1. No painel da Cloudflare, entre no seu projeto em **Workers & Pages** > **Pages**.
2. Clique na aba **Custom domains** e depois em **Set up a custom domain**.
3. Digite seu domínio (ex: `lorenalima.com.br`) e siga o assistente automático que configurará as zonas DNS.

### Configuração Manual de DNS (Caso use GitHub Pages):

No provedor onde comprou seu domínio (ex: Registro.br, HostGator), vá até a tabela de registros DNS e configure:

| Tipo | Nome/Host | Valor/Destino | Motivo |
| --- | --- | --- | --- |
| **CNAME** | `www` | `seu-usuario.github.io.` | Redireciona o tráfego com www |
| **A** | `@` (ou em branco) | `185.199.108.153` | IP do Servidor do GitHub 1 |
| **A** | `@` (ou em branco) | `185.199.109.153` | IP do Servidor do GitHub 2 |
| **A** | `@` (ou em branco) | `185.199.110.153` | IP do Servidor do GitHub 3 |
| **A** | `@` (ou em branco) | `185.199.111.153` | IP do Servidor do GitHub 4 |

> Após salvar, ative a opção **Enforce HTTPS** na aba de configurações do GitHub Pages para garantir o cadeado de segurança no site. O processo de propagação de DNS pode levar até 24 horas.

---

## 11. Arquitetura para Futuras Expansões do Projeto

O código foi projetado de maneira modular para suportar crescimento sem a necessidade de refatorações estruturais estruturantes. Abaixo estão as diretrizes de engenharia para três expansões mapeadas:

### Expansão A: Integração de um Blog de Conteúdo Clínico

Para melhorar o SEO orgânico local de cauda longa (ex: *"Como controlar crises de pânico em Marabá"*), você pode criar posts estruturados:

* **Abordagem Recomenda:** Crie uma pasta física `/blog/` e salve os artigos como arquivos HTML individuais (ex: `como-lidar-com-ansiedade.html`).
* **Estrutura:** Copie a estrutura do cabeçalho (`<header>`) e rodapé (`<footer>`) do `index.html` para manter a consistência de marca, e utilize as mesmas variáveis CSS (`variables.css`) para garantir a identidade visual sem carregar códigos repetidos.

### Expansão B: Criação de Triagens Eletrônicas (Quiz de Ansiedade/Escala)

Antes do paciente acionar o WhatsApp, é possível aplicar um formulário de triagem ou um quiz interativo baseado na escala Beck ou de regulação emocional para aumentar o nível de consciência do paciente.

* **Implementação:** Desenvolva uma página `/triagem.html`. Utilize elementos padrões do CSS do projeto para criar opções selecionáveis animadas.
* **Mecanismo de Conversão:** Ao final do formulário, configure o script para capturar as respostas do usuário e injetá-las dinamicamente como string de texto dentro da URL do WhatsApp. Assim, ao clicar no botão final, a psicóloga receberá um resumo do perfil clínico do paciente antes mesmo de iniciar a conversa.

### Expansão C: Adição de Sistema de Agendamento Síncrono Automático

Caso o volume de agendamentos escale a ponto de ocupar muito tempo de gestão manual pelo WhatsApp:

* **Solução:** Faça a integração de plataformas de agendamento automático como o *Cal.com* ou *Calendly*.
* **Código:** Substitua a URL do WhatsApp nos botões principais (`js/config.js`) pelo link direto da sua agenda automatizada, mudando apenas a variável `whatsappUrl` para o link externo da plataforma escolhida de forma transparente.
