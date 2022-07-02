function indexChar(Word) {
    if (Word == "a") {
        return 0;
    } else if (Word == "b") {
        return 1;
    } else if (Word == "c") {
        return 2;
    } else if (Word == "d") {
        return 3;
    } else if (Word == "e") {
        return 4;
    } else if (Word == "f") {
        return 5;
    } else if (Word == "g") {
        return 6;
    } else if (Word == "h") {
        return 7;
    } else if (Word == "i") {
        return 8;
    } else if (Word == "j") {
        return 9;
    } else if (Word == "k") {
        return 10;
    } else if (Word == "l") {
        return 11;
    } else if (Word == "m") {
        return 12;
    } else if (Word == "n") {
        return 13;
    } else if (Word == "o") {
        return 14;
    } else if (Word == "p") {
        return 15;
    } else if (Word == "q") {
        return 16;
    } else if (Word == "r") {
        return 17;
    } else if (Word == "s") {
        return 18;
    } else if (Word == "t") {
        return 19;
    } else if (Word == "u") {
        return 20;
    } else if (Word == "v") {
        return 21;
    } else if (Word == "w") {
        return 22;
    } else if (Word == "x") {
        return 23;
    } else if (Word == "y") {
        return 24;
    } else if (Word == "z") {
        return 25;
    }
}

function indexNumber(Word) {
    if (Word == 0) {
        return "a";
    } else if (Word == 1) {
        return "b";
    } else if (Word == 2) {
        return "c";
    } else if (Word == 3) {
        return "d";
    } else if (Word == 4) {
        return "e";
    } else if (Word == 5) {
        return "f";
    } else if (Word == 6) {
        return "g";
    } else if (Word == 7) {
        return "h";
    } else if (Word == 8) {
        return "i";
    } else if (Word == 9) {
        return "j";
    } else if (Word == 10) {
        return "k";
    } else if (Word == 11) {
        return "l";
    } else if (Word == 12) {
        return "m";
    } else if (Word == 13) {
        return "n";
    } else if (Word == 14) {
        return "o";
    } else if (Word == 15) {
        return "p";
    } else if (Word == 16) {
        return "q";
    } else if (Word == 17) {
        return "r";
    } else if (Word == 18) {
        return "s";
    } else if (Word == 19) {
        return "t";
    } else if (Word == 20) {
        return "u";
    } else if (Word == 21) {
        return "v";
    } else if (Word == 22) {
        return "w";
    } else if (Word == 23) {
        return "x";
    } else if (Word == 24) {
        return "y";
    } else if (Word == 25) {
        return "z";
    }
}

function imitationCrypto(Imitation_A, Imitation_B, Key) {
    var _subKey = Key.substring(2);
    var _resKey = [];
    for (var i = 0; i < _subKey.length; i++) {
        if (_subKey[i] >= "0" && _subKey[i] <= "9") {
            _resKey.push(_subKey[i]); //数字不处理了，只处理字母
        } else if (_subKey[i] >= "a" && _subKey[i] <= "z") {
            var _charNumber = (indexChar(_subKey[i]) * Imitation_A + Imitation_B) % 26;
            _resKey.push(indexNumber(_charNumber));
        }
    }
    console.log("0x" + _resKey.join("") + "\t" + Imitation_A + "\t" + Imitation_B);
}

var PrivacyKey = "0x112233abcabcabc00998877qweqweqwe112233abcabcabc00998877qweqweqwe"; //示例密钥
const Imitation_A = Math.round(Math.random() * 25); //往后移几位，0~25
const Imitation_B = Math.round(Math.random() * 25);  //字母移位，0~25
imitationCrypto(Imitation_A, Imitation_B, PrivacyKey);