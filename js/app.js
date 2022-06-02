class Device {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
        this.pwr = "off";
    }

    description() {
        console.log(`power: ${this.pwr}\nname: ${this.name}\nbrand: ${this.brand}`);
    }

    power() {
        if (this.pwr === "off") {
            this.pwr = "on";
            console.log(`${this.name} включен`);
            return;
        }
        this.pwr = "off";
        console.log(`${this.name} выключен`);
    }
}

class Lamp extends Device {
    constructor(name, brand, bulbType, baseType) {
        super();
        this.name = name;
        this.brand = brand;
        this.bulbType = bulbType;
        this.baseType = baseType;
    }

    description() {
        console.log(`power: ${this.pwr}\nname: ${this.name}\nbrand: ${this.brand}\nbulb type: ${this.bulbType}\nbase type: ${this.baseType}`);
    }

    replacement(bulbType, baseType) {
        this.bulbType = bulbType;
        this.baseType = baseType;
        console.log(`В ${this.name} заменены лампочка(${this.bulbType}) и патрон(${this.baseType})`);
    }
}

class Computer extends Device {
    constructor(name, brand, ssd, hdd, motherboard, cpu, gpu, ram) {
        super();
        this.name = name;
        this.brand = brand;
        this.ssd = ssd;
        this.hdd = hdd;
        this.motherboard = motherboard;
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.monitor = "Unplugged";
        this.screen = "off";
    }

    description() {
        console.log(`power: ${this.pwr}\nname: ${this.name}\nbrand: ${this.brand}\nssd: ${this.ssd}\nhdd: ${this.hdd}\nmotherboard: ${this.motherboard}\ncpu: ${this.cpu}\ngpu: ${this.gpu}\nram: ${this.ram}`);
    }

    power() {
        if (this.pwr === "off") {
            this.pwr = "on";
            console.log(`${this.name} включен`);
            return;
        }
        this.pwr = "off";
        this.screen = "off";
        console.log(`${this.name} выключен`);
    }

    monitorPlug() {
        if (this.monitor === "Unplugged") {
            this.monitor = "Plugged";
            console.log("Монитор подключен");
            return;
        }
        this.monitor = "Unplugged";
        console.log("Монитор отключен");
    }

    screenPower() {
        if (this.screen === 'off') {
            if (this.monitor === "Unplugged" || this.pwr === "off") {
                console.log(this.pwr === "off" ? "Сперва включите компьютер" : "Сперва подключите монитор");
                return;
            }
            this.screen = "on";
            console.log("Экран включен");
            return;
        }
        this.screen = "off";
        console.log("Экран выключен");
    }
}

const myLamp = new Lamp("Ceiling Lamp", "Xiaomi", "Spiral", "E27");
const myComputer = new Computer("Dexp G160", "Dexp", "Seagate IronWolf 125", "Toshiba NAS N300", "Z690 AORUS XTREME WATERFORCE", "AMD Ryzen Threadripper PRO 3955WX BOX", "MSI GeForce RTX 3090 Ti SUPRIM X", "Kingston Server Premier 64Gb")

// myLamp.power();
// myLamp.description();
// myLamp.replacement("Candle", "E17");
// myLamp.power();
// myLamp.description();

myComputer.power();
myComputer.description();
myComputer.screenPower();
myComputer.monitorPlug();
myComputer.screenPower();
myComputer.power();
myComputer.screenPower();
myComputer.description();
