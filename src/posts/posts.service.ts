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

  async findAll(skip?: number, take?: number) {
    const [result, count] = await this.prismaService.$transaction([
      this.prismaService.post.findMany({
        skip,
        take,
      }),
      this.prismaService.post.count(),
    ]);

    return { result, count };
  }

  findOne(id: number) {
    return this.prismaService.post.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdatePostDto) {
    return this.prismaService.post.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prismaService.post.delete({ where: { id } });
  }
}
