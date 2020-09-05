export const APP_ACTION_TYPES = Object.freeze({
    STORE_CABINET_BIO_INFO: "STORE_CABINET_BIO_INFO",
});

export type BioInfoType =
{
    name: string,
    party: string,
    handle: string
}

export type CabinetBioInfoType = BioInfoType &
{
    constituency: string,
    cabinetRole: string
}

export const storeCabinetBioInfo = (info: Array<CabinetBioInfoType>) =>
{
    return {type: APP_ACTION_TYPES.STORE_CABINET_BIO_INFO, info: info}
};
