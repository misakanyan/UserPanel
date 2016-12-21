var WeaponConfig = [
    { id: "0", name: "灰烬使者", quality: 1, forge: 5, weight: 10, image: "weapon_0_jpg" },
    { id: "1", name: "weapon_1", quality: 2, forge: 10, weight: 12, image: "weapon_1_jpg" },
    { id: "2", name: "weapon_2", quality: 3, forge: 20, weight: 20, image: "weapon_2_jpg" },
    { id: "3", name: "weapon_3", quality: 4, forge: 50, weight: 30, image: "weapon_3_jpg" }
];
var WeaponProperty = (function (_super) {
    __extends(WeaponProperty, _super);
    function WeaponProperty(id, name, quality, forge, weight) {
        _super.call(this);
        this.quality = 5;
        this.forge = 0;
        this.weight = 0;
        this.configId = id;
        this.name = name;
        this.quality = quality;
        this.forge = forge;
        this.weight = weight;
    }
    var d = __define,c=WeaponProperty,p=c.prototype;
    return WeaponProperty;
}(Property));
egret.registerClass(WeaponProperty,'WeaponProperty');
var Weapon = (function () {
    function Weapon(id) {
        this.jewels = [];
        if (id < WeaponConfig.length) {
            this.property = new WeaponProperty(WeaponConfig[id].id, WeaponConfig[id].name, WeaponConfig[id].quality, WeaponConfig[id].forge, WeaponConfig[id].weight);
        }
        else {
            console.log("this weapon does not exist");
        }
    }
    var d = __define,c=Weapon,p=c.prototype;
    p.addJewel = function (j) {
        this.jewels.push(j);
    };
    d(p, "attack"
        ,function () {
            var result = 0;
            this.jewels.forEach(function (e) { return result += e.attack; });
            result += this.property.forge * 10 * this.property.quality - this.property.weight;
            return result;
        }
    );
    d(p, "name"
        ,function () {
            return this.property.name;
        }
    );
    d(p, "quality"
        ,function () {
            return this.property.quality;
        }
    );
    d(p, "fightPower"
        ,function () {
            var result = 0;
            this.jewels.forEach(function (e) { return result += e.fightPower; });
            result += this.attack * 5;
            return result;
        }
    );
    return Weapon;
}());
egret.registerClass(Weapon,'Weapon');
//# sourceMappingURL=Equipment.js.map