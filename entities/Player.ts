import { ExpeditionTypeEnum, type Expedition } from "./Expedition";
import { RegionTypeEnum } from "./Region";

type Player = {
    id: string;
    expeditions: Map<ExpeditionTypeEnum, Expedition>;
};

enum PlayerEnum {
    player1 = "player1",
    player2 = "player2",
}

function createNewPlayer(playerId: string) {
    const player: Player = {
        id: playerId,
        expeditions: new Map(
            Object.values(ExpeditionTypeEnum).map((expeditionType) => [
                expeditionType,
                {
                    type: expeditionType,
                    regions: new Map(
                        Object.values(RegionTypeEnum).map((regionType) => [
                            regionType,
                            { type: regionType, counter: 0 },
                        ])
                    ),
                },
            ])
        ),
    };
    return player;
}

function incrementPlayerExpeditionRegionValue(
    player: Player,
    expeditionType: ExpeditionTypeEnum,
    regionType: RegionTypeEnum,
    value: number
) {
    const region = player.expeditions
        .get(expeditionType)!
        .regions!.get(regionType)!;
    region.counter = Math.max(region.counter + value, 0);
}

function resetAllPlayersExpeditions(player: Player) {
    player.expeditions.forEach((expedition) => {
        expedition.regions.forEach((region) => {
            region.counter = 0;
        });
    });
}

export type { Player };
export {
    PlayerEnum,
    createNewPlayer,
    resetAllPlayersExpeditions,
    incrementPlayerExpeditionRegionValue,
};
