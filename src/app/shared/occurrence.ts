export class Occurrence {
    private _latitude: number;
    private _longitude: number;
    private _info: string;

    public constructor(latitude: number, longitude: number, info: string) {
        this._latitude = latitude;
        this._longitude = longitude;
        this._info = info;
    }

    get latitude():number{
        return this._latitude;
    }

    get longitude():number{
        return this._longitude;
    }

    get info():string{
        return this._info;
    }

}