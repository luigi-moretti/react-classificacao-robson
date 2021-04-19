import imgGrupo01 from './grupo01.jpg';
/*import imgGrupo02 from '../../assets/img/grupo02.png';
import imgGrupo03 from '../../assets/img/grupo03.png';
import imgGrupo04 from '../../assets/img/grupo04.png';
import imgGrupo05 from '../../assets/img/grupo05.png';
import imgGrupo06 from '../../assets/img/grupo06.png';
import imgGrupo07 from '../../assets/img/grupo07.png';
import imgGrupo08 from '../../assets/img/grupo08.png';
import imgGrupo09 from '../../assets/img/grupo09.png';
import imgGrupo10 from '../../assets/img/grupo10.png';*/

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
        pageMargins: [113, 75, 75, 113],
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
        'Criada pelo médico irlandês Michael Robson em 2001, a Classificação de Robson tem como objetivo classificar de forma padronizada e aceita globalmente às cesáreas que são realizadas em uma ou mais instituições.',
        
        
        //dados paciente
        {
          table: {
            widths: [ 'auto', '*', 'auto', '*' ],
    
            body: [
              [{ text: 'Dados do paciente',colSpan: 2, bold: true, fontSize: 14, margin: [0, 4, 0, 0] },'','',''],
              [ 'Nome:', {text:'Maria Joaquina', colSpan: 2},'',''],
              [ 'CPF:', '123654789', 'Data Atendimento:', '01/04/2021' ]
            ],
          },
          layout: 'lightHorizontalLines'
        },

        //dados profissional
        {
          table: {
            widths: [ 'auto', '*', 'auto', '*' ],
    
            body: [
              [{ text: 'Dados do profissional',colSpan: 2, bold: true, fontSize: 14, margin: [0, 4, 0, 0] },'','',''],
              [ 'Nome:', {text:'Maria Joaquina', colSpan: 2},'',''],
              [ 'CPF:', '123654789', 'Conselho:', '987654' ]
            ],
          },
          layout: 'lightHorizontalLines'
        },

        //Respostas
        { text: 'Respostas do Formulário',colSpan: 2, bold: true, fontSize: 14, margin: [0, 4, 0, 0] },
        {
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
          image:'building',
          fit: [100, 100],
        }
      ],
      images:{
        building:'data:image/jpeg;base64,https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuseulinguaportuguesa.org.br%2Fnomes-masculinos-com-a%2F&psig=AOvVaw2itXhvscPK-7ta-xv9x83Q&ust=1618941351750000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDK-NHwivACFQAAAAAdAAAAABAD'
      },
      
      footer(currentPage, pageCount) {
            return {
              layout: 'noBorders',
              margin: [14, 0, 14, 22],
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
                        fontSize: 7,
                        alignment: 'right',
                        /* horizontal, vertical */
                        margin: [3, 0],
                      },
                      {
                        text: '© Lojinha de TI',
                        fontSize: 7,
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
          fontSize: 9,
          bold: true,
          alignment: 'center',
          margin: [0, 4, 0, 0],
        }
      },
      
    };
      return documento;
    }
  }