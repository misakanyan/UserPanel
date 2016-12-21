var panelConfig = [
    { name: "bg", image: "bg_jpg", x: 0, y: 0 },
];
var heroConfig = [
    { name: "hero_0", image: "hero_0_jpg", x: 50, y: 50 }
];
var equipmentConfig = [
    { name: WeaponConfig[0].name, image: WeaponConfig[0].image, x: 50, y: 600 }
];
var jewelConfig = [
    { name: JewelConfig[0].name, image: JewelConfig[0].image, x: 50, y: 800 }
];
var PlayerPanel = (function () {
    function PlayerPanel(stage, hero) {
        this.stage = new egret.DisplayObjectContainer();
        this.Hero = new Hero(0);
        this.Hero = hero;
        this.stage = stage;
        this.bg = new egret.Bitmap();
        this.hero = new egret.Bitmap();
        this.weapon = new egret.Bitmap();
        this.jewel = new egret.Bitmap();
        //this.player_desc = new egret.TextField();
        this.hero_desc = new egret.TextField();
        this.weapon_desc = new egret.TextField();
        this.jewel_desc = new egret.TextField();
        this.help = new egret.TextField();
        this.body = new egret.Shape();
        stage.addChild(this.bg);
        stage.addChild(this.hero);
        stage.addChild(this.weapon);
        //stage.addChild(this.jewel);
        //stage.addChild(this.player_desc);
        stage.addChild(this.hero_desc);
        //stage.addChild(this.weapon_desc);
        //stage.addChild(this.jewel_desc);
        stage.addChild(this.help);
        this.setPanel();
        this.setButton();
    }
    var d = __define,c=PlayerPanel,p=c.prototype;
    p.setPanel = function () {
        this.bg.texture = RES.getRes(panelConfig[0].image);
        this.bg.x = panelConfig[0].x;
        this.bg.y = panelConfig[0].x;
        this.hero.texture = RES.getRes(heroConfig[0].image);
        this.hero.x = heroConfig[0].x;
        this.hero.y = heroConfig[0].x;
        this.weapon.texture = RES.getRes(equipmentConfig[0].image);
        this.weapon.x = equipmentConfig[0].x;
        this.weapon.y = equipmentConfig[0].y;
        this.jewel.texture = RES.getRes(jewelConfig[0].image);
        this.jewel.x = jewelConfig[0].x;
        this.jewel.y = jewelConfig[0].y;
        this.hero_desc.text = "英雄：" + this.Hero.name
            + " \n等级：" + this.Hero.level
            + " \n最大生命值：" + this.Hero.maxHp
            + " \n攻击力：" + this.Hero.attack
            + " \n战斗力：" + this.Hero.fightPower;
        this.hero_desc.x = heroConfig[0].x + this.hero.width;
        this.hero_desc.y = heroConfig[0].y;
        this.weapon_desc.text = "武器：" + this.Hero.weapons[0].name
            + " \n稀有度：" + this.Hero.weapons[0].quality
            + " \n攻击力：" + this.Hero.weapons[0].attack
            + " \n战斗力：" + this.Hero.weapons[0].fightPower;
        this.weapon_desc.x = equipmentConfig[0].x + this.weapon.width;
        this.weapon_desc.y = equipmentConfig[0].y;
        this.jewel_desc.text = "宝石：" + this.Hero.weapons[0].jewels[0].name
            + " \n稀有度：" + this.Hero.weapons[0].jewels[0].quality
            + " \n攻击力：" + this.Hero.weapons[0].jewels[0].attack
            + " \n战斗力：" + this.Hero.weapons[0].jewels[0].fightPower;
        this.jewel_desc.x = jewelConfig[0].x + this.jewel.width;
        this.jewel_desc.y = jewelConfig[0].y;
        this.help.text = "点击查看武器和镶嵌的宝石信息";
        this.help.x = equipmentConfig[0].x;
        this.help.y = equipmentConfig[0].y - this.weapon.height;
    };
    p.setButton = function () {
        this.weapon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showWeaponPanel, this);
        this.weapon.touchEnabled = true;
    };
    p.showWeaponPanel = function () {
        this.body.graphics.beginFill(0x000000, 0.5);
        this.body.graphics.drawRect(0, 0, 200, 100);
        this.body.graphics.endFill();
        this.stage.addChild(this.jewel);
        this.stage.addChild(this.weapon_desc);
        this.stage.addChild(this.jewel_desc);
    };
    return PlayerPanel;
}());
egret.registerClass(PlayerPanel,'PlayerPanel');
//# sourceMappingURL=PlayerPanel.js.map