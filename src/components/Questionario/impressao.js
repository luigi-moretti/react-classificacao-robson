import imagens from './images';
import formLabel from './formLabel';

export class Impressao {

  constructor(dadosParaImpressao) {
    this.dadosParaImpressao = dadosParaImpressao;
  }

  async PreparaDocumento() {
    const documento = this.GerarDocumento(this.dadosParaImpressao);
    return documento;
  }

  PegData(){
    const data = new Date();
    const dataLocal = data.toLocaleDateString();
    return dataLocal;
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
          style: 'tableDefault',
          table: {
            widths: ['auto', '*', 'auto', '*'],

            body: [
              [{ text: 'Dados do paciente', colSpan: 2, style: 'subheader' }, '', '', ''],
              ['Nome:', { text: corpoDocumento.nomePaciente, colSpan: 2 }, '', ''],
              ['CPF:', { text: corpoDocumento.cpfPaciente }, 'Data Atendimento:', this.PegData()]
            ],
          },
          layout: 'lightHorizontalLines'
        },

        //dados profissional
        {
          style: 'tableDefault',
          table: {
            widths: ['auto', '*', 'auto', '*'],

            body: [
              [{ text: 'Dados do profissional', colSpan: 2, style: 'subheader' }, '', '', ''],
              ['Nome:', { text: corpoDocumento.nomeProfissional, colSpan: 2 }, '', ''],
              ['CPF:', { text: corpoDocumento.cpfProfissional }, 'Conselho:', { text: corpoDocumento.tipoConselho + ': ' + corpoDocumento.numeroConselho }]
            ],
          },
          layout: 'lightHorizontalLines'
        },

        //Respostas
        { text: 'Respostas do Formulário', colSpan: 2, style: 'subheader' },
        {
          style: 'tableDefault',
          ul: [
            'Paridade: '+formLabel.paridade[corpoDocumento.paridade],
            'Número de Fetos: '+formLabel.fetos[corpoDocumento.fetos],
            'Apresentação Fetal: '+formLabel.apresentacaoFetal[corpoDocumento.apresentacaoFetal],
            'Idade Gestacional: '+formLabel.idadeGestacional[corpoDocumento.idadeGestacional],
            'Trabalho de Parto: '+formLabel.trabalhoParto[corpoDocumento.trabalhoParto],
            'Grupo: '+corpoDocumento.grupo
          ]
        },

        // Imagem do Grupo
        {
          image: 'grupo'+corpoDocumento.grupo,
          //widht: 150,
          alignment: 'center'
        },

        // Assinatura
        {
          text:
            '____________________________________________________________________________________________________________________',
          alignment: 'right',
          fontSize: 5,
          margin: [0, 60, 0, 5],
        },
        {
          text:
            'Assinatura e carimbo do profissional',
          alignment: 'right',
          fontSize: 8,
          margin: [0, 0, 0, 5],
        },

      ],
      //https://www.base64-image.de/ => converte imagens para código base64
      images: {
        grupo1: imagens[1],
        grupo2: imagens[2],
        grupo3: imagens[3],
        grupo4: imagens[4],
        grupo5: imagens[5],
        grupo6: imagens[6],
        grupo7: imagens[7],
        grupo8: imagens[8],
        grupo9: imagens[9],
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
                    style: 'small',
                    alignment: 'right',
                    /* horizontal, vertical */
                    margin: [3, 0],
                  },
                  {
                    text: 'https://www.classificacaorobson.com/',
                    style: 'small',
                    alignment: 'right',
                  },
                  {
                    text: '© Classificação de Robson',
                    style: 'small',
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
        tableDefault: {
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