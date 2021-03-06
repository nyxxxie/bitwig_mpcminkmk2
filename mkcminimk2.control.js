loadAPI(1);

/* Make bitwig aware of the controller script and how to find the hardware */
host.defineController(
    'nyx-industries',
    'MPKmini mkII',
    '1.0',
    'c790467a-ce30-42d9-8deb-8070a6039c4b');
// "F0 7E 00 06 02 47 72 00 19 00 01 00 03 00 7F 7F 7F 7F 00 4B 01 00 09 00 09 00 02 03 09 00 08 09 07 02 F7";

host.defineSysexIdentityReply('F0 7E 00 06 02 47 7C 00 19 00 ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? F7');
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(['MPK mini mkII'], ['MPK mini mkII']);

function init() {
    println('init')
    host.getMidiInPort(0).setMidiCallback(onMidi);
}

function exit() {
    println('exit')
    print
}

function onMidi(status, data1, data2) {
    println('midi recieved')
}

function onSysex(data) {
    println('sysex recieved')
}
