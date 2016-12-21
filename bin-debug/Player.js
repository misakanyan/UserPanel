var Player = (function () {
    function Player() {
        this.cash = 0;
        this.gold = 0;
        this.exp = 0;
        this.level = 10;
        this.heroes = [];
    }
    var d = __define,c=Player,p=c.prototype;
    p.addHero = function (hero) {
        this.heroes.push(hero);
    };
    d(p, "heroesInTeam"
        ,function () {
            return this.heroes.filter(function (hero) { return hero.isInTeam; });
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.heroesInTeam.map(function (hero) { return result += hero.fightPower; });
        return result;
    };
    return Player;
}());
egret.registerClass(Player,'Player');
/*var Cache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {
    const getter = desc.get;
    desc.get = function () {
        return getter.apply(this);
    }
    return desc;
}*/
//# sourceMappingURL=Player.js.map