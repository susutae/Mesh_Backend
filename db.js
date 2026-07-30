import { neon } from '@neondatabase/serverless'

const DEFAULT_RESOURCES = {
  status: {
    ip: '192.168.10.66',
    operatingFreq: 1,
    date: '',
    nodesRssiUnicast: [
      {
        ant2Rssi: -58.2666664124,
        ant2RssiMin: -58.5,
        ant2RssiMax: -57.5,
        ant1Rssi: -41.9000015259,
        ant1RssiMax: -40.5,
        ant1RssiMin: -43,
        id: 54,
      },
    ],
    gateway: '',
    configUpdated: false,
    speakingNodes: [255],
    nodeNumber: 2,
    operatingCtrlFreqMask: '0x0',
    batteryLevel: -1,
    silenced: false,
    transmissionDelay: [{ delay: 129, id: 54 }],
    nodeInfos: [
      {
        ip: '192.168.10.55',
        altitude: 0,
        longitude: -180,
        resourceRatio: 0.4887,
        latitude: -90,
        id: 54,
      },
      {
        ip: '192.168.10.66',
        altitude: 0,
        longitude: -180,
        resourceRatio: 0.4853,
        latitude: -90,
        id: 65,
      },
    ],
    noiseRssi: [
      {
        ant2RssiMin: -107.5,
        ant1RssiMax: -96.5,
        ant2Rssi: -104.1859512329,
        ant1RssiMin: -101.5,
        freq: 1400000000,
        ant1Rssi: -99.0454559326,
        ant2RssiMax: -101,
      },
      {
        ant2RssiMin: -107.5,
        ant1RssiMax: -101,
        ant2Rssi: -106.103302002,
        ant1RssiMin: -106,
        freq: 1450000000,
        ant1Rssi: -103.830581665,
        ant2RssiMax: -103.5,
      },
      {
        ant2RssiMin: -78,
        ant1RssiMax: -71,
        ant2Rssi: -75.2868881226,
        ant1RssiMin: -78,
        freq: 1485000000,
        ant1Rssi: -74.5163955688,
        ant2RssiMax: -71.5,
      },
    ],
    linkQuality: [
      [-10, 33],
      [32, -10],
    ],
    queryRoutes: [],
    dnsServer: '0.0.0.0',
    heterogeneousLinkNodes: [],
    selfId: 65,
    devices: [{ status: 0, version: '', type: 'eth0' }],
    temp: 106.799389648,
    nwMask: '255.255.255.0',
    nodesRssi: [
      {
        ant2Rssi: -54.0999984741,
        ant2RssiMin: -59.5,
        ant2RssiMax: -51.5,
        ant1Rssi: -41.75,
        ant1RssiMax: -41,
        ant1RssiMin: -43,
        id: 54,
      },
    ],
  },
  statusadvanced: {
    unicastFwOverflow: 0,
    operatingVersion: 0,
    audioTotalAllocateSlotNumber: 0,
    unicastAllocateSlotNumber: 0,
    multicastResourceTotal: 0,
    aaCrcErrCount: 0,
    unicastTxOverflow: 0,
    ethRxBytes: 132,
    txs: { 54: 144 },
    aaSubband0CrcErrRatio1: 'nan%',
    bbn: -1,
    nodeStatus: 4,
    phyTxBytes: 144,
    aaSubband0Snr1Max: 33.2551,
    aaSubband0Snr2Max: 27.0968,
    aaSubband0Snr1Avg: 29.8833,
    convergenceLinkNodes: [],
    ethTXPackets: 2,
    aaSlotOffsetAvg: 319,
    ethTxBytes: 120,
    unicastResourceTotal: 0,
    arqRetransmit: 0,
    aaSubband0Snr0Max: 34.1247,
    aaFreqOffsetMin: 25.332,
    aaSubband0Snr0Min: 30.9163,
    aaSubband0CrcErrCount1: 0,
    aaSubband0CrcErrCount0: 0,
    aaSubband0CrcErrCount2: 0,
    freqSyncAdjust: 0,
    addressTable: [{ 68842339: 65 }, { 220228044352153: 54 }],
    aaCaptureCount: 92,
    aaSlotOffsetMin: 257,
    rxStat: [
      {
        toAvg: 319,
        subband0Snr2Avg: 22.3975,
        subband0Snr2Min: 18.7658,
        subband0Snr0Max: 34.1247,
        subband0Snr1Min: 27.3566,
        toMax: 369,
        subband0Snr0Min: 30.9163,
        subband0Snr2Max: 27.5653,
        foMax: 88.6619,
        toMin: 257,
        sn: 91,
        subband0Snr1Max: 33.3088,
        subband0Snr0Avg: 33.2665,
        subband0Snr1Avg: 29.9107,
        id: 54,
        foAvg: 50.7868,
      },
    ],
    netOverflow: 0,
    aaSubband0CrcErrRatio0: '0%',
    phyVersion: 'r105_v2',
    phyRxBytes: 1440,
    freqOffset: [{ id: 54, offset: 21 }],
    rxs: { 54: 120 },
    aaFreqOffsetAvg: 51.0284,
    aaCrcErrRatio: '0%',
    mpVersion: 'V2__20260303_1850',
    hhn: 65,
    calibrated: 1,
    ethRxPackets: 2,
  },
  config: {
    netIfConfig: [
      {
        name: 'eth0',
        ip: '',
        ipMode: 0,
        mode: 0,
        nwMask: '',
        hardwareChecksum: true,
        gateway: '',
      },
      {
        name: 'wlan0',
        ip: '',
        ipMode: 0,
        mode: 0,
        nwMask: '',
        gateway: '',
      },
    ],
    cellSelectionMode: 0,
    usbMode: 0,
    presetLongitude: -180,
    disableModules: [],
    maxResRatio: 100,
    cellAutoConfig: true,
    freqList: [1485000000, 1400000000, 1450000000],
    enableLowDelay: false,
    freqDefault: 1,
    name: 'node65',
    meshName: 'abcdefge',
    rfDisable: 0,
    disableLed: false,
    audioMuteLevel: 55,
    linkSnrThreshold: -10,
    wifiChannel: 1,
    freqMode: 'smartAdvanced2',
    enableBeamForming: false,
    wifiDhcpAddressStart: '192.168.10.60',
    wifiPassword: '1234567890',
    enableFEC: true,
    rangeMode: '10',
    enableWebManagement: true,
    freqListTx: [1400000000, 1485000000, 1450000000],
    buildinGPSPort: 1234,
    smartFreqModeSwitchSpeedLevel: 6,
    dataCache: 4000,
    wifiApName: 'MESHAP_7363',
    baudrateRs485: 2400,
    silence: false,
    enableDualSpan: true,
    buildinGPSBaudrate: 9600,
    enableDualFreq: true,
    span: 1,
    bootDelay: 100,
    presetAltitude: 0,
    wifiEnable: true,
    mtu: 1500,
    nwMask: '255.255.255.0',
    tempThreshold: 45,
    wifiDhcpAddressEnd: '192.168.10.100',
    ip: '192.168.10.66',
    presetLatitude: -90,
    uartBaudrate2: 9600,
    uartBaudrate1: 9600,
    uartBaudrate0: 9600,
    dhcpServerEnable: true,
    id: 65,
    intraMac0: '00:00:04:1A:73:63',
    intraMac1: '00:00:04:1A:73:63',
    audioMicGain: 50,
    bluetoothEnable: false,
    wifiMode: 0,
    networkRole: 1,
    dataEncryptionMode: 0,
    networkMode: 0,
    dnsServer: '',
    heterogeneousRecoveryTime: 20,
    allUsingMaster: false,
  },
  deviceinfo: {
    intermediateFrequencyRxEnable: false,
    licenseinfo: {
      userName: '07b748850ea64bf0e291d827dc18ab0a',
      deviceList: ['1cd8da30f09b5c9ad7c567fd043ebb9b '],
      freqSmartAdvanced: true,
      sdma: true,
      maxNodeNum: 64,
      maxThroughput: 43000,
      supportedWaveform: 1,
      time: '2026-04-29 18:35',
      dataEncryptionAES256: true,
      extendSpan: true,
    },
    powerMaxAtten: 6,
    freqMin: 1100000000,
    chipLevel: 0.5,
    swapTxIQExt: [],
    freqMax: 1500000000,
    swapTxIQ: false,
    powerMaxAtten2: 7,
    wifiChannels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    intermediateFrequencyTxEnable: false,
    userName: '07b748850ea64bf0e291d827dc18ab0a',
    bootSystems: [1],
    defaultVersion: '2.13.1-rc5-f-M1124\n',
    uartDevices: 37,
    swapRxIQExt: [],
    freqOffsetRatio: 0,
    '93xxPowerCompensationMode': 0,
    supplementaryFreqBands: [],
    swapRxIQ: false,
    version: '2.13.1-rc5-f-M1124\n',
    deviceType: 'M1124',
    intermediateFrequency: 0,
    powerMax: 27,
    enduserName: 'enduser',
    '93xxNumber': 1,
    deviceSn: '1cd8da30f09b5c9ad7c567fd043ebb9b',
    basebandNumber: 1,
  },
  spectrum: {
    rssi: [
      [-99.6736297607, -92.875, 0.0061871614],
      [-104.4454727173, -140, 0],
      [-75.3565368652, -70.8846130371, 0.0100541376],
    ],
    bandRssi: [[-93.1873245239, -81.8798065186, 0.6666666865]],
  },
}

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
        Object.entries(DEFAULT_RESOURCES).map(([resourceKey, payload]) =>
          sql`
            INSERT INTO mesh_api_resources (resource_key, payload)
            VALUES (${resourceKey}, CAST(${JSON.stringify(payload)} AS JSONB))
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
