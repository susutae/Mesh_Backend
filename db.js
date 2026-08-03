import { neon } from '@neondatabase/serverless'

/* eslint-disable no-loss-of-precision -- Keep live spectrum JSON values unchanged. */
const DEFAULT_RESOURCES = {
  "status": {
    "ip": "192.168.10.31",
    "date": "",
    "temp": 44.9098815917,
    "nwMask": "255.255.255.0",
    "selfId": 31,
    "devices": [
      {
        "type": "eth1",
        "status": 0,
        "version": ""
      },
      {
        "type": "eth0",
        "status": 0,
        "version": ""
      }
    ],
    "gateway": "",
    "silenced": false,
    "dnsServer": "0.0.0.0",
    "nodeInfos": [
      {
        "id": 31,
        "ip": "192.168.10.31",
        "altitude": 0,
        "latitude": 1.39061,
        "longitude": 103.84906,
        "resourceRatio": 0.3293
      },
      {
        "id": 32,
        "ip": "192.168.10.32",
        "altitude": 0,
        "latitude": 1.39086,
        "longitude": 103.848297,
        "resourceRatio": 0.3156
      },
      {
        "id": 33,
        "ip": "192.168.10.33",
        "altitude": 0,
        "latitude": 1.39008,
        "longitude": 103.847717,
        "resourceRatio": 0.3293
      }
    ],
    "nodesRssi": [
      {
        "id": 32,
        "ant1Rssi": -57.5,
        "ant2Rssi": -60.5
      },
      {
        "id": 33,
        "ant1Rssi": -56,
        "ant2Rssi": -60.5
      }
    ],
    "noiseRssi": [
      {
        "freq": 1300000000,
        "ant1Rssi": -97,
        "ant2Rssi": -97.5
      },
      {
        "freq": 1305000000,
        "ant1Rssi": -98.5,
        "ant2Rssi": -98.5
      },
      {
        "freq": 1310000000,
        "ant1Rssi": -95,
        "ant2Rssi": -95.5
      },
      {
        "freq": 1315000000,
        "ant1Rssi": -96.5,
        "ant2Rssi": -96
      },
      {
        "freq": 1320000000,
        "ant1Rssi": -98,
        "ant2Rssi": -96.5
      },
      {
        "freq": 1325000000,
        "ant1Rssi": -98,
        "ant2Rssi": -96.5
      },
      {
        "freq": 1330000000,
        "ant1Rssi": -98.5,
        "ant2Rssi": -97
      },
      {
        "freq": 1335000000,
        "ant1Rssi": -98.5,
        "ant2Rssi": -97
      },
      {
        "freq": 1340000000,
        "ant1Rssi": -98,
        "ant2Rssi": -97
      },
      {
        "freq": 1345000000,
        "ant1Rssi": -99,
        "ant2Rssi": -97.5
      },
      {
        "freq": 1350000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -99.5
      },
      {
        "freq": 1355000000,
        "ant1Rssi": -98.5,
        "ant2Rssi": -97
      },
      {
        "freq": 1360000000,
        "ant1Rssi": -98,
        "ant2Rssi": -97
      },
      {
        "freq": 1365000000,
        "ant1Rssi": -98,
        "ant2Rssi": -97.5
      },
      {
        "freq": 1370000000,
        "ant1Rssi": -97.5,
        "ant2Rssi": -97.5
      },
      {
        "freq": 1375000000,
        "ant1Rssi": -98,
        "ant2Rssi": -98
      },
      {
        "freq": 1380000000,
        "ant1Rssi": -98.5,
        "ant2Rssi": -97.5
      },
      {
        "freq": 1385000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -98
      },
      {
        "freq": 1390000000,
        "ant1Rssi": -99,
        "ant2Rssi": -97
      },
      {
        "freq": 1395000000,
        "ant1Rssi": -99,
        "ant2Rssi": -97.5
      },
      {
        "freq": 1400000000,
        "ant1Rssi": -98,
        "ant2Rssi": -96.5
      },
      {
        "freq": 1405000000,
        "ant1Rssi": -98,
        "ant2Rssi": -97.5
      },
      {
        "freq": 1410000000,
        "ant1Rssi": -98.5,
        "ant2Rssi": -98
      },
      {
        "freq": 1415000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -99
      },
      {
        "freq": 1420000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -99
      },
      {
        "freq": 1425000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -98.5
      },
      {
        "freq": 1430000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -98
      },
      {
        "freq": 1435000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -99
      },
      {
        "freq": 1440000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -99
      },
      {
        "freq": 1445000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -99.5
      },
      {
        "freq": 1450000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -99.5
      },
      {
        "freq": 1455000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -99
      },
      {
        "freq": 1460000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -99.5
      },
      {
        "freq": 1465000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -99.5
      },
      {
        "freq": 1470000000,
        "ant1Rssi": -99.5,
        "ant2Rssi": -99.5
      },
      {
        "freq": 1475000000,
        "ant1Rssi": -95,
        "ant2Rssi": -96.5
      },
      {
        "freq": 1480000000,
        "ant1Rssi": -92,
        "ant2Rssi": -93.5
      },
      {
        "freq": 1485000000,
        "ant1Rssi": -90.5,
        "ant2Rssi": -92
      },
      {
        "freq": 1490000000,
        "ant1Rssi": -91.5,
        "ant2Rssi": -94
      },
      {
        "freq": 1495000000,
        "ant1Rssi": -95.5,
        "ant2Rssi": -97
      },
      {
        "freq": 1500000000,
        "ant1Rssi": -100,
        "ant2Rssi": -99
      }
    ],
    "nodeNumber": 3,
    "linkQuality": [
      [
        -10,
        32,
        32
      ],
      [
        33,
        -10,
        33
      ],
      [
        31,
        32,
        -10
      ]
    ],
    "queryRoutes": [],
    "batteryLevel": -1,
    "configUpdated": false,
    "operatingFreq": 25,
    "speakingNodes": [
      255
    ],
    "nodesRssiUnicast": [
      {
        "id": 32,
        "ant1Rssi": -60.5,
        "ant2Rssi": -64.5
      },
      {
        "id": 33,
        "ant1Rssi": -60.5,
        "ant2Rssi": -64
      }
    ],
    "transmissionDelay": [
      {
        "id": 32,
        "delay": 0
      },
      {
        "id": 33,
        "delay": 0
      }
    ],
    "operatingCtrlFreqMask": "0x0",
    "heterogeneousLinkNodes": []
  },
  "statusadvanced": {
    "bbn": 31,
    "hhn": 33,
    "rxs": {
      "33": 18480
    },
    "txs": {
      "32": 9560,
      "33": 7476
    },
    "rxStat": [
      {
        "id": 32,
        "sn": 35,
        "foAvg": -13.1982,
        "foMax": 9.68575,
        "foMin": -35.0177,
        "toAvg": 51,
        "toMax": 97,
        "toMin": 17,
        "subband0Sn0": 26,
        "subband0Sn1": 0,
        "subband0Sn2": 0,
        "subband1Sn0": 9,
        "subband1Sn1": 0,
        "subband1Sn2": 0,
        "subband0Snr0Avg": 33.4445,
        "subband0Snr0Max": 34.1247,
        "subband0Snr0Min": 30.0906,
        "subband0Snr1Avg": -11.0297,
        "subband0Snr1Max": -11.0297,
        "subband0Snr1Min": -11.0297,
        "subband0Snr2Avg": -11.0297,
        "subband0Snr2Max": -11.0297,
        "subband0Snr2Min": -11.0297,
        "subband1Snr0Avg": 32.9436,
        "subband1Snr0Max": 34.1247,
        "subband1Snr0Min": 31.4779,
        "subband1Snr1Avg": -11.0297,
        "subband1Snr1Max": -11.0297,
        "subband1Snr1Min": -11.0297,
        "subband1Snr2Avg": -11.0297,
        "subband1Snr2Max": -11.0297,
        "subband1Snr2Min": -11.0297
      },
      {
        "id": 33,
        "sn": 43,
        "foAvg": -134.578,
        "foMax": -110.269,
        "foMin": -163.168,
        "toAvg": 63,
        "toMax": 113,
        "toMin": 17,
        "subband0Sn0": 32,
        "subband0Sn1": 0,
        "subband0Sn2": 0,
        "subband1Sn0": 11,
        "subband1Sn1": 0,
        "subband1Sn2": 0,
        "subband0Snr0Avg": 33.4467,
        "subband0Snr0Max": 34.1247,
        "subband0Snr0Min": 31.5668,
        "subband0Snr1Avg": -11.0297,
        "subband0Snr1Max": -11.0297,
        "subband0Snr1Min": -11.0297,
        "subband0Snr2Avg": -11.0297,
        "subband0Snr2Max": -11.0297,
        "subband0Snr2Min": -11.0297,
        "subband1Snr0Avg": 33.1696,
        "subband1Snr0Max": 34.1247,
        "subband1Snr0Min": 30.6991,
        "subband1Snr1Avg": -11.0297,
        "subband1Snr1Max": -11.0297,
        "subband1Snr1Min": -11.0297,
        "subband1Snr2Avg": -11.0297,
        "subband1Snr2Max": -11.0297,
        "subband1Snr2Min": -11.0297
      }
    ],
    "mpVersion": "V2__20250520_1057",
    "calibrated": 1,
    "ethRxBytes": 7308,
    "freqOffset": [
      {
        "id": 32,
        "offset": -19
      },
      {
        "id": 33,
        "offset": -127
      }
    ],
    "nodeStatus": 5,
    "phyRxBytes": 34580,
    "phyTxBytes": 17036,
    "phyVersion": "r50_v8",
    "audioRxLost": 0,
    "netOverflow": 0,
    "addressTable": [
      {
        "62248470": 31
      },
      {
        "62429833": 32
      },
      {
        "62455799": 33
      },
      {
        "963355351035": 33
      },
      {
        "112178025264475": 31
      }
    ],
    "ethRxPackets": 28,
    "aaCrcErrCount": 0,
    "aaCrcErrRatio": "0%",
    "arqRetransmit": 0,
    "unicastRxLost": 0,
    "aaCaptureCount": 86,
    "freqSyncAdjust": -78,
    "aaFreqOffsetAvg": -81.9824,
    "aaFreqOffsetMax": 9.68575,
    "aaFreqOffsetMin": -157.207,
    "aaSlotOffsetAvg": 59,
    "aaSlotOffsetMax": 113,
    "aaSlotOffsetMin": 17,
    "audioTxOverflow": 0,
    "operatingVersion": 0,
    "aaSubband0Snr0Avg": 33.4708,
    "aaSubband0Snr0Max": 34.1247,
    "aaSubband0Snr0Min": 30.0906,
    "aaSubband0Snr1Avg": -11.0297,
    "aaSubband0Snr1Max": -11.0297,
    "aaSubband0Snr1Min": -11.0297,
    "aaSubband0Snr2Avg": -11.0297,
    "aaSubband0Snr2Max": -11.0297,
    "aaSubband0Snr2Min": -11.0297,
    "aaSubband1Snr0Avg": 33.199,
    "aaSubband1Snr0Max": 34.1247,
    "aaSubband1Snr0Min": 31.4779,
    "aaSubband1Snr1Avg": -11.0297,
    "aaSubband1Snr1Max": -11.0297,
    "aaSubband1Snr1Min": -11.0297,
    "aaSubband1Snr2Avg": -11.0297,
    "aaSubband1Snr2Max": -11.0297,
    "aaSubband1Snr2Min": -11.0297,
    "unicastFwOverflow": 0,
    "unicastTxOverflow": 0,
    "audioResourceDelta": 0,
    "audioResourceTotal": 0,
    "audioUsedSlotNumber": 0,
    "freqSyncAdjustDelta": 0,
    "convergenceLinkNodes": [],
    "unicastResourceDelta": 0,
    "unicastResourceTotal": 0,
    "multicastBufferStatus": 1077980495,
    "unicastUsedSlotNumber": 0,
    "aaSubband0CrcErrCount0": 0,
    "aaSubband0CrcErrCount1": 0,
    "aaSubband0CrcErrCount2": 0,
    "aaSubband0CrcErrRatio0": "0%",
    "aaSubband0CrcErrRatio1": "nan%",
    "aaSubband0CrcErrRatio2": "nan%",
    "aaSubband1CrcErrCount0": 0,
    "aaSubband1CrcErrCount1": 0,
    "aaSubband1CrcErrCount2": 0,
    "aaSubband1CrcErrRatio0": "0%",
    "aaSubband1CrcErrRatio1": "nan%",
    "aaSubband1CrcErrRatio2": "nan%",
    "audioRequestSlotNumber": 0,
    "multicastResourceDelta": 0,
    "multicastResourceTotal": 0,
    "aaSubband0CaptureCount0": 64,
    "aaSubband0CaptureCount1": 0,
    "aaSubband0CaptureCount2": 0,
    "aaSubband1CaptureCount0": 22,
    "aaSubband1CaptureCount1": 0,
    "aaSubband1CaptureCount2": 0,
    "audioAllocateSlotNumber": 0,
    "multicastUsedSlotNumber": 0,
    "audioTotalUsedSlotNumber": 0,
    "unicastRequestSlotNumber": 0,
    "unicastAllocateSlotNumber": 0,
    "multicastRequestSlotNumber": 0,
    "unicastTotalUsedSlotNumber": 0,
    "audioTotalRequestSlotNumber": 0,
    "multicastAllocateSlotNumber": 0,
    "audioTotalAllocateSlotNumber": 0,
    "multicastTotalUsedSlotNumber": 0,
    "unicastTotalRequestSlotNumber": 0,
    "unicastTotalAllocateSlotNumber": 0,
    "multicastTotalRequestSlotNumber": 0,
    "multicastTotalAllocateSlotNumber": 0
  },
  "config": {
    "id": 31,
    "ip": "192.168.10.31",
    "gpo": 0,
    "mtu": 1500,
    "ocl": [],
    "name": "GCS",
    "span": 3,
    "minTF": 2,
    "nwMask": "255.255.255.0",
    "routes": [],
    "spanTx": 0,
    "gateway": "",
    "nfcMode": 0,
    "silence": false,
    "uartIp0": "",
    "uartIp1": "",
    "uartIp2": "",
    "usbMode": 0,
    "freqList": [
      1300000000,
      1305000000,
      1310000000,
      1315000000,
      1320000000,
      1325000000,
      1330000000,
      1335000000,
      1340000000,
      1345000000,
      1350000000,
      1355000000,
      1360000000,
      1365000000,
      1370000000,
      1375000000,
      1380000000,
      1385000000,
      1390000000,
      1395000000,
      1400000000,
      1405000000,
      1410000000,
      1415000000,
      1420000000,
      1425000000,
      1430000000,
      1435000000,
      1440000000,
      1445000000,
      1450000000,
      1455000000,
      1460000000,
      1465000000,
      1470000000,
      1475000000,
      1480000000,
      1485000000,
      1490000000,
      1495000000,
      1500000000
    ],
    "freqMode": "single",
    "intraIp0": "127.0.0.1",
    "intraIp1": "127.0.0.1",
    "meshName": "AGIL_MESH",
    "pwAtten1": 40,
    "pwAtten2": 40,
    "wifiMode": 0,
    "bootDelay": 100,
    "cellPitch": 0,
    "dataCache": 4000,
    "debugMode": 0,
    "dnsServer": "",
    "enableFEC": true,
    "freqListP": [],
    "intraMac0": "00:00:03:B5:D6:16",
    "intraMac1": "00:00:03:B5:D6:16",
    "mcFormats": {},
    "rangeMode": "10",
    "rfDisable": 0,
    "stdmaMode": 0,
    "uartMode0": 2,
    "uartMode1": 1,
    "uartMode2": 2,
    "uartPort0": 1024,
    "uartPort1": 1025,
    "uartPort2": 1026,
    "chargeMode": false,
    "disableLed": false,
    "freqListTx": [
      1360000000,
      1365000000,
      1370000000,
      1375000000,
      1380000000,
      1385000000,
      1390000000,
      1395000000,
      1400000000
    ],
    "presetRoll": 0,
    "uartPortB0": 0,
    "uartPortB1": 0,
    "uartPortB2": 0,
    "wifiApHide": false,
    "wifiApName": "MESHAP_D616",
    "wifiEnable": true,
    "cellAzimuth": 0,
    "disableDSCP": false,
    "freqDefault": 25,
    "maxMcformat": 12,
    "netIfConfig": [
      {
        "ip": "",
        "mode": 0,
        "name": "eth0",
        "ipMode": 0,
        "nwMask": "",
        "gateway": "",
        "hardwareChecksum": true
      },
      {
        "ip": "",
        "mode": 0,
        "name": "eth1",
        "ipMode": 0,
        "nwMask": "",
        "gateway": "",
        "hardwareChecksum": true
      },
      {
        "ip": "",
        "mode": 0,
        "name": "wlan0",
        "ipMode": 0,
        "nwMask": "",
        "gateway": ""
      }
    ],
    "networkMode": 0,
    "networkRole": 1,
    "presetPitch": 0,
    "pwAttenExt1": [],
    "pwAttenExt2": [],
    "uartDebugIP": "",
    "wakeupNodes": [],
    "wifiChannel": 1,
    "audioAppMode": 0,
    "audioMicGain": 50,
    "buildinGPSIp": "",
    "wifiPassword": "1234567890",
    "arpDefendList": [],
    "audioHeadGain": 50,
    "baudrateRs485": 2400,
    "cellSelection": [],
    "convergenceIp": "",
    "dhcpServerDns": "",
    "disableNodeId": [],
    "presetAzimuth": 0,
    "tempThreshold": -400,
    "uartBaudrate0": 9600,
    "uartBaudrate1": 115200,
    "uartBaudrate2": 115200,
    "uartDebugPort": 1024,
    "audioCodecType": 0,
    "audioMuteLevel": 55,
    "buildinGPSPort": 1234,
    "cellAutoConfig": true,
    "cellMoreStatus": false,
    "disableModules": [],
    "enableDualFreq": false,
    "enableDualSpan": false,
    "enableLowDelay": false,
    "enableRssiCtrl": false,
    "ipPrioritylist": [],
    "presetAltitude": 0,
    "presetLatitude": 1.390612,
    "talkPTTGroupId": 0,
    "videoCodecChnl": 0,
    "bluetoothEnable": false,
    "bootSystemIndex": 1,
    "dhcpAddressMask": "",
    "enableSnmpAgent": false,
    "presetLongitude": 103.849069,
    "queryRouteNodes": [],
    "compoundNodeMode": 0,
    "dataTransferMode": 0,
    "dhcpServerEnable": true,
    "dscpPrioritylist": [],
    "linkSnrThreshold": -10,
    "listenPTTGroupId": [],
    "transmissionMode": 0,
    "cellSelectionMode": 0,
    "convergenceIpMask": "",
    "convergenceServer": "",
    "dataEncryptionKey": "password",
    "dhcpForwardEnable": false,
    "dhcpServerGateway": "",
    "enableBeamForming": false,
    "wifiMacFIlterMode": 0,
    "wifiMacFilterList": [],
    "buildinGPSBaudrate": 9600,
    "convergenceGateway": "",
    "dataEncryptionMode": 2,
    "forbiddenFreqBands": [],
    "infrastructureMode": false,
    "multicastPreferred": false,
    "positionModuleMode": 0,
    "sendToSilenceNodes": false,
    "wifiDhcpAddressEnd": "192.168.10.100",
    "adaptiveFreqHopping": false,
    "dataCompressionMode": 0,
    "enableRangeAdaptive": false,
    "enableWebManagement": true,
    "servicePrioritylist": [],
    "compoundNodeWorkMode": 0,
    "enableCellController": false,
    "ipBroadcastBlacklist": [],
    "ipBroadcastWhitelist": [],
    "ipMulticastBlacklist": [],
    "ipMulticastWhitelist": [],
    "wifiDhcpAddressStart": "192.168.10.60",
    "bluetoothHistoryCount": 1,
    "compoundNodeMasterMac": "",
    "ipBroadcastFilterMode": 0,
    "ipMulticastFilterMode": 2,
    "enableBurstAggregation": false,
    "withExternalTimeSignal": false,
    "enableCrossNetworkAudio": false,
    "compoundNodeSlaveMacList": [],
    "heterogeneousRecoveryTime": 20,
    "enableHeterogeneousNetwork": true,
    "enableSPISequenceGenerator": false,
    "disablePttNotificationSound": false,
    "antiInterferenceAdvancedMode": 0,
    "ipMulticastIncomingBlacklist": [],
    "ipMulticastIncomingWhitelist": [],
    "smartFreqModeSwitchSpeedLevel": 6,
    "externalAudioAccessorySelection": 0
  },
  "configadvanced": {
    "mode": 0,
    "omUser": "",
    "logMode": 1,
    "number0": 0,
    "number1": 0,
    "number2": 0,
    "number3": 0,
    "number4": 0,
    "number5": 0,
    "number6": 0,
    "number7": 0,
    "number8": 0,
    "number9": 0,
    "txDelay": 0,
    "logLevel": 0,
    "number10": 0,
    "omPasswd": "",
    "omServer": "",
    "logEnable": false,
    "customData": "",
    "minPwAtten": 5,
    "logFilePath": "/run/media/mmcblk0p1/mesh",
    "logFileSize": 1000,
    "logServerIp": "0.0.0.0",
    "logServerPort": 9999,
    "txPowerTestTfci": 18,
    "logFileCheckCycle": 1,
    "convergenceLinkStatus": false
  },
  "deviceinfo": {
    "freqMax": 1500000000,
    "freqMin": 1300000000,
    "version": "2.12.2-rc8-M1055\n",
    "deviceSn": "f4fcf47c7c6e6f5abf3daeaf9c127de3",
    "powerMax": 30,
    "swapRxIQ": false,
    "swapTxIQ": false,
    "userName": "user",
    "chipLevel": 0.5,
    "93xxNumber": 1,
    "deviceType": "M1055",
    "bootSystems": [
      1
    ],
    "enduserName": "enduser",
    "licenseinfo": {
      "mimo": true,
      "sdma": true,
      "time": "2026-08-02 23:59",
      "silence": true,
      "userName": "user",
      "freqSmart": true,
      "deviceList": [
        "f4fcf47c7c6e6f5abf3daeaf9c127de3",
        "c5b9911b7842a663e515ce5434a6c7c5",
        "e3d982e8e670eca7e08dcad363cca8db"
      ],
      "extendSpan": true,
      "maxNodeNum": 64,
      "freqHopping": true,
      "maxThroughput": 43000,
      "rangeAdaptive": true,
      "burstAggregation": true,
      "freqHoppingCount": 64,
      "freqSmartAdvanced": true,
      "supportedWaveform": 1,
      "adaptiveFreqHopping": true,
      "dataEncryptionAES128": true,
      "dataEncryptionAES256": true,
      "antiInterferenceLevel": 4,
      "antiInterferenceAdvanced": true
    },
    "swapRxIQExt": [],
    "swapTxIQExt": [],
    "wifiChannels": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "powerMaxAtten": 5,
    "basebandNumber": 1,
    "defaultVersion": "2.11.2-rc16-M1055\n",
    "powerMaxAtten2": 5,
    "freqOffsetRatio": 0,
    "supplementaryFreqBands": [],
    "93xxPowerCompensationMode": 0
  },
  "spectrum": {
    "rssi": [
      [
        -95.96350860595703,
        -90.07352447509766,
        0.03063063137233257
      ],
      [
        -95.52838134765625,
        -88.78448486328125,
        0.05225225165486336
      ],
      [
        -95.31261444091797,
        -89.67391204833984,
        0.04144144058227539
      ],
      [
        -95.61981964111328,
        -90.31578826904297,
        0.01711711660027504
      ],
      [
        -96.82745361328125,
        -91.66666412353516,
        0.002702702768146992
      ],
      [
        -96.97611999511719,
        -140,
        0
      ],
      [
        -96.86723327636719,
        -140,
        0
      ],
      [
        -96.83438873291016,
        -89.5,
        0.0009000900317914784
      ],
      [
        -97.13860321044922,
        -92,
        0.0009000900317914784
      ],
      [
        -97.63816833496094,
        -140,
        0
      ],
      [
        -97.58055877685547,
        -87.5,
        0.001800180063582957
      ],
      [
        -97.34158325195312,
        -92.5,
        0.0009000900317914784
      ],
      [
        -96.52251434326172,
        -81.5,
        0.001800180063582957
      ],
      [
        -96.58687591552734,
        -84.375,
        0.003600360127165914
      ],
      [
        -97.12376403808594,
        -91.125,
        0.003600360127165914
      ],
      [
        -97.67461395263672,
        -91.66666412353516,
        0.005400539841502905
      ],
      [
        -98.12960815429688,
        -92,
        0.006300630047917366
      ],
      [
        -97.79457092285156,
        -92.5,
        0.002702702768146992
      ],
      [
        -97.45225524902344,
        -140,
        0
      ],
      [
        -96.99458312988281,
        -140,
        0
      ],
      [
        -96.96939086914062,
        -140,
        0
      ],
      [
        -97.41898345947266,
        -140,
        0
      ],
      [
        -98.15618133544922,
        -140,
        0
      ],
      [
        -99.11744689941406,
        -140,
        0
      ],
      [
        -98.98018646240234,
        -140,
        0
      ],
      [
        -98.90594482421875,
        -140,
        0
      ],
      [
        -99.06930541992188,
        -140,
        0
      ],
      [
        -99.17282104492188,
        -93,
        0.001800180063582957
      ],
      [
        -99.28668975830078,
        -93.33333587646484,
        0.002700269920751452
      ],
      [
        -99.27362823486328,
        -93.25,
        0.001800180063582957
      ],
      [
        -99.29792022705078,
        -140,
        0
      ],
      [
        -99.28243255615234,
        -140,
        0
      ],
      [
        -99.37297058105469,
        -140,
        0
      ],
      [
        -99.4698257446289,
        -140,
        0
      ],
      [
        -99.56531524658203,
        -140,
        0
      ],
      [
        -95.24504852294922,
        -88.22368621826172,
        0.03423423320055008
      ],
      [
        -91.05315399169922,
        -82.81428527832031,
        0.03153153136372566
      ],
      [
        -90.53874206542969,
        -82.48684692382812,
        0.03423423320055008
      ],
      [
        -90.86441802978516,
        -83.21295166015625,
        0.0486486479640007
      ],
      [
        -95.1261215209961,
        -88.46591186523438,
        0.03963964059948921
      ],
      [
        -98.99368286132812,
        -140,
        0
      ]
    ]
  }
}
/* eslint-enable no-loss-of-precision */

let sqlClient
let initialization

function getDatabaseUrl() {
  const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL

  if (!databaseUrl) {
    const error = new Error(
      'DATABASE_URL is not configured. Add the Neon connection string to the environment.',
    )
    error.code = 'DATABASE_URL_MISSING'
    throw error
  }

  return databaseUrl
}

export function getSql() {
  if (!sqlClient) {
    sqlClient = neon(getDatabaseUrl())
  }

  return sqlClient
}

export async function initializeDatabase() {
  if (!initialization) {
    initialization = (async () => {
      const sql = getSql()

      await sql`
        CREATE TABLE IF NOT EXISTS mesh_api_resources (
          resource_key TEXT PRIMARY KEY,
          payload JSONB NOT NULL,
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `

      await Promise.all(
        Object.entries(DEFAULT_RESOURCES).map(
          ([resourceKey, payload]) => sql`
            INSERT INTO mesh_api_resources (resource_key, payload)
            VALUES (
              ${resourceKey},
              CAST(${JSON.stringify(payload)} AS JSONB)
            )
            ON CONFLICT (resource_key) DO NOTHING
          `,
        ),
      )
    })().catch((error) => {
      initialization = undefined
      throw error
    })
  }

  await initialization
}

export async function getResource(resourceKey) {
  await initializeDatabase()
  const sql = getSql()
  const rows = await sql`
    SELECT payload, updated_at
    FROM mesh_api_resources
    WHERE resource_key = ${resourceKey}
  `

  return rows[0] ?? null
}

export async function saveResource(resourceKey, payload) {
  await initializeDatabase()
  const sql = getSql()
  const rows = await sql`
    INSERT INTO mesh_api_resources (resource_key, payload, updated_at)
    VALUES (${resourceKey}, CAST(${JSON.stringify(payload)} AS JSONB), NOW())
    ON CONFLICT (resource_key)
    DO UPDATE SET payload = EXCLUDED.payload, updated_at = NOW()
    RETURNING payload, updated_at
  `

  return rows[0]
}

export async function checkDatabaseConnection() {
  const sql = getSql()
  const rows = await sql`SELECT NOW() AS database_time`
  return rows[0].database_time
}

export { DEFAULT_RESOURCES }
