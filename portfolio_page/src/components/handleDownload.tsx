import { saveAs } from 'file-saver';

const handleDownload = () => {
    // Caminho do arquivo no seu projeto
    const filePath = '/assets/cs-thyagoMonnerat.pdf';
    saveAs(filePath, 'meu_portfolio.pdf');
};

export default handleDownload;