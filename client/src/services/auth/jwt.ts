import jwt_decode from "jwt-decode";

export type DecodedJwtObject = {
    username: string;
    iat: string;
    exp: number;
}

class Jwt {

    private decodedObject: DecodedJwtObject | undefined;

    public decode(token: string): DecodedJwtObject {
        this.decodedObject = jwt_decode(token) as DecodedJwtObject;
        return this.decodedObject;
    }

    public isExpire(): boolean {
        const currentTime = Date.now() / 1000;
        if (this.decodedObject && this.decodedObject.exp < currentTime) return false;
        return true;
    }

}

export default Jwt;