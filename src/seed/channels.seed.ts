import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { ChannelsEntity } from '../channels/channels.entity';

export default class CreateChannels implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<any> {
        await factory(ChannelsEntity)().makeMany(2);
    }

}




// export default class CreateChannels implements Seeder {
//     public async run(factory: Factory, connection: Connection): Promise<any> {
//         await connection
//             .createQueryBuilder()
//             .insert()
//             .into(ChannelsEntity)
//             .values([ {channel: 'channelSeed'} ])
//             .execute()
//     }
// }

