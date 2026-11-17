# Ocarina of Time Remake Checklist

Checklist completo e offline para o 100% de **The Legend of Zelda: Ocarina of Time** (remake de 2026 no Nintendo Switch 2). Interface em **PT-BR e inglês**, com progresso salvo automaticamente no navegador.

## Recursos

- **13 seções**: Pedaços de Coração, Heart Containers, Skulltulas Douradas, Canções, Equipamentos, Itens e Magias, Máscaras, Garrafas, Grandes Fadas, Upgrades, Pedras e Medalhões, Dungeons e Missões Secundárias.
- **Chave de idioma PT-BR / ENG** no topo: troca toda a interface, nomes e descrições (inclusive as 100 Skulltulas e as missões secundárias).
- **Progresso automático** via `localStorage` — feche e volte quando quiser.
- **Exportar / Importar progresso** em JSON para backup ou troca de navegador.
- **Busca** por item, local ou requisito (atalho `/`), filtros por idade e área, e opção de ocultar concluídos.
- **Fotos e passo a passo** das Skulltulas, Pedaços de Coração e missões secundárias.
- **Funciona 100% offline**: basta abrir o `index.html` no navegador.

## Como usar

1. Baixe o arquivo `.zip` na aba **Releases** (ou clone o repositório).
2. Extraia a pasta.
3. Abra o `index.html` com duplo clique (Chrome, Firefox, Edge ou Safari).
4. Marque os itens conforme for concluindo. O progresso é salvo sozinho.
5. Use a chave **PT-BR / ENG** no topo para mudar o idioma.

> Não é necessário instalar nada, servidor local ou internet. As imagens ficam na pasta `img/`.

### Backup do progresso

- **Exportar progresso** baixa um arquivo `oot-100-progresso.json`.
- **Importar progresso** restaura o arquivo (substitui o progresso atual).
- **Zerar checklist** limpa tudo.

## Estrutura do projeto

```
.
├── index.html                 # Página principal
├── styles.css                 # Estilos
├── app.js                     # Lógica do checklist + i18n
├── data.js                    # Dados em português
├── data.en.hearts.js          # Pedaços de Coração (EN)
├── data.en.misc.js            # Demais seções (EN)
├── data.en.skulltulas.js      # 100 Skulltulas (EN)
├── data.en.sidequests.js      # Missões secundárias (EN)
└── img/                       # Capturas de tela
```

## English

Offline 100% checklist for **The Legend of Zelda: Ocarina of Time** (2026 Switch 2 remake), available in **Portuguese and English**. Open `index.html` in any browser, tick items as you go, and your progress is saved automatically. Use the **PT-BR / ENG** switch at the top to change the language. Progress can be exported/imported as JSON.

## Créditos

- Dados e screenshots do remake: **Zelda Central** e **Z64Central**.
- Conteúdo para uso pessoal. The Legend of Zelda, Ocarina of Time e personagens relacionados são marcas e direitos da **Nintendo**. Este projeto não é afiliado à Nintendo.
