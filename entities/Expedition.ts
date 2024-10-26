import type { Region, RegionTypeEnum } from "./Region";

enum ExpeditionTypeEnum {
    companion = "companion",
    hero = "hero",
}

type Expedition = {
    type: ExpeditionTypeEnum;
    regions: Map<RegionTypeEnum, Region>;
};

export type { Expedition };
export { ExpeditionTypeEnum };
