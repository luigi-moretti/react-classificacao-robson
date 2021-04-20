import imagens from './images';

export class Impressao {
  
    constructor(dadosParaImpressao) {
      this.dadosParaImpressao = dadosParaImpressao;
    }  
    
    async PreparaDocumento() {
      const corpoDocumento = this.CriaCorpoDocumento();
      const documento = this.GerarDocumento(corpoDocumento);
      return documento;
    }
  
    CriaCorpoDocumento() {
      const header = [
        { text: 'Nome Produto', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'Qtd. Estoque', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'Qtd. Vendido', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
      ];
      const body = this.dadosParaImpressao.map((prod) => {
        return [
          { text: prod.nome, fontSize: 8 },
          { text: prod.qtdEstoque, fontSize: 8 },
          { text: prod.qtdVendido, fontSize: 8 },
        ];
      });
  
      const lineHeader = [
        {
          text:
            '__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
          alignment: 'center',
          fontSize: 5,
          colSpan: 3,
        },
        {},
        {},
      ];
  
      let content = [header, lineHeader];
      content = [...content, ...body];
      return content;
    }
  
    GerarDocumento(corpoDocumento) {
      const documento = {
        pageSize: 'A4',
        pageMargins: [113, 75, 75, 80],
        header: function () {
          return {
              margin: [14, 12, 14, 0],
              layout: 'noBorders',
              table: {
                widths: ['*'],
                body: [                             
                  [
                    { text: 'Classificação de Robson', style: 'reportName' }
                  ]              
                ],
              },
            };
        },
      content: [

        // Introdução
        'Criada pelo médico irlandês Michael Robson em 2001, a Classificação de Robson tem como objetivo classificar de forma padronizada e aceita globalmente às cesáreas que são realizadas em uma ou mais instituições.\n\n',
        
        
        //dados paciente
        {
          style:'tableDefault',
          table: {
            widths: [ 'auto', '*', 'auto', '*' ],
    
            body: [
              [{ text: 'Dados do paciente',colSpan: 2, style:'subheader' },'','',''],
              [ 'Nome:', {text:'Maria Joaquina', colSpan: 2},'',''],
              [ 'CPF:', '123654789', 'Data Atendimento:', Date() ]
            ],
          },
          layout: 'lightHorizontalLines'
        },

        //dados profissional
        {
          style:'tableDefault',
          table: {
            widths: [ 'auto', '*', 'auto', '*' ],
    
            body: [
              [{ text: 'Dados do profissional',colSpan: 2, style:'subheader'},'','',''],
              [ 'Nome:', {text:'Maria Joaquina', colSpan: 2},'',''],
              [ 'CPF:', '123654789', 'Conselho:', '987654' ]
            ],
          },
          layout: 'lightHorizontalLines'
        },

        //Respostas
        { text: 'Respostas do Formulário',colSpan: 2, style:'subheader' },
        { 
          style:'tableDefault',
          ul: [
            'Paridade: ',
            'Número de Fetos: ',
            'Apresentação Fetal: ',
            'Idade Gestacional: ',
            'Trabalho de Parto: ',
            'Grupo: '
          ]
        },

        // Imagem do Grupo
        {
          image:'grupo05',
          //widht: 150,
          alignment: 'center'
        },

        // Assinatura
        {
          text:
            '____________________________________________________________________________________________________________________',
          alignment: 'right',
          fontSize: 5,
          margin: [0, 60,0, 5],
        },
        {
          text:
            'Assinatura e carimbo do profissional',
          alignment: 'right',
          fontSize: 8,
          margin: [0, 0,0, 5],
        },

      ],
      //https://www.base64-image.de/ => converte imagens para código base64
      images:{
        grupo01: imagens[1],
        grupo02: imagens[2],
        grupo03: imagens[3],
        grupo04: imagens[4],
        grupo05: imagens[5],
        grupo06: imagens[6],
        grupo07: imagens[7],
        grupo08: imagens[8],
        grupo09: imagens[9],
        grupo10: imagens[10],
      },

     
      footer(currentPage, pageCount) {
            return {
              layout: 'noBorders',
              margin: [14, 0, 14, 0],
              table: {
                widths: ['auto'],
                body: [
                  [
                    {
                      text:
                        '_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
                      alignment: 'center',
                      fontSize: 5,
                    },
                  ],
                  [
                    [
                      {
                        text: `Página ${currentPage.toString()} de ${pageCount}`,
                        style:'small',
                        alignment: 'right',
                        /* horizontal, vertical */
                        margin: [3, 0],
                      },
                      {
                        text: 'https://www.classificacaorobson.com/',
                        style:'small',
                        alignment: 'right',
                      },
                      {
                        text: '© Classificação de Robson',
                        style:'small',
                        alignment: 'center',
                      },
                    ],
                  ],
                ],
              },
            };
          },
      styles: {
        reportName: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 4, 0, 0],
        },
        subheader: {
          fontSize: 15,
          bold: true,
          margin: [0, 4, 0, 0] 
        },
        small: {
          fontSize: 8
        },
        tableDefault:{
          margin: [0, 5, 0, 15]
        },

      },
      defaultStyle: {
        alignment: 'justify'
      }
      
    };
      return documento;
    }
  }