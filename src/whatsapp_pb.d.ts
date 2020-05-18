// package: wa
// file: whatsapp.proto

import * as jspb from "google-protobuf";

export class HydratedQuickReplyButton extends jspb.Message {
  hasDisplaytext(): boolean;
  clearDisplaytext(): void;
  getDisplaytext(): string | undefined;
  setDisplaytext(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HydratedQuickReplyButton.AsObject;
  static toObject(includeInstance: boolean, msg: HydratedQuickReplyButton): HydratedQuickReplyButton.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HydratedQuickReplyButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HydratedQuickReplyButton;
  static deserializeBinaryFromReader(message: HydratedQuickReplyButton, reader: jspb.BinaryReader): HydratedQuickReplyButton;
}

export namespace HydratedQuickReplyButton {
  export type AsObject = {
    displaytext?: string,
    id?: string,
  }
}

export class HydratedURLButton extends jspb.Message {
  hasDisplaytext(): boolean;
  clearDisplaytext(): void;
  getDisplaytext(): string | undefined;
  setDisplaytext(value: string): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string | undefined;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HydratedURLButton.AsObject;
  static toObject(includeInstance: boolean, msg: HydratedURLButton): HydratedURLButton.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HydratedURLButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HydratedURLButton;
  static deserializeBinaryFromReader(message: HydratedURLButton, reader: jspb.BinaryReader): HydratedURLButton;
}

export namespace HydratedURLButton {
  export type AsObject = {
    displaytext?: string,
    url?: string,
  }
}

export class HydratedCallButton extends jspb.Message {
  hasDisplaytext(): boolean;
  clearDisplaytext(): void;
  getDisplaytext(): string | undefined;
  setDisplaytext(value: string): void;

  hasPhonenumber(): boolean;
  clearPhonenumber(): void;
  getPhonenumber(): string | undefined;
  setPhonenumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HydratedCallButton.AsObject;
  static toObject(includeInstance: boolean, msg: HydratedCallButton): HydratedCallButton.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HydratedCallButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HydratedCallButton;
  static deserializeBinaryFromReader(message: HydratedCallButton, reader: jspb.BinaryReader): HydratedCallButton;
}

export namespace HydratedCallButton {
  export type AsObject = {
    displaytext?: string,
    phonenumber?: string,
  }
}

export class HydratedTemplateButton extends jspb.Message {
  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): number | undefined;
  setIndex(value: number): void;

  hasQuickreplybutton(): boolean;
  clearQuickreplybutton(): void;
  getQuickreplybutton(): HydratedQuickReplyButton | undefined;
  setQuickreplybutton(value?: HydratedQuickReplyButton): void;

  hasUrlbutton(): boolean;
  clearUrlbutton(): void;
  getUrlbutton(): HydratedURLButton | undefined;
  setUrlbutton(value?: HydratedURLButton): void;

  hasCallbutton(): boolean;
  clearCallbutton(): void;
  getCallbutton(): HydratedCallButton | undefined;
  setCallbutton(value?: HydratedCallButton): void;

  getHydratedbuttonCase(): HydratedTemplateButton.HydratedbuttonCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HydratedTemplateButton.AsObject;
  static toObject(includeInstance: boolean, msg: HydratedTemplateButton): HydratedTemplateButton.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HydratedTemplateButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HydratedTemplateButton;
  static deserializeBinaryFromReader(message: HydratedTemplateButton, reader: jspb.BinaryReader): HydratedTemplateButton;
}

export namespace HydratedTemplateButton {
  export type AsObject = {
    index?: number,
    quickreplybutton?: HydratedQuickReplyButton.AsObject,
    urlbutton?: HydratedURLButton.AsObject,
    callbutton?: HydratedCallButton.AsObject,
  }

  export enum HydratedbuttonCase {
    HYDRATEDBUTTON_NOT_SET = 0,
    QUICKREPLYBUTTON = 1,
    URLBUTTON = 2,
    CALLBUTTON = 3,
  }
}

export class QuickReplyButton extends jspb.Message {
  hasDisplaytext(): boolean;
  clearDisplaytext(): void;
  getDisplaytext(): HighlyStructuredMessage | undefined;
  setDisplaytext(value?: HighlyStructuredMessage): void;

  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuickReplyButton.AsObject;
  static toObject(includeInstance: boolean, msg: QuickReplyButton): QuickReplyButton.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuickReplyButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuickReplyButton;
  static deserializeBinaryFromReader(message: QuickReplyButton, reader: jspb.BinaryReader): QuickReplyButton;
}

export namespace QuickReplyButton {
  export type AsObject = {
    displaytext?: HighlyStructuredMessage.AsObject,
    id?: string,
  }
}

export class URLButton extends jspb.Message {
  hasDisplaytext(): boolean;
  clearDisplaytext(): void;
  getDisplaytext(): HighlyStructuredMessage | undefined;
  setDisplaytext(value?: HighlyStructuredMessage): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): HighlyStructuredMessage | undefined;
  setUrl(value?: HighlyStructuredMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): URLButton.AsObject;
  static toObject(includeInstance: boolean, msg: URLButton): URLButton.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: URLButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): URLButton;
  static deserializeBinaryFromReader(message: URLButton, reader: jspb.BinaryReader): URLButton;
}

export namespace URLButton {
  export type AsObject = {
    displaytext?: HighlyStructuredMessage.AsObject,
    url?: HighlyStructuredMessage.AsObject,
  }
}

export class CallButton extends jspb.Message {
  hasDisplaytext(): boolean;
  clearDisplaytext(): void;
  getDisplaytext(): HighlyStructuredMessage | undefined;
  setDisplaytext(value?: HighlyStructuredMessage): void;

  hasPhonenumber(): boolean;
  clearPhonenumber(): void;
  getPhonenumber(): HighlyStructuredMessage | undefined;
  setPhonenumber(value?: HighlyStructuredMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallButton.AsObject;
  static toObject(includeInstance: boolean, msg: CallButton): CallButton.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallButton;
  static deserializeBinaryFromReader(message: CallButton, reader: jspb.BinaryReader): CallButton;
}

export namespace CallButton {
  export type AsObject = {
    displaytext?: HighlyStructuredMessage.AsObject,
    phonenumber?: HighlyStructuredMessage.AsObject,
  }
}

export class TemplateButton extends jspb.Message {
  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): number | undefined;
  setIndex(value: number): void;

  hasQuickreplybutton(): boolean;
  clearQuickreplybutton(): void;
  getQuickreplybutton(): QuickReplyButton | undefined;
  setQuickreplybutton(value?: QuickReplyButton): void;

  hasUrlbutton(): boolean;
  clearUrlbutton(): void;
  getUrlbutton(): URLButton | undefined;
  setUrlbutton(value?: URLButton): void;

  hasCallbutton(): boolean;
  clearCallbutton(): void;
  getCallbutton(): CallButton | undefined;
  setCallbutton(value?: CallButton): void;

  getButtonCase(): TemplateButton.ButtonCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateButton.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateButton): TemplateButton.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateButton;
  static deserializeBinaryFromReader(message: TemplateButton, reader: jspb.BinaryReader): TemplateButton;
}

export namespace TemplateButton {
  export type AsObject = {
    index?: number,
    quickreplybutton?: QuickReplyButton.AsObject,
    urlbutton?: URLButton.AsObject,
    callbutton?: CallButton.AsObject,
  }

  export enum ButtonCase {
    BUTTON_NOT_SET = 0,
    QUICKREPLYBUTTON = 1,
    URLBUTTON = 2,
    CALLBUTTON = 3,
  }
}

export class Location extends jspb.Message {
  hasDegreeslatitude(): boolean;
  clearDegreeslatitude(): void;
  getDegreeslatitude(): number | undefined;
  setDegreeslatitude(value: number): void;

  hasDegreeslongitude(): boolean;
  clearDegreeslongitude(): void;
  getDegreeslongitude(): number | undefined;
  setDegreeslongitude(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    degreeslatitude?: number,
    degreeslongitude?: number,
    name?: string,
  }
}

export class Point extends jspb.Message {
  hasXdeprecated(): boolean;
  clearXdeprecated(): void;
  getXdeprecated(): number | undefined;
  setXdeprecated(value: number): void;

  hasYdeprecated(): boolean;
  clearYdeprecated(): void;
  getYdeprecated(): number | undefined;
  setYdeprecated(value: number): void;

  hasX(): boolean;
  clearX(): void;
  getX(): number | undefined;
  setX(value: number): void;

  hasY(): boolean;
  clearY(): void;
  getY(): number | undefined;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    xdeprecated?: number,
    ydeprecated?: number,
    x?: number,
    y?: number,
  }
}

export class InteractiveAnnotation extends jspb.Message {
  clearPolygonverticesList(): void;
  getPolygonverticesList(): Array<Point>;
  setPolygonverticesList(value: Array<Point>): void;
  addPolygonvertices(value?: Point, index?: number): Point;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  getActionCase(): InteractiveAnnotation.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InteractiveAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: InteractiveAnnotation): InteractiveAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InteractiveAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InteractiveAnnotation;
  static deserializeBinaryFromReader(message: InteractiveAnnotation, reader: jspb.BinaryReader): InteractiveAnnotation;
}

export namespace InteractiveAnnotation {
  export type AsObject = {
    polygonverticesList: Array<Point.AsObject>,
    location?: Location.AsObject,
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    LOCATION = 2,
  }
}

export class AdReplyInfo extends jspb.Message {
  hasAdvertisername(): boolean;
  clearAdvertisername(): void;
  getAdvertisername(): string | undefined;
  setAdvertisername(value: string): void;

  hasMediatype(): boolean;
  clearMediatype(): void;
  getMediatype(): AdReplyInfo.AD_REPLY_INFO_MEDIATYPEMap[keyof AdReplyInfo.AD_REPLY_INFO_MEDIATYPEMap] | undefined;
  setMediatype(value: AdReplyInfo.AD_REPLY_INFO_MEDIATYPEMap[keyof AdReplyInfo.AD_REPLY_INFO_MEDIATYPEMap]): void;

  hasJpegthumbnail(): boolean;
  clearJpegthumbnail(): void;
  getJpegthumbnail(): Uint8Array | string;
  getJpegthumbnail_asU8(): Uint8Array;
  getJpegthumbnail_asB64(): string;
  setJpegthumbnail(value: Uint8Array | string): void;

  hasCaption(): boolean;
  clearCaption(): void;
  getCaption(): string | undefined;
  setCaption(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdReplyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AdReplyInfo): AdReplyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdReplyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdReplyInfo;
  static deserializeBinaryFromReader(message: AdReplyInfo, reader: jspb.BinaryReader): AdReplyInfo;
}

export namespace AdReplyInfo {
  export type AsObject = {
    advertisername?: string,
    mediatype?: AdReplyInfo.AD_REPLY_INFO_MEDIATYPEMap[keyof AdReplyInfo.AD_REPLY_INFO_MEDIATYPEMap],
    jpegthumbnail: Uint8Array | string,
    caption?: string,
  }

  export interface AD_REPLY_INFO_MEDIATYPEMap {
    NONE: 0;
    IMAGE: 1;
    VIDEO: 2;
  }

  export const AD_REPLY_INFO_MEDIATYPE: AD_REPLY_INFO_MEDIATYPEMap;
}

export class ContextInfo extends jspb.Message {
  hasStanzaid(): boolean;
  clearStanzaid(): void;
  getStanzaid(): string | undefined;
  setStanzaid(value: string): void;

  hasParticipant(): boolean;
  clearParticipant(): void;
  getParticipant(): string | undefined;
  setParticipant(value: string): void;

  hasQuotedmessage(): boolean;
  clearQuotedmessage(): void;
  getQuotedmessage(): Message | undefined;
  setQuotedmessage(value?: Message): void;

  hasRemotejid(): boolean;
  clearRemotejid(): void;
  getRemotejid(): string | undefined;
  setRemotejid(value: string): void;

  clearMentionedjidList(): void;
  getMentionedjidList(): Array<string>;
  setMentionedjidList(value: Array<string>): void;
  addMentionedjid(value: string, index?: number): string;

  hasConversionsource(): boolean;
  clearConversionsource(): void;
  getConversionsource(): string | undefined;
  setConversionsource(value: string): void;

  hasConversiondata(): boolean;
  clearConversiondata(): void;
  getConversiondata(): Uint8Array | string;
  getConversiondata_asU8(): Uint8Array;
  getConversiondata_asB64(): string;
  setConversiondata(value: Uint8Array | string): void;

  hasConversiondelayseconds(): boolean;
  clearConversiondelayseconds(): void;
  getConversiondelayseconds(): number | undefined;
  setConversiondelayseconds(value: number): void;

  hasForwardingscore(): boolean;
  clearForwardingscore(): void;
  getForwardingscore(): number | undefined;
  setForwardingscore(value: number): void;

  hasIsforwarded(): boolean;
  clearIsforwarded(): void;
  getIsforwarded(): boolean | undefined;
  setIsforwarded(value: boolean): void;

  hasQuotedad(): boolean;
  clearQuotedad(): void;
  getQuotedad(): AdReplyInfo | undefined;
  setQuotedad(value?: AdReplyInfo): void;

  hasPlaceholderkey(): boolean;
  clearPlaceholderkey(): void;
  getPlaceholderkey(): MessageKey | undefined;
  setPlaceholderkey(value?: MessageKey): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): number | undefined;
  setExpiration(value: number): void;

  hasEphemeralsettingtimestamp(): boolean;
  clearEphemeralsettingtimestamp(): void;
  getEphemeralsettingtimestamp(): number | undefined;
  setEphemeralsettingtimestamp(value: number): void;

  hasEphemeralsharedsecret(): boolean;
  clearEphemeralsharedsecret(): void;
  getEphemeralsharedsecret(): Uint8Array | string;
  getEphemeralsharedsecret_asU8(): Uint8Array;
  getEphemeralsharedsecret_asB64(): string;
  setEphemeralsharedsecret(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContextInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContextInfo): ContextInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContextInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContextInfo;
  static deserializeBinaryFromReader(message: ContextInfo, reader: jspb.BinaryReader): ContextInfo;
}

export namespace ContextInfo {
  export type AsObject = {
    stanzaid?: string,
    participant?: string,
    quotedmessage?: Message.AsObject,
    remotejid?: string,
    mentionedjidList: Array<string>,
    conversionsource?: string,
    conversiondata: Uint8Array | string,
    conversiondelayseconds?: number,
    forwardingscore?: number,
    isforwarded?: boolean,
    quotedad?: AdReplyInfo.AsObject,
    placeholderkey?: MessageKey.AsObject,
    expiration?: number,
    ephemeralsettingtimestamp?: number,
    ephemeralsharedsecret: Uint8Array | string,
  }
}

export class SenderKeyDistributionMessage extends jspb.Message {
  hasGroupid(): boolean;
  clearGroupid(): void;
  getGroupid(): string | undefined;
  setGroupid(value: string): void;

  hasAxolotlsenderkeydistributionmessage(): boolean;
  clearAxolotlsenderkeydistributionmessage(): void;
  getAxolotlsenderkeydistributionmessage(): Uint8Array | string;
  getAxolotlsenderkeydistributionmessage_asU8(): Uint8Array;
  getAxolotlsenderkeydistributionmessage_asB64(): string;
  setAxolotlsenderkeydistributionmessage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SenderKeyDistributionMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SenderKeyDistributionMessage): SenderKeyDistributionMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SenderKeyDistributionMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SenderKeyDistributionMessage;
  static deserializeBinaryFromReader(message: SenderKeyDistributionMessage, reader: jspb.BinaryReader): SenderKeyDistributionMessage;
}

export namespace SenderKeyDistributionMessage {
  export type AsObject = {
    groupid?: string,
    axolotlsenderkeydistributionmessage: Uint8Array | string,
  }
}

export class ImageMessage extends jspb.Message {
  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string | undefined;
  setUrl(value: string): void;

  hasMimetype(): boolean;
  clearMimetype(): void;
  getMimetype(): string | undefined;
  setMimetype(value: string): void;

  hasCaption(): boolean;
  clearCaption(): void;
  getCaption(): string | undefined;
  setCaption(value: string): void;

  hasFilesha256(): boolean;
  clearFilesha256(): void;
  getFilesha256(): Uint8Array | string;
  getFilesha256_asU8(): Uint8Array;
  getFilesha256_asB64(): string;
  setFilesha256(value: Uint8Array | string): void;

  hasFilelength(): boolean;
  clearFilelength(): void;
  getFilelength(): number | undefined;
  setFilelength(value: number): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number | undefined;
  setHeight(value: number): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): number | undefined;
  setWidth(value: number): void;

  hasMediakey(): boolean;
  clearMediakey(): void;
  getMediakey(): Uint8Array | string;
  getMediakey_asU8(): Uint8Array;
  getMediakey_asB64(): string;
  setMediakey(value: Uint8Array | string): void;

  hasFileencsha256(): boolean;
  clearFileencsha256(): void;
  getFileencsha256(): Uint8Array | string;
  getFileencsha256_asU8(): Uint8Array;
  getFileencsha256_asB64(): string;
  setFileencsha256(value: Uint8Array | string): void;

  clearInteractiveannotationsList(): void;
  getInteractiveannotationsList(): Array<InteractiveAnnotation>;
  setInteractiveannotationsList(value: Array<InteractiveAnnotation>): void;
  addInteractiveannotations(value?: InteractiveAnnotation, index?: number): InteractiveAnnotation;

  hasDirectpath(): boolean;
  clearDirectpath(): void;
  getDirectpath(): string | undefined;
  setDirectpath(value: string): void;

  hasMediakeytimestamp(): boolean;
  clearMediakeytimestamp(): void;
  getMediakeytimestamp(): number | undefined;
  setMediakeytimestamp(value: number): void;

  hasJpegthumbnail(): boolean;
  clearJpegthumbnail(): void;
  getJpegthumbnail(): Uint8Array | string;
  getJpegthumbnail_asU8(): Uint8Array;
  getJpegthumbnail_asB64(): string;
  setJpegthumbnail(value: Uint8Array | string): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  hasFirstscansidecar(): boolean;
  clearFirstscansidecar(): void;
  getFirstscansidecar(): Uint8Array | string;
  getFirstscansidecar_asU8(): Uint8Array;
  getFirstscansidecar_asB64(): string;
  setFirstscansidecar(value: Uint8Array | string): void;

  hasFirstscanlength(): boolean;
  clearFirstscanlength(): void;
  getFirstscanlength(): number | undefined;
  setFirstscanlength(value: number): void;

  hasExperimentgroupid(): boolean;
  clearExperimentgroupid(): void;
  getExperimentgroupid(): number | undefined;
  setExperimentgroupid(value: number): void;

  hasScanssidecar(): boolean;
  clearScanssidecar(): void;
  getScanssidecar(): Uint8Array | string;
  getScanssidecar_asU8(): Uint8Array;
  getScanssidecar_asB64(): string;
  setScanssidecar(value: Uint8Array | string): void;

  clearScanlengthsList(): void;
  getScanlengthsList(): Array<number>;
  setScanlengthsList(value: Array<number>): void;
  addScanlengths(value: number, index?: number): number;

  hasMidqualityfilesha256(): boolean;
  clearMidqualityfilesha256(): void;
  getMidqualityfilesha256(): Uint8Array | string;
  getMidqualityfilesha256_asU8(): Uint8Array;
  getMidqualityfilesha256_asB64(): string;
  setMidqualityfilesha256(value: Uint8Array | string): void;

  hasMidqualityfileencsha256(): boolean;
  clearMidqualityfileencsha256(): void;
  getMidqualityfileencsha256(): Uint8Array | string;
  getMidqualityfileencsha256_asU8(): Uint8Array;
  getMidqualityfileencsha256_asB64(): string;
  setMidqualityfileencsha256(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ImageMessage): ImageMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageMessage;
  static deserializeBinaryFromReader(message: ImageMessage, reader: jspb.BinaryReader): ImageMessage;
}

export namespace ImageMessage {
  export type AsObject = {
    url?: string,
    mimetype?: string,
    caption?: string,
    filesha256: Uint8Array | string,
    filelength?: number,
    height?: number,
    width?: number,
    mediakey: Uint8Array | string,
    fileencsha256: Uint8Array | string,
    interactiveannotationsList: Array<InteractiveAnnotation.AsObject>,
    directpath?: string,
    mediakeytimestamp?: number,
    jpegthumbnail: Uint8Array | string,
    contextinfo?: ContextInfo.AsObject,
    firstscansidecar: Uint8Array | string,
    firstscanlength?: number,
    experimentgroupid?: number,
    scanssidecar: Uint8Array | string,
    scanlengthsList: Array<number>,
    midqualityfilesha256: Uint8Array | string,
    midqualityfileencsha256: Uint8Array | string,
  }
}

export class ContactMessage extends jspb.Message {
  hasDisplayname(): boolean;
  clearDisplayname(): void;
  getDisplayname(): string | undefined;
  setDisplayname(value: string): void;

  hasVcard(): boolean;
  clearVcard(): void;
  getVcard(): string | undefined;
  setVcard(value: string): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ContactMessage): ContactMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactMessage;
  static deserializeBinaryFromReader(message: ContactMessage, reader: jspb.BinaryReader): ContactMessage;
}

export namespace ContactMessage {
  export type AsObject = {
    displayname?: string,
    vcard?: string,
    contextinfo?: ContextInfo.AsObject,
  }
}

export class LocationMessage extends jspb.Message {
  hasDegreeslatitude(): boolean;
  clearDegreeslatitude(): void;
  getDegreeslatitude(): number | undefined;
  setDegreeslatitude(value: number): void;

  hasDegreeslongitude(): boolean;
  clearDegreeslongitude(): void;
  getDegreeslongitude(): number | undefined;
  setDegreeslongitude(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string | undefined;
  setAddress(value: string): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string | undefined;
  setUrl(value: string): void;

  hasIslive(): boolean;
  clearIslive(): void;
  getIslive(): boolean | undefined;
  setIslive(value: boolean): void;

  hasAccuracyinmeters(): boolean;
  clearAccuracyinmeters(): void;
  getAccuracyinmeters(): number | undefined;
  setAccuracyinmeters(value: number): void;

  hasSpeedinmps(): boolean;
  clearSpeedinmps(): void;
  getSpeedinmps(): number | undefined;
  setSpeedinmps(value: number): void;

  hasDegreesclockwisefrommagneticnorth(): boolean;
  clearDegreesclockwisefrommagneticnorth(): void;
  getDegreesclockwisefrommagneticnorth(): number | undefined;
  setDegreesclockwisefrommagneticnorth(value: number): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): string | undefined;
  setComment(value: string): void;

  hasJpegthumbnail(): boolean;
  clearJpegthumbnail(): void;
  getJpegthumbnail(): Uint8Array | string;
  getJpegthumbnail_asU8(): Uint8Array;
  getJpegthumbnail_asB64(): string;
  setJpegthumbnail(value: Uint8Array | string): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LocationMessage): LocationMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationMessage;
  static deserializeBinaryFromReader(message: LocationMessage, reader: jspb.BinaryReader): LocationMessage;
}

export namespace LocationMessage {
  export type AsObject = {
    degreeslatitude?: number,
    degreeslongitude?: number,
    name?: string,
    address?: string,
    url?: string,
    islive?: boolean,
    accuracyinmeters?: number,
    speedinmps?: number,
    degreesclockwisefrommagneticnorth?: number,
    comment?: string,
    jpegthumbnail: Uint8Array | string,
    contextinfo?: ContextInfo.AsObject,
  }
}

export class ExtendedTextMessage extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): string | undefined;
  setText(value: string): void;

  hasMatchedtext(): boolean;
  clearMatchedtext(): void;
  getMatchedtext(): string | undefined;
  setMatchedtext(value: string): void;

  hasCanonicalurl(): boolean;
  clearCanonicalurl(): void;
  getCanonicalurl(): string | undefined;
  setCanonicalurl(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string | undefined;
  setTitle(value: string): void;

  hasTextargb(): boolean;
  clearTextargb(): void;
  getTextargb(): number | undefined;
  setTextargb(value: number): void;

  hasBackgroundargb(): boolean;
  clearBackgroundargb(): void;
  getBackgroundargb(): number | undefined;
  setBackgroundargb(value: number): void;

  hasFont(): boolean;
  clearFont(): void;
  getFont(): ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPEMap[keyof ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPEMap] | undefined;
  setFont(value: ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPEMap[keyof ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPEMap]): void;

  hasPreviewtype(): boolean;
  clearPreviewtype(): void;
  getPreviewtype(): ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPEMap[keyof ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPEMap] | undefined;
  setPreviewtype(value: ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPEMap[keyof ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPEMap]): void;

  hasJpegthumbnail(): boolean;
  clearJpegthumbnail(): void;
  getJpegthumbnail(): Uint8Array | string;
  getJpegthumbnail_asU8(): Uint8Array;
  getJpegthumbnail_asB64(): string;
  setJpegthumbnail(value: Uint8Array | string): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  hasDonotplayinline(): boolean;
  clearDonotplayinline(): void;
  getDonotplayinline(): boolean | undefined;
  setDonotplayinline(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtendedTextMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ExtendedTextMessage): ExtendedTextMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtendedTextMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtendedTextMessage;
  static deserializeBinaryFromReader(message: ExtendedTextMessage, reader: jspb.BinaryReader): ExtendedTextMessage;
}

export namespace ExtendedTextMessage {
  export type AsObject = {
    text?: string,
    matchedtext?: string,
    canonicalurl?: string,
    description?: string,
    title?: string,
    textargb?: number,
    backgroundargb?: number,
    font?: ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPEMap[keyof ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_FONTTYPEMap],
    previewtype?: ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPEMap[keyof ExtendedTextMessage.EXTENDED_TEXT_MESSAGE_PREVIEWTYPEMap],
    jpegthumbnail: Uint8Array | string,
    contextinfo?: ContextInfo.AsObject,
    donotplayinline?: boolean,
  }

  export interface EXTENDED_TEXT_MESSAGE_FONTTYPEMap {
    SANS_SERIF: 0;
    SERIF: 1;
    NORICAN_REGULAR: 2;
    BRYNDAN_WRITE: 3;
    BEBASNEUE_REGULAR: 4;
    OSWALD_HEAVY: 5;
  }

  export const EXTENDED_TEXT_MESSAGE_FONTTYPE: EXTENDED_TEXT_MESSAGE_FONTTYPEMap;

  export interface EXTENDED_TEXT_MESSAGE_PREVIEWTYPEMap {
    NONE: 0;
    VIDEO: 1;
  }

  export const EXTENDED_TEXT_MESSAGE_PREVIEWTYPE: EXTENDED_TEXT_MESSAGE_PREVIEWTYPEMap;
}

export class DocumentMessage extends jspb.Message {
  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string | undefined;
  setUrl(value: string): void;

  hasMimetype(): boolean;
  clearMimetype(): void;
  getMimetype(): string | undefined;
  setMimetype(value: string): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string | undefined;
  setTitle(value: string): void;

  hasFilesha256(): boolean;
  clearFilesha256(): void;
  getFilesha256(): Uint8Array | string;
  getFilesha256_asU8(): Uint8Array;
  getFilesha256_asB64(): string;
  setFilesha256(value: Uint8Array | string): void;

  hasFilelength(): boolean;
  clearFilelength(): void;
  getFilelength(): number | undefined;
  setFilelength(value: number): void;

  hasPagecount(): boolean;
  clearPagecount(): void;
  getPagecount(): number | undefined;
  setPagecount(value: number): void;

  hasMediakey(): boolean;
  clearMediakey(): void;
  getMediakey(): Uint8Array | string;
  getMediakey_asU8(): Uint8Array;
  getMediakey_asB64(): string;
  setMediakey(value: Uint8Array | string): void;

  hasFilename(): boolean;
  clearFilename(): void;
  getFilename(): string | undefined;
  setFilename(value: string): void;

  hasFileencsha256(): boolean;
  clearFileencsha256(): void;
  getFileencsha256(): Uint8Array | string;
  getFileencsha256_asU8(): Uint8Array;
  getFileencsha256_asB64(): string;
  setFileencsha256(value: Uint8Array | string): void;

  hasDirectpath(): boolean;
  clearDirectpath(): void;
  getDirectpath(): string | undefined;
  setDirectpath(value: string): void;

  hasMediakeytimestamp(): boolean;
  clearMediakeytimestamp(): void;
  getMediakeytimestamp(): number | undefined;
  setMediakeytimestamp(value: number): void;

  hasJpegthumbnail(): boolean;
  clearJpegthumbnail(): void;
  getJpegthumbnail(): Uint8Array | string;
  getJpegthumbnail_asU8(): Uint8Array;
  getJpegthumbnail_asB64(): string;
  setJpegthumbnail(value: Uint8Array | string): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentMessage): DocumentMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentMessage;
  static deserializeBinaryFromReader(message: DocumentMessage, reader: jspb.BinaryReader): DocumentMessage;
}

export namespace DocumentMessage {
  export type AsObject = {
    url?: string,
    mimetype?: string,
    title?: string,
    filesha256: Uint8Array | string,
    filelength?: number,
    pagecount?: number,
    mediakey: Uint8Array | string,
    filename?: string,
    fileencsha256: Uint8Array | string,
    directpath?: string,
    mediakeytimestamp?: number,
    jpegthumbnail: Uint8Array | string,
    contextinfo?: ContextInfo.AsObject,
  }
}

export class AudioMessage extends jspb.Message {
  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string | undefined;
  setUrl(value: string): void;

  hasMimetype(): boolean;
  clearMimetype(): void;
  getMimetype(): string | undefined;
  setMimetype(value: string): void;

  hasFilesha256(): boolean;
  clearFilesha256(): void;
  getFilesha256(): Uint8Array | string;
  getFilesha256_asU8(): Uint8Array;
  getFilesha256_asB64(): string;
  setFilesha256(value: Uint8Array | string): void;

  hasFilelength(): boolean;
  clearFilelength(): void;
  getFilelength(): number | undefined;
  setFilelength(value: number): void;

  hasSeconds(): boolean;
  clearSeconds(): void;
  getSeconds(): number | undefined;
  setSeconds(value: number): void;

  hasPtt(): boolean;
  clearPtt(): void;
  getPtt(): boolean | undefined;
  setPtt(value: boolean): void;

  hasMediakey(): boolean;
  clearMediakey(): void;
  getMediakey(): Uint8Array | string;
  getMediakey_asU8(): Uint8Array;
  getMediakey_asB64(): string;
  setMediakey(value: Uint8Array | string): void;

  hasFileencsha256(): boolean;
  clearFileencsha256(): void;
  getFileencsha256(): Uint8Array | string;
  getFileencsha256_asU8(): Uint8Array;
  getFileencsha256_asB64(): string;
  setFileencsha256(value: Uint8Array | string): void;

  hasDirectpath(): boolean;
  clearDirectpath(): void;
  getDirectpath(): string | undefined;
  setDirectpath(value: string): void;

  hasMediakeytimestamp(): boolean;
  clearMediakeytimestamp(): void;
  getMediakeytimestamp(): number | undefined;
  setMediakeytimestamp(value: number): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  hasStreamingsidecar(): boolean;
  clearStreamingsidecar(): void;
  getStreamingsidecar(): Uint8Array | string;
  getStreamingsidecar_asU8(): Uint8Array;
  getStreamingsidecar_asB64(): string;
  setStreamingsidecar(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AudioMessage): AudioMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AudioMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioMessage;
  static deserializeBinaryFromReader(message: AudioMessage, reader: jspb.BinaryReader): AudioMessage;
}

export namespace AudioMessage {
  export type AsObject = {
    url?: string,
    mimetype?: string,
    filesha256: Uint8Array | string,
    filelength?: number,
    seconds?: number,
    ptt?: boolean,
    mediakey: Uint8Array | string,
    fileencsha256: Uint8Array | string,
    directpath?: string,
    mediakeytimestamp?: number,
    contextinfo?: ContextInfo.AsObject,
    streamingsidecar: Uint8Array | string,
  }
}

export class VideoMessage extends jspb.Message {
  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string | undefined;
  setUrl(value: string): void;

  hasMimetype(): boolean;
  clearMimetype(): void;
  getMimetype(): string | undefined;
  setMimetype(value: string): void;

  hasFilesha256(): boolean;
  clearFilesha256(): void;
  getFilesha256(): Uint8Array | string;
  getFilesha256_asU8(): Uint8Array;
  getFilesha256_asB64(): string;
  setFilesha256(value: Uint8Array | string): void;

  hasFilelength(): boolean;
  clearFilelength(): void;
  getFilelength(): number | undefined;
  setFilelength(value: number): void;

  hasSeconds(): boolean;
  clearSeconds(): void;
  getSeconds(): number | undefined;
  setSeconds(value: number): void;

  hasMediakey(): boolean;
  clearMediakey(): void;
  getMediakey(): Uint8Array | string;
  getMediakey_asU8(): Uint8Array;
  getMediakey_asB64(): string;
  setMediakey(value: Uint8Array | string): void;

  hasCaption(): boolean;
  clearCaption(): void;
  getCaption(): string | undefined;
  setCaption(value: string): void;

  hasGifplayback(): boolean;
  clearGifplayback(): void;
  getGifplayback(): boolean | undefined;
  setGifplayback(value: boolean): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number | undefined;
  setHeight(value: number): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): number | undefined;
  setWidth(value: number): void;

  hasFileencsha256(): boolean;
  clearFileencsha256(): void;
  getFileencsha256(): Uint8Array | string;
  getFileencsha256_asU8(): Uint8Array;
  getFileencsha256_asB64(): string;
  setFileencsha256(value: Uint8Array | string): void;

  clearInteractiveannotationsList(): void;
  getInteractiveannotationsList(): Array<InteractiveAnnotation>;
  setInteractiveannotationsList(value: Array<InteractiveAnnotation>): void;
  addInteractiveannotations(value?: InteractiveAnnotation, index?: number): InteractiveAnnotation;

  hasDirectpath(): boolean;
  clearDirectpath(): void;
  getDirectpath(): string | undefined;
  setDirectpath(value: string): void;

  hasMediakeytimestamp(): boolean;
  clearMediakeytimestamp(): void;
  getMediakeytimestamp(): number | undefined;
  setMediakeytimestamp(value: number): void;

  hasJpegthumbnail(): boolean;
  clearJpegthumbnail(): void;
  getJpegthumbnail(): Uint8Array | string;
  getJpegthumbnail_asU8(): Uint8Array;
  getJpegthumbnail_asB64(): string;
  setJpegthumbnail(value: Uint8Array | string): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  hasStreamingsidecar(): boolean;
  clearStreamingsidecar(): void;
  getStreamingsidecar(): Uint8Array | string;
  getStreamingsidecar_asU8(): Uint8Array;
  getStreamingsidecar_asB64(): string;
  setStreamingsidecar(value: Uint8Array | string): void;

  hasGifattribution(): boolean;
  clearGifattribution(): void;
  getGifattribution(): VideoMessage.VIDEO_MESSAGE_ATTRIBUTIONMap[keyof VideoMessage.VIDEO_MESSAGE_ATTRIBUTIONMap] | undefined;
  setGifattribution(value: VideoMessage.VIDEO_MESSAGE_ATTRIBUTIONMap[keyof VideoMessage.VIDEO_MESSAGE_ATTRIBUTIONMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoMessage.AsObject;
  static toObject(includeInstance: boolean, msg: VideoMessage): VideoMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoMessage;
  static deserializeBinaryFromReader(message: VideoMessage, reader: jspb.BinaryReader): VideoMessage;
}

export namespace VideoMessage {
  export type AsObject = {
    url?: string,
    mimetype?: string,
    filesha256: Uint8Array | string,
    filelength?: number,
    seconds?: number,
    mediakey: Uint8Array | string,
    caption?: string,
    gifplayback?: boolean,
    height?: number,
    width?: number,
    fileencsha256: Uint8Array | string,
    interactiveannotationsList: Array<InteractiveAnnotation.AsObject>,
    directpath?: string,
    mediakeytimestamp?: number,
    jpegthumbnail: Uint8Array | string,
    contextinfo?: ContextInfo.AsObject,
    streamingsidecar: Uint8Array | string,
    gifattribution?: VideoMessage.VIDEO_MESSAGE_ATTRIBUTIONMap[keyof VideoMessage.VIDEO_MESSAGE_ATTRIBUTIONMap],
  }

  export interface VIDEO_MESSAGE_ATTRIBUTIONMap {
    NONE: 0;
    GIPHY: 1;
    TENOR: 2;
  }

  export const VIDEO_MESSAGE_ATTRIBUTION: VIDEO_MESSAGE_ATTRIBUTIONMap;
}

export class Call extends jspb.Message {
  hasCallkey(): boolean;
  clearCallkey(): void;
  getCallkey(): Uint8Array | string;
  getCallkey_asU8(): Uint8Array;
  getCallkey_asB64(): string;
  setCallkey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Call.AsObject;
  static toObject(includeInstance: boolean, msg: Call): Call.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Call, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Call;
  static deserializeBinaryFromReader(message: Call, reader: jspb.BinaryReader): Call;
}

export namespace Call {
  export type AsObject = {
    callkey: Uint8Array | string,
  }
}

export class Chat extends jspb.Message {
  hasDisplayname(): boolean;
  clearDisplayname(): void;
  getDisplayname(): string | undefined;
  setDisplayname(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chat.AsObject;
  static toObject(includeInstance: boolean, msg: Chat): Chat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chat;
  static deserializeBinaryFromReader(message: Chat, reader: jspb.BinaryReader): Chat;
}

export namespace Chat {
  export type AsObject = {
    displayname?: string,
    id?: string,
  }
}

export class ProtocolMessage extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): MessageKey | undefined;
  setKey(value?: MessageKey): void;

  hasType(): boolean;
  clearType(): void;
  getType(): ProtocolMessage.PROTOCOL_MESSAGE_TYPEMap[keyof ProtocolMessage.PROTOCOL_MESSAGE_TYPEMap] | undefined;
  setType(value: ProtocolMessage.PROTOCOL_MESSAGE_TYPEMap[keyof ProtocolMessage.PROTOCOL_MESSAGE_TYPEMap]): void;

  hasEphemeralexpiration(): boolean;
  clearEphemeralexpiration(): void;
  getEphemeralexpiration(): number | undefined;
  setEphemeralexpiration(value: number): void;

  hasEphemeralsettingtimestamp(): boolean;
  clearEphemeralsettingtimestamp(): void;
  getEphemeralsettingtimestamp(): number | undefined;
  setEphemeralsettingtimestamp(value: number): void;

  hasHistorysyncnotification(): boolean;
  clearHistorysyncnotification(): void;
  getHistorysyncnotification(): HistorySyncNotification | undefined;
  setHistorysyncnotification(value?: HistorySyncNotification): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolMessage): ProtocolMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtocolMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolMessage;
  static deserializeBinaryFromReader(message: ProtocolMessage, reader: jspb.BinaryReader): ProtocolMessage;
}

export namespace ProtocolMessage {
  export type AsObject = {
    key?: MessageKey.AsObject,
    type?: ProtocolMessage.PROTOCOL_MESSAGE_TYPEMap[keyof ProtocolMessage.PROTOCOL_MESSAGE_TYPEMap],
    ephemeralexpiration?: number,
    ephemeralsettingtimestamp?: number,
    historysyncnotification?: HistorySyncNotification.AsObject,
  }

  export interface PROTOCOL_MESSAGE_TYPEMap {
    REVOKE: 0;
    EPHEMERAL_SETTING: 3;
    EPHEMERAL_SYNC_RESPONSE: 4;
    HISTORY_SYNC_NOTIFICATION: 5;
  }

  export const PROTOCOL_MESSAGE_TYPE: PROTOCOL_MESSAGE_TYPEMap;
}

export class HistorySyncNotification extends jspb.Message {
  hasFilesha256(): boolean;
  clearFilesha256(): void;
  getFilesha256(): Uint8Array | string;
  getFilesha256_asU8(): Uint8Array;
  getFilesha256_asB64(): string;
  setFilesha256(value: Uint8Array | string): void;

  hasFilelength(): boolean;
  clearFilelength(): void;
  getFilelength(): number | undefined;
  setFilelength(value: number): void;

  hasMediakey(): boolean;
  clearMediakey(): void;
  getMediakey(): Uint8Array | string;
  getMediakey_asU8(): Uint8Array;
  getMediakey_asB64(): string;
  setMediakey(value: Uint8Array | string): void;

  hasFileencsha256(): boolean;
  clearFileencsha256(): void;
  getFileencsha256(): Uint8Array | string;
  getFileencsha256_asU8(): Uint8Array;
  getFileencsha256_asB64(): string;
  setFileencsha256(value: Uint8Array | string): void;

  hasDirectpath(): boolean;
  clearDirectpath(): void;
  getDirectpath(): string | undefined;
  setDirectpath(value: string): void;

  hasSynctype(): boolean;
  clearSynctype(): void;
  getSynctype(): HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPEMap[keyof HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPEMap] | undefined;
  setSynctype(value: HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPEMap[keyof HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPEMap]): void;

  hasChunkorder(): boolean;
  clearChunkorder(): void;
  getChunkorder(): number | undefined;
  setChunkorder(value: number): void;

  hasOriginalmessageid(): boolean;
  clearOriginalmessageid(): void;
  getOriginalmessageid(): string | undefined;
  setOriginalmessageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistorySyncNotification.AsObject;
  static toObject(includeInstance: boolean, msg: HistorySyncNotification): HistorySyncNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HistorySyncNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistorySyncNotification;
  static deserializeBinaryFromReader(message: HistorySyncNotification, reader: jspb.BinaryReader): HistorySyncNotification;
}

export namespace HistorySyncNotification {
  export type AsObject = {
    filesha256: Uint8Array | string,
    filelength?: number,
    mediakey: Uint8Array | string,
    fileencsha256: Uint8Array | string,
    directpath?: string,
    synctype?: HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPEMap[keyof HistorySyncNotification.HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPEMap],
    chunkorder?: number,
    originalmessageid?: string,
  }

  export interface HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPEMap {
    INITIAL_BOOTSTRAP: 0;
    INITIAL_STATUS_V3: 1;
    FULL: 2;
    RECENT: 3;
    RESEND: 4;
  }

  export const HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPE: HISTORY_SYNC_NOTIFICATION_HISTORYSYNCTYPEMap;
}

export class ContactsArrayMessage extends jspb.Message {
  hasDisplayname(): boolean;
  clearDisplayname(): void;
  getDisplayname(): string | undefined;
  setDisplayname(value: string): void;

  clearContactsList(): void;
  getContactsList(): Array<ContactMessage>;
  setContactsList(value: Array<ContactMessage>): void;
  addContacts(value?: ContactMessage, index?: number): ContactMessage;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactsArrayMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ContactsArrayMessage): ContactsArrayMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactsArrayMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactsArrayMessage;
  static deserializeBinaryFromReader(message: ContactsArrayMessage, reader: jspb.BinaryReader): ContactsArrayMessage;
}

export namespace ContactsArrayMessage {
  export type AsObject = {
    displayname?: string,
    contactsList: Array<ContactMessage.AsObject>,
    contextinfo?: ContextInfo.AsObject,
  }
}

export class HSMCurrency extends jspb.Message {
  hasCurrencycode(): boolean;
  clearCurrencycode(): void;
  getCurrencycode(): string | undefined;
  setCurrencycode(value: string): void;

  hasAmount1000(): boolean;
  clearAmount1000(): void;
  getAmount1000(): number | undefined;
  setAmount1000(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HSMCurrency.AsObject;
  static toObject(includeInstance: boolean, msg: HSMCurrency): HSMCurrency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HSMCurrency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HSMCurrency;
  static deserializeBinaryFromReader(message: HSMCurrency, reader: jspb.BinaryReader): HSMCurrency;
}

export namespace HSMCurrency {
  export type AsObject = {
    currencycode?: string,
    amount1000?: number,
  }
}

export class HSMDateTimeComponent extends jspb.Message {
  hasDayofweek(): boolean;
  clearDayofweek(): void;
  getDayofweek(): HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPEMap[keyof HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPEMap] | undefined;
  setDayofweek(value: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPEMap[keyof HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPEMap]): void;

  hasYear(): boolean;
  clearYear(): void;
  getYear(): number | undefined;
  setYear(value: number): void;

  hasMonth(): boolean;
  clearMonth(): void;
  getMonth(): number | undefined;
  setMonth(value: number): void;

  hasDayofmonth(): boolean;
  clearDayofmonth(): void;
  getDayofmonth(): number | undefined;
  setDayofmonth(value: number): void;

  hasHour(): boolean;
  clearHour(): void;
  getHour(): number | undefined;
  setHour(value: number): void;

  hasMinute(): boolean;
  clearMinute(): void;
  getMinute(): number | undefined;
  setMinute(value: number): void;

  hasCalendar(): boolean;
  clearCalendar(): void;
  getCalendar(): HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPEMap[keyof HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPEMap] | undefined;
  setCalendar(value: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPEMap[keyof HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPEMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HSMDateTimeComponent.AsObject;
  static toObject(includeInstance: boolean, msg: HSMDateTimeComponent): HSMDateTimeComponent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HSMDateTimeComponent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HSMDateTimeComponent;
  static deserializeBinaryFromReader(message: HSMDateTimeComponent, reader: jspb.BinaryReader): HSMDateTimeComponent;
}

export namespace HSMDateTimeComponent {
  export type AsObject = {
    dayofweek?: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPEMap[keyof HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPEMap],
    year?: number,
    month?: number,
    dayofmonth?: number,
    hour?: number,
    minute?: number,
    calendar?: HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPEMap[keyof HSMDateTimeComponent.HSM_DATE_TIME_COMPONENT_CALENDARTYPEMap],
  }

  export interface HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPEMap {
    MONDAY: 1;
    TUESDAY: 2;
    WEDNESDAY: 3;
    THURSDAY: 4;
    FRIDAY: 5;
    SATURDAY: 6;
    SUNDAY: 7;
  }

  export const HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPE: HSM_DATE_TIME_COMPONENT_DAYOFWEEKTYPEMap;

  export interface HSM_DATE_TIME_COMPONENT_CALENDARTYPEMap {
    GREGORIAN: 1;
    SOLAR_HIJRI: 2;
  }

  export const HSM_DATE_TIME_COMPONENT_CALENDARTYPE: HSM_DATE_TIME_COMPONENT_CALENDARTYPEMap;
}

export class HSMDateTimeUnixEpoch extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): number | undefined;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HSMDateTimeUnixEpoch.AsObject;
  static toObject(includeInstance: boolean, msg: HSMDateTimeUnixEpoch): HSMDateTimeUnixEpoch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HSMDateTimeUnixEpoch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HSMDateTimeUnixEpoch;
  static deserializeBinaryFromReader(message: HSMDateTimeUnixEpoch, reader: jspb.BinaryReader): HSMDateTimeUnixEpoch;
}

export namespace HSMDateTimeUnixEpoch {
  export type AsObject = {
    timestamp?: number,
  }
}

export class HSMDateTime extends jspb.Message {
  hasComponent(): boolean;
  clearComponent(): void;
  getComponent(): HSMDateTimeComponent | undefined;
  setComponent(value?: HSMDateTimeComponent): void;

  hasUnixepoch(): boolean;
  clearUnixepoch(): void;
  getUnixepoch(): HSMDateTimeUnixEpoch | undefined;
  setUnixepoch(value?: HSMDateTimeUnixEpoch): void;

  getDatetimeoneofCase(): HSMDateTime.DatetimeoneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HSMDateTime.AsObject;
  static toObject(includeInstance: boolean, msg: HSMDateTime): HSMDateTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HSMDateTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HSMDateTime;
  static deserializeBinaryFromReader(message: HSMDateTime, reader: jspb.BinaryReader): HSMDateTime;
}

export namespace HSMDateTime {
  export type AsObject = {
    component?: HSMDateTimeComponent.AsObject,
    unixepoch?: HSMDateTimeUnixEpoch.AsObject,
  }

  export enum DatetimeoneofCase {
    DATETIMEONEOF_NOT_SET = 0,
    COMPONENT = 1,
    UNIXEPOCH = 2,
  }
}

export class HSMLocalizableParameter extends jspb.Message {
  hasDefault(): boolean;
  clearDefault(): void;
  getDefault(): string | undefined;
  setDefault(value: string): void;

  hasCurrency(): boolean;
  clearCurrency(): void;
  getCurrency(): HSMCurrency | undefined;
  setCurrency(value?: HSMCurrency): void;

  hasDatetime(): boolean;
  clearDatetime(): void;
  getDatetime(): HSMDateTime | undefined;
  setDatetime(value?: HSMDateTime): void;

  getParamoneofCase(): HSMLocalizableParameter.ParamoneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HSMLocalizableParameter.AsObject;
  static toObject(includeInstance: boolean, msg: HSMLocalizableParameter): HSMLocalizableParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HSMLocalizableParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HSMLocalizableParameter;
  static deserializeBinaryFromReader(message: HSMLocalizableParameter, reader: jspb.BinaryReader): HSMLocalizableParameter;
}

export namespace HSMLocalizableParameter {
  export type AsObject = {
    pb_default?: string,
    currency?: HSMCurrency.AsObject,
    datetime?: HSMDateTime.AsObject,
  }

  export enum ParamoneofCase {
    PARAMONEOF_NOT_SET = 0,
    CURRENCY = 2,
    DATETIME = 3,
  }
}

export class HighlyStructuredMessage extends jspb.Message {
  hasNamespace(): boolean;
  clearNamespace(): void;
  getNamespace(): string | undefined;
  setNamespace(value: string): void;

  hasElementname(): boolean;
  clearElementname(): void;
  getElementname(): string | undefined;
  setElementname(value: string): void;

  clearParamsList(): void;
  getParamsList(): Array<string>;
  setParamsList(value: Array<string>): void;
  addParams(value: string, index?: number): string;

  hasFallbacklg(): boolean;
  clearFallbacklg(): void;
  getFallbacklg(): string | undefined;
  setFallbacklg(value: string): void;

  hasFallbacklc(): boolean;
  clearFallbacklc(): void;
  getFallbacklc(): string | undefined;
  setFallbacklc(value: string): void;

  clearLocalizableparamsList(): void;
  getLocalizableparamsList(): Array<HSMLocalizableParameter>;
  setLocalizableparamsList(value: Array<HSMLocalizableParameter>): void;
  addLocalizableparams(value?: HSMLocalizableParameter, index?: number): HSMLocalizableParameter;

  hasDeterministiclg(): boolean;
  clearDeterministiclg(): void;
  getDeterministiclg(): string | undefined;
  setDeterministiclg(value: string): void;

  hasDeterministiclc(): boolean;
  clearDeterministiclc(): void;
  getDeterministiclc(): string | undefined;
  setDeterministiclc(value: string): void;

  hasHydratedhsm(): boolean;
  clearHydratedhsm(): void;
  getHydratedhsm(): TemplateMessage | undefined;
  setHydratedhsm(value?: TemplateMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HighlyStructuredMessage.AsObject;
  static toObject(includeInstance: boolean, msg: HighlyStructuredMessage): HighlyStructuredMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HighlyStructuredMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HighlyStructuredMessage;
  static deserializeBinaryFromReader(message: HighlyStructuredMessage, reader: jspb.BinaryReader): HighlyStructuredMessage;
}

export namespace HighlyStructuredMessage {
  export type AsObject = {
    namespace?: string,
    elementname?: string,
    paramsList: Array<string>,
    fallbacklg?: string,
    fallbacklc?: string,
    localizableparamsList: Array<HSMLocalizableParameter.AsObject>,
    deterministiclg?: string,
    deterministiclc?: string,
    hydratedhsm?: TemplateMessage.AsObject,
  }
}

export class SendPaymentMessage extends jspb.Message {
  hasNotemessage(): boolean;
  clearNotemessage(): void;
  getNotemessage(): Message | undefined;
  setNotemessage(value?: Message): void;

  hasRequestmessagekey(): boolean;
  clearRequestmessagekey(): void;
  getRequestmessagekey(): MessageKey | undefined;
  setRequestmessagekey(value?: MessageKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPaymentMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SendPaymentMessage): SendPaymentMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendPaymentMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPaymentMessage;
  static deserializeBinaryFromReader(message: SendPaymentMessage, reader: jspb.BinaryReader): SendPaymentMessage;
}

export namespace SendPaymentMessage {
  export type AsObject = {
    notemessage?: Message.AsObject,
    requestmessagekey?: MessageKey.AsObject,
  }
}

export class RequestPaymentMessage extends jspb.Message {
  hasNotemessage(): boolean;
  clearNotemessage(): void;
  getNotemessage(): Message | undefined;
  setNotemessage(value?: Message): void;

  hasCurrencycodeiso4217(): boolean;
  clearCurrencycodeiso4217(): void;
  getCurrencycodeiso4217(): string | undefined;
  setCurrencycodeiso4217(value: string): void;

  hasAmount1000(): boolean;
  clearAmount1000(): void;
  getAmount1000(): number | undefined;
  setAmount1000(value: number): void;

  hasRequestfrom(): boolean;
  clearRequestfrom(): void;
  getRequestfrom(): string | undefined;
  setRequestfrom(value: string): void;

  hasExpirytimestamp(): boolean;
  clearExpirytimestamp(): void;
  getExpirytimestamp(): number | undefined;
  setExpirytimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPaymentMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPaymentMessage): RequestPaymentMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestPaymentMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPaymentMessage;
  static deserializeBinaryFromReader(message: RequestPaymentMessage, reader: jspb.BinaryReader): RequestPaymentMessage;
}

export namespace RequestPaymentMessage {
  export type AsObject = {
    notemessage?: Message.AsObject,
    currencycodeiso4217?: string,
    amount1000?: number,
    requestfrom?: string,
    expirytimestamp?: number,
  }
}

export class DeclinePaymentRequestMessage extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): MessageKey | undefined;
  setKey(value?: MessageKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclinePaymentRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeclinePaymentRequestMessage): DeclinePaymentRequestMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeclinePaymentRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclinePaymentRequestMessage;
  static deserializeBinaryFromReader(message: DeclinePaymentRequestMessage, reader: jspb.BinaryReader): DeclinePaymentRequestMessage;
}

export namespace DeclinePaymentRequestMessage {
  export type AsObject = {
    key?: MessageKey.AsObject,
  }
}

export class CancelPaymentRequestMessage extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): MessageKey | undefined;
  setKey(value?: MessageKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelPaymentRequestMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CancelPaymentRequestMessage): CancelPaymentRequestMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelPaymentRequestMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelPaymentRequestMessage;
  static deserializeBinaryFromReader(message: CancelPaymentRequestMessage, reader: jspb.BinaryReader): CancelPaymentRequestMessage;
}

export namespace CancelPaymentRequestMessage {
  export type AsObject = {
    key?: MessageKey.AsObject,
  }
}

export class LiveLocationMessage extends jspb.Message {
  hasDegreeslatitude(): boolean;
  clearDegreeslatitude(): void;
  getDegreeslatitude(): number | undefined;
  setDegreeslatitude(value: number): void;

  hasDegreeslongitude(): boolean;
  clearDegreeslongitude(): void;
  getDegreeslongitude(): number | undefined;
  setDegreeslongitude(value: number): void;

  hasAccuracyinmeters(): boolean;
  clearAccuracyinmeters(): void;
  getAccuracyinmeters(): number | undefined;
  setAccuracyinmeters(value: number): void;

  hasSpeedinmps(): boolean;
  clearSpeedinmps(): void;
  getSpeedinmps(): number | undefined;
  setSpeedinmps(value: number): void;

  hasDegreesclockwisefrommagneticnorth(): boolean;
  clearDegreesclockwisefrommagneticnorth(): void;
  getDegreesclockwisefrommagneticnorth(): number | undefined;
  setDegreesclockwisefrommagneticnorth(value: number): void;

  hasCaption(): boolean;
  clearCaption(): void;
  getCaption(): string | undefined;
  setCaption(value: string): void;

  hasSequencenumber(): boolean;
  clearSequencenumber(): void;
  getSequencenumber(): number | undefined;
  setSequencenumber(value: number): void;

  hasTimeoffset(): boolean;
  clearTimeoffset(): void;
  getTimeoffset(): number | undefined;
  setTimeoffset(value: number): void;

  hasJpegthumbnail(): boolean;
  clearJpegthumbnail(): void;
  getJpegthumbnail(): Uint8Array | string;
  getJpegthumbnail_asU8(): Uint8Array;
  getJpegthumbnail_asB64(): string;
  setJpegthumbnail(value: Uint8Array | string): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiveLocationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LiveLocationMessage): LiveLocationMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiveLocationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiveLocationMessage;
  static deserializeBinaryFromReader(message: LiveLocationMessage, reader: jspb.BinaryReader): LiveLocationMessage;
}

export namespace LiveLocationMessage {
  export type AsObject = {
    degreeslatitude?: number,
    degreeslongitude?: number,
    accuracyinmeters?: number,
    speedinmps?: number,
    degreesclockwisefrommagneticnorth?: number,
    caption?: string,
    sequencenumber?: number,
    timeoffset?: number,
    jpegthumbnail: Uint8Array | string,
    contextinfo?: ContextInfo.AsObject,
  }
}

export class StickerMessage extends jspb.Message {
  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string | undefined;
  setUrl(value: string): void;

  hasFilesha256(): boolean;
  clearFilesha256(): void;
  getFilesha256(): Uint8Array | string;
  getFilesha256_asU8(): Uint8Array;
  getFilesha256_asB64(): string;
  setFilesha256(value: Uint8Array | string): void;

  hasFileencsha256(): boolean;
  clearFileencsha256(): void;
  getFileencsha256(): Uint8Array | string;
  getFileencsha256_asU8(): Uint8Array;
  getFileencsha256_asB64(): string;
  setFileencsha256(value: Uint8Array | string): void;

  hasMediakey(): boolean;
  clearMediakey(): void;
  getMediakey(): Uint8Array | string;
  getMediakey_asU8(): Uint8Array;
  getMediakey_asB64(): string;
  setMediakey(value: Uint8Array | string): void;

  hasMimetype(): boolean;
  clearMimetype(): void;
  getMimetype(): string | undefined;
  setMimetype(value: string): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): number | undefined;
  setHeight(value: number): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): number | undefined;
  setWidth(value: number): void;

  hasDirectpath(): boolean;
  clearDirectpath(): void;
  getDirectpath(): string | undefined;
  setDirectpath(value: string): void;

  hasFilelength(): boolean;
  clearFilelength(): void;
  getFilelength(): number | undefined;
  setFilelength(value: number): void;

  hasMediakeytimestamp(): boolean;
  clearMediakeytimestamp(): void;
  getMediakeytimestamp(): number | undefined;
  setMediakeytimestamp(value: number): void;

  hasFirstframelength(): boolean;
  clearFirstframelength(): void;
  getFirstframelength(): number | undefined;
  setFirstframelength(value: number): void;

  hasFirstframesidecar(): boolean;
  clearFirstframesidecar(): void;
  getFirstframesidecar(): Uint8Array | string;
  getFirstframesidecar_asU8(): Uint8Array;
  getFirstframesidecar_asB64(): string;
  setFirstframesidecar(value: Uint8Array | string): void;

  hasIsanimated(): boolean;
  clearIsanimated(): void;
  getIsanimated(): boolean | undefined;
  setIsanimated(value: boolean): void;

  hasPngthumbnail(): boolean;
  clearPngthumbnail(): void;
  getPngthumbnail(): Uint8Array | string;
  getPngthumbnail_asU8(): Uint8Array;
  getPngthumbnail_asB64(): string;
  setPngthumbnail(value: Uint8Array | string): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StickerMessage.AsObject;
  static toObject(includeInstance: boolean, msg: StickerMessage): StickerMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StickerMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StickerMessage;
  static deserializeBinaryFromReader(message: StickerMessage, reader: jspb.BinaryReader): StickerMessage;
}

export namespace StickerMessage {
  export type AsObject = {
    url?: string,
    filesha256: Uint8Array | string,
    fileencsha256: Uint8Array | string,
    mediakey: Uint8Array | string,
    mimetype?: string,
    height?: number,
    width?: number,
    directpath?: string,
    filelength?: number,
    mediakeytimestamp?: number,
    firstframelength?: number,
    firstframesidecar: Uint8Array | string,
    isanimated?: boolean,
    pngthumbnail: Uint8Array | string,
    contextinfo?: ContextInfo.AsObject,
  }
}

export class FourRowTemplate extends jspb.Message {
  hasContent(): boolean;
  clearContent(): void;
  getContent(): HighlyStructuredMessage | undefined;
  setContent(value?: HighlyStructuredMessage): void;

  hasFooter(): boolean;
  clearFooter(): void;
  getFooter(): HighlyStructuredMessage | undefined;
  setFooter(value?: HighlyStructuredMessage): void;

  clearButtonsList(): void;
  getButtonsList(): Array<TemplateButton>;
  setButtonsList(value: Array<TemplateButton>): void;
  addButtons(value?: TemplateButton, index?: number): TemplateButton;

  hasDocumentmessage(): boolean;
  clearDocumentmessage(): void;
  getDocumentmessage(): DocumentMessage | undefined;
  setDocumentmessage(value?: DocumentMessage): void;

  hasHighlystructuredmessage(): boolean;
  clearHighlystructuredmessage(): void;
  getHighlystructuredmessage(): HighlyStructuredMessage | undefined;
  setHighlystructuredmessage(value?: HighlyStructuredMessage): void;

  hasImagemessage(): boolean;
  clearImagemessage(): void;
  getImagemessage(): ImageMessage | undefined;
  setImagemessage(value?: ImageMessage): void;

  hasVideomessage(): boolean;
  clearVideomessage(): void;
  getVideomessage(): VideoMessage | undefined;
  setVideomessage(value?: VideoMessage): void;

  hasLocationmessage(): boolean;
  clearLocationmessage(): void;
  getLocationmessage(): LocationMessage | undefined;
  setLocationmessage(value?: LocationMessage): void;

  getTitleCase(): FourRowTemplate.TitleCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FourRowTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: FourRowTemplate): FourRowTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FourRowTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FourRowTemplate;
  static deserializeBinaryFromReader(message: FourRowTemplate, reader: jspb.BinaryReader): FourRowTemplate;
}

export namespace FourRowTemplate {
  export type AsObject = {
    content?: HighlyStructuredMessage.AsObject,
    footer?: HighlyStructuredMessage.AsObject,
    buttonsList: Array<TemplateButton.AsObject>,
    documentmessage?: DocumentMessage.AsObject,
    highlystructuredmessage?: HighlyStructuredMessage.AsObject,
    imagemessage?: ImageMessage.AsObject,
    videomessage?: VideoMessage.AsObject,
    locationmessage?: LocationMessage.AsObject,
  }

  export enum TitleCase {
    TITLE_NOT_SET = 0,
    DOCUMENTMESSAGE = 1,
    HIGHLYSTRUCTUREDMESSAGE = 2,
    IMAGEMESSAGE = 3,
    VIDEOMESSAGE = 4,
    LOCATIONMESSAGE = 5,
  }
}

export class HydratedFourRowTemplate extends jspb.Message {
  hasHydratedcontenttext(): boolean;
  clearHydratedcontenttext(): void;
  getHydratedcontenttext(): string | undefined;
  setHydratedcontenttext(value: string): void;

  hasHydratedfootertext(): boolean;
  clearHydratedfootertext(): void;
  getHydratedfootertext(): string | undefined;
  setHydratedfootertext(value: string): void;

  clearHydratedbuttonsList(): void;
  getHydratedbuttonsList(): Array<HydratedTemplateButton>;
  setHydratedbuttonsList(value: Array<HydratedTemplateButton>): void;
  addHydratedbuttons(value?: HydratedTemplateButton, index?: number): HydratedTemplateButton;

  hasTemplateid(): boolean;
  clearTemplateid(): void;
  getTemplateid(): string | undefined;
  setTemplateid(value: string): void;

  hasDocumentmessage(): boolean;
  clearDocumentmessage(): void;
  getDocumentmessage(): DocumentMessage | undefined;
  setDocumentmessage(value?: DocumentMessage): void;

  hasHydratedtitletext(): boolean;
  clearHydratedtitletext(): void;
  getHydratedtitletext(): string | undefined;
  setHydratedtitletext(value: string): void;

  hasImagemessage(): boolean;
  clearImagemessage(): void;
  getImagemessage(): ImageMessage | undefined;
  setImagemessage(value?: ImageMessage): void;

  hasVideomessage(): boolean;
  clearVideomessage(): void;
  getVideomessage(): VideoMessage | undefined;
  setVideomessage(value?: VideoMessage): void;

  hasLocationmessage(): boolean;
  clearLocationmessage(): void;
  getLocationmessage(): LocationMessage | undefined;
  setLocationmessage(value?: LocationMessage): void;

  getTitleCase(): HydratedFourRowTemplate.TitleCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HydratedFourRowTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: HydratedFourRowTemplate): HydratedFourRowTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HydratedFourRowTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HydratedFourRowTemplate;
  static deserializeBinaryFromReader(message: HydratedFourRowTemplate, reader: jspb.BinaryReader): HydratedFourRowTemplate;
}

export namespace HydratedFourRowTemplate {
  export type AsObject = {
    hydratedcontenttext?: string,
    hydratedfootertext?: string,
    hydratedbuttonsList: Array<HydratedTemplateButton.AsObject>,
    templateid?: string,
    documentmessage?: DocumentMessage.AsObject,
    hydratedtitletext?: string,
    imagemessage?: ImageMessage.AsObject,
    videomessage?: VideoMessage.AsObject,
    locationmessage?: LocationMessage.AsObject,
  }

  export enum TitleCase {
    TITLE_NOT_SET = 0,
    DOCUMENTMESSAGE = 1,
    HYDRATEDTITLETEXT = 2,
    IMAGEMESSAGE = 3,
    VIDEOMESSAGE = 4,
    LOCATIONMESSAGE = 5,
  }
}

export class TemplateMessage extends jspb.Message {
  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  hasHydratedtemplate(): boolean;
  clearHydratedtemplate(): void;
  getHydratedtemplate(): HydratedFourRowTemplate | undefined;
  setHydratedtemplate(value?: HydratedFourRowTemplate): void;

  hasFourrowtemplate(): boolean;
  clearFourrowtemplate(): void;
  getFourrowtemplate(): FourRowTemplate | undefined;
  setFourrowtemplate(value?: FourRowTemplate): void;

  hasHydratedfourrowtemplate(): boolean;
  clearHydratedfourrowtemplate(): void;
  getHydratedfourrowtemplate(): HydratedFourRowTemplate | undefined;
  setHydratedfourrowtemplate(value?: HydratedFourRowTemplate): void;

  getFormatCase(): TemplateMessage.FormatCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateMessage): TemplateMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateMessage;
  static deserializeBinaryFromReader(message: TemplateMessage, reader: jspb.BinaryReader): TemplateMessage;
}

export namespace TemplateMessage {
  export type AsObject = {
    contextinfo?: ContextInfo.AsObject,
    hydratedtemplate?: HydratedFourRowTemplate.AsObject,
    fourrowtemplate?: FourRowTemplate.AsObject,
    hydratedfourrowtemplate?: HydratedFourRowTemplate.AsObject,
  }

  export enum FormatCase {
    FORMAT_NOT_SET = 0,
    FOURROWTEMPLATE = 1,
    HYDRATEDFOURROWTEMPLATE = 2,
  }
}

export class TemplateButtonReplyMessage extends jspb.Message {
  hasSelectedid(): boolean;
  clearSelectedid(): void;
  getSelectedid(): string | undefined;
  setSelectedid(value: string): void;

  hasSelecteddisplaytext(): boolean;
  clearSelecteddisplaytext(): void;
  getSelecteddisplaytext(): string | undefined;
  setSelecteddisplaytext(value: string): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  hasSelectedindex(): boolean;
  clearSelectedindex(): void;
  getSelectedindex(): number | undefined;
  setSelectedindex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateButtonReplyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateButtonReplyMessage): TemplateButtonReplyMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateButtonReplyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateButtonReplyMessage;
  static deserializeBinaryFromReader(message: TemplateButtonReplyMessage, reader: jspb.BinaryReader): TemplateButtonReplyMessage;
}

export namespace TemplateButtonReplyMessage {
  export type AsObject = {
    selectedid?: string,
    selecteddisplaytext?: string,
    contextinfo?: ContextInfo.AsObject,
    selectedindex?: number,
  }
}

export class CatalogSnapshot extends jspb.Message {
  hasCatalogimage(): boolean;
  clearCatalogimage(): void;
  getCatalogimage(): ImageMessage | undefined;
  setCatalogimage(value?: ImageMessage): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string | undefined;
  setTitle(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CatalogSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: CatalogSnapshot): CatalogSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CatalogSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CatalogSnapshot;
  static deserializeBinaryFromReader(message: CatalogSnapshot, reader: jspb.BinaryReader): CatalogSnapshot;
}

export namespace CatalogSnapshot {
  export type AsObject = {
    catalogimage?: ImageMessage.AsObject,
    title?: string,
    description?: string,
  }
}

export class ProductSnapshot extends jspb.Message {
  hasProductimage(): boolean;
  clearProductimage(): void;
  getProductimage(): ImageMessage | undefined;
  setProductimage(value?: ImageMessage): void;

  hasProductid(): boolean;
  clearProductid(): void;
  getProductid(): string | undefined;
  setProductid(value: string): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string | undefined;
  setTitle(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string | undefined;
  setDescription(value: string): void;

  hasCurrencycode(): boolean;
  clearCurrencycode(): void;
  getCurrencycode(): string | undefined;
  setCurrencycode(value: string): void;

  hasPriceamount1000(): boolean;
  clearPriceamount1000(): void;
  getPriceamount1000(): number | undefined;
  setPriceamount1000(value: number): void;

  hasRetailerid(): boolean;
  clearRetailerid(): void;
  getRetailerid(): string | undefined;
  setRetailerid(value: string): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string | undefined;
  setUrl(value: string): void;

  hasProductimagecount(): boolean;
  clearProductimagecount(): void;
  getProductimagecount(): number | undefined;
  setProductimagecount(value: number): void;

  hasFirstimageid(): boolean;
  clearFirstimageid(): void;
  getFirstimageid(): string | undefined;
  setFirstimageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSnapshot): ProductSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductSnapshot;
  static deserializeBinaryFromReader(message: ProductSnapshot, reader: jspb.BinaryReader): ProductSnapshot;
}

export namespace ProductSnapshot {
  export type AsObject = {
    productimage?: ImageMessage.AsObject,
    productid?: string,
    title?: string,
    description?: string,
    currencycode?: string,
    priceamount1000?: number,
    retailerid?: string,
    url?: string,
    productimagecount?: number,
    firstimageid?: string,
  }
}

export class ProductMessage extends jspb.Message {
  hasProduct(): boolean;
  clearProduct(): void;
  getProduct(): ProductSnapshot | undefined;
  setProduct(value?: ProductSnapshot): void;

  hasBusinessownerjid(): boolean;
  clearBusinessownerjid(): void;
  getBusinessownerjid(): string | undefined;
  setBusinessownerjid(value: string): void;

  hasCatalog(): boolean;
  clearCatalog(): void;
  getCatalog(): CatalogSnapshot | undefined;
  setCatalog(value?: CatalogSnapshot): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ProductMessage): ProductMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductMessage;
  static deserializeBinaryFromReader(message: ProductMessage, reader: jspb.BinaryReader): ProductMessage;
}

export namespace ProductMessage {
  export type AsObject = {
    product?: ProductSnapshot.AsObject,
    businessownerjid?: string,
    catalog?: CatalogSnapshot.AsObject,
    contextinfo?: ContextInfo.AsObject,
  }
}

export class GroupInviteMessage extends jspb.Message {
  hasGroupjid(): boolean;
  clearGroupjid(): void;
  getGroupjid(): string | undefined;
  setGroupjid(value: string): void;

  hasInvitecode(): boolean;
  clearInvitecode(): void;
  getInvitecode(): string | undefined;
  setInvitecode(value: string): void;

  hasInviteexpiration(): boolean;
  clearInviteexpiration(): void;
  getInviteexpiration(): number | undefined;
  setInviteexpiration(value: number): void;

  hasGroupname(): boolean;
  clearGroupname(): void;
  getGroupname(): string | undefined;
  setGroupname(value: string): void;

  hasJpegthumbnail(): boolean;
  clearJpegthumbnail(): void;
  getJpegthumbnail(): Uint8Array | string;
  getJpegthumbnail_asU8(): Uint8Array;
  getJpegthumbnail_asB64(): string;
  setJpegthumbnail(value: Uint8Array | string): void;

  hasCaption(): boolean;
  clearCaption(): void;
  getCaption(): string | undefined;
  setCaption(value: string): void;

  hasContextinfo(): boolean;
  clearContextinfo(): void;
  getContextinfo(): ContextInfo | undefined;
  setContextinfo(value?: ContextInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupInviteMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GroupInviteMessage): GroupInviteMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupInviteMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupInviteMessage;
  static deserializeBinaryFromReader(message: GroupInviteMessage, reader: jspb.BinaryReader): GroupInviteMessage;
}

export namespace GroupInviteMessage {
  export type AsObject = {
    groupjid?: string,
    invitecode?: string,
    inviteexpiration?: number,
    groupname?: string,
    jpegthumbnail: Uint8Array | string,
    caption?: string,
    contextinfo?: ContextInfo.AsObject,
  }
}

export class DeviceSentMessage extends jspb.Message {
  hasDestinationjid(): boolean;
  clearDestinationjid(): void;
  getDestinationjid(): string | undefined;
  setDestinationjid(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  hasPhash(): boolean;
  clearPhash(): void;
  getPhash(): string | undefined;
  setPhash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceSentMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceSentMessage): DeviceSentMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceSentMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceSentMessage;
  static deserializeBinaryFromReader(message: DeviceSentMessage, reader: jspb.BinaryReader): DeviceSentMessage;
}

export namespace DeviceSentMessage {
  export type AsObject = {
    destinationjid?: string,
    message?: Message.AsObject,
    phash?: string,
  }
}

export class Message extends jspb.Message {
  hasConversation(): boolean;
  clearConversation(): void;
  getConversation(): string | undefined;
  setConversation(value: string): void;

  hasSenderkeydistributionmessage(): boolean;
  clearSenderkeydistributionmessage(): void;
  getSenderkeydistributionmessage(): SenderKeyDistributionMessage | undefined;
  setSenderkeydistributionmessage(value?: SenderKeyDistributionMessage): void;

  hasImagemessage(): boolean;
  clearImagemessage(): void;
  getImagemessage(): ImageMessage | undefined;
  setImagemessage(value?: ImageMessage): void;

  hasContactmessage(): boolean;
  clearContactmessage(): void;
  getContactmessage(): ContactMessage | undefined;
  setContactmessage(value?: ContactMessage): void;

  hasLocationmessage(): boolean;
  clearLocationmessage(): void;
  getLocationmessage(): LocationMessage | undefined;
  setLocationmessage(value?: LocationMessage): void;

  hasExtendedtextmessage(): boolean;
  clearExtendedtextmessage(): void;
  getExtendedtextmessage(): ExtendedTextMessage | undefined;
  setExtendedtextmessage(value?: ExtendedTextMessage): void;

  hasDocumentmessage(): boolean;
  clearDocumentmessage(): void;
  getDocumentmessage(): DocumentMessage | undefined;
  setDocumentmessage(value?: DocumentMessage): void;

  hasAudiomessage(): boolean;
  clearAudiomessage(): void;
  getAudiomessage(): AudioMessage | undefined;
  setAudiomessage(value?: AudioMessage): void;

  hasVideomessage(): boolean;
  clearVideomessage(): void;
  getVideomessage(): VideoMessage | undefined;
  setVideomessage(value?: VideoMessage): void;

  hasCall(): boolean;
  clearCall(): void;
  getCall(): Call | undefined;
  setCall(value?: Call): void;

  hasChat(): boolean;
  clearChat(): void;
  getChat(): Chat | undefined;
  setChat(value?: Chat): void;

  hasProtocolmessage(): boolean;
  clearProtocolmessage(): void;
  getProtocolmessage(): ProtocolMessage | undefined;
  setProtocolmessage(value?: ProtocolMessage): void;

  hasContactsarraymessage(): boolean;
  clearContactsarraymessage(): void;
  getContactsarraymessage(): ContactsArrayMessage | undefined;
  setContactsarraymessage(value?: ContactsArrayMessage): void;

  hasHighlystructuredmessage(): boolean;
  clearHighlystructuredmessage(): void;
  getHighlystructuredmessage(): HighlyStructuredMessage | undefined;
  setHighlystructuredmessage(value?: HighlyStructuredMessage): void;

  hasFastratchetkeysenderkeydistributionmessage(): boolean;
  clearFastratchetkeysenderkeydistributionmessage(): void;
  getFastratchetkeysenderkeydistributionmessage(): SenderKeyDistributionMessage | undefined;
  setFastratchetkeysenderkeydistributionmessage(value?: SenderKeyDistributionMessage): void;

  hasSendpaymentmessage(): boolean;
  clearSendpaymentmessage(): void;
  getSendpaymentmessage(): SendPaymentMessage | undefined;
  setSendpaymentmessage(value?: SendPaymentMessage): void;

  hasLivelocationmessage(): boolean;
  clearLivelocationmessage(): void;
  getLivelocationmessage(): LiveLocationMessage | undefined;
  setLivelocationmessage(value?: LiveLocationMessage): void;

  hasRequestpaymentmessage(): boolean;
  clearRequestpaymentmessage(): void;
  getRequestpaymentmessage(): RequestPaymentMessage | undefined;
  setRequestpaymentmessage(value?: RequestPaymentMessage): void;

  hasDeclinepaymentrequestmessage(): boolean;
  clearDeclinepaymentrequestmessage(): void;
  getDeclinepaymentrequestmessage(): DeclinePaymentRequestMessage | undefined;
  setDeclinepaymentrequestmessage(value?: DeclinePaymentRequestMessage): void;

  hasCancelpaymentrequestmessage(): boolean;
  clearCancelpaymentrequestmessage(): void;
  getCancelpaymentrequestmessage(): CancelPaymentRequestMessage | undefined;
  setCancelpaymentrequestmessage(value?: CancelPaymentRequestMessage): void;

  hasTemplatemessage(): boolean;
  clearTemplatemessage(): void;
  getTemplatemessage(): TemplateMessage | undefined;
  setTemplatemessage(value?: TemplateMessage): void;

  hasStickermessage(): boolean;
  clearStickermessage(): void;
  getStickermessage(): StickerMessage | undefined;
  setStickermessage(value?: StickerMessage): void;

  hasGroupinvitemessage(): boolean;
  clearGroupinvitemessage(): void;
  getGroupinvitemessage(): GroupInviteMessage | undefined;
  setGroupinvitemessage(value?: GroupInviteMessage): void;

  hasTemplatebuttonreplymessage(): boolean;
  clearTemplatebuttonreplymessage(): void;
  getTemplatebuttonreplymessage(): TemplateButtonReplyMessage | undefined;
  setTemplatebuttonreplymessage(value?: TemplateButtonReplyMessage): void;

  hasProductmessage(): boolean;
  clearProductmessage(): void;
  getProductmessage(): ProductMessage | undefined;
  setProductmessage(value?: ProductMessage): void;

  hasDevicesentmessage(): boolean;
  clearDevicesentmessage(): void;
  getDevicesentmessage(): DeviceSentMessage | undefined;
  setDevicesentmessage(value?: DeviceSentMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    conversation?: string,
    senderkeydistributionmessage?: SenderKeyDistributionMessage.AsObject,
    imagemessage?: ImageMessage.AsObject,
    contactmessage?: ContactMessage.AsObject,
    locationmessage?: LocationMessage.AsObject,
    extendedtextmessage?: ExtendedTextMessage.AsObject,
    documentmessage?: DocumentMessage.AsObject,
    audiomessage?: AudioMessage.AsObject,
    videomessage?: VideoMessage.AsObject,
    call?: Call.AsObject,
    chat?: Chat.AsObject,
    protocolmessage?: ProtocolMessage.AsObject,
    contactsarraymessage?: ContactsArrayMessage.AsObject,
    highlystructuredmessage?: HighlyStructuredMessage.AsObject,
    fastratchetkeysenderkeydistributionmessage?: SenderKeyDistributionMessage.AsObject,
    sendpaymentmessage?: SendPaymentMessage.AsObject,
    livelocationmessage?: LiveLocationMessage.AsObject,
    requestpaymentmessage?: RequestPaymentMessage.AsObject,
    declinepaymentrequestmessage?: DeclinePaymentRequestMessage.AsObject,
    cancelpaymentrequestmessage?: CancelPaymentRequestMessage.AsObject,
    templatemessage?: TemplateMessage.AsObject,
    stickermessage?: StickerMessage.AsObject,
    groupinvitemessage?: GroupInviteMessage.AsObject,
    templatebuttonreplymessage?: TemplateButtonReplyMessage.AsObject,
    productmessage?: ProductMessage.AsObject,
    devicesentmessage?: DeviceSentMessage.AsObject,
  }
}

export class MessageKey extends jspb.Message {
  hasRemotejid(): boolean;
  clearRemotejid(): void;
  getRemotejid(): string | undefined;
  setRemotejid(value: string): void;

  hasFromme(): boolean;
  clearFromme(): void;
  getFromme(): boolean | undefined;
  setFromme(value: boolean): void;

  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasParticipant(): boolean;
  clearParticipant(): void;
  getParticipant(): string | undefined;
  setParticipant(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageKey.AsObject;
  static toObject(includeInstance: boolean, msg: MessageKey): MessageKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageKey;
  static deserializeBinaryFromReader(message: MessageKey, reader: jspb.BinaryReader): MessageKey;
}

export namespace MessageKey {
  export type AsObject = {
    remotejid?: string,
    fromme?: boolean,
    id?: string,
    participant?: string,
  }
}

export class WebFeatures extends jspb.Message {
  hasLabelsdisplay(): boolean;
  clearLabelsdisplay(): void;
  getLabelsdisplay(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setLabelsdisplay(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasVoipindividualoutgoing(): boolean;
  clearVoipindividualoutgoing(): void;
  getVoipindividualoutgoing(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setVoipindividualoutgoing(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasGroupsv3(): boolean;
  clearGroupsv3(): void;
  getGroupsv3(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setGroupsv3(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasGroupsv3create(): boolean;
  clearGroupsv3create(): void;
  getGroupsv3create(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setGroupsv3create(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasChangenumberv2(): boolean;
  clearChangenumberv2(): void;
  getChangenumberv2(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setChangenumberv2(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasQuerystatusv3thumbnail(): boolean;
  clearQuerystatusv3thumbnail(): void;
  getQuerystatusv3thumbnail(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setQuerystatusv3thumbnail(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasLivelocations(): boolean;
  clearLivelocations(): void;
  getLivelocations(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setLivelocations(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasQueryvname(): boolean;
  clearQueryvname(): void;
  getQueryvname(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setQueryvname(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasVoipindividualincoming(): boolean;
  clearVoipindividualincoming(): void;
  getVoipindividualincoming(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setVoipindividualincoming(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasQuickrepliesquery(): boolean;
  clearQuickrepliesquery(): void;
  getQuickrepliesquery(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setQuickrepliesquery(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasPayments(): boolean;
  clearPayments(): void;
  getPayments(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setPayments(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasStickerpackquery(): boolean;
  clearStickerpackquery(): void;
  getStickerpackquery(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setStickerpackquery(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasLivelocationsfinal(): boolean;
  clearLivelocationsfinal(): void;
  getLivelocationsfinal(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setLivelocationsfinal(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasLabelsedit(): boolean;
  clearLabelsedit(): void;
  getLabelsedit(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setLabelsedit(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasMediaupload(): boolean;
  clearMediaupload(): void;
  getMediaupload(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setMediaupload(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasMediauploadrichquickreplies(): boolean;
  clearMediauploadrichquickreplies(): void;
  getMediauploadrichquickreplies(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setMediauploadrichquickreplies(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasVnamev2(): boolean;
  clearVnamev2(): void;
  getVnamev2(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setVnamev2(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasVideoplaybackurl(): boolean;
  clearVideoplaybackurl(): void;
  getVideoplaybackurl(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setVideoplaybackurl(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasStatusranking(): boolean;
  clearStatusranking(): void;
  getStatusranking(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setStatusranking(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasVoipindividualvideo(): boolean;
  clearVoipindividualvideo(): void;
  getVoipindividualvideo(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setVoipindividualvideo(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasThirdpartystickers(): boolean;
  clearThirdpartystickers(): void;
  getThirdpartystickers(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setThirdpartystickers(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasFrequentlyforwardedsetting(): boolean;
  clearFrequentlyforwardedsetting(): void;
  getFrequentlyforwardedsetting(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setFrequentlyforwardedsetting(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasGroupsv4joinpermission(): boolean;
  clearGroupsv4joinpermission(): void;
  getGroupsv4joinpermission(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setGroupsv4joinpermission(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasRecentstickers(): boolean;
  clearRecentstickers(): void;
  getRecentstickers(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setRecentstickers(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasCatalog(): boolean;
  clearCatalog(): void;
  getCatalog(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setCatalog(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasStarredstickers(): boolean;
  clearStarredstickers(): void;
  getStarredstickers(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setStarredstickers(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasVoipgroupcall(): boolean;
  clearVoipgroupcall(): void;
  getVoipgroupcall(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setVoipgroupcall(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasTemplatemessage(): boolean;
  clearTemplatemessage(): void;
  getTemplatemessage(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setTemplatemessage(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasTemplatemessageinteractivity(): boolean;
  clearTemplatemessageinteractivity(): void;
  getTemplatemessageinteractivity(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setTemplatemessageinteractivity(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasEphemeralmessages(): boolean;
  clearEphemeralmessages(): void;
  getEphemeralmessages(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setEphemeralmessages(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasE2enotificationsync(): boolean;
  clearE2enotificationsync(): void;
  getE2enotificationsync(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setE2enotificationsync(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasRecentstickersv2(): boolean;
  clearRecentstickersv2(): void;
  getRecentstickersv2(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setRecentstickersv2(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  hasSyncdrelease1(): boolean;
  clearSyncdrelease1(): void;
  getSyncdrelease1(): WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap] | undefined;
  setSyncdrelease1(value: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebFeatures.AsObject;
  static toObject(includeInstance: boolean, msg: WebFeatures): WebFeatures.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebFeatures, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebFeatures;
  static deserializeBinaryFromReader(message: WebFeatures, reader: jspb.BinaryReader): WebFeatures;
}

export namespace WebFeatures {
  export type AsObject = {
    labelsdisplay?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    voipindividualoutgoing?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    groupsv3?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    groupsv3create?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    changenumberv2?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    querystatusv3thumbnail?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    livelocations?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    queryvname?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    voipindividualincoming?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    quickrepliesquery?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    payments?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    stickerpackquery?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    livelocationsfinal?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    labelsedit?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    mediaupload?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    mediauploadrichquickreplies?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    vnamev2?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    videoplaybackurl?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    statusranking?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    voipindividualvideo?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    thirdpartystickers?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    frequentlyforwardedsetting?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    groupsv4joinpermission?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    recentstickers?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    catalog?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    starredstickers?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    voipgroupcall?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    templatemessage?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    templatemessageinteractivity?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    ephemeralmessages?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    e2enotificationsync?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    recentstickersv2?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
    syncdrelease1?: WebFeatures.WEB_FEATURES_FLAGMap[keyof WebFeatures.WEB_FEATURES_FLAGMap],
  }

  export interface WEB_FEATURES_FLAGMap {
    NOT_STARTED: 0;
    FORCE_UPGRADE: 1;
    DEVELOPMENT: 2;
    PRODUCTION: 3;
  }

  export const WEB_FEATURES_FLAG: WEB_FEATURES_FLAGMap;
}

export class TabletNotificationsInfo extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): number | undefined;
  setTimestamp(value: number): void;

  hasUnreadchats(): boolean;
  clearUnreadchats(): void;
  getUnreadchats(): number | undefined;
  setUnreadchats(value: number): void;

  hasNotifymessagecount(): boolean;
  clearNotifymessagecount(): void;
  getNotifymessagecount(): number | undefined;
  setNotifymessagecount(value: number): void;

  clearNotifymessageList(): void;
  getNotifymessageList(): Array<NotificationMessageInfo>;
  setNotifymessageList(value: Array<NotificationMessageInfo>): void;
  addNotifymessage(value?: NotificationMessageInfo, index?: number): NotificationMessageInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TabletNotificationsInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TabletNotificationsInfo): TabletNotificationsInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TabletNotificationsInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TabletNotificationsInfo;
  static deserializeBinaryFromReader(message: TabletNotificationsInfo, reader: jspb.BinaryReader): TabletNotificationsInfo;
}

export namespace TabletNotificationsInfo {
  export type AsObject = {
    timestamp?: number,
    unreadchats?: number,
    notifymessagecount?: number,
    notifymessageList: Array<NotificationMessageInfo.AsObject>,
  }
}

export class NotificationMessageInfo extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): MessageKey | undefined;
  setKey(value?: MessageKey): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  hasMessagetimestamp(): boolean;
  clearMessagetimestamp(): void;
  getMessagetimestamp(): number | undefined;
  setMessagetimestamp(value: number): void;

  hasParticipant(): boolean;
  clearParticipant(): void;
  getParticipant(): string | undefined;
  setParticipant(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationMessageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationMessageInfo): NotificationMessageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationMessageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationMessageInfo;
  static deserializeBinaryFromReader(message: NotificationMessageInfo, reader: jspb.BinaryReader): NotificationMessageInfo;
}

export namespace NotificationMessageInfo {
  export type AsObject = {
    key?: MessageKey.AsObject,
    message?: Message.AsObject,
    messagetimestamp?: number,
    participant?: string,
  }
}

export class WebNotificationsInfo extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): number | undefined;
  setTimestamp(value: number): void;

  hasUnreadchats(): boolean;
  clearUnreadchats(): void;
  getUnreadchats(): number | undefined;
  setUnreadchats(value: number): void;

  hasNotifymessagecount(): boolean;
  clearNotifymessagecount(): void;
  getNotifymessagecount(): number | undefined;
  setNotifymessagecount(value: number): void;

  clearNotifymessagesList(): void;
  getNotifymessagesList(): Array<WebMessageInfo>;
  setNotifymessagesList(value: Array<WebMessageInfo>): void;
  addNotifymessages(value?: WebMessageInfo, index?: number): WebMessageInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebNotificationsInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebNotificationsInfo): WebNotificationsInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebNotificationsInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebNotificationsInfo;
  static deserializeBinaryFromReader(message: WebNotificationsInfo, reader: jspb.BinaryReader): WebNotificationsInfo;
}

export namespace WebNotificationsInfo {
  export type AsObject = {
    timestamp?: number,
    unreadchats?: number,
    notifymessagecount?: number,
    notifymessagesList: Array<WebMessageInfo.AsObject>,
  }
}

export class PaymentInfo extends jspb.Message {
  hasCurrencydeprecated(): boolean;
  clearCurrencydeprecated(): void;
  getCurrencydeprecated(): PaymentInfo.PAYMENT_INFO_CURRENCYMap[keyof PaymentInfo.PAYMENT_INFO_CURRENCYMap] | undefined;
  setCurrencydeprecated(value: PaymentInfo.PAYMENT_INFO_CURRENCYMap[keyof PaymentInfo.PAYMENT_INFO_CURRENCYMap]): void;

  hasAmount1000(): boolean;
  clearAmount1000(): void;
  getAmount1000(): number | undefined;
  setAmount1000(value: number): void;

  hasReceiverjid(): boolean;
  clearReceiverjid(): void;
  getReceiverjid(): string | undefined;
  setReceiverjid(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): PaymentInfo.PAYMENT_INFO_STATUSMap[keyof PaymentInfo.PAYMENT_INFO_STATUSMap] | undefined;
  setStatus(value: PaymentInfo.PAYMENT_INFO_STATUSMap[keyof PaymentInfo.PAYMENT_INFO_STATUSMap]): void;

  hasTransactiontimestamp(): boolean;
  clearTransactiontimestamp(): void;
  getTransactiontimestamp(): number | undefined;
  setTransactiontimestamp(value: number): void;

  hasRequestmessagekey(): boolean;
  clearRequestmessagekey(): void;
  getRequestmessagekey(): MessageKey | undefined;
  setRequestmessagekey(value?: MessageKey): void;

  hasExpirytimestamp(): boolean;
  clearExpirytimestamp(): void;
  getExpirytimestamp(): number | undefined;
  setExpirytimestamp(value: number): void;

  hasFutureproofed(): boolean;
  clearFutureproofed(): void;
  getFutureproofed(): boolean | undefined;
  setFutureproofed(value: boolean): void;

  hasCurrency(): boolean;
  clearCurrency(): void;
  getCurrency(): string | undefined;
  setCurrency(value: string): void;

  hasTxnstatus(): boolean;
  clearTxnstatus(): void;
  getTxnstatus(): PaymentInfo.PAYMENT_INFO_TXNSTATUSMap[keyof PaymentInfo.PAYMENT_INFO_TXNSTATUSMap] | undefined;
  setTxnstatus(value: PaymentInfo.PAYMENT_INFO_TXNSTATUSMap[keyof PaymentInfo.PAYMENT_INFO_TXNSTATUSMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentInfo): PaymentInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentInfo;
  static deserializeBinaryFromReader(message: PaymentInfo, reader: jspb.BinaryReader): PaymentInfo;
}

export namespace PaymentInfo {
  export type AsObject = {
    currencydeprecated?: PaymentInfo.PAYMENT_INFO_CURRENCYMap[keyof PaymentInfo.PAYMENT_INFO_CURRENCYMap],
    amount1000?: number,
    receiverjid?: string,
    status?: PaymentInfo.PAYMENT_INFO_STATUSMap[keyof PaymentInfo.PAYMENT_INFO_STATUSMap],
    transactiontimestamp?: number,
    requestmessagekey?: MessageKey.AsObject,
    expirytimestamp?: number,
    futureproofed?: boolean,
    currency?: string,
    txnstatus?: PaymentInfo.PAYMENT_INFO_TXNSTATUSMap[keyof PaymentInfo.PAYMENT_INFO_TXNSTATUSMap],
  }

  export interface PAYMENT_INFO_CURRENCYMap {
    UNKNOWN_CURRENCY: 0;
    INR: 1;
  }

  export const PAYMENT_INFO_CURRENCY: PAYMENT_INFO_CURRENCYMap;

  export interface PAYMENT_INFO_STATUSMap {
    UNKNOWN_STATUS: 0;
    PROCESSING: 1;
    SENT: 2;
    NEED_TO_ACCEPT: 3;
    COMPLETE: 4;
    COULD_NOT_COMPLETE: 5;
    REFUNDED: 6;
    EXPIRED: 7;
    REJECTED: 8;
    CANCELLED: 9;
    WAITING_FOR_PAYER: 10;
    WAITING: 11;
  }

  export const PAYMENT_INFO_STATUS: PAYMENT_INFO_STATUSMap;

  export interface PAYMENT_INFO_TXNSTATUSMap {
    UNKNOWN: 0;
    PENDING_SETUP: 1;
    PENDING_RECEIVER_SETUP: 2;
    INIT: 3;
    SUCCESS: 4;
    COMPLETED: 5;
    FAILED: 6;
    FAILED_RISK: 7;
    FAILED_PROCESSING: 8;
    FAILED_RECEIVER_PROCESSING: 9;
    FAILED_DA: 10;
    FAILED_DA_FINAL: 11;
    REFUNDED_TXN: 12;
    REFUND_FAILED: 13;
    REFUND_FAILED_PROCESSING: 14;
    REFUND_FAILED_DA: 15;
    EXPIRED_TXN: 16;
    AUTH_CANCELED: 17;
    AUTH_CANCEL_FAILED_PROCESSING: 18;
    AUTH_CANCEL_FAILED: 19;
    COLLECT_INIT: 20;
    COLLECT_SUCCESS: 21;
    COLLECT_FAILED: 22;
    COLLECT_FAILED_RISK: 23;
    COLLECT_REJECTED: 24;
    COLLECT_EXPIRED: 25;
    COLLECT_CANCELED: 26;
    COLLECT_CANCELLING: 27;
  }

  export const PAYMENT_INFO_TXNSTATUS: PAYMENT_INFO_TXNSTATUSMap;
}

export class WebMessageInfo extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): MessageKey;
  setKey(value?: MessageKey): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  hasMessagetimestamp(): boolean;
  clearMessagetimestamp(): void;
  getMessagetimestamp(): number | undefined;
  setMessagetimestamp(value: number): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): WebMessageInfo.WEB_MESSAGE_INFO_STATUSMap[keyof WebMessageInfo.WEB_MESSAGE_INFO_STATUSMap] | undefined;
  setStatus(value: WebMessageInfo.WEB_MESSAGE_INFO_STATUSMap[keyof WebMessageInfo.WEB_MESSAGE_INFO_STATUSMap]): void;

  hasParticipant(): boolean;
  clearParticipant(): void;
  getParticipant(): string | undefined;
  setParticipant(value: string): void;

  hasIgnore(): boolean;
  clearIgnore(): void;
  getIgnore(): boolean | undefined;
  setIgnore(value: boolean): void;

  hasStarred(): boolean;
  clearStarred(): void;
  getStarred(): boolean | undefined;
  setStarred(value: boolean): void;

  hasBroadcast(): boolean;
  clearBroadcast(): void;
  getBroadcast(): boolean | undefined;
  setBroadcast(value: boolean): void;

  hasPushname(): boolean;
  clearPushname(): void;
  getPushname(): string | undefined;
  setPushname(value: string): void;

  hasMediaciphertextsha256(): boolean;
  clearMediaciphertextsha256(): void;
  getMediaciphertextsha256(): Uint8Array | string;
  getMediaciphertextsha256_asU8(): Uint8Array;
  getMediaciphertextsha256_asB64(): string;
  setMediaciphertextsha256(value: Uint8Array | string): void;

  hasMulticast(): boolean;
  clearMulticast(): void;
  getMulticast(): boolean | undefined;
  setMulticast(value: boolean): void;

  hasUrltext(): boolean;
  clearUrltext(): void;
  getUrltext(): boolean | undefined;
  setUrltext(value: boolean): void;

  hasUrlnumber(): boolean;
  clearUrlnumber(): void;
  getUrlnumber(): boolean | undefined;
  setUrlnumber(value: boolean): void;

  hasMessagestubtype(): boolean;
  clearMessagestubtype(): void;
  getMessagestubtype(): WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPEMap[keyof WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPEMap] | undefined;
  setMessagestubtype(value: WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPEMap[keyof WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPEMap]): void;

  hasClearmedia(): boolean;
  clearClearmedia(): void;
  getClearmedia(): boolean | undefined;
  setClearmedia(value: boolean): void;

  clearMessagestubparametersList(): void;
  getMessagestubparametersList(): Array<string>;
  setMessagestubparametersList(value: Array<string>): void;
  addMessagestubparameters(value: string, index?: number): string;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): number | undefined;
  setDuration(value: number): void;

  clearLabelsList(): void;
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  addLabels(value: string, index?: number): string;

  hasPaymentinfo(): boolean;
  clearPaymentinfo(): void;
  getPaymentinfo(): PaymentInfo | undefined;
  setPaymentinfo(value?: PaymentInfo): void;

  hasFinallivelocation(): boolean;
  clearFinallivelocation(): void;
  getFinallivelocation(): LiveLocationMessage | undefined;
  setFinallivelocation(value?: LiveLocationMessage): void;

  hasQuotedpaymentinfo(): boolean;
  clearQuotedpaymentinfo(): void;
  getQuotedpaymentinfo(): PaymentInfo | undefined;
  setQuotedpaymentinfo(value?: PaymentInfo): void;

  hasEphemeralstarttimestamp(): boolean;
  clearEphemeralstarttimestamp(): void;
  getEphemeralstarttimestamp(): number | undefined;
  setEphemeralstarttimestamp(value: number): void;

  hasEphemeralduration(): boolean;
  clearEphemeralduration(): void;
  getEphemeralduration(): number | undefined;
  setEphemeralduration(value: number): void;

  hasEphemeralofftoon(): boolean;
  clearEphemeralofftoon(): void;
  getEphemeralofftoon(): boolean | undefined;
  setEphemeralofftoon(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebMessageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebMessageInfo): WebMessageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebMessageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebMessageInfo;
  static deserializeBinaryFromReader(message: WebMessageInfo, reader: jspb.BinaryReader): WebMessageInfo;
}

export namespace WebMessageInfo {
  export type AsObject = {
    key: MessageKey.AsObject,
    message?: Message.AsObject,
    messagetimestamp?: number,
    status?: WebMessageInfo.WEB_MESSAGE_INFO_STATUSMap[keyof WebMessageInfo.WEB_MESSAGE_INFO_STATUSMap],
    participant?: string,
    ignore?: boolean,
    starred?: boolean,
    broadcast?: boolean,
    pushname?: string,
    mediaciphertextsha256: Uint8Array | string,
    multicast?: boolean,
    urltext?: boolean,
    urlnumber?: boolean,
    messagestubtype?: WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPEMap[keyof WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPEMap],
    clearmedia?: boolean,
    messagestubparametersList: Array<string>,
    duration?: number,
    labelsList: Array<string>,
    paymentinfo?: PaymentInfo.AsObject,
    finallivelocation?: LiveLocationMessage.AsObject,
    quotedpaymentinfo?: PaymentInfo.AsObject,
    ephemeralstarttimestamp?: number,
    ephemeralduration?: number,
    ephemeralofftoon?: boolean,
  }

  export interface WEB_MESSAGE_INFO_STATUSMap {
    ERROR: 0;
    PENDING: 1;
    SERVER_ACK: 2;
    DELIVERY_ACK: 3;
    READ: 4;
    PLAYED: 5;
  }

  export const WEB_MESSAGE_INFO_STATUS: WEB_MESSAGE_INFO_STATUSMap;

  export interface WEB_MESSAGE_INFO_STUBTYPEMap {
    UNKNOWN: 0;
    REVOKE: 1;
    CIPHERTEXT: 2;
    FUTUREPROOF: 3;
    NON_VERIFIED_TRANSITION: 4;
    UNVERIFIED_TRANSITION: 5;
    VERIFIED_TRANSITION: 6;
    VERIFIED_LOW_UNKNOWN: 7;
    VERIFIED_HIGH: 8;
    VERIFIED_INITIAL_UNKNOWN: 9;
    VERIFIED_INITIAL_LOW: 10;
    VERIFIED_INITIAL_HIGH: 11;
    VERIFIED_TRANSITION_ANY_TO_NONE: 12;
    VERIFIED_TRANSITION_ANY_TO_HIGH: 13;
    VERIFIED_TRANSITION_HIGH_TO_LOW: 14;
    VERIFIED_TRANSITION_HIGH_TO_UNKNOWN: 15;
    VERIFIED_TRANSITION_UNKNOWN_TO_LOW: 16;
    VERIFIED_TRANSITION_LOW_TO_UNKNOWN: 17;
    VERIFIED_TRANSITION_NONE_TO_LOW: 18;
    VERIFIED_TRANSITION_NONE_TO_UNKNOWN: 19;
    GROUP_CREATE: 20;
    GROUP_CHANGE_SUBJECT: 21;
    GROUP_CHANGE_ICON: 22;
    GROUP_CHANGE_INVITE_LINK: 23;
    GROUP_CHANGE_DESCRIPTION: 24;
    GROUP_CHANGE_RESTRICT: 25;
    GROUP_CHANGE_ANNOUNCE: 26;
    GROUP_PARTICIPANT_ADD: 27;
    GROUP_PARTICIPANT_REMOVE: 28;
    GROUP_PARTICIPANT_PROMOTE: 29;
    GROUP_PARTICIPANT_DEMOTE: 30;
    GROUP_PARTICIPANT_INVITE: 31;
    GROUP_PARTICIPANT_LEAVE: 32;
    GROUP_PARTICIPANT_CHANGE_NUMBER: 33;
    BROADCAST_CREATE: 34;
    BROADCAST_ADD: 35;
    BROADCAST_REMOVE: 36;
    GENERIC_NOTIFICATION: 37;
    E2E_IDENTITY_CHANGED: 38;
    E2E_ENCRYPTED: 39;
    CALL_MISSED_VOICE: 40;
    CALL_MISSED_VIDEO: 41;
    INDIVIDUAL_CHANGE_NUMBER: 42;
    GROUP_DELETE: 43;
    GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE: 44;
    CALL_MISSED_GROUP_VOICE: 45;
    CALL_MISSED_GROUP_VIDEO: 46;
    PAYMENT_CIPHERTEXT: 47;
    PAYMENT_FUTUREPROOF: 48;
    PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED: 49;
    PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED: 50;
    PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED: 51;
    PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP: 52;
    PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP: 53;
    PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER: 54;
    PAYMENT_ACTION_SEND_PAYMENT_REMINDER: 55;
    PAYMENT_ACTION_SEND_PAYMENT_INVITATION: 56;
    PAYMENT_ACTION_REQUEST_DECLINED: 57;
    PAYMENT_ACTION_REQUEST_EXPIRED: 58;
    PAYMENT_ACTION_REQUEST_CANCELLED: 59;
    BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM: 60;
    BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP: 61;
    BIZ_INTRO_TOP: 62;
    BIZ_INTRO_BOTTOM: 63;
    BIZ_NAME_CHANGE: 64;
    BIZ_MOVE_TO_CONSUMER_APP: 65;
    BIZ_TWO_TIER_MIGRATION_TOP: 66;
    BIZ_TWO_TIER_MIGRATION_BOTTOM: 67;
    OVERSIZED: 68;
    GROUP_CHANGE_NO_FREQUENTLY_FORWARDED: 69;
    GROUP_V4_ADD_INVITE_SENT: 70;
    GROUP_PARTICIPANT_ADD_REQUEST_JOIN: 71;
    CHANGE_EPHEMERAL_SETTING: 72;
  }

  export const WEB_MESSAGE_INFO_STUBTYPE: WEB_MESSAGE_INFO_STUBTYPEMap;
}

