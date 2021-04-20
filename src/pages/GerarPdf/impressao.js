import images from './images';

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
        'Criada pelo médico irlandês Michael Robson em 2001, a Classificação de Robson tem como objetivo classificar de forma padronizada e aceita globalmente às cesáreas que são realizadas em uma ou mais instituições.\n\n',
        
        
        //dados paciente
        {
          style:'tableDefault',
          table: {
            widths: [ 'auto', '*', 'auto', '*' ],
    
            body: [
              [{ text: 'Dados do paciente',colSpan: 2, style:'subheader' },'','',''],
              [ 'Nome:', {text:'Maria Joaquina', colSpan: 2},'',''],
              [ 'CPF:', '123654789', 'Data Atendimento:', '01/04/2021' ]
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
          image:`${images[grupo01]}`,
          widht: 150,
        }
      ],
      //https://www.base64-image.de/ => converte imagens para código base64
      images:{
        grupo01:' data:image/jpeg;base64,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',
        grupo02:' data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAADICAYAAACHxJ10AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJztfXd8VFXe/nPunV4yJTOpQwqEkEICRJBeBQQpgr2g2FZ39VVf66Luvrur7m/3XbtrA1kVu9gVAVHpVSAghBYCCZCeycykTSYzc+/5/REymZlMLwnrvs/nw4fce88598wzZ77nnG87BBcY9PqEHHCCkRR8AU9pAaEYTEF0hPJyECIjhCgIIa0AOkDRAQIjIThFQY+DMicow/xiNBrLB/pz+AIZ6A4kJCRoxQJmEcfRWYTQqZQilQIA9V2eYRkwJGi3ayjFRkLoJpGD+6amra05tr2ODANFNqvXamdxHHc7KD+fgkhCrRgi2e7gKOgmhuA9kVTxaXV1dWf43Y0N+pVsvV6vcNrt9xHQ+yhFciRtREC2O+ooyHOEZZc3NTW1R9pIpOgXsrOysiStJtNjlOBeUGiiaStKsnvQDEJfFIplz9fW1lqjbSxUxJ1srUp1JQV9ARSDYtFejMjuQSWluN9oNn8bqwYDIW5kJ8nlyQ4B+xYoLotluzEmGwBAKb5mhMK7GhsbG2LasBfiQrY2IWEOD/oOAYlILgdCPMg+jzrK0BuNRsumeDQOAGysG9QkJDwN4DUCoox12wBAGAISH7KVhJIlMqkE1k7b1ni8IJZkCzWqhPcB3A2AiWG7Hogj2QDAEJDpcqksy9rZuQYAH8vGY9VriSZB+QVA5saoPb+IoxjxBMEaoVh6bSxXK7EYgSKNSvl9fxDdr6CY7+jsXJOVlRXyhisYoiWbUSuVH4GSKTHpzYUGgunWlpZPAAhi0VxUMlurUq0AcGMsOhIq4iyzfbwQw2QyaZK10/ZdtE1FTLZWpfoNpfRP0XYgXPQ72QAIMFomkdZbbbb9UbYTPjQaTRF4bhco5NG8PBL02wTZFzbwdEKTxXIg0gbCltkGg0FKee7zgSB6gCEBQz7S6/WKSBsIW4wIgGcAzIv0hdGCkP4XI27QEcqJOzptGyKpHFavtVptAc85DxAKUSQviwUYhgHDREZ2drIOVQ1Gf3aJUOFgKEoazOaycCuGNbIlYtFqQjEk3JfEEpGO7KnDc3H3vGkw6DQ4XFkDjo94c8hSgmJrp+2dsCuGWlCv0VzGU/4J140B+iWHSzbLMLh28mgsGjcKhBCkatUoykrHocpq2ByOSLuRIZNI91tttrBsnSGTLRGL3wOFIdTys0oKkKpWoam1FU4udiqGcMgepNfivgUzMHJwhsd9lVyKomwD9p+sQpfTGWFHMNjaaVsZTpWQyE7SaidwlP8f13uCfFZdggILx47A4BQdLsrJglQshKW9EzZ7xCPJhVDI1shluGbyaCyZPg5qucxnGYVEjKLMdOyrOAN7BIQTwKCUyXd0dHaeDrVOSGSLRaLloBgaaqOXlhQiWZ0AABCwDAbptBgzNAtZyYkAgNbOzohHeyCyB6fosHj8KNw8Yzyyk3VBvxSlTII8QzJ+PlEZkQynoCnWTtv7oZYP+ntMUSj0dpappbRbP0AYgAbol16lwJ1zpgT8oDylqDaacLK2CdVNJtSZW0Im3301ImBZDE1NQv6gVFw0NANJqoSQ2vDGL5Xn8Np3m8HTsNcpHE+YzObm5ppQCgdVsDhFghupk3eVC0Q0AEwuzA06ohhCkKFPRIY+8XyPeTS2tMHU2gFLhxUtVhs6u7pgd3IuAiRCASQiIVI0Khh0Ghh0WqQnqsEy0SsuR2QPwtWTR+OTrXvDrcqyPH8DuvceQRFcm8Vjaahv1quVyB+UEmpxF1iGQapGhVSNKmhZXYICKj9yOBrMHJGPJksbNh46HlY9SnATYkF2UlJSstPeNaLnmhAg0C9tXG42OrvsIXYzNFAAti4HJGIhCIAOkdA1mts7uyARCSFgY2MYmjemCPXmFhw9VxdOtSKNRpNhNpvPBisYkGze4ZhBKXXJhEBEJ2kS8O3Ph8LpZESIZgcZLwgYOgPAO8HKBRwShNCZoe5tJxXmhFYwakS52Q4RKrk09MI8mR5KsYAjm/J0suuCwO/nTNOqMDQlyXWdqlEhO1UXyvsDotpoxtlGEwCgJCcDEpEQcokIElG3amb9/iOglCItUY0R2SHvt/ziTGMzjp7tFiFLpo3Fuxv3oK0zuGsgJZgaSvuByBZRILvnIgDXmDEiz2OjY9BpMKM4L5T3B8SOYxUussfnDYZGIUdigsK1UdlQehQcpcjUJ+KK8SVRv2/T4eMusrVKBe6/fAae+2IDOoNsxgiQodfrFcH8B/2KkcTExCHU7cvwJ6+HpiUhKzn6UXwhIlOfiIeumA2lNKhIIXA4gm76/JItAJcbcEZE9+pkxojwR7ClvQP7K86gqaV/HElN7R3Ycrgc55pMYdfN1Cfi8avnBN0wUUKGBWvLrxjhKbKCTUVjh2VDrwrP8and1oWVG7bDZneCZRn85tIp0CXEz+hj7bLj6Y/Xoq2zEyzD4LFr5iLz/GYqVOhUSjx61Rz86/ttOFbte1lIgKxg7fgd2RRQBZr4dQkKTCsK+mX2QYO5FTZ7t+KH43hUG8MfbeGgztTimuQ4nsfJmsh8J1UyCR5YNBNLpo/zJ1aC6goCLP2IX1sbwxAsGDsCAjZ847xBp4Za0d1ZqUSEwSn6sNsIBxlJWtfOVCoSoSiKVQshBFOH5+J/b70Si8aN8n4c9CceaDXi85siAOZeNBzpierQe+kGsVCI31w6BXUmC5LVCZCK42thE7IsnrhuHirrm5CeqA5lsguhTQZjcjPx1W4PQ3vQke2XbALa55lQwGLORYUYkR2dX7tYKOjXFYxYIECeITWmbQoYz181IRAGreP/EdPm7sQ5u6QAwzPSIJOII+/hrwg+DCGtweoEGNloc7/Wq5QhE11R14T2HVE5DwEAjG2hLQ1P1NTjjXVbon5fU0tb8EIUAEEf+yXvxZcv+B/ZlLa5bxvtjtBNR+b2DpjbO0IuHw58Lf1NbR0wtcXnfZ4vh8vcwjLeiwMaBdkMbeiRIklqJQy6YEFeBGJhTJw9fXfHh1FJIhKCj9wlIfD7fBlA3G5lJmkxd/RwrNt33n2EkqBrSr+6ymStdpyD43ZJRAL8bu7UC0ZWa5UKaBSxNx5EAo7n8fiqL2Fq7wBl6HSj0bI5UHm/62wbx50gBCj4v0nRL1iGQXZKz6pKcCJYeb9kt7S0mCmIMUEaM8f7XyXOG6pbjUZjfbCyAY0HDCF7LR0+Qkr6R39/wYPjeZyqbwJA9yAEVgIb7wj5qbymARzHed2Pooe/Iuwpr0R7pw0gJKTYycBmMZ7/ydplx96TZ2LTu18RWqw2fLa9FADAgNkYSp2AZDdZLIcAYtx8+Dhqmi0x6OKvA+22Lrz0zY892kRzQ3NzSDu4YD4APMswq50cxcdb9pyXT734jxPdFDC2duDpj9e4DBEEWA0gpB1fUIcLyvJvgwCddic+3vwzfvrlmOvZf5zoJsCb329Bs9tulVKE7OsXlGyjsWUfAakHukfyrmOncbreGElXY4SB+z2V1zR4f/bmJrN5R6j1Q3IlEgjgMQFsP3oy1PZ/Vfhun6cTEgHZijC+/dCUGYTZShj+Bsp3t3u20YQzjc3ITArPlhcIVY3N+Hz7vqDlWJZ1uZ9xPPUbPTB1eC6WTB8Xs/6drje63BxcYLA9nDZCGtmUp3Zvxcz60rJo4lL6IE2rhp3j0Wl3Bvxn7bKj4/y/QGEao4dmxqxvlFJ8vPVnX/e7wmknZI9EQgiIm49dk6Ud+05WhfOugBAJWAyJkT0yRZ2A3PTwvWn9YWtZOSobop+nwnL/9B7dW8tOoqU9dvmsxucNjkk7C8aOjFkUsLnDii93RRzU64GwyPYe3V0OJz7fWdp3Ox8hBum1KMpKj6qN4mwDxgzNikl/eErx9oYd6IiRG3TYjs0sw3gssGtNLdh0OKh2MWRcWlIIvTqyjEfpiRrcNmtS0ACrUPH17oN+nXIiQURe5N6hFXuOV+JQVXVMOiQRCXHTtLFI0waPQnBHTloSHrliNuQxco3Ye7IK6/aHHcQbECF52cilklEAubznmhAC73ypJ2sbkapRQauM3pVMKBCgONsAhhA0WDzjKL2jxZRSKRaPH4kl08fFzCx3oqYer6/dEtzkRrDW2mkLORAn4t6xDAOOci4DLM9TfL6zFNdPHeMKTIoGLMNgyvBcjM0bjOPV9aiqN8LSbgVHux3V07QqDDOkYNTgQRF5ZvlDZYMRr67ZBGeM5iF3RDUUWJbt7tR5wh1ODh9s/hmLx49CniE2Sy+xQIARWQaMyOp2G9Mq5dAo4uOIeby6Dq+u2RxNmHVARB354z1hchyPL3aW4uDpc9E27RPhhyqGht0nTuPFr3+KG9FADBJNEUK6RQrPu0Y4z1Os+fkQaprNuLSkMKY/81jDyXH4ZPs+bD4UuxWVP8RkRvFFOAAcOHUO1c0WXDF+VNh+3P2Beksr3ly/FWcjcJKPBDHzqiGEQMCy4DjO46feZGnDyg3bMXZYNiYVDIVIMPCj3MFxWLv3MNaXHonLROgPMXdhYlkWHM+jR0MIdMvxnUdPoexMDaYX5aEgIzUmYdDhgqcU+05W4ctdB2Bs7fdc5bEnG+ieNCmhfcRKa4cNX+8+iK1l5ZiQPwTFWelg+0GeOzkOe8orsW5fGRosQZ1N44a4Oee5xIrXKAcAc7sV3+09jJ9+OYahackozjIgK1kXs212D2pNFuw6fho7jp4KKZ4x3oifJ+R59IxyntI+pNvsThyuqsHhqhokyCXITtIhK1mHzKREJMjC98SydHTiRHU9jlfX4Vh1PZoHQFQEQtzJBs6vVgjxSzrQLWJ+qazGL5XdOhaJSACtUoFEpRwKqQQSkQAigQAJMikkIiFsDgc6uxxo6ehEvbkFjZbWmGnn4oWQfrh6vV7B2O1JwUsGBwUID8wEITfwlJ9IaXgZ2BiGgAl/cuVAsJXw/GrK0R8ZQmJiYnKwrNFkMoU8CQyoN0KKQqF3igQ3UkqvoRSjKaXCYObTMMh2ANgN0M+JQPRxvM8zCAUXjOtHWlqazGmzTeIJvYRyfAkIGQZK0ynAuKsYCfFJNqXAWQKcoAQHCSWbGKFwW0NDQz+EI4SOC4ZsX8jKypJ0trTkcJQmovtMMQUFVARooZR2gKXtLEeahXJ5xUCerPR/uABxQY5sjUajEhJSyFNaxBOaT3gMpoCKAVQAlN12UOoEmDYCtFCgBYSWg9ITBMxxnmHKjEZjCKFf/YsLguwcQNyi0czgKDcHlMwAaAGlftS/BKFoEZ0U2E8INhFKNjaaTJvRPWEOKAaUbJ1KVcIRehsobgj5zLHQyPaGmQCfUor3mszmsLyYYomBIJvVqlS3AvRhShFWWgehUACtRo0kvQ4tFgsam81whp/a8yBA/t5kMn2KGJ9DEwz9STabqFHdyfP0UdDAuTnyhg7BmMI8JGsSoBSLIeDscHZawTkdEApYDx9DgUgMViqHUyhGS6cdZxqb8cOun3HoaND8fCdA6N+ami3voZ9I7xeytdqEceDICkppka/nQqEAsyZPwKicTMgoh662Fr9teZPtD1KNDq0QYPPBI/jsu+/h8PMLoMAeMPzdRmNLaYgfJ2LElWy9Xq/g7PYXKOht8DHhpRsMuH7mZKgYDg5raPuPUMl2h0iRgGZegBc++RpVlZW+inCgeE0olS6L5/mQcdPga7XaAs7etZ9Seoc30ZlZmXh02TL86+23oeRtIRMdKeztrVB1tWL3z3ux8q23MWxYn6mCBcG9Dlvn/mSNxuevLxaIC9l6rep2OB37KUWu+32lKgEPPvwwVqz8F2bNng2WZSGURJ9sJRSIZHIwDIOFl1+OLdt34JnnnodG02cBlMcT7NYnqkPOPxsOYk020Wk0/3BydKX3Iciz58zBO++swtzLLvPQbUgSwnMzoxH6MsgTe5WWDMNg6S23YOfuPbj2uuu9i8pAyTtJWu1fInpRAMTSJsXqteo3OZ7/L3fNnUwuw6PLluHGJUsglvQ1CHQ0G9HWUBvySxiGQB1BooCUvCIk5eR73JPJZLhs3jwUDi/Epo0b0dXl4ds+9fxRhd8hRquVWI1sVq/VfOTk+Nvcic4ZmoPXl6/AtOn+U5WqU6NP6xkKErP854q9bN58bPjpJxQOH+71hN6SlKhZhRjxFJNG9BrNC06Ou9qd6JEjR+K5F15EWlpawLpqQyZYUXyTcrFCEfSDA++fsrMHY83adZg7e5bHfUpxgz5R88+Y9CPaBnRa9R95Spe5Ez1l2lT86S9PQuJDbHiDMAzsHe1oawqa1ABAZGIkY9RYpOQXBy0nEomQLWOQIJNg7+Gj7o/GyGVSu7XTFtVWP6qRrddqr6I8/Yu7TXHS5Ml44g9/hFAYNBmYC4NGjQMriI85lBEIkTNldsjlJXIFRuiUuOf6Kz0fUPxVp1MvjKovkVbUaDQZlPIreL43mfmIkSPw2BNPhG0jFMnkSCkYGWlXAiJrzCRIE0LPQahI1AOgGJGkwo0LLnV/RAhP3klRq7Mi7UukZIuEhH7K8bxroZqfm4P7bl8KUYTyN2vMRCiTYhfhBQCqFAOGTQ/vtNvEjJ7TvCim5wzCjLGj3R9rOIZ8CATP4ecLEZGtT1Q/yvH04h45LZFIcMOM8RBEkR6fYQUomLUQIllsfK/FigSMuf4OsMLwvnxpggpKffdx8TzP4YZJJTAkeYQMjk/SaB6IpE9hk63RaDJAyTL3M13uX3IVuizNEIQhp31BJFdi5OIbodBF5zWhSEzC+KX3QBKG+HBH1kXjXX/zTgceX3o1WLdDLCjBnyIRJ+FHiwEvczwv7xnVc6ZNgrDdDAAQyaJ3CxbLlShecC2Shw0P+3Q8QggMxWMw6c6HoNAlR9yHjBFjIJb15v0V2Dtxx+L57kVkHINnw203rKWfTqeeBoq/8edXH3KZBNdNGQ3e0e2JlFkyAUJx9Am8GJZFYlYOdNlD4bBZ0dXWCno+mMjX0o9hBUgeNhwlVy1F5uiJYNjoVjasQACxXIG6E73RYoZENXYcO4VOm+38HVKgkEh/7LDZQg6xCGvo6LXqDRxPZ/Us9e5bchUSnN0aSaFEggk33RP8lLcIwDsdsNScRXtzAzibDdkpegglUogVCVClGaDLzoVAFOt0eBR7Vq9C3fHDrjtmIsHvX3zdvdC6JpP5slBbDHkIJCYmjqE85yLakJIEFe1y7WWUSWlxIRroXitrM4dAmzkEQqEQxcXBNyjRg2D04huw9e1X0FLffXSYjuUwKDUZ5+pczlVzdTrVaKOxJXg6CYQhsxnKPeo+KV49cxKom9e+LoDuIZaIVOsXCVihCBNvugua9O7zJDmnA/91/VUeZQjPPBRqeyGRnZCQoCUgC3s+aIpOAwXf6zFKWBb6wbn+qv9bQySVY+JNv0VqXrdNQS/gofE8bGKRWq0OadkTEtkSlr2Wo1TUIzPmT53omrAAIC1/BASiX29mS4FIjLHX3ILiuYtBOQ63X7XI/bFEwDBXh9ROKIUowRLK9f5801UycNZ2V0cySmKXseZCxuAxk5Cckw/Jmi887hPQmwC8Gax+0JGdnKxIAjC+R4TkDslyEQ0AQyfPhEhyYWT97Q/INYmYueQOZGR6ZOqZmKZUBj1XICjZvEM0zf3kvBljehVGg0ZejKQh+T7r/ZpBCMGcOR46F8YpFAY9Xyx4Xj9Cp7uvQpKV3TurQSMvxuCLp4Tf018JJk2e5HFNKQ16cl5QmU0opvZEkQoELFjegZxpc5CS621C6h/059IvEMZPmNgd83l++UsJpgWrE2xkiwDk9ny+oTlDMWrhdQNG9IUElUqFvPxeEUqAYQiieg1ItlarzaGUuvQnaQYDJMrwXA9+zRg61OOgPIFOpwuYUSwg2QLC57r/aA2D+scS/u+CnByvUwk5LuDOLiDZPGUGu0f9p6f/H9nuGJLjpaIgdIjvkt0InIYfULuPbLUmMmX8rxU6XZ+ldUAZG5BsCijdXRSk0v+czUsoUCg8DxZkgpycF2Q1wivd0yrIZANP9oWy9AP6kg2QgCfnBR7ZlHhYSwVx8u34d4VY7Gmw4CkCauOCHJ0Cm/u1w35hB+L3Nzq90mowBAEd6YPIbGJ1t5x12cPKYPyrhzfZAI2cbAK0uFspWyz+Y13+E2EyeSby4oGABAVeZwPn3K2KjY2NkffsV4jqc56GdQKcDVQ+2Dr7jLvvRkN9aJ6m/yk4V+1JNkNo5GQTjjvlTnZl5elo+hYTXEhLv2NHPdyKQThyKlD5gGQ3tLRUEsDUw/eJE/HP6vjvhIMHDrr+JoCp3mIJeC5YMBUr5UFLe0a32WRGY8OAJ6S5IHD2zBkYjb0nUlHQ/QhyjEpQSw0Bs5u4+Vv/vGdPFF2MDKdPn8bhQ91nxLS3t+PdVavww4YNAIBmoxG7d+1Cs7F/Dyr66ccfPa4JmN3B6gQnm9L1BHCddbB7d9A2I0ZPcvAvv/gCDz/4IM6e7Z5vnli2DA89+AB4nofVasXDDz6AF55/DgCwfft2LJw/D88+8wwA4K1/rcTtt96C0tL4Rkf/8MMG71vrg9UJbvBl+U4ArmiCAwdKvUPYokbp/v24benN+OjDDwAANdXV+OXgQVSe7p6Qx0+aiBmXXALO6YRarcYTf/wjrrv+BgCAwWDAosWLMXZctzvF7l278O0338B+vo8L5l2Gm2+8ES0tsdsjdHZ2Yvu2bR73eIaz+SnuQkDnPIPBILVbO/ZRoIDjeFBKkV+Qj+dffCkqPYnT6cSH77+PiooKPPn00zh5shx33/VbzJo9G48uW4a62lo4nE6kpaX1eQ8hBCUlJX7bNptMKDtShrEXj4XD6URh3jAkJSdjz959OFNVhb//7f/hpqVLMXHiJL9tBIPD4cDC+fOwf1+vix8Fjkhk8jGBclUFZKyro+N/QVDA8d1EyxVyPP7EHyIm+lRFBbSJidBoNNi2bSvOVFWhuroaQ4bk4KPVq1364dQA4XzBln4arRaTJ3db/UViMcpPnUZ19TkQQvDll1/gi88/R7rBgIkTJ+HsmTNINxjCzgcrFArxxvIVmDFtKtraurMjEaCwy2r9G4D/9lfP78jWq9WjwJC9PM+zPf7Yjz3xBGZccklYHevB+nXr8Pyzz+DKq67CXb+7G0fKyqDRaoPGSfrCRRddFFEfrFYr1q5Zg8lTp0Kv12PyhPFwOJ34+ts1SE1NDbu9r7/6Cr+5/Tb3Wxx4OrrJYjnoq7w/mU3AkFcopS6iZ116adhEW61WfP7ZZ6CUYuy4cUhNS8egjG5PosLhwyMiOhrIZDJcdc01SE5OhtlkQmpaGgYZBiE1NRV1dXU4euRIWO1dvmgRrrrmGvdbLBjyT/gZxD5vJiWqb6aUrOo5PEKZoMQ7q95Fgio8y/rjjy3D3j0/46FHHsGcuXNBKQ07dMMXIh3ZvtDV1QWxWIw777gda779Fq+9sRyLFi8Oub7R2ITxF1/sMQETipsazeY+h3L6ElZCmVT6Ocfzmp4l+l2//R2KR4wI6eV2ux379+1DusGAtLQ02LpsuHzRYkil0pgQDSCmv4ie+aeurg7GJiMee+IJCAQCnDt7FqoQPIFlMjlkMpnnuptgpLXT9hq8Egz0+fR6rfpWSvEWd/4gnuwhg/HG8hUhBZJSSnH/fffixPHjeObZ50L+gsJFLEe2O3p+ec8/9yz++dJLePmVV7FgYfCgXqfTiRnTpuL4Mbcjdwld2thsede9nDeDLIBl7icP3XTTzSER7XA4QAjBggULUVRUDMOgQUHrXGhw/+WJRCLkeLsq+IFAIMBDDz/icY9S5g/wkhweIzspUX0Fz+PznlGdmZWFFStXBiV769atWLliOZ559jkkp6SA5/lI0i6HjJKSkpiJJH9oa2uDUqnE1i1b8PVXX+Lv/3gmYDw+z/OYMnECysvLXfcYQhc1NFu+dl27V6CU3O4+qq+/4YaQSNv38x40NDTgyHmVYzyJ7i8olUpwHIfHl/0e7737LjZv2hSwPMMwuP8Bz8BfHuR292vX8EhMTEwnPHeG43gW6M7n9MknqyEMEIt+9MgRl3PhkbIyFPVLFJfbyKY0bhFqPaiursaPGzbglttuQ3t7O6RSqd9NkN1uR/HwQpiam3tuOSnDZhqNxlrATaYoZJL/4nk6q2cFsmDBApe+wRdKS0vx+0ceQeXpU5g2fQaSkyOPqPWHxlPHcfT7r9BcdRLq9AxXrKOUOrDjXy+ifPN6iBRKqOKYjSchIQEjR42C0diEKxcvRtnhw5g1+1KfYoxlWdTV1qF0//6eWwzhqdFq685T4haQTa9w3wrPvSxwLGVqSgpSU1Mwbvz4gOUiRWt9Dco3rYOtrQUtddU4W9qrbTy55XvYWi1w2rtweM1qNFfF/2jy9rZ2NDY04FTFqYCKuBuXLPG4JoS6Fu0EAHQ6XSrlnDU8xxOge2Jc+dZbPhtrbW1FRUUFSkpKYLfbI055EQh2azsOfPE+7G75/tKGj8KQCTMAAIKacpw70KtXF8sVmHznwxEnBggVp0+fQnq6AWKxGPX19UhJ8Z2yY8LYi1FRUdFzyYMVpDc1NdV3j2yen+8eNzNuvH/x8ewzz2DZIw9jy+bNcSGa8jyO//itB9EimRyDRo51XQ+bMd+D2K6Oduxb/RZ4LuwkuGFh8ODuCOMH7r8P06ZMRk1Njc9ysy/1SArDgHPM7f4DAAGd6S5CLh7rn+yZM2diaO4wjLn44hh0vy9O79qElvre1HOEYZB/yXyPPCRiuQKjr7nVIyGApeYsjqzzDJmLBxiGgVQqg4Bl0eDHRDhztmeaJAIyq/t/AIkadRXP8ZkAIJaI8fW3a/rMuI2NjRAIBNBqtTHTcXijseIYTmxc63FvyITpSBvuqb8eNWoUGIZB1d7tKFv7mcez4oXXIWNUfOMy7XY7LBYLkpKSYO/qgsjL58/hcGBIViZsPRkcCE41NZtzmBSFQg/AFdSXm5vrc2nz4vPP4dalN+MEV9seAAAOuElEQVT4sWNxIbrD1ISKrT943EvKyetDtDuyxkzyEC8AULb2c1hq43PwZw9EIhGSkpKwYvkbGF0yCvVe/jRCoRDDi9xSulIMTlMqdQwnFI5xFyG5uX3z3zmdTgzKyIROp8OQIQGd6yOC027D0Q3fgHP2ZsqXa3UYGkLWsqJ5V0GV2qsa4J0O7F/9lofMjxeqz51Dc3Mzdu3c2edZSYmH/oY4hMLRDCUk3z2UY2iuZ1gIz/MQCAT43d13443lKwJuciIBpRQnNq6FrdXiuicQi5E/+3IwguBpkBiBEKOvvdVDpne2mFH62SpQGt8c5L9/7HH8tGkzFl9xRZ9nI0Z6KuEokM8QSrPcDU3e6st1a9fid3fdicOHDsWcaAA4V7oLprPuOa0JcqdeGlZ6OKlKi5Irl4KQ3m2DsbIc5ZvWxbCnfSGXy5GXn4+NP/2Ep570zJObmZnlcU2ALAYEg91dS1K8zEP79+9DxcmKsJIihgpzdZXHZgUAMkrGITFrqJ8a/qEbnIvcaR5LLpzc9iOaTgVNxx8V7HY7Hn7oQfzzpZdQdrg3645XbDsIpVkCnvZOjiKxCN6pM/7nT3/GsaNHPQIsY4XaslIPA65mUDYyLop8R5ozeTYsNWfRUN5j3qI4d2AP9EPyouypf4hEIjz19NPgeYqCwkLX/aSkJIjFYtdukxJkCgioKw5EpVJ5rDQ+Xb0aU6ZMQX5BQVw66r4xkShVyJtxGQghsHdace6Af2cgYX2lh2aRFQiQP2shCCEYuXgJtq98Hh3N3a5hqrT469XnzV8AALBYLGAYBgkJCWAYBhqNxn2lohJQwDWzSNzWi7W1tXhz+RtYv24t/vX2O3HpZPbFkyEQSeDs6kR68RgIzmdOc3bZUFt2wG89ibEajFvCRlYoQv6sbouKUCLFhFvuxdkDeyBRqmAYMSYufffGJx9/hIcffBDLHnsc99x7L4Buk5kLBHIBAXWFgLknE5dKpViydCm06tDO6okEjECIzNETYt6uWJGAoZNnBS8YQxQVFUMsFsPhtnyVytyOGKCQCwAi7HG+dHe+0Wg0uPnmuKT+ByhF7dED6DA1IyWv2JWOM9aoLStFe3MjBo28GFKVNi7v6EFBYSGOHD/hEUHmFU0mZgC43KV6hPmZqircevPNWLfWc+scK9SXl+HUjk2oP3YIh9d8gk63NXascGrnRpR+/i7KN6/HzrdfAeXjf756R3s73n/vPXy/vtvHsqPDY2PVwQDUlYOoJ/rp2LFjqK6uRl1dXVw6ZWvpJZdzOHBi41qPBF/RoqXuHE5s/M513dli6pcdZWVlJR787/vx5orlALrJd0ObABSuO9bzZM+ZOxcjR46MOpGtPyTnFaG27IBre97WWIez+3cic0zkzo494Bx2HPj8PfBuOQf1Q/IgVgQMvo0JRo4ahbvvuQdTp3Un1fEa2W0MCOM6N7HTagWlFGfOnEFySoqvQPiYQJqgxuDx0zzunTv4M1pqA8b/uEADOPgfWf8F2pt7o9qEEhmKF14XUT/DBcuy+POTT2H6jBngeR7tHiObtjEEqO65dNgdOHHiBO649VY8+lDIiRgjQkp+MfRDepVelFKc2Lwezq6gbs5+UX/8UJ8dafGCa8La+keLH3/4AVcuWoQ3VyyHw+F+BCVTzVCCE+7eI1VVlcgvyEdGVlbcO5YzeSbEit5EBl3tbTi5tY9Hf0iwtbXg0DefeNzLvGgCUuOU3t8frFYrtm3bih3bd3g+ILScAUi5u3baYXfg5Vdexb333Rf3jglEEgybPtdj12qsPInmqooAtXzj4JcfwN7ZKyMVumQUXLooQI34YOq0adi2Y2ef7Gig5CQDni939704sH8/dmzf5nLyjjdUqYOQXuxxrgDOlu4Kqw2e42CsdPNEYgUYdeVNYafgjwVUKhWG5eXhdIVXSCSl5SRNqdR1sUxjz6kcSqUCbW3tePHll32cSBQfUJ7HL998hLbGXosHhX9P/ewUHdgAXlcFsxf1mYD7E0UF+WhqaoKbdxkVOZx6pratzUgIXNGk7R0duHzRIiTFwenGHwjDYNiMeWDdlpqBDG+BIj30g4che1zQ5JFxhU6nB897dLKspq2tuXt4MIzLkY3yFKPHjIFer0d/wtdy0B/8mUBFMjlGLr4x7k6XwfD7x5bBI/6UYjPQ48pAySb3/r276h1YrXE78NMvUvKKQzIc+BvZIxZe3y+bl2D48guvLMSEbAHOk80I7VsIIS4Bc7L8pCuOsL8xdOosj+VgqMgeOwXJwwY+kybHcfhuzRqPWwKHYwtwPjSvoaG9UafRbAc4VybbilMVGD26f3TB7hCKpRh1xRI0HC+DJEHl0+hbkDcMQoEAlFK01lWDsAxyJs7s9776wo7t22F3S+9EQTfVtrUZAfc4SELeA8GUHlGzdfPmASEb6N5iG0b697hKysl32USTcwv9lhsIfPbppx7XhOAD1989f6jVajVL+XqeQgwAUqkEH3/62cCml6MUpnOVMJ4+gdaGOtg72kFYFvm5OUjNLUB60ei4uguHi/b2dowYXui+R7FxIMkmk6kVcPPPttlsNoVcOornaT7Q7ZiTkJCAwsKBGTlWkxFHNnyF6l/2oaO5Cc4uGyjPg+eckBEeLTVncHb/LrQ3N0I3eCjYEHxM4o03ly/Hhg3fu9/6stnUG6LnuTPg8ZKnwfcTD/nTX7DUnsXBrz/02OT4BkVtWSm2r3wBnS3mfumbP9i7urD8jdc9b1K87H7pQXaTxbKVMHCpzcwmM370yqsRb1gtJhzd8DU4D42ZNzzXfh3NTdj70UpwjoHLO/jRhx96+PwR4GiT2exxMmqfPS8B81f3NfcH778X85QXgVCx7UdwEfyaWhtqcGrHT3HoUXBYrVa8+MLzHvcoxSPe5fqQbTSbv2MYxuUP1ljfgI8++MC7WFzQUnsOLXWRe6Ce3rUZzgFI9PjCc895OMZTQsqbzOY+vm++tDmUIcxd7qN79Scfo7q62kfR2MIYZWyM096Fpor4upt5o7LyNF5//TWPe4TifvjIF+VTddZoMv1ACPNtz7XD4cRrr/wz7mnegk+IwWGpCZiALKaglOL3jzzitdumnzWZTD5TGPnVU1KGuQcMXK3s/Xkvvvryyxh2tS9iYQG3tbfGoCeh4Y3XX/cMRiWwsXxfWd0Dv2SbTKZzLMP81V3X+eaK5Th5stxflajBCqI+Br7f1tsHDhzAX5960vMmj6frLZYqf3UCxj0bTZa/MQxxLQUddgeefvKpuGkExYrQ8pkEkmZSdXw9n4Du8MQ777jdcw/CkG1NZvPfA9ULFmTupIS9GgxxedXU1tTgz3/8Y1xyaasNGVG34W6xjwccDgfuuO1WnKmqcr9tdnJ0CYCAbldBI/pNJlM1S5glIL2z64EDB/DMM/9wN/vEBElD8sBEkVVNmZQKdWr8XIQppXjg/vv7JA2gDL3FbDYHdXoJSUhabbaTSplMwoO6TMZVlZWwdVoxekzsNIOsSAze4UBrve9gzh6o5TKfNsiRl98AeWJ0x4gHwp/++Aeseucdj3sE5KmmZvMbodQPeUay2mwb5VJxNqVwReYcPXoU7W1tuGj06JiZolSpg9BSV4OuAKsKX2QPmXgJsmLgvuYLlFI89eRf8Nqrr3rdx3tNZvP9obYT1vTfaetaI5dJxlIKV4qZ48eOoa62FmPHjQs7P54vEEKQmJ2DDmOjRwSZOzzJJsiZNBN5l8yPi+3Rbrfj3nvuxqq33/Z+tN5oNl8HrzxQgRAuO7xGm/gFzzkuoRQuRXLl6dM4fvw4JkycGJNAJ4YVQJ+TB5FMgXZjQx+lVA/ZqhQDRi1egoyLxseF6La2Ntxy802+XKe3CSXShW1tbWHpBiLqYQ4gNqvVn/KUX+C+KdXpdfifP/05pjE4lPJora9Ba30t7J0dIISgqHgE0vOGQ5kUfuLDUHHo0C/4zW23903QTrBGKJZeW1tbG/b6N5rhwCaqE1byFLe4Ey4QCHDLrbfimuuui5tLQWFhISSS+B3Q/O6qVXj8sWV9jN6U4n2j2XwbgED6X7+IRsjSTlvXN0qZTEJBJ+L8F8fzPEpLS1FWdhiFw4dDqYy9a0FSUlJcDiiqrDyN3911J5a/8brrUM3zoAD5q9Fsvg9B1tKBEPWMZrXZfpRJpQdBcCkoXBE79XX1WPPNN2htacXwoqKYBq3GmmybzYYXnnsOv73zTlSc7KN5bKEUVxvN5uXRvif65QOATpvthFQm/5AhdDxF78TJ8xTHjx3D+nXrIFcqkZWZGZMVS6zItnd14YMPPsBvbr8N69et8x7NALCNA7mk2Wze56t+uIi1UBXotOrHKE8f43kq9X6o0+lw5dVXY978+ZBK+zwOGdHK7I6ODry7ahVef/WVPukrAACEdgHkyaZm8z8AxCw9T1xmsBS1OstJyMs8zy3wpTSSSCSYPmM6Lpk1C0VFxWHnASwoKAj7y+J5Hrt27cRnq1fj22++QWurv00T+VLA8w/UBTmZIxLE1QNRr9HM5UGfoTwt9Gd4UKvVmD5jOkouGo2i4mLI5XKf5dwRKtmtra3YtXMntm/bhm+/+Rq1tbV+y1KQIwR42J/iPxboD3dPotNo5lPwT4BiLE+p3wNGCEOQmZGJUSUlGJSRAYPBgHSDAXq93mMZ6U02pRQ1NTU4feoUTp86hfLycuzbuxeHDx/yJYe9sZNS/N1oNq9BkKNPokW/+tbqdOpphMe9lKfzeEBMAxDvDoFAALFEBJlMDrlcDo1agy67HR3WDnS0taG9owPOgK4PXqC0CwRrKI9/Gi2WLZF/ovAwII7MGo1GJWTo5ZSSayilcyilLKU0oFHAHSzLRLJh4gHsAuinQgf3QY+zY39iYL3GASQnK5J4h2gaJXQaoZhGKc2nAEDPRzu6/u+tEwbZx0CwCZRsZoT2LQ0N7QN67N+Ak+2N5GRFEscJCsAzuQz4XErIMFCSCiABoHIKKAiQAKAVQDtAOgC0gtBaSnECICfB8OUCm/NIfXt7U+C39S/+P/1lKfOpc4hxAAAAAElFTkSuQmCC'
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
        }
      },
      defaultStyle: {
        alignment: 'justify'
      }
      
    };
      return documento;
    }
  }