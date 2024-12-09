import { Injectable } from '@nestjs/common';
import { Request } from 'express'; // Importa el tipo de Express

@Injectable()
export class UploadsService {
  handleFileUpload(files: Express.Multer.File[], request: Request) {
    const uploadedFiles = files.map((file) => file.filename);
    // Construir la URL base usando el protocolo y host de la solicitud
    const baseUrl = request.protocol + '://' + request.get('host');
    // Retornar la URL completa de los archivos
    return uploadedFiles.map((filename) => `${baseUrl}/uploads/${filename}`);
  }
}
