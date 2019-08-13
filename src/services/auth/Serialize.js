/**
 * todo Создать общий интерфес для хранения данных с возможностью выбора провайдера для сериализации данных
 *
 *  - Identity
 *  - SessionStorage
 */
export class Serialize {
    constructor(serializeInterface) {
        this.serializeInterface = serializeInterface;
    }

    getSerializer() {
        return this.serializeInterface;
    }
}

export class JSONSerialize {
    static unpack(data) {
        return JSON.parse(data);
    }

    static pack(data) {
        return JSON.stringify(data);
    }
}