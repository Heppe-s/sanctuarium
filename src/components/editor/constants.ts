import {
    I18nConfig,
    ToolConstructable,
    ToolSettings,
  } from "@editorjs/editorjs";
  
  // @ts-ignore
  import Header from "@editorjs/header";
  // @ts-ignore
  import Underline from "@editorjs/underline";
  // @ts-ignore
  import Delimiter from "@editorjs/delimiter";
  // @ts-ignore
  import Embed from "@editorjs/embed";
  // @ts-ignore
  import SimpleImage from "@editorjs/simple-image";
  // @ts-ignore
  import CheckList from "@editorjs/checklist";
  // @ts-ignore
  import Marker from "@editorjs/marker";
  // @ts-ignore
  import NestedList from "@editorjs/nested-list";
  // @ts-ignore
  import Quote from "@editorjs/quote";
  // @ts-ignore
  import Table from "@editorjs/table";
  
  type ToolsConfig = {
    [toolName: string]: ToolConstructable | ToolSettings;
  };
  
  const tools: ToolsConfig = {
    header: {
      class: Header as unknown as ToolConstructable,
      inlineToolbar: true,
      config: {
        placeholder: "Digite um Cabeçalho",
        levels: [1, 2, 3, 4],
        defaultLevel: 2,
      },
    },
    embed: Embed,
    underline: Underline,
    delimiter: Delimiter,
    image: SimpleImage,
    checklist: {
      class: CheckList,
      inlineToolbar: true,
    },
    Marker,
    list: NestedList,
    quote: {
      class: Quote,
      config: {
        quotePlaceholder: "Digite a Citação",
        captionPlaceholder: "Autor da Citação",
      },
    },
    table: {
      class: Table,
      config: {
        rows: 2,
        cols: 3,
      },
    },
  };
  
  const i18n: I18nConfig = {
    messages: {
      ui: {
        blockTunes: {
          toggler: {
            "Click to tune": "Clique para personalizar",
            "or drag to move": "ou arraste para mover",
          },
        },
        inlineToolbar: {
          converter: {
            "Convert to": "Converter para",
          },
        },
        toolbar: {
          toolbox: {
            Add: "Adicionar",
          },
        },
        popover: {
          Filter: "Filtro",
          "Nothing found": "Nada encontrado",
        },
      },
      toolNames: {
        Text: "Texto",
        Heading: "Cabeçalho",
        List: "Lista",
        Quote: "Citação",
        Delimiter: "Delimitador",
        Table: "Tabela",
        Marker: "Marcador",
        Bold: "Negrito",
        Italic: "Itálico",
        Underline: "Sublinhado",
      },
      blockTunes: {
        delete: {
          Delete: "Remover",
          "Click to delete": "Clique para remover",
        },
        moveUp: {
          "Move up": "Mover para Cima",
        },
        moveDown: {
          "Move down": "Mover para Baixo",
        },
      },
    },
  };
  
  export { i18n, tools };