import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  Request,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadsService } from './uploads.service';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { ApiTags } from '@nestjs/swagger';
import { Request as ExpressRequest } from 'express'; // Importa el tipo de Express

const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const uniqueSuffix = uuidv4();
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

@ApiTags('Uploads')
@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post('files')
  @UseInterceptors(FilesInterceptor('files', 10, { storage }))
  async uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Request() request: ExpressRequest, // Recibe la solicitud
  ) {
    const uploadedFiles = this.uploadsService.handleFileUpload(files, request);
    return {
      message: 'Files uploaded successfully',
      files: uploadedFiles,
    };
  }
}
