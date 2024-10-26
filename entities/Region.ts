enum RegionTypeEnum {
    mountain = "mountain",
    forest = "forest",
    water = "water",
}

type Region = {
    type: RegionTypeEnum;
    counter: number;
};

export type { Region };
export { RegionTypeEnum };
