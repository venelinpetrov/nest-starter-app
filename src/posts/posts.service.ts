import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}

  create(data: CreatePostDto) {
    return this.prismaService.post.create({ data });
  }

  findAll(skip?: number, take?: number) {
    return this.prismaService.post.findMany({
      skip,
      take,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
