import {Controller, Get, Param, HttpException, Post, Body, Delete, Put} from '@nestjs/common';
import {ChannelsEntity} from "./channels.entity";

import { Crud } from '@nestjsx/crud';
import {ChannelsService} from "./channels.service";

import {CreateChannelDto} from "./dto/create-channel.dto";

@Crud({
    model: {
        type: ChannelsEntity
    },
    params: {
        _id: {
            field: 'id',
            type: 'uuid',
            primary: true
        }
    }

})


@Controller('channels')
export class ChannelsController {

    constructor(private readonly channelService: ChannelsService) {}

    @Get()
    async findAll(): Promise<ChannelsEntity[]> {
        return await this.channelService.findAll();
    }

    @Get('/:id')
    async findById(@Param() params): Promise<ChannelsEntity>{
        const channel = await this.channelService.findById(params.id);
        if (!channel) {
            throw new HttpException('Cannot find the requested channel', 404);
        }
        return channel;
    }

    @Post()
    async create(@Body('data') data: CreateChannelDto){
        //console.log(c);
        return await this.channelService.create(data);
    }

    @Delete()
    async delete(@Body('id') idChannel: string){
        return await this.channelService.delete(idChannel);
    }

    @Put()
    async update(@Body('id') idChannel: string, @Body('newChannelname') newChannelname: string): Promise<ChannelsEntity> {

        return await this.channelService.update(idChannel, newChannelname);

    }



}
