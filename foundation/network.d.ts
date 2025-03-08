// JSBox Network API TypeScript Declaration

namespace NetworkTypes {
  interface NetworkInterfaceInfo {
    [interfaceName: string]: string;
  }

  interface PingOptions {
    host: string;
    timeout?: number;
    period?: number;
    payloadSize?: number;
    ttl?: number;
    didReceiveReply?: (summary: PingSummary) => void;
    didReceiveUnexpectedReply?: (summary: PingSummary) => void;
    didSendPing?: (summary: PingSummary) => void;
    didTimeout?: (summary: PingSummary) => void;
    didFail?: (error: NSError) => void;
    didFailToSendPing?: (response: any) => void;
  }

  interface PingSummary {
    sequenceNumber: number;
    payloadSize: number;
    ttl: number;
    host: string;
    sendDate: Date | null;
    receiveDate: Date | null;
    rtt: number;
    status: number;
  }
}

interface Network {
  ifa_data: Record<string, { received: number; sent: number }>;
  interfaces: NetworkTypes.NetworkInterfaceInfo;
  startPinging(options: NetworkTypes.PingOptions): void;
  stopPinging(): void;
  proxy_settings: any; // 文档中缺少具体说明
}

declare const $network: Network;
