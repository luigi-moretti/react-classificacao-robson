import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { data } from './data';
import { Impressao } from './impressao';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



function GerarPdf(){

    const visualizarImpressao = async () => {
        console.log('report', data);
        const classeImpressao = new Impressao(data);
        const documento = await classeImpressao.PreparaDocumento();
        pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
      }

    return(
        <Box>
            <Typography variant="h3" component="h1" style={{marginTop:"25px"}}>PDF</Typography>
            <Button onClick={visualizarImpressao} >Visualizar documento </Button>
        </Box>
    );
}
export default GerarPdf;