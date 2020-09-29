const DOMAIN = "@rnd.com";

class DataUtils{

    static generateSignInId(){
        return Math.random().toString(36).substring(7) + DOMAIN;
    }
}
export default DataUtils;