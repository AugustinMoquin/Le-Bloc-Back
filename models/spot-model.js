import * as SpotSchema from '../schema/spot-schema.js'

export async function getSpotDataByName(req) {
    const name = req.params['name'];
    const filter = {name: name}
    try {
        let spot = await SpotSchema.SpotModel.findOne(filter);
        if (spot) {
            return(spot);
        } else {
            throw("No such spot");
        }
    }
    catch (e) {
        throw(e);
    }
}

export async function getSpotsByRegion(req) {
    const region = req.params['region'];
    const filter = {region: region}
    try {
        let spot = await SpotSchema.SpotModel.find(filter);
        if (!spot) {
            throw("No such spot");
        }
        return(spot);
    }
    catch (e) {
        throw(e);
    }
}

export async function getAllSpot(req) {
    try {
        let spot = await SpotSchema.SpotModel.find();
        if (!spot) {
            throw("No such spot");
        }
        return(spot);
    }
    catch (e) {
        throw(e);
    }
}